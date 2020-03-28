// // Action names should be imported from their respective action modules
import {
	GET_MEMBERSHIP_BEGIN,
	GET_MEMBERSHIP_SUCCESS,
	GET_MEMBERSHIP_FAILURE
} from 'cotizame-native/app/actions/MembershipActions';

// Example initial state
const initialState = {
	membership: [],
	isLoading: false,
	error: '' 
}

// Return a new state object with updated attributes
export default function MembershipReducer (state = initialState, action) {
	switch (action.type) {
		case GET_MEMBERSHIP_BEGIN:
			return {
				...state,
				isLoading: true
			}
		case GET_MEMBERSHIP_SUCCESS:
			return {
				...state,
				membership: action.payload,
				isLoading: false
			}
		case GET_MEMBERSHIP_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload.error
			}
		default:
			return state;
	}
};

