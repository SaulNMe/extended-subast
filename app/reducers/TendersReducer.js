import {
	FETCH_TENDERS_BEGIN,
	FETCH_TENDERS_SUCCESS,
	FETCH_TENDERS_FAILURE,
	INCREMENT_TENDERS_PAGE,
	RESET_TENDERS,
	RESET_TENDERS_PAGINATION,
	SET_TENDERS_FILTERS,
	SET_TENDERS_SEARCH,
	CLEAR_TENDERS_FILTERS,
} from 'cotizame-native/app/actions/TendersActions';

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

export default function TendersReducer (state = initialState, action){
	switch(action.type){
		case FETCH_TENDERS_BEGIN:
			return {
				...state,
				isLoading: true,
				error: ''
			}
		case FETCH_TENDERS_SUCCESS:
			let allIds = [...new Set(state.allIds.concat(action.payload.tenders.allIds))];
			let byId = {
				...state.byId,
				...action.payload.tenders.byId
			};
			return{
				...state,
				allIds,
				byId,
				isLoading: false,
				endReached: action.payload.tenders.allIds.length < PAGE_SIZE
			}
		case FETCH_TENDERS_FAILURE:
			return{
				...state,
				isLoading: false,
				error: action.payload.error,
			}
		case INCREMENT_TENDERS_PAGE:
			return{
				...state,
				offset: state.offset + PAGE_SIZE,
			}
		case RESET_TENDERS_PAGINATION:
			return{
				...state,
				offset: initialState.offset,
				limit: initialState.limit
			}
		case SET_TENDERS_SEARCH:
			return{
				...state,
				search: action.payload.text
			}
		case SET_TENDERS_FILTERS:
			return{
				...state,
				filters: { ...action.payload.filters},
			}
		case CLEAR_TENDERS_FILTERS:
			return{
				...state,
				filters: {},
			}
		case RESET_TENDERS:
			return{
				...initialState,
				filters: { ...state.filters },
				search: state.search
			}
		default:
			return state
	}
}

export const getIsLoadingTenders = state => {
	return state.isLoading;
}
export const getIsRefreshingTenders = state => {
	return state.isLoading && (state.offset === 0);
}

export const getTenders = (state, size = null, category = null, favorites = null) => {
	let tenders = state.allIds.map(id => state.byId[id]);
	if(size && category){
		let filtered = category ? tenders.filter( item => item.Category.toLowerCase() === category.toLowerCase()) : tenders;
		let tender = size? filtered.slice(0, size) : tenders;
		return tender;
	}
	if(category && !size){
		let filtered = tenders.filter( item => item.Category.toLowerCase() === category.toLowerCase());
		return filtered;
	}
	if(favorites) {
		let favorites =  tenders.filter( item => item.Favorite == true);
		return favorites;
	}
	let tender = size ? state.allIds.map(id => state.byId[id]).slice(0, size) : tenders;
	return tender; 
}

export const getTendersPaginationData = state => {
	return { offset: state.offset, limit: state.limit }
}

export const getTendersEndReached = state => {
	return state.endReached;
}
export const getTendersFilters = state => {
	let filters = { ...state.filters }
	if (state.search) filters.description = state.search;
	return filters;
}
export const getTendersSearch = state => {
	return state.search;
}
export const getErrorTenders = state => {
	return state.error;
}
