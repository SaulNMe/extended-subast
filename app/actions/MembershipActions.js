import ApiService from 'cotizame-native/app/services/ApiService';

// Declare action names as constants with uppercase string
export const GET_MEMBERSHIP_BEGIN ='GET_MEMBERSHIP_BEGIN';
export const GET_MEMBERSHIP_SUCCESS ='GET_MEMBERSHIP_SUCCESS';
export const GET_MEMBERSHIP_FAILURE ='GET_MEMBERSHIP_FAILURE';

// Thunk: this is a special type of action that can dispatch other actions
export function getMembership() {
	return async ( dispatch ) => {
		dispatch(getMembershipBegin());
		return ApiService.getMembership()
		//await SomeApiService.getUserList()
			.then(
				result => {
					dispatch(getMembershipSuccess(result));
					return result;
				},
				error => {
					dispatch(getMembershipFailure(error));
					throw ({Error: error});
				}
			)
	};
}

// Action: Function that returns an object with action data for reducer
export const getMembershipBegin = () => ({
	type: GET_MEMBERSHIP_BEGIN
});
export const getMembershipSuccess = data => ({
	type: GET_MEMBERSHIP_SUCCESS,
	payload: data
});
export const getMembershipFailure = error => ({
	type: GET_MEMBERSHIP_FAILURE,
	payload: error
});
