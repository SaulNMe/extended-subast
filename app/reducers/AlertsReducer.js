import {
	FETCH_ALERTS_BEGIN,
	FETCH_ALERTS_SUCCESS,
	FETCH_ALERTS_FAILURE,
	INCREMENT_ALERTS_PAGE,
	RESET_ALERTS,
	RESET_ALERTS_PAGINATION
} from 'cotizame-native/app/actions/AlertsActions';

const PAGE_SIZE = 15;

const initialState = {
	byId: {},
	allIds: [],
	isLoading: false,
	error: '',
	limit: PAGE_SIZE,
	offset: 0,
	endReached: false
}

export default function AlertsReducer (state = initialState, action){
	switch(action.type){
		case FETCH_ALERTS_BEGIN:
			return {
				...state,
				isLoading: true,
				error: ''
			}
		case FETCH_ALERTS_SUCCESS:
			let allIds = [...new Set(state.allIds.concat(action.payload.alerts.allIds))];
			let byId = {
				...state.byId,
				...action.payload.alerts.byId
			};
			return{
				...state,
				allIds,
				byId,
				isLoading: false,
				endReached: action.payload.alerts.allIds < PAGE_SIZE
			}
		case FETCH_ALERTS_FAILURE:
			return{
				...state,
				isLoading: false,
				error: action.payload.error,
			}
		case INCREMENT_ALERTS_PAGE:
			return{
				...state,
				offset: state.offset + PAGE_SIZE,
			}
		case RESET_ALERTS_PAGINATION:
			return{
				...state,
				offset: initialState.offset,
				limit: initialState.limit
			}
		case RESET_ALERTS:
			return{
				...initialState
			}
		default:
			return state
	}
}

export const getErrorAlerts = state => {
	return state.error;
}

export const getIsRefreshingAlerts = state => {
	return state.isLoading && (state.offset === 0);
}

export const getIsLoadingAlerts = state => {
	return state.isLoading;
}

export const getAlerts = state => {
	return state.allIds.map(id => state.byId[id]);
}

export const getAlertsPaginationData = state => {
	return { offset: state.offset, limit: state.limit }
}

export const getAlertsEndReached = state => {
	return state.endReached;
}
