import ApiService from 'cotizame-native/app/services/ApiService';
import normalizeById from 'cotizame-native/app/utils/NormalizeById';

import { getEntriesPaginationData, getIsLoadingEntries, getEntriesEndReached } from 'cotizame-native/app/reducers';

export const FETCH_ENTRIES_BEGIN ='FETCH_ENTRIES_BEGIN';
export const FETCH_ENTRIES_SUCCESS ='FETCH_ENTRIES_SUCCESS';
export const FETCH_ENTRIES_FAILURE ='FETCH_ENTRIES_FAILURE';
export const INCREMENT_ENTRIES_PAGE ='INCREMENT_ENTRIES_PAGE';
export const RESET_ENTRIES ='RESET_ENTRIES';
export const RESET_ENTRIES_PAGINATION ='RESET_ENTRIES_PAGINATION';

export function fetchEntriesBatch(orderId, position, hes = '') {
	return async (dispatch, getState) => {
		if ( getIsLoadingEntries(getState()) || getEntriesEndReached(getState())) return;
		await dispatch(fetchEntries(orderId, position, hes));
		dispatch(incrementPage());
	}
};

export function fetchEntries(orderId, position, hes = '') {
	return async (dispatch, getState) => {
		dispatch(fetchEntriesBegin());
		let paginationData = getEntriesPaginationData(getState());
		return ApiService.getEntries(orderId, position, hes)
			.then (
				result => {
					let normalized = normalizeById(result, 'EntryId');
					dispatch(fetchEntriesSuccess(normalized));
					return normalized;
				},
				error => {
					dispatch(fetchEntriesFailure(error));
					throw ({ error, message: 'Unable to get entries'});
				}
			);
	}
};

export function reloadEntries() {
	return async (dispatch, getState) => {
		dispatch(resetPagination());
		dispatch(fetchEntriesBegin());
		let paginationData = getEntriesPaginationData(getState());
		return ApiService.getEntries(orderId, position, hes)
			.then (
				result => {
					let normalized = normalizeById(result, 'EntryId');
					dispatch(resetEntries());
					dispatch(fetchEntriesSuccess(normalized));
					dispatch(incrementPage());
					return normalized;
				},
				error => {
					dispatch(fetchEntriesFailure(error));
					throw ({ error, message: 'Unable to get entries'});
				}
			);
	}
};

export const incrementPage = () => ({
	type: INCREMENT_ENTRIES_PAGE
});

export const resetPagination = () => ({
	type: RESET_ENTRIES_PAGINATION
});

export const resetEntries = () => ({
	type: RESET_ENTRIES
});

export const fetchEntriesBegin = () => ({
	type: FETCH_ENTRIES_BEGIN
});

export const fetchEntriesSuccess = entries => ({
	type: FETCH_ENTRIES_SUCCESS,
	payload: { entries },
});

export const fetchEntriesFailure = error => ({
	type: FETCH_ENTRIES_FAILURE,
	payload: { error }
});