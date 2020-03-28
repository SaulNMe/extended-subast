import ApiService from 'cotizame-native/app/services/ApiService';
import normalizeById from 'cotizame-native/app/utils/NormalizeById';

import { 
	getRequisitionsOffersPaginationData,
	getIsLoadingRequisitionsOffers,
	getRequisitionsOffersEndReached
} from 'cotizame-native/app/reducers';

export const FETCH_REQUISITIONS_OFFERS_BEGIN ='FETCH_REQUISITIONS_OFFERS_BEGIN';
export const FETCH_REQUISITIONS_OFFERS_SUCCESS ='FETCH_REQUISITIONS_OFFERS_SUCCESS';
export const FETCH_REQUISITIONS_OFFERS_FAILURE ='FETCH_REQUISITIONS_OFFERS_FAILURE';
export const INCREMENT_REQUISITIONS_OFFERS_PAGE ='INCREMENT_REQUISITIONS_OFFERS_PAGE';
export const RESET_REQUISITIONS_OFFERS ='RESET_REQUISITIONS_OFFERS';
export const RESET_REQUISITIONS_OFFERS_PAGINATION ='RESET_REQUISITIONS_OFFERS_PAGINATION';

export function fetchRequisitionsOffersBatch(requisitionId) {
	return async (dispatch, getState) => {
		if ( getIsLoadingRequisitionsOffers(getState()) || getRequisitionsOffersEndReached(getState()) ) return;
		await dispatch(fetchRequisitionsOffers(requisitionId));
		dispatch(incrementPage());
	}
};

export function fetchRequisitionsOffers(requisitionId) {
	return async (dispatch, getState) => {
		dispatch(fetchRequisitionsOffersBegin());
		let paginationData = getRequisitionsOffersPaginationData(getState());
		return ApiService.getRequisitionsOffers(paginationData, requisitionId)
			.then (
				result => {
					let normalized = normalizeById(result, 'RequisitionId');
					dispatch(fetchRequisitionsOffersSuccess(normalized));
					return normalized;
				},
				error => {
					dispatch(fetchRequisitionsOffersFailure(error));
					throw ({ error, message: 'Unable to get RequisitionsOffers'});
				}
			);
	}
};

export function reloadRequisitionsOffers(requisitionId) {
	return async (dispatch, getState) => {
		dispatch(resetPagination());
		dispatch(fetchRequisitionsOffersBegin());
		let paginationData = getRequisitionsOffersPaginationData(getState());
		return ApiService.getRequisitionsOffers(paginationData, requisitionId)
			.then (
				result => {
					let normalized = normalizeById(result, 'RequisitionId');
					dispatch(resetRequisitionsOffers());
					dispatch(fetchRequisitionsOffersSuccess(normalized));
					dispatch(incrementPage());
					return normalized;
				},
				error => {
					dispatch(fetchRequisitionsOffersFailure(error));
					throw ({ error, message: 'Unable to get RequisitionsOffers'});
				}
			);
	}
};

export const incrementPage = () => ({
	type: INCREMENT_REQUISITIONS_OFFERS_PAGE
});

export const resetPagination = () => ({
	type: RESET_REQUISITIONS_OFFERS_PAGINATION
});

export const resetRequisitionsOffers = () => ({
	type: RESET_REQUISITIONS_OFFERS
});

export const fetchRequisitionsOffersBegin = () => ({
	type: FETCH_REQUISITIONS_OFFERS_BEGIN
});

export const fetchRequisitionsOffersSuccess = requisitionsOffers => ({
	type: FETCH_REQUISITIONS_OFFERS_SUCCESS,
	payload: { requisitionsOffers },
});

export const fetchRequisitionsOffersFailure = error => ({
	type: FETCH_REQUISITIONS_OFFERS_FAILURE,
	payload: { error }
});
