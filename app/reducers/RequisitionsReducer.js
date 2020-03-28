import {
	FETCH_REQUISITIONS_BEGIN,
	FETCH_REQUISITIONS_SUCCESS,
	FETCH_REQUISITIONS_FAILURE,
	INCREMENT_REQUISITIONS_PAGE,
	RESET_REQUISITIONS,
	RESET_REQUISITIONS_PAGINATION,
	SET_REQUISITIONS_FILTERS,
	SET_REQUISITIONS_SEARCH,
	CLEAR_REQUISITIONS_FILTERS,
} from 'cotizame-native/app/actions/RequisitionsActions';

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

export default function RequisitionsReducer (state = initialState, action){
	switch(action.type){
		case FETCH_REQUISITIONS_BEGIN:
			return {
				...state,
				isLoading: true,
				error: ''
			}
		case FETCH_REQUISITIONS_SUCCESS:
			let allIds = [...new Set(state.allIds.concat(action.payload.requisitions.allIds))];
			let byId = {
				...state.byId,
				...action.payload.requisitions.byId
			};
			return{
				...state,
				allIds,
				byId,
				isLoading: false,
				endReached: action.payload.requisitions.allIds.length < PAGE_SIZE
			}
		case FETCH_REQUISITIONS_FAILURE:
			return{
				...state,
				isLoading: false,
				error: action.payload.error,
			}
		case INCREMENT_REQUISITIONS_PAGE:
			return{
				...state,
				offset: state.offset + PAGE_SIZE,
			}
		case RESET_REQUISITIONS_PAGINATION:
			return{
				...state,
				offset: initialState.offset,
				limit: initialState.limit
			}
		case SET_REQUISITIONS_SEARCH:
			return{
				...state,
				search: action.payload.text
			}
		case SET_REQUISITIONS_FILTERS:
			return{
				...state,
				filters: { ...action.payload.filters},
			}
		case CLEAR_REQUISITIONS_FILTERS:
			return{
				...state,
				filters: {},
			}
		case RESET_REQUISITIONS:
			return{
				...initialState,
				filters: { ...state.filters },
				search: state.search
			}
		default:
			return state
	}
}

export const getIsLoadingRequisitions = state => {
	return state.isLoading;
}
export const getIsRefreshingRequisitions = state => {
	return state.isLoading && (state.offset === 0);
}

export const getRequisitions = (state, size = null, category = null, favorites = null) => {
	let requisitions = state.allIds.map(id => state.byId[id]);
	if(size && category){
		let filtered = category ? requisitions.filter( item => item.Category.toLowerCase() === category.toLowerCase()) : requisitions;
		let reqs = size? filtered.slice(0, size) : requisitions;
		return reqs;
	}
	if(category && !size){
		let filtered = requisitions.filter( item => item.Category.toLowerCase() === category.toLowerCase());
		return filtered;
	}
	if(favorites) {
		let favorites =  requisitions.filter( item => item.Favorite == true);
		return favorites;
	}
	let reqs = size ? state.allIds.map(id => state.byId[id]).slice(0, size) : requisitions;
	return reqs; 
}

export const getRequisitionsPaginationData = state => {
	return { offset: state.offset, limit: state.limit }
}

export const getRequisitionsEndReached = state => {
	return state.endReached;
}
export const getRequisitionsFilters = state => {
	let filters = { ...state.filters }
	if (state.search) filters.description = state.search;
	return filters;
}
export const getRequisitionsSearch = state => {
	return state.search;
}
export const getErrorRequisitions = state => {
	return state.error;
}
