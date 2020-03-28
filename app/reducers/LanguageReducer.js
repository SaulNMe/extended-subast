import {
	SET_LANGUAGE,
} from 'cotizame-native/app/actions/LanguageActions';

const initialState = {
	language: 'es-MX',
};

export default function LanguageReducer (state = initialState, action) {
	switch (action.type) {
		case SET_LANGUAGE:
			return {
				language:  action.payload
			}
		default:
			return state;
	}
};

