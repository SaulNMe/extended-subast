import {
	FETCH_FEATURED_REQUISITIONS_BEGIN,
	FETCH_FEATURED_REQUISITIONS_SUCCESS,
	FETCH_FEATURED_REQUISITIONS_FAILURE,
	RESET_FEATURED_REQUISITIONS,
} from 'cotizame-native/app/actions/FeaturedRequisitionsActions';

const initialState = {
	byId: {},
	allIds: [],
	isLoading: false,
	error: '',
}

export default function FeaturedRequisitionsReducer (state = initialState, action){
	switch(action.type){
		case FETCH_FEATURED_REQUISITIONS_BEGIN:
			return {
				...state,
				isLoading: true,
				error: ''
			}
		case FETCH_FEATURED_REQUISITIONS_SUCCESS:
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
			}
		case FETCH_FEATURED_REQUISITIONS_FAILURE:
			return{
				...state,
				isLoading: false,
				error: action.payload.error,
			}
		case RESET_FEATURED_REQUISITIONS:
			return{
				...initialState
			}
		default:
			return state
	}
}

export const getIsLoadingFeaturedRequisitions = state => {
	return state.isLoading;
}

export const getFeaturedRequisitions = (state) => {
	return state.allIds.map(id => state.byId[id]);
}

export const getErrorFeaturedRequisitions = state => {
	return state.error;
}
