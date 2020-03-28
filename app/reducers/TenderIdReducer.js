// Action names should be imported from their respective action modules
import {
	GET_ITEM_BEGIN,
	GET_ITEM_SUCCESS,
	GET_ITEM_FAILURE
} from 'cotizame-native/app/actions/TenderIdActions';

// Example initial state
const initialState = {
	items: [],
	isLoading: false,
	error: '' 
};

// Return a new state object with updated attributes
export default function TenderIdReducer (state = initialState, action) {
	switch (action.type) {
		case GET_ITEM_BEGIN:
			return {
				...state,
				isLoading: true,
				error:''
			}
		case GET_ITEM_SUCCESS:
			return {
				...state,
				items: action.payload,
				isLoading: false,
				error:''
			}
		case GET_ITEM_FAILURE:
			return {
				...state,
				error: action.payload.error.status,
				isLoading: false
			}
		default:
			return state;
	}
};

