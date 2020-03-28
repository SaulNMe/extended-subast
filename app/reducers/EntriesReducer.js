import {
	FETCH_ENTRIES_BEGIN,
	FETCH_ENTRIES_SUCCESS,
	FETCH_ENTRIES_FAILURE,
	INCREMENT_ENTRIES_PAGE,
	RESET_ENTRIES,
	RESET_ENTRIES_PAGINATION
} from 'cotizame-native/app/actions/EntriesActions';

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

export default function EntriesReducer (state = initialState, action){
	switch(action.type){
		case FETCH_ENTRIES_BEGIN:
			return {
				...state,
				isLoading: true,
				error: ''
			}
		case FETCH_ENTRIES_SUCCESS:
			let allIds = [...new Set(state.allIds.concat(action.payload.entries.allIds))];
			let byId = {
				...state.byId,
				...action.payload.entries.byId
			};
			return{
				...state,
				allIds,
				byId,
				isLoading: false,
				endReached: action.payload.entries.allIds < PAGE_SIZE
			}
		case FETCH_ENTRIES_FAILURE:
			return{
				...state,
				isLoading: false,
				error: action.payload.error,
			}
		case INCREMENT_ENTRIES_PAGE:
			return{
				...state,
				offset: state.offset + PAGE_SIZE,
			}
		case RESET_ENTRIES_PAGINATION:
			return{
				...state,
				offset: initialState.offset,
				limit: initialState.limit
			}
		case RESET_ENTRIES:
			return{
				...initialState
			}
		default:
			return state
	}
}

export const getErrorEntries = state => {
	return state.error;
}

export const getIsRefreshingEntries = state => {
	return state.isLoading && (state.offset === 0);
}

export const getIsLoadingEntries = state => {
	return state.isLoading;
}

export const getEntries = state => {
	return state.allIds.map(id => state.byId[id]);
}

export const getEntriesPaginationData = state => {
	return { offset: state.offset, limit: state.limit }
}

export const getEntriesEndReached = state => {
	return state.endReached;
}
