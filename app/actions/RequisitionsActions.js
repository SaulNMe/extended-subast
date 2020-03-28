import ApiService from 'cotizame-native/app/services/ApiService';
import normalizeById from 'cotizame-native/app/utils/NormalizeById';

import { 
	getRequisitionsPaginationData,
	getIsLoadingRequisitions,
	getRequisitionsEndReached ,
	getRequisitionsFilters
} from 'cotizame-native/app/reducers';

export const FETCH_REQUISITIONS_BEGIN ='FETCH_REQUISITIONS_BEGIN';
export const FETCH_REQUISITIONS_SUCCESS ='FETCH_REQUISITIONS_SUCCESS';
export const FETCH_REQUISITIONS_FAILURE ='FETCH_REQUISITIONS_FAILURE';
export const INCREMENT_REQUISITIONS_PAGE ='INCREMENT_REQUISITIONS_PAGE';
export const RESET_REQUISITIONS ='RESET_REQUISITIONS';
export const RESET_REQUISITIONS_PAGINATION ='RESET_REQUISITIONS_PAGINATION';
export const SET_REQUISITIONS_FILTERS ='SET_REQUISITIONS_FILTERS';
export const SET_REQUISITIONS_SEARCH = 'SET_REQUISITIONS_SEARCH'
export const CLEAR_REQUISITIONS_FILTERS = 'CLEAR_REQUISITIONS_FILTERS';

export function fetchRequisitionsBatch(filtersOverride) {
	return async (dispatch, getState) => {
		if ( getIsLoadingRequisitions(getState()) || getRequisitionsEndReached(getState())) return;
		await dispatch(fetchRequisitions(filtersOverride));
		dispatch(incrementPage());
	}
};

export function fetchRequisitions(filtersOverride) {
	return async (dispatch, getState) => {
		dispatch(fetchRequisitionsBegin());
		let paginationData = getRequisitionsPaginationData(getState());
		let filters = getRequisitionsFilters(getState());
		return ApiService.getRequisitions(paginationData, filtersOverride ? filtersOverride : filters)
			.then (
				result => {
					let normalized = normalizeById(result, 'RequisitionId');
					dispatch(fetchRequisitionsSuccess(normalized));
					return normalized;
				},
				error => {
					dispatch(fetchRequisitionsFailure(error));
					throw ({ error, message: 'Unable to get requisitions'});
				}
			);
	}
};

export function reloadRequisitions(filtersOverride) {
	return async (dispatch, getState) => {
		dispatch(resetPagination());
		dispatch(fetchRequisitionsBegin());
		let paginationData = getRequisitionsPaginationData(getState());
		let filters = getRequisitionsFilters(getState());
		return ApiService.getRequisitions(paginationData, filtersOverride ? filtersOverride : filters)
			.then (
				result => {
					let normalized = normalizeById(result, 'RequisitionId');
					dispatch(resetRequisitions());
					dispatch(fetchRequisitionsSuccess(normalized));
					dispatch(incrementPage());
					return normalized;
				},
				error => {
					dispatch(fetchRequisitionsFailure(error));
					throw ({ error, message: 'Unable to get requisitions'});
				}
			);
	}
};

export const setRequisitionsSearch = text => ({
	type: SET_REQUISITIONS_SEARCH,
	payload: { text }
});

export const setRequisitionFilters = filters => ({
	type: SET_REQUISITIONS_FILTERS,
	payload: { filters }
});

export const clearRequisitionFilters = () => ({
	type: CLEAR_REQUISITIONS_FILTERS
});

export const incrementPage = () => ({
	type: INCREMENT_REQUISITIONS_PAGE
});

export const resetPagination = () => ({
	type: RESET_REQUISITIONS_PAGINATION
});

export const resetRequisitions = () => ({
	type: RESET_REQUISITIONS
});

export const fetchRequisitionsBegin = () => ({
	type: FETCH_REQUISITIONS_BEGIN
});

export const fetchRequisitionsSuccess = requisitions => ({
	type: FETCH_REQUISITIONS_SUCCESS,
	payload: { requisitions },
});

export const fetchRequisitionsFailure = error => ({
	type: FETCH_REQUISITIONS_FAILURE,
	payload: { error }
});
