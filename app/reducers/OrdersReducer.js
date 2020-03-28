import {
	FETCH_ORDERS_BEGIN,
	FETCH_ORDERS_SUCCESS,
	FETCH_ORDERS_FAILURE,
	INCREMENT_ORDERS_PAGE,
	RESET_ORDERS,
	RESET_ORDERS_PAGINATION,
	SET_ORDERS_FILTERS,
	SET_ORDERS_SEARCH
} from 'cotizame-native/app/actions/OrdersActions';

const PAGE_SIZE = 15;

const initialState = {
	byId: {},
	allIds: [],
	isLoading: false,
	error: '',
	limit: PAGE_SIZE,
	offset: 0,
	endReached: false,
	filters: {},
	search: ''
}

export default function OrdersReducer (state = initialState, action){
	switch(action.type){
		case FETCH_ORDERS_BEGIN:
			return {
				...state,
				isLoading: true,
				error: ''
			}
		case FETCH_ORDERS_SUCCESS:
			let allIds = [...new Set(state.allIds.concat(action.payload.orders.allIds))];
			let byId = {
				...state.byId,
				...action.payload.orders.byId
			};
			return{
				...state,
				allIds,
				byId,
				isLoading: false,
				endReached: action.payload.orders.allIds.length < PAGE_SIZE
			}
		case FETCH_ORDERS_FAILURE:
			return{
				...state,
				isLoading: false,
				error: action.payload.error,
			}
		case INCREMENT_ORDERS_PAGE:
			return{
				...state,
				offset: state.offset + PAGE_SIZE,
			}
		case RESET_ORDERS_PAGINATION:
			return{
				...state,
				offset: initialState.offset,
				limit: initialState.limit
			}
		case SET_ORDERS_SEARCH:
			return{
				...state,
				search: action.payload.text
			}
		case SET_ORDERS_FILTERS:
			return{
				...state,
				filters: { ...action.payload.filters},
			}
		case RESET_ORDERS:
			return{
				...initialState,
				filters: { ...state.filters },
				search: state.search
			}
		default:
			return state
	}
}

export const getIsLoadingOrders = state => {
	return state.isLoading;
}

export const getIsRefreshingOrders = state => {
	return state.isLoading && (state.offset === 0);
}

export const getOrders = state => {
	return state.allIds.map(id => state.byId[id]);
}

export const getOrdersPaginationData = state => {
	return { offset: state.offset, limit: state.limit }
}

export const getOrdersEndReached = state => {
	return state.endReached;
}

export const getErrorOrders = state => {
	return state.error;
}

export const getOrdersFilters = state => {
	let filters = { ...state.filters }
	if (state.search) filters.orderNumber = state.search;
	return filters;
}

export const getOrdersSearch = state => {
	return state.search;
}
