import ApiService from 'cotizame-native/app/services/ApiService';

export const LOGIN_BEGIN ='LOGIN_BEGIN';
export const LOGIN_SUCCESS ='LOGIN_SUCCESS';
export const LOGIN_FAILURE ='LOGIN_FAILURE';

export function login(paramsData) {
	return async (dispatch/*, getState*/) => {
		dispatch(getLoginBegin());
		return ApiService.login(paramsData)
			.then (
				result => {
					dispatch(getLoginSuccess(result));
					return result;
				},
				error => {
					dispatch(getLoginFailure(error));
					throw ({Error: error});
				}
			);	
	}
}

export const getLoginBegin = () => ({
	type: LOGIN_BEGIN
});

export const getLoginSuccess = data => ({
	type: LOGIN_SUCCESS,
	payload: data
});

export const getLoginFailure = error => ({
	type:LOGIN_FAILURE,
	payload: error
});
