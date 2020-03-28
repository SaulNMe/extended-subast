import ApiService from 'cotizame-native/app/services/ApiService';
import normalizeById from 'cotizame-native/app/utils/NormalizeById';

import { 
	getEndsTodayPaginationData,
	getIsLoadingEndsToday,
	getEndsTodayEndReached
} from 'cotizame-native/app/reducers';

export const FETCH_ENDS_TODAY_BEGIN ='FETCH_ENDS_TODAY_BEGIN';
export const FETCH_ENDS_TODAY_SUCCESS ='FETCH_ENDS_TODAY_SUCCESS';
export const FETCH_ENDS_TODAY_FAILURE ='FETCH_ENDS_TODAY_FAILURE';
export const INCREMENT_ENDS_TODAY_PAGE ='INCREMENT_ENDS_TODAY_PAGE';
export const RESET_ENDS_TODAY ='RESET_ENDS_TODAY';
export const RESET_ENDS_TODAY_PAGINATION ='RESET_ENDS_TODAY_PAGINATION';

export function fetchEndsTodayBatch() {
	return async (dispatch, getState) => {
		if ( getIsLoadingEndsToday(getState()) || getEndsTodayEndReached(getState()) ) return;
		await dispatch(fetchEndsToday());
		dispatch(incrementPage());
	}
};

export function fetchEndsToday() {
	return async (dispatch, getState) => {
		dispatch(fetchEndsTodayBegin());
		let paginationData = getEndsTodayPaginationData(getState());
		return ApiService.getEndsToday(paginationData)
			.then (
				result => {
					let normalized = normalizeById(result, 'RequisitionId');
					dispatch(fetchEndsTodaySuccess(normalized));
					return normalized;
				},
				error => {
					dispatch(fetchEndsTodayFailure(error));
					throw ({ error, message: 'Unable to get endsToday'});
				}
			);
	}
};

export function reloadEndsToday() {
	return async (dispatch, getState) => {
		dispatch(resetPagination());
		dispatch(fetchEndsTodayBegin());
		let paginationData = getEndsTodayPaginationData(getState());
		return ApiService.getEndsToday(paginationData)
			.then (
				result => {
					let normalized = normalizeById(result, 'RequisitionId');
					dispatch(resetEndsToday());
					dispatch(fetchEndsTodaySuccess(normalized));
					dispatch(incrementPage());
					return normalized;
				},
				error => {
					dispatch(fetchEndsTodayFailure(error));
					throw ({ error, message: 'Unable to get endsToday'});
				}
			);
	}
};

export const incrementPage = () => ({
	type: INCREMENT_ENDS_TODAY_PAGE
});

export const resetPagination = () => ({
	type: RESET_ENDS_TODAY_PAGINATION
});

export const resetEndsToday = () => ({
	type: RESET_ENDS_TODAY
});

export const fetchEndsTodayBegin = () => ({
	type: FETCH_ENDS_TODAY_BEGIN
});

export const fetchEndsTodaySuccess = endsToday => ({
	type: FETCH_ENDS_TODAY_SUCCESS,
	payload: { endsToday },
});

export const fetchEndsTodayFailure = error => ({
	type: FETCH_ENDS_TODAY_FAILURE,
	payload: { error }
});
