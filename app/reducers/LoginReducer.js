import {
	LOGIN_BEGIN,
	LOGIN_SUCCESS,
	LOGIN_FAILURE
} from 'cotizame-native/app/actions/LoginActions';

const initialState = {
	login: [],
	isLoading: false,
	error: ''

};

export default function LoginReducer (state = initialState, action){
	switch(action.type){
		case LOGIN_BEGIN:
			return {
				...state,
				isLoading: true
			}
		case LOGIN_SUCCESS:
			return {
				...state,
				login: action.payload,
				isLoading: false
			}
		case LOGIN_FAILURE:
			return{
				...state,
				isLoading: false,
				error: action.payload.Message
			}
		default:
			return state
	}
};