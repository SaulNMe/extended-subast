import ApiService from 'cotizame-native/app/services/ApiService';
import normalizeById from 'cotizame-native/app/utils/NormalizeById';

import { getRequisitionQuotationPaginationData, getIsLoadingRequisitionQuotation, getRequisitionQuotationEndReached } from 'cotizame-native/app/reducers';

export const FETCH_REQUISITION_QUOTATION_BEGIN ='FETCH_REQUISITION_QUOTATION_BEGIN';
export const FETCH_REQUISITION_QUOTATION_SUCCESS ='FETCH_REQUISITION_QUOTATION_SUCCESS';
export const FETCH_REQUISITION_QUOTATION_FAILURE ='FETCH_REQUISITION_QUOTATION_FAILURE';
export const INCREMENT_REQUISITION_QUOTATION_PAGE ='INCREMENT_REQUISITION_QUOTATION_PAGE';
export const RESET_REQUISITION_QUOTATION ='RESET_REQUISITION_QUOTATION';
export const RESET_REQUISITION_QUOTATION_PAGINATION ='RESET_REQUISITION_QUOTATION_PAGINATION';

export function fetchRequisitionQuotationBatch(reqId) {
	return async (dispatch, getState) => {
		if ( getIsLoadingRequisitionQuotation(getState())) return;
		await dispatch(fetchRequisitionQuotation(reqId));
	}
};

export function fetchRequisitionQuotation(reqId) {
	return async (dispatch, getState) => {
		dispatch(fetchRequisitionQuotationBegin());
		return ApiService.getRequisitionQuotation(reqId)
			.then (
				result => {
					let normalized = normalizeById(result, 'LineServiceId');
					dispatch(fetchRequisitionQuotationSuccess(normalized));
					return normalized;
				},
				error => {
					dispatch(fetchRequisitionQuotationFailure(error));
					throw ({ error, message: 'Unable to get requisitionQuotation'});
				}
			);
	}
};

export function reloadRequisitionQuotation(reqId) {
	return async (dispatch, getState) => {
		dispatch(fetchRequisitionQuotationBegin());
		return ApiService.getRequisitionQuotation(reqId)
			.then (
				result => {
					let normalized = normalizeById(result, 'LineServiceId');
					dispatch(resetRequisitionQuotation());
					dispatch(fetchRequisitionQuotationSuccess(normalized));
					return normalized;
				},
				error => {
					dispatch(fetchRequisitionQuotationFailure(error));
					throw ({ error, message: 'Unable to get requisitionQuotation'});
				}
			);
	}
};

export const incrementPage = () => ({
	type: INCREMENT_REQUISITION_QUOTATION_PAGE
});

export const resetPagination = () => ({
	type: RESET_REQUISITION_QUOTATION_PAGINATION
});

export const resetRequisitionQuotation = () => ({
	type: RESET_REQUISITION_QUOTATION
});

export const fetchRequisitionQuotationBegin = () => ({
	type: FETCH_REQUISITION_QUOTATION_BEGIN
});

export const fetchRequisitionQuotationSuccess = requisitionQuotation => ({
	type: FETCH_REQUISITION_QUOTATION_SUCCESS,
	payload: { requisitionQuotation },
});

export const fetchRequisitionQuotationFailure = error => ({
	type: FETCH_REQUISITION_QUOTATION_FAILURE,
	payload: { error }
});