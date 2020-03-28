// Action names should be imported from their respective action modules
import {
	GET_SUMMARY_BEGIN,
	GET_SUMMARY_SUCCESS,
	GET_SUMMARY_FAILURE,
	GET_SUMMARY_CLEAR
} from 'cotizame-native/app/actions/SummaryActions';

const PAGE_SIZE = 40;
// Example initial state
const initialState = {
	summary: [],
	isLoading: false,
	error: '',
	hasNecessaryLength: 40,
	limit: PAGE_SIZE,
	offset: 0,
};

// Return a new state object with updated attributes
export default function SummaryReducer (state = initialState, action) {
	switch (action.type) {
		case GET_SUMMARY_BEGIN:
			return {
				...state,
				isLoading: true
			}
		case GET_SUMMARY_SUCCESS:
			return {
				...state,
				summary: action.payload.data,
				isLoading: false
			}
		case GET_SUMMARY_FAILURE:
			return {
				...state,
				error: action.payload.error.status,
				isLoading: false
			}
		case GET_SUMMARY_CLEAR:
			return {
				...state,
				isLoading: true
			}
		default:
			return state;
	}
};

