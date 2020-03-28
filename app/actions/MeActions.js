import ApiService from 'cotizame-native/app/services/ApiService';

export const GET_ME_BEGIN ='GET_ME_BEGIN';
export const GET_ME_SUCCESS ='GET_ME_SUCCESS';
export const GET_ME_FAILURE ='GET_ME_FAILURE';

export function getMe() {
	return async (dispatch/*, getState*/) => {
		dispatch(getMeBegin());
		return ApiService.getMe()
			.then (
				result => {
					dispatch(getMeSuccess(result));
					return result;
				},
				error => {
					dispatch(getMeFailure(error));
					throw ({Error: error});
				}
			)
	};
}

export const rehydrateMe = (me) => {
	return async (dispatch/*, getState*/) => {
		return dispatch(getMeSuccess(me));
	};
};

export const getMeBegin = () => ({
	type: GET_ME_BEGIN
});

export const getMeSuccess = data => ({
	type: GET_ME_SUCCESS,
	payload: data
});

export const getMeFailure = error => ({
	type: GET_ME_FAILURE,
	payload: error
});