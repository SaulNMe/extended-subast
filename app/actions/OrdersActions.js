import ApiService from 'cotizame-native/app/services/ApiService';
import normalizeById from 'cotizame-native/app/utils/NormalizeById';

import { 
	getOrdersPaginationData,
	getIsLoadingOrders,
	getOrdersEndReached,
	getOrdersFilters
} from 'cotizame-native/app/reducers';

export const FETCH_ORDERS_BEGIN ='FETCH_ORDERS_BEGIN';
export const FETCH_ORDERS_SUCCESS ='FETCH_ORDERS_SUCCESS';
export const FETCH_ORDERS_FAILURE ='FETCH_ORDERS_FAILURE';
export const INCREMENT_ORDERS_PAGE ='INCREMENT_ORDERS_PAGE';
export const RESET_ORDERS ='RESET_ORDERS';
export const RESET_ORDERS_PAGINATION ='RESET_ORDERS_PAGINATION';
export const SET_ORDERS_FILTERS ='SET_ORDERS_FILTERS';
export const SET_ORDERS_SEARCH = 'SET_ORDERS_SEARCH'

export function fetchOrdersBatch(filtersOverride) {
	return async (dispatch, getState) => {
		if ( getIsLoadingOrders(getState()) || getOrdersEndReached(getState())) return;
		await dispatch(fetchOrders(filtersOverride));
		dispatch(incrementPage());
	}
};

export function fetchOrders(filtersOverride) {
	return async (dispatch, getState) => {
		dispatch(fetchOrdersBegin());
		let paginationData = getOrdersPaginationData(getState());
		let filters = getOrdersFilters(getState());
		return ApiService.getOrders(paginationData, filtersOverride ? filtersOverride : filters)
			.then (
				result => {
					let normalized = normalizeById(result, 'OrderId');
					dispatch(fetchOrdersSuccess(normalized));
					return normalized;
				},
				error => {
					dispatch(fetchOrdersFailure(error));
					throw ({ error, message: 'Unable to get orders'});
				}
			);
	}
};


export function reloadOrders(filtersOverride) {
	return async (dispatch, getState) => {
		dispatch(resetPagination());
		dispatch(fetchOrdersBegin());
		let paginationData = getOrdersPaginationData(getState());
		let filters = getOrdersFilters(getState());
		return ApiService.getOrders(paginationData, filtersOverride ? filtersOverride : filters)
			.then (
				result => {
					let normalized = normalizeById(result, 'OrderId');
					dispatch(resetOrders());
					dispatch(fetchOrdersSuccess(normalized));
					dispatch(incrementPage());
					return normalized;
				},
				error => {
					dispatch(fetchOrdersFailure(error));
					throw ({ error, message: 'Unable to get orders'});
				}
			);
	}
};

export const setOrdersSearch = text => ({
	type: SET_ORDERS_SEARCH,
	payload: { text }
});

export const setOrdersFilters = filters => ({
	type: SET_ORDERS_FILTERS,
	payload: { filters }
});

export const incrementPage = () => ({
	type: INCREMENT_ORDERS_PAGE
});

export const resetPagination = () => ({
	type: RESET_ORDERS_PAGINATION
});

export const resetOrders = () => ({
	type: RESET_ORDERS
});

export const fetchOrdersBegin = () => ({
	type: FETCH_ORDERS_BEGIN
});

export const fetchOrdersSuccess = orders => ({
	type: FETCH_ORDERS_SUCCESS,
	payload: { orders },
});

export const fetchOrdersFailure = error => ({
	type: FETCH_ORDERS_FAILURE,
	payload: { error }
});


