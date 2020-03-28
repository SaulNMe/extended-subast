import ApiService from 'cotizame-native/app/services/ApiService';
// Declare action names as constants with uppercase string
export const GET_REQUISITION_ID_BEGIN = 'GET_REQUISITION_ID_BEGIN';
export const GET_REQUISITION_ID_SUCCESS = 'GET_REQUISITION_ID_SUCCESS';
export const GET_REQUISITION_ID_FAILURE = 'GET_REQUISITION_ID_FAILURE';

// Thunk: this is a special type of action that can dispatch other actions
export function fetchRequisitionId(id) {
	return async dispatch => {
		dispatch(getRequisitionIdBegin());
		await ApiService.getRequisitionId(id)
			.then(
				result => {
					dispatch(getRequisitionIdSuccess(result));
				},
				error => {
					dispatch(getRequisitionIdFailure(error));
					throw ({error: error});
				}
			)
	};
}

export function fetchRequisitionIdIsFavorite(id) {
	return async dispatch => {
		await ApiService.postFavorite(id)
			.then(
				result => {
					dispatch(getRequisitionIdSuccess(result));
				},
				error => {
					throw ({error: error});
				}
			)
	};
}

// Action: Function that returns an object with action data for reducer
export const getRequisitionIdBegin = () => ({
	type: GET_REQUISITION_ID_BEGIN
});
export const getRequisitionIdSuccess = data => ({
	type: GET_REQUISITION_ID_SUCCESS,
	payload: { data }
});
export const getRequisitionIdFailure = error => ({
	type: GET_REQUISITION_ID_FAILURE,
	payload: { error }
});