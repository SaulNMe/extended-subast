// Action names should be imported from their respective action modules
import {
	FETCH_ALERTS_UNREAD_BEGIN,
	FETCH_ALERTS_UNREAD_SUCCESS,
	FETCH_ALERTS_UNREAD_FAILURE
} from 'cotizame-native/app/actions/AlertsActions';

const initialState = {
	alertUnread: 0,
	isLoading: false,
	error: '',
};

// Return a new state object with updated attributes
export default function AlertIconReducer (state = initialState, action) {
    switch (action.type) {
        case FETCH_ALERTS_UNREAD_BEGIN:
			return {
				...state,
				isLoading: true
			}
		case FETCH_ALERTS_UNREAD_SUCCESS:
			return {
				...state,
				alertUnread: action.payload.alerts,
				isLoading: false
			}
		case FETCH_ALERTS_UNREAD_FAILURE:
			return {
				...state,
				error: action.payload.error.status,
				isLoading: false
			}
		default:
			return state;
	}
};

export const getAlertIcon = state => {
	return state.alertUnread
}