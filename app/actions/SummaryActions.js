import ApiService from 'cotizame-native/app/services/ApiService';
// Declare action names as constants with uppercase string
export const GET_SUMMARY_BEGIN = 'GET_SUMMARY_BEGIN';
export const GET_SUMMARY_SUCCESS = 'GET_SUMMARY_SUCCESS';
export const GET_SUMMARY_FAILURE = 'GET_SUMMARY_FAILURE';
export const GET_SUMMARY_CLEAR = 'GET_SUMMARY_CLEAR';

// Thunk: this is a special type of action that can dispatch other actions
export function getSummary() {
	return async dispatch => {
		dispatch(getSummaryBegin());
		await ApiService.getSummary()
			.then(
				result => {
					dispatch(getSummarySuccess(result));
				},
				error => {
					dispatch(getSummaryFailure(error));
					throw ({error: error, message: 'This is a demo error message'});
				}
			)
	};
}

// Action: Function that returns an object with action data for reducer
export const getSummaryBegin = () => ({
	type: GET_SUMMARY_BEGIN
});
export const getSummarySuccess = data => ({
	type: GET_SUMMARY_SUCCESS,
	payload: { data }
});
export const getSummaryFailure = error => ({

	type: GET_SUMMARY_FAILURE,
	payload: { error }
});

export const getSummaryClear = error => ({
	type: GET_SUMMARY_CLEAR,
});
