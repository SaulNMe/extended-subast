import ApiService from 'cotizame-native/app/services/ApiService';
import normalizeById from 'cotizame-native/app/utils/NormalizeById';

export const FETCH_FEATURED_REQUISITIONS_BEGIN ='FETCH_FEATURED_REQUISITIONS_BEGIN';
export const FETCH_FEATURED_REQUISITIONS_SUCCESS ='FETCH_FEATURED_REQUISITIONS_SUCCESS';
export const FETCH_FEATURED_REQUISITIONS_FAILURE ='FETCH_FEATURED_REQUISITIONS_FAILURE';
export const RESET_FEATURED_REQUISITIONS ='RESET_FEATURED_REQUISITIONS';

export function fetchFeaturedRequisitions() {
	return async (dispatch, getState) => {
		dispatch(fetchFeaturedRequisitionsBegin());
		return ApiService.getRequisitions({ limit: 3, offset: 0 }, {status: 1})
			.then (
				result => {
					let normalized = normalizeById(result, 'RequisitionId');
					dispatch(fetchFeaturedRequisitionsSuccess(normalized));
					return normalized;
				},
				error => {
					dispatch(fetchFeaturedRequisitionsFailure(error));
					throw ({ error, message: 'Unable to get featured requisitions'});
				}
			);
	}
};

export const resetFeaturedRequisitions = () => ({
	type: RESET_FEATURED_REQUISITIONS
});

export const fetchFeaturedRequisitionsBegin = () => ({
	type: FETCH_FEATURED_REQUISITIONS_BEGIN
});

export const fetchFeaturedRequisitionsSuccess = requisitions => ({
	type: FETCH_FEATURED_REQUISITIONS_SUCCESS,
	payload: { requisitions },
});

export const fetchFeaturedRequisitionsFailure = error => ({
	type: FETCH_FEATURED_REQUISITIONS_FAILURE,
	payload: { error }
});
