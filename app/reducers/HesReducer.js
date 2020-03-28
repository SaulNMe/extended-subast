import {
	FETCH_HES_BEGIN,
	FETCH_HES_SUCCESS,
	FETCH_HES_FAILURE,
	INCREMENT_HES_PAGE,
	RESET_HES,
	RESET_HES_PAGINATION
} from 'cotizame-native/app/actions/HesActions';

const PAGE_SIZE = 15;

const initialState = {
	byId: {},
	allIds: [],
	isLoading: false,
	error: '',
	limit: PAGE_SIZE,
	offset: 0,
	endReached: false
};


export default function HesReducer (state = initialState, action){
	switch(action.type){
		case FETCH_HES_BEGIN:
			return {
				...state,
				isLoading: true,
				error: ''
			}
		case FETCH_HES_SUCCESS:
			let allIds = [...new Set(state.allIds.concat(action.payload.hes.allIds))];
			let byId = {
				...state.byId,
				...action.payload.hes.byId
			};
			return{
				...state,
				allIds,
				byId,
				isLoading: false,
				endReached: action.payload.hes.allIds < PAGE_SIZE
			}
		case FETCH_HES_FAILURE:
			return{
				...state,
				isLoading: false,
				error: action.payload.error,
			}
		case INCREMENT_HES_PAGE:
			return{
				...state,
				offset: state.offset + PAGE_SIZE,
			}
		case RESET_HES_PAGINATION:
			return{
				...state,
				offset: initialState.offset,
				limit: initialState.limit
			}
		case RESET_HES:
			return{
				...initialState
			}
		default:
			return state
	}
}


export const getErrorHes = state => {
	return state.error;
}

export const getIsRefreshingHes = state => {
	return state.isLoading && (state.offset === 0);
}

export const getIsLoadingHes = state => {
	return state.isLoading;
}

export const getHes = state => {
	return state.allIds.map(id => state.byId[id]);
}

export const getHesPaginationData = state => {
	return { offset: state.offset, limit: state.limit }
}

export const getHesEndReached = state => {
	return state.endReached;
}
