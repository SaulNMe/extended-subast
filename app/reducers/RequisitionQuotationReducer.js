import {
	FETCH_REQUISITION_QUOTATION_BEGIN,
	FETCH_REQUISITION_QUOTATION_SUCCESS,
	FETCH_REQUISITION_QUOTATION_FAILURE,
	INCREMENT_REQUISITION_QUOTATION_PAGE,
	RESET_REQUISITION_QUOTATION,
	RESET_REQUISITION_QUOTATION_PAGINATION
} from 'cotizame-native/app/actions/RequisitionQuotationActions';

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

export default function RequisitionQuotationReducer (state = initialState, action){
	switch(action.type){
		case FETCH_REQUISITION_QUOTATION_BEGIN:
			return {
				...state,
				isLoading: true,
				error: ''
			}
		case FETCH_REQUISITION_QUOTATION_SUCCESS:
			let allIds = [...new Set(state.allIds.concat(action.payload.requisitionQuotation.allIds))];
			let byId = {
				...state.byId,
				...action.payload.requisitionQuotation.byId
			};
			return{
				...state,
				allIds,
				byId,
				isLoading: false,
			}
		case FETCH_REQUISITION_QUOTATION_FAILURE:
			return{
				...state,
				isLoading: false,
				error: action.payload.error,
			}
		case INCREMENT_REQUISITION_QUOTATION_PAGE:
			return{
				...state,
				offset: state.offset + PAGE_SIZE,
			}
		case RESET_REQUISITION_QUOTATION_PAGINATION:
			return{
				...state,
				offset: initialState.offset,
				limit: initialState.limit
			}
		case RESET_REQUISITION_QUOTATION:
			return{
				...initialState
			}
		default:
			return state
	}
}

export const getErrorRequisitionQuotation = state => {
	return state.error;
}

export const getIsRefreshingRequisitionQuotation = state => {
	return state.isLoading && (state.offset === 0);
}

export const getIsLoadingRequisitionQuotation = state => {
	return state.isLoading;
}

export const getRequisitionQuotation = state => {
	return state.allIds.map(id => state.byId[id]);
}

export const getRequisitionQuotationPaginationData = state => {
	return { offset: state.offset, limit: state.limit }
}

export const getRequisitionQuotationEndReached = state => {
	return state.endReached;
}
