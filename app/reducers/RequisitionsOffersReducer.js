import {
	FETCH_REQUISITIONS_OFFERS_BEGIN,
	FETCH_REQUISITIONS_OFFERS_SUCCESS,
	FETCH_REQUISITIONS_OFFERS_FAILURE,
	INCREMENT_REQUISITIONS_OFFERS_PAGE,
	RESET_REQUISITIONS_OFFERS,
	RESET_REQUISITIONS_OFFERS_PAGINATION
} from 'cotizame-native/app/actions/RequisitionsOffersActions';

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

export default function RequisitionsOffersReducer (state = initialState, action){
	switch(action.type){
		case FETCH_REQUISITIONS_OFFERS_BEGIN:
			return {
				...state,
				isLoading: true,
				error: ''
			}
		case FETCH_REQUISITIONS_OFFERS_SUCCESS:
			let allIds = [...new Set(state.allIds.concat(action.payload.requisitionsOffers.allIds))];
			let byId = {
				...state.byId,
				...action.payload.requisitionsOffers.byId
			};
			return{
				...state,
				allIds,
				byId,
				isLoading: false,
				endReached: action.payload.requisitionsOffers.allIds.length < PAGE_SIZE
			}
		case FETCH_REQUISITIONS_OFFERS_FAILURE:
			return{
				...state,
				isLoading: false,
				error: action.payload.error,
			}
		case INCREMENT_REQUISITIONS_OFFERS_PAGE:
			return{
				...state,
				offset: state.offset + PAGE_SIZE,
			}
		case RESET_REQUISITIONS_OFFERS_PAGINATION:
			return{
				...state,
				offset: initialState.offset,
				limit: initialState.limit
			}
		case RESET_REQUISITIONS_OFFERS:
			return{
				...initialState
			}
		default:
			return state
	}
}

export const getIsLoadingRequisitionsOffers = state => {
	return state.isLoading;
}

export const getIsRefreshingRequisitionsOffers = state => {
	return state.isLoading && (state.offset === 0);
}

export const getRequisitionsOffers = (state, size = null) => {
	return size ? state.allIds.map(id => state.byId[id]).slice(0, size):state.allIds.map(id => state.byId[id]);
}

export const getRequisitionsOffersPaginationData = state => {
	return { offset: state.offset, limit: state.limit }
}

export const getRequisitionsOffersEndReached = state => {
	return state.endReached;
}
export const getRequisitionsOffersError = state => {
	return state.error;
}
