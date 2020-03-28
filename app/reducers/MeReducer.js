import {
	GET_ME_BEGIN,
	GET_ME_SUCCESS,
	GET_ME_FAILURE
} from 'cotizame-native/app/actions/MeActions';

const initialState = {
	me: [],
	isLoadig: false,
	error: ''
};

export default function meReducer (state= initialState, action) {
	switch (action.type){
		case GET_ME_BEGIN:
			return {
				...state,
				isLoading: true
			}
		case GET_ME_SUCCESS:
			return {
				...state,
				me: action.payload,
				isLoadig: false
			}
		case GET_ME_FAILURE:
			 return {
				...state,
				isLoadig: false,
			 	error: action.payload.error
			 }
		default: 
			return state
	}
};