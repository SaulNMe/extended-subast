import {
	FETCH_ORDER_ID_BEGIN,
	FETCH_ORDER_ID_SUCCESS,
	FETCH_ORDER_ID_FAILURE,
	INCREMENT_ORDER_ID_PAGE,
	RESET_ORDER_ID,
	RESET_ORDER_ID_PAGINATION,
	CURRENT_ORDER_ID
} from 'cotizame-native/app/actions/OrderIdActions';

const PAGE_SIZE = 15;

const initialState = {
	byId: {},
	allIds: [],
	isLoading: false,
	error: '',
	limit: PAGE_SIZE,
	offset: 0,
	endReached: false,
	currentId: null
}

export default function OrderIdReducer (state = initialState, action){
	switch(action.type){
		case FETCH_ORDER_ID_BEGIN:
			return {
				...state,
				isLoading: true,
				error: ''
			}
		case FETCH_ORDER_ID_SUCCESS:
			let allIds = [...new Set(state.allIds.concat(action.payload.orderId.allIds))];
			let byId = {
				...state.byId,
				...action.payload.orderId.byId
			};
			return{
				...state,
				allIds,
				byId,
				isLoading: false,
				endReached: allIds.length != PAGE_SIZE
			}
		case FETCH_ORDER_ID_FAILURE:
			return{
				...state,
				isLoading: false,
				error: action.payload.error,
			}
		case INCREMENT_ORDER_ID_PAGE:
			return{
				...state,
				offset: state.offset + PAGE_SIZE,
			}
		case RESET_ORDER_ID_PAGINATION:
			return{
				...state,
				offset: initialState.offset,
				limit: initialState.limit
			}
		case RESET_ORDER_ID:
			return{
				...initialState
			}
		case CURRENT_ORDER_ID:
			return {
				...state,
				currentId: action.currentId
			}
		default:
			return state
	}
}

export const getIsLoadingOrderId = state => {
	return state.isLoading;
}

export const getIsRefreshingOrderId = state => {
	return state.isLoading && (state.offset === 0);
}

export const getOrderId = state => {
	return state.allIds.map(id => state.byId[id]);
}

export const getOrderIdPaginationData = state => {
	return { offset: state.offset, limit: state.limit }
}

export const getOrderIdEndReached = state => {
	return state.endReached;
}

export const getErrorOrderId = state => {
	return state.error;
}

export const getCurrentOrderId = state => {
	let allOrderId = state.allIds.map(id => state.byId[id]);
	let currentOrderId = {};
	allOrderId.map(item => {
		if (item.Position === state.currentId) currentOrderId = item;
	});
	return currentOrderId;
}

