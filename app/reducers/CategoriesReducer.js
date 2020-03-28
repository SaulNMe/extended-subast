import {
	FETCH_CATEGORIES_BEGIN,
	FETCH_CATEGORIES_SUCCESS,
	FETCH_CATEGORIES_FAILURE,
	INCREMENT_CATEGORIES_PAGE,
	RESET_CATEGORIES,
	RESET_CATEGORIES_PAGINATION
} from 'cotizame-native/app/actions/CategoriesActions';

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

export default function CategoriesReducer (state = initialState, action) {
	switch (action.type) {
		case FETCH_CATEGORIES_BEGIN:
			return {
				...state,
				isLoading: true,
				error: ''
			}
		case FETCH_CATEGORIES_SUCCESS:
			let allIds = [...new Set(state.allIds.concat(action.payload.categories.allIds))];
			let byId = {
				...state.byId,
				...action.payload.categories.byId
			};
			return{
				...state,
				allIds,
				byId,
				isLoading: false,
				endReached: action.payload.categories.allIds.length < PAGE_SIZE
			}
		case FETCH_CATEGORIES_FAILURE:
			return{
				...state,
				isLoading: false,
				error: action.payload.error,
			}
		case INCREMENT_CATEGORIES_PAGE:
			return{
				...state,
				offset: state.offset + PAGE_SIZE,
			}
		case RESET_CATEGORIES_PAGINATION:
			return{
				...state,
				offset: initialState.offset,
				limit: initialState.limit
			}
		case RESET_CATEGORIES:
			return{
				...initialState
			}
		default:
			return state;
	}
};

export const getIsLoadingCategories = state => {
	return state.isLoading;
}

export const getIsRefreshingCategories = state => {
	return state.isLoading && (state.offset === 0);
}

export const getCategories = (state) => {
	return state.allIds.map(id => state.byId[id]);
}

export const getCategoriesPaginationData = state => {
	return { offset: state.offset, limit: state.limit }
}

export const getCategoriesEndReached = state => {
	return state.endReached;
}

export const getErrorCategories = state => {
	return state.error;
}
