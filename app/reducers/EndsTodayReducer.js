import {
	FETCH_ENDS_TODAY_BEGIN,
	FETCH_ENDS_TODAY_SUCCESS,
	FETCH_ENDS_TODAY_FAILURE,
	INCREMENT_ENDS_TODAY_PAGE,
	RESET_ENDS_TODAY,
	RESET_ENDS_TODAY_PAGINATION
} from 'cotizame-native/app/actions/EndsTodayActions';

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

export default function EndsTodayReducer (state = initialState, action){
	switch(action.type){
		case FETCH_ENDS_TODAY_BEGIN:
			return {
				...state,
				isLoading: true,
				error: ''
			}
		case FETCH_ENDS_TODAY_SUCCESS:
			let allIds = [...new Set(state.allIds.concat(action.payload.endsToday.allIds))];
			let byId = {
				...state.byId,
				...action.payload.endsToday.byId
			};
			return{
				...state,
				allIds,
				byId,
				isLoading: false,
				endReached: action.payload.endsToday.allIds.length < PAGE_SIZE
			}
		case FETCH_ENDS_TODAY_FAILURE:
			return{
				...state,
				isLoading: false,
				error: action.payload.error,
			}
		case INCREMENT_ENDS_TODAY_PAGE:
			return{
				...state,
				offset: state.offset + PAGE_SIZE,
			}
		case RESET_ENDS_TODAY_PAGINATION:
			return{
				...state,
				offset: initialState.offset,
				limit: initialState.limit
			}
		case RESET_ENDS_TODAY:
			return{
				...initialState
			}
		default:
			return state
	}
}

export const getIsLoadingEndsToday = state => {
	return state.isLoading;
}

export const getIsRefreshingEndsToday = state => {
	return state.isLoading && (state.offset === 0);
}

export const getEndsToday = (state, size = null) => {
	return size ? state.allIds.map(id => state.byId[id]).slice(0, size):state.allIds.map(id => state.byId[id]);
}

export const getEndsTodayPaginationData = state => {
	return { offset: state.offset, limit: state.limit }
}

export const getEndsTodayEndReached = state => {
	return state.endReached;
}
export const getEndsTodayError = state => {
	return state.error;
}
