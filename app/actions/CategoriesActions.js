import ApiService from 'cotizame-native/app/services/ApiService';
import normalizeById from 'cotizame-native/app/utils/NormalizeById';

import { 
	getCategoriesPaginationData,
	getIsLoadingCategories,
	getCategoriesEndReached
} from 'cotizame-native/app/reducers';

export const FETCH_CATEGORIES_BEGIN = 'FETCH_CATEGORIES_BEGIN';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE';
export const INCREMENT_CATEGORIES_PAGE ='INCREMENT_CATEGORIES_PAGE';
export const RESET_CATEGORIES ='RESET_CATEGORIES';
export const RESET_CATEGORIES_PAGINATION ='RESET_CATEGORIES_PAGINATION';

export function fetchCategoriesBatch(referenceId, type) {
		

	return async (dispatch, getState) => {
		if ( getIsLoadingCategories(getState()) || getCategoriesEndReached(getState()) ) return;
		await dispatch(fetchCategories(referenceId, type));
		dispatch(incrementPage());
	}
};

export function fetchCategories(referenceId, type) {
	return async (dispatch, getState) => {
		dispatch(fetchCategoriesBegin());
		let paginationData = getCategoriesPaginationData(getState());
		return ApiService.getCategories( paginationData, type, referenceId)
			.then(
				result => {
					let normalized = normalizeById(result, 'CategoryId');
					dispatch(fetchCategoriesSuccess(normalized));
					return normalized;
				},
				error => {
					dispatch(fetchCategoriesFailure(error));
					throw ({error: error, message: 'Unable to get categories'});
				}
			);
	}
};

export function reloadCategories (referenceId, type) {
	return async (dispatch, getState) =>{
		dispatch(resetPagination());
		dispatch(fetchCategoriesBegin());
		let paginationData = getCategoriesPaginationData(getState());
		return ApiService.getCategories(paginationData, referenceId, type)
			.then(
				result => {
					let normalized = normalizeById(result, 'CategoryId');
					dispatch(resetCategories());
					dispatch(fetchCategoriesSuccess(normalized));
					dispatch(incrementPage());
					return normalized;
				},
				error => {
					dispatch(fetchCategoriesFailure(error));
					throw ({error, message: 'Unable to get categories'});
				}
			);
	}
};

export const incrementPage = () => ({
	type: INCREMENT_CATEGORIES_PAGE
});

export const resetPagination = () => ({
	TYPE: RESET_CATEGORIES_PAGINATION
});

export const resetCategories = () => ({
	type: RESET_CATEGORIES
});

export const fetchCategoriesBegin = () => ({
	type: FETCH_CATEGORIES_BEGIN
});

export const fetchCategoriesSuccess = categories => ({
	type: FETCH_CATEGORIES_SUCCESS,
	payload: { categories }
});

export const fetchCategoriesFailure = error => ({
	type: FETCH_CATEGORIES_FAILURE,
	payload: { error }
});
