import ApiService from 'cotizame-native/app/services/ApiService';
import normalizeById from 'cotizame-native/app/utils/NormalizeById';

import { 
	getTendersPaginationData,
	getIsLoadingTenders,
	getTendersEndReached ,
	getTendersFilters
} from 'cotizame-native/app/reducers';

export const FETCH_TENDERS_BEGIN ='FETCH_TENDERS_BEGIN';
export const FETCH_TENDERS_SUCCESS ='FETCH_TENDERS_SUCCESS';
export const FETCH_TENDERS_FAILURE ='FETCH_TENDERS_FAILURE';
export const INCREMENT_TENDERS_PAGE ='INCREMENT_TENDERS_PAGE';
export const RESET_TENDERS ='RESET_TENDERS';
export const RESET_TENDERS_PAGINATION ='RESET_TENDERS_PAGINATION';
export const SET_TENDERS_FILTERS ='SET_TENDERS_FILTERS';
export const SET_TENDERS_SEARCH = 'SET_TENDERS_SEARCH'
export const CLEAR_TENDERS_FILTERS = 'CLEAR_TENDERS_FILTERS';

export function fetchTendersBatch(filtersOverride) {
	return async (dispatch, getState) => {
		if ( getIsLoadingTenders(getState()) || getTendersEndReached(getState())) return;
		await dispatch(fetchTenders(filtersOverride));
		dispatch(incrementPage());
	}
};

export function fetchTenders(filtersOverride) {
	return async (dispatch, getState) => {
		dispatch(fetchTendersBegin());
		let paginationData = getTendersPaginationData(getState());
		let filters = getTendersFilters(getState());
		return ApiService.getTenders(paginationData, filtersOverride ? filtersOverride : filters)
			.then (
				result => {
					let normalized = normalizeById(result, 'TenderId');
					dispatch(fetchTendersSuccess(normalized));
					return normalized;
				},
				error => {
					dispatch(fetchTendersFailure(error));
					throw ({ error, message: 'Unable to get tenders'});
				}
			);
	}
};

export function reloadTenders(filtersOverride) {
	return async (dispatch, getState) => {
		dispatch(resetPagination());
		dispatch(fetchTendersBegin());
		let paginationData = getTendersPaginationData(getState());
		let filters = getTendersFilters(getState());
		return ApiService.getTenders(paginationData, filtersOverride ? filtersOverride : filters)
			.then (
				result => {
					let normalized = normalizeById(result, 'TenderId');
					dispatch(resetTenders());
					dispatch(fetchTendersSuccess(normalized));
					dispatch(incrementPage());
					return normalized;
				},
				error => {
					dispatch(fetchTendersFailure(error));
					throw ({ error, message: 'Unable to get tenders'});
				}
			);
	}
};

export const setTendersSearch = text => ({
	type: SET_TENDERS_SEARCH,
	payload: { text }
});

export const setTenderFilters = filters => ({
	type: SET_TENDERS_FILTERS,
	payload: { filters }
});

export const clearTenderFilters = () => ({
	type: CLEAR_TENDERS_FILTERS
});

export const incrementPage = () => ({
	type: INCREMENT_TENDERS_PAGE
});

export const resetPagination = () => ({
	type: RESET_TENDERS_PAGINATION
});

export const resetTenders = () => ({
	type: RESET_TENDERS
});

export const fetchTendersBegin = () => ({
	type: FETCH_TENDERS_BEGIN
});

export const fetchTendersSuccess = tenders => ({
	type: FETCH_TENDERS_SUCCESS,
	payload: { tenders },
});

export const fetchTendersFailure = error => ({
	type: FETCH_TENDERS_FAILURE,
	payload: { error }
});

