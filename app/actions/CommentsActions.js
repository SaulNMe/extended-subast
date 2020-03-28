import ApiService from 'cotizame-native/app/services/ApiService';
import normalizeById from 'cotizame-native/app/utils/NormalizeById';

import { getCommentsPaginationData, getIsLoadingComments, getCommentsEndReached } from 'cotizame-native/app/reducers';

export const FETCH_COMMENTS_BEGIN ='FETCH_COMMENTS_BEGIN';
export const FETCH_COMMENTS_SUCCESS ='FETCH_COMMENTS_SUCCESS';
export const FETCH_COMMENTS_FAILURE ='FETCH_COMMENTS_FAILURE';
export const INCREMENT_COMMENTS_PAGE ='INCREMENT_COMMENTS_PAGE';
export const RESET_COMMENTS ='RESET_COMMENTS';
export const RESET_COMMENTS_PAGINATION ='RESET_COMMENTS_PAGINATION';

export function fetchCommentsBatch(data = {}) {
	return async (dispatch, getState) => {
		if ( getIsLoadingComments(getState()) || getCommentsEndReached(getState())) return;
		await dispatch(fetchComments(data));
		dispatch(incrementPage());
	}
};

export function fetchComments(data = {}) {
	return async (dispatch, getState) => {
		dispatch(fetchCommentsBegin());
		let paginationData = getCommentsPaginationData(getState());
		return ApiService.getComments(paginationData, data)
			.then (
				result => {
					let normalized = normalizeById(result, 'MessageId');
					dispatch(fetchCommentsSuccess(normalized));
					return normalized;
				},
				error => {
					dispatch(fetchCommentsFailure(error));
					throw ({ error, message: 'Unable to get Comments'});
				}
			);
	}
};

export function reloadComments(data = {}) {
	return async (dispatch, getState) => {
		dispatch(resetPagination());
		dispatch(fetchCommentsBegin());
		let paginationData = getCommentsPaginationData(getState());
		return ApiService.getComments(paginationData, data = {})
			.then (
				result => {
					let normalized = normalizeById(result, 'MessageId');
					dispatch(resetComments());
					dispatch(fetchCommentsSuccess(normalized));
					dispatch(incrementPage());
					return normalized;
				},
				error => {
					dispatch(fetchCommentsFailure(error));
					throw ({ error, message: 'Unable to get Comments'});
				}
			);
	}
};

export const incrementPage = () => ({
	type: INCREMENT_COMMENTS_PAGE
});

export const resetPagination = () => ({
	type: RESET_COMMENTS_PAGINATION
});

export const resetComments = () => ({
	type: RESET_COMMENTS
});

export const fetchCommentsBegin = () => ({
	type: FETCH_COMMENTS_BEGIN
});

export const fetchCommentsSuccess = Comments => ({
	type: FETCH_COMMENTS_SUCCESS,
	payload: { Comments },
});

export const fetchCommentsFailure = error => ({
	type: FETCH_COMMENTS_FAILURE,
	payload: { error }
});