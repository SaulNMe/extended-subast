// // Action names should be imported from their respective action modules
import {
	GET_REQUISITION_ID_BEGIN,
	GET_REQUISITION_ID_SUCCESS,
	GET_REQUISITION_ID_FAILURE,
} from 'cotizame-native/app/actions/RequisitionIdActions';

// Example initial state
const initialState = {
	requisitionsId: {},
	isLoading: false,
	error: '' 
};

// Return a new state object with updated attributes
export default function RequisitionIdReducer (state = initialState, action) {
	switch (action.type) {
		case GET_REQUISITION_ID_BEGIN:
			return {
				...state,
				requisitionsId: {},
				isLoading: true
			}
		case GET_REQUISITION_ID_SUCCESS:
			return {
				...state,
				requisitionsId: action.payload.data,
				isLoading: false,
				error: ''
			}
		case GET_REQUISITION_ID_FAILURE:
			return {
				...state,
				requisitionsId: {},
				error: action.payload.error.status,
				isLoading: false
			}
		default:
			return state;
	}
};

export const getIsLoadingRequisitionId = state => {
	return state.isLoading;
}

export const getRequisitionId = (state) => {
	return state.requisitionsId;
}

export const getErrorRequisitionId = state => {
	return state.error;
}
