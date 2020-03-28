import ApiService from 'cotizame-native/app/services/ApiService';
import normalizeById from 'cotizame-native/app/utils/NormalizeById';

import { 
	getOrderIdPaginationData,
	getIsLoadingOrderId,
	getOrderIdEndReached
} from 'cotizame-native/app/reducers';

export const FETCH_ORDER_ID_BEGIN ='FETCH_ORDER_ID_BEGIN';
export const FETCH_ORDER_ID_SUCCESS ='FETCH_ORDER_ID_SUCCESS';
export const FETCH_ORDER_ID_FAILURE ='FETCH_ORDER_ID_FAILURE';
export const INCREMENT_ORDER_ID_PAGE ='INCREMENT_ORDER_ID_PAGE';
export const RESET_ORDER_ID ='RESET_ORDER_ID';
export const RESET_ORDER_ID_PAGINATION ='RESET_ORDER_ID_PAGINATION';
export const CURRENT_ORDER_ID ='CURRENT_ORDER_ID';

export function fetchOrderIdBatch(id) {
	return async (dispatch, getState) => {
		if ( getIsLoadingOrderId(getState()) || getOrderIdEndReached(getState())) return;
		await dispatch(fetchOrderId(id));
		dispatch(incrementPage());
	}
};

export function fetchOrderId(id) {
	return async (dispatch, getState) => {
		dispatch(resetOrderId());
		dispatch(fetchOrderIdBegin());
		return ApiService.getOrderId(id)
			.then (
				result => {
					let normalized = normalizeById(result, 'Position');
					dispatch(fetchOrderIdSuccess(normalized));
					return normalized;
				},
				error => {
					dispatch(fetchOrderIdFailure(error));
					throw ({ error, message: 'Unable to get position'});
				}
			);
	}
};

export function reloadOrderId(id) {
	return async (dispatch, getState) => {
		dispatch(resetPagination());
		dispatch(fetchOrderIdBegin());
		return ApiService.getOrderId(id)
			.then (
				result => {
					let normalized = normalizeById(result, 'Position');
					dispatch(resetOrderId());
					dispatch(fetchOrderIdSuccess(normalized));
					dispatch(incrementPage());
					return normalized;
				},
				error => {
					dispatch(fetchOrderIdFailure(error));
					throw ({ error, message: 'Unable to get orderId'});
				}
			);
	}
};

export const incrementPage = () => ({
	type: INCREMENT_ORDER_ID_PAGE
});

export const resetPagination = () => ({
	type: RESET_ORDER_ID_PAGINATION
});

export const resetOrderId = () => ({
	type: RESET_ORDER_ID
});

export const fetchOrderIdBegin = () => ({
	type: FETCH_ORDER_ID_BEGIN
});

export const fetchOrderIdSuccess = orderId => ({
	type: FETCH_ORDER_ID_SUCCESS,
	payload: { orderId },
});

export const fetchOrderIdFailure = error => ({
	type: FETCH_ORDER_ID_FAILURE,
	payload: { error }
});

export const currentOrderId = currentId => ({
	type: CURRENT_ORDER_ID,
	currentId: currentId,
});


