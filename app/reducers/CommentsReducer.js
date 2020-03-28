import {
	FETCH_COMMENTS_BEGIN,
	FETCH_COMMENTS_SUCCESS,
	FETCH_COMMENTS_FAILURE,
	INCREMENT_COMMENTS_PAGE,
	RESET_COMMENTS,
	RESET_COMMENTS_PAGINATION
} from 'cotizame-native/app/actions/CommentsActions';

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

export default function CommentsReducer (state = initialState, action){
	switch(action.type){
		case FETCH_COMMENTS_BEGIN:
			return {
				...state,
				isLoading: true,
				error: ''
			}
		case FETCH_COMMENTS_SUCCESS:
			let allIds = [...new Set(state.allIds.concat(action.payload.Comments.allIds))];
			let byId = {
				...state.byId,
				...action.payload.Comments.byId
			};
			return{
				...state,
				allIds,
				byId,
				isLoading: false,
				endReached: action.payload.Comments.allIds < PAGE_SIZE
			}
		case FETCH_COMMENTS_FAILURE:
			return{
				...state,
				isLoading: false,
				error: action.payload.error,
			}
		case INCREMENT_COMMENTS_PAGE:
			return{
				...state,
				offset: state.offset + PAGE_SIZE,
			}
		case RESET_COMMENTS_PAGINATION:
			return{
				...state,
				offset: initialState.offset,
				limit: initialState.limit
			}
		case RESET_COMMENTS:
			return{
				...initialState
			}
		default:
			return state
	}
}

export const getErrorComments = state => {
	return state.error;
}

export const getIsRefreshingComments = state => {
	return state.isLoading && (state.offset === 0);
}

export const getIsLoadingComments = state => {
	return state.isLoading;
}

export const getComments = state => {
	return state.allIds.map(id => state.byId[id]);
}

export const getCommentsSize = (state, id, size = null) => {
	let comments = state.allIds.map(id => state.byId[id]);
	comments = comments.filter(item => item.ReferenceId === id);
	return size ? comments.slice(0, size):comments;
}

export const getCommentsPaginationData = state => {
	return { offset: state.offset, limit: state.limit }
}

export const getCommentsEndReached = state => {
	return state.endReached;
}

