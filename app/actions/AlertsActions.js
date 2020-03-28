import ApiService from 'cotizame-native/app/services/ApiService';
import normalizeById from 'cotizame-native/app/utils/NormalizeById';

import { getAlertsPaginationData, getIsLoadingAlerts, getAlertsEndReached } from 'cotizame-native/app/reducers';

export const FETCH_ALERTS_BEGIN ='FETCH_ALERTS_BEGIN';
export const FETCH_ALERTS_SUCCESS ='FETCH_ALERTS_SUCCESS';
export const FETCH_ALERTS_FAILURE ='FETCH_ALERTS_FAILURE';
export const INCREMENT_ALERTS_PAGE ='INCREMENT_ALERTS_PAGE';
export const RESET_ALERTS ='RESET_ALERTS';
export const RESET_ALERTS_PAGINATION ='RESET_ALERTS_PAGINATION';

export const FETCH_ALERTS_UNREAD_BEGIN ='FETCH_ALERTS_UNREAD_BEGIN';
export const FETCH_ALERTS_UNREAD_SUCCESS ='FETCH_ALERTS_UNREAD_SUCCESS';
export const FETCH_ALERTS_UNREAD_FAILURE ='FETCH_ALERTS_UNREAD_FAILURE';

export function fetchAlertsBatch() {
	return async (dispatch, getState) => {
		if ( getIsLoadingAlerts(getState()) || getAlertsEndReached(getState())) return;
		await dispatch(fetchAlerts());
		dispatch(incrementPage());
	}
};

export function fetchAlerts() {
	return async (dispatch, getState) => {
		dispatch(fetchAlertsBegin());
		let paginationData = getAlertsPaginationData(getState());
		return ApiService.getAlerts(paginationData)
			.then (
				result => {
					let normalized = normalizeById(result, 'AlertId');
					dispatch(fetchAlertsSuccess(normalized));
					return normalized;
				},
				error => {
					dispatch(fetchAlertsFailure(error));
					throw ({ error, message: 'Unable to get alerts'});
				}
			);
	}
};

export function reloadAlerts() {
	return async (dispatch, getState) => {
		dispatch(resetPagination());
		dispatch(fetchAlertsBegin());
		let paginationData = getAlertsPaginationData(getState());
		return ApiService.getAlerts(paginationData)
			.then (
				result => {
					let normalized = normalizeById(result, 'AlertId');
					dispatch(resetAlerts());
					dispatch(fetchAlertsSuccess(normalized));
					dispatch(incrementPage());
					return normalized;
				},
				error => {
					dispatch(fetchAlertsFailure(error));
					throw ({ error, message: 'Unable to get alerts'});
				}
			);
	}
};

export function fetchAlertUnread() {
	return async dispatch => {
		dispatch(fetchAlertUnreadBegin());
		await ApiService.getAlertsUnread()
			.then(
				result => {
					dispatch(fetchAlertUnreadSuccess(result));
				},
				error => {
					dispatch(fetchAlertUnreadFailure(error));
					throw ({error: error, message: 'This is a demo error message'});
				}
			)
	};
}

export const incrementPage = () => ({
	type: INCREMENT_ALERTS_PAGE
});

export const resetPagination = () => ({
	type: RESET_ALERTS_PAGINATION
});

export const resetAlerts = () => ({
	type: RESET_ALERTS
});

export const fetchAlertsBegin = () => ({
	type: FETCH_ALERTS_BEGIN
});

export const fetchAlertsSuccess = alerts => ({
	type: FETCH_ALERTS_SUCCESS,
	payload: { alerts },
});

export const fetchAlertsFailure = error => ({
	type: FETCH_ALERTS_FAILURE,
	payload: { error }
});

export const fetchAlertUnreadBegin = () => ({
	type: FETCH_ALERTS_UNREAD_BEGIN
});

export const fetchAlertUnreadSuccess = alerts => ({
	type: FETCH_ALERTS_UNREAD_SUCCESS,
	payload: { alerts },
});

export const fetchAlertUnreadFailure = error => ({
	type: FETCH_ALERTS_UNREAD_FAILURE,
	payload: { error }
});