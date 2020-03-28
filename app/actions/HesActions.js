import ApiService from 'cotizame-native/app/services/ApiService';
import normalizeById from 'cotizame-native/app/utils/NormalizeById';

import { getHesPaginationData, getIsLoadingHes, getHesEndReached } from 'cotizame-native/app/reducers';

export const FETCH_HES_BEGIN ='FETCH_HES_BEGIN';
export const FETCH_HES_SUCCESS ='FETCH_HES_SUCCESS';
export const FETCH_HES_FAILURE ='FETCH_HES_FAILURE';
export const INCREMENT_HES_PAGE ='INCREMENT_HES_PAGE';
export const RESET_HES ='RESET_HES';
export const RESET_HES_PAGINATION ='RESET_HES_PAGINATION';

export function fetchHesBatch(orderId, position) {
	return async (dispatch, getState) => {
		if ( getIsLoadingHes(getState()) || getHesEndReached(getState())) return;
		await dispatch(fetchHes(orderId, position));
		dispatch(incrementPage());
	}
};

export function fetchHes(orderId, position) {
	return async (dispatch, getState) => {
		dispatch(fetchHesBegin());
		let paginationData = getHesPaginationData(getState());
		return ApiService.getHes(orderId, position)
			.then (
				result => {
					let normalized = normalizeById(result, 'AlertId');
					dispatch(fetchHesSuccess(normalized));
					return normalized;
				},
				error => {
					dispatch(fetchHesFailure(error));
					throw ({ error, message: 'Unable to get hes'});
				}
				);
		}
};

export function reloadHes(orderId, position) {
	return async (dispatch, getState) => {
		dispatch(resetPagination());
		dispatch(fetchHesBegin());
		let paginationData = getHesPaginationData(getState());
		return ApiService.getHes(orderId, position)
			.then (
				result => {
					let normalized = normalizeById(result, 'AlertId');
					dispatch(resetHes());
					dispatch(fetchHesSuccess(normalized));
					dispatch(incrementPage());
					return normalized;
				},
				error => {
					dispatch(fetchHesFailure(error));
					throw ({ error, message: 'Unable to get hes'});
				}
			);
	}
};

export const incrementPage = () => ({
	type: INCREMENT_HES_PAGE
});

export const resetPagination = () => ({
	type: RESET_HES_PAGINATION
});

export const resetHes = () => ({
	type: RESET_HES
});

export const fetchHesBegin = () => ({
	type: FETCH_HES_BEGIN
});

export const fetchHesSuccess = hes => ({
	type: FETCH_HES_SUCCESS,
	payload: { hes },
});

export const fetchHesFailure = error => ({
	type: FETCH_HES_FAILURE,
	payload: { error }
});
