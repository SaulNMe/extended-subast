import ApiService from 'cotizame-native/app/services/ApiService';

export const GET_ITEM_BEGIN = 'GET_ITEM_BEGIN';
export const GET_ITEM_SUCCESS = 'GET_ITEM_SUCCESS';
export const GET_ITEM_FAILURE = 'GET_ITEM_FAILURE';

export function getTenderId(id) {
	return async dispatch => {
		dispatch(getTenderIrBegin());
		await ApiService.getTenderId(id)
			.then(
				result => {
					dispatch(getTenderIdSuccess(result));
				},
				error => {
					dispatch(getTenderIdFailure(error));
					throw ({error: error, message: 'This is a demo error message'});
				}
			)
	};
}

// Action: Function that returns an object with action data for reducer
export const getTenderIrBegin = () => ({
	type: GET_ITEM_BEGIN
});
export const getTenderIdSuccess = data => ({
	type: GET_ITEM_SUCCESS,
	payload: data
});
export const getTenderIdFailure = error => ({
	type: GET_ITEM_FAILURE,
	payload: { error }
});
