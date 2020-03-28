import RequisitionsOffers from 'cotizame-native/app/reducers/RequisitionsOffersReducer.js'
import RequisitionQuotation, * as fromRequisitionQuotation from 'cotizame-native/app/reducers/RequisitionQuotationReducer.js'
import OrderId, * as fromOrderId from 'cotizame-native/app/reducers/OrderIdReducer.js'
import RequisitionId, * as fromRequisitionId from 'cotizame-native/app/reducers/RequisitionIdReducer.js'
import Orders, * as fromOrders from 'cotizame-native/app/reducers/OrdersReducer.js'
import Tenders, * as fromTenders from 'cotizame-native/app/reducers/TendersReducer.js'
import Requisitions, * as fromRequisitions from 'cotizame-native/app/reducers/RequisitionsReducer.js'
import Comments, *as fromComments from 'cotizame-native/app/reducers/CommentsReducer.js'
import EndsToday, * as fromEndsToday from 'cotizame-native/app/reducers/EndsTodayReducer.js'
import Summary from 'cotizame-native/app/reducers/SummaryReducer.js'
import LoginReducer from 'cotizame-native/app/reducers/LoginReducer';
import Alerts, * as fromAlerts from 'cotizame-native/app/reducers/AlertsReducer';
import AlertIconReducer, * as fromAlertIcon from 'cotizame-native/app/reducers/AlertIconReducer';
import MeReducer from 'cotizame-native/app/reducers/MeReducer';
import MembershipReducer from 'cotizame-native/app/reducers/MembershipReducer';
import Categories, * as fromCategories from 'cotizame-native/app/reducers/CategoriesReducer';
import Entries, * as fromEntries from 'cotizame-native/app/reducers/EntriesReducer';
import Hes, * as fromHes from 'cotizame-native/app/reducers/HesReducer';
import TenderId from 'cotizame-native/app/reducers/TenderIdReducer';
import FeaturedRequisitions, * as fromFeaturedRequisitions from 'cotizame-native/app/reducers/FeaturedRequisitionsReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    Alerts,
    LoginReducer,
    MeReducer,
    MembershipReducer,
    Summary,
    EndsToday,
    Comments,
    Requisitions,
    Tenders,
    Orders,
    RequisitionId,
    Categories,
    TenderId,
    OrderId,
    RequisitionQuotation,
    RequisitionsOffers,
    Entries,
    FeaturedRequisitions,
	Hes,
	AlertIconReducer
});

export default rootReducer;

//Alerts
export const getIsLoadingAlerts = state =>
	fromAlerts.getIsLoadingAlerts(state.Alerts);

export const getIsRefreshingAlerts = state =>
	fromAlerts.getIsRefreshingAlerts(state.Alerts);

export const getErrorAlerts = state =>
	fromAlerts.getErrorAlerts(state.Alerts);

export const getAlerts = state =>
	fromAlerts.getAlerts(state.Alerts);

export const getAlertsPaginationData = state =>
	fromAlerts.getAlertsPaginationData(state.Alerts);

export const getAlertsEndReached = state =>
	fromAlerts.getAlertsEndReached(state.Alerts);

//AlertIcon
export const getAlertIcon = state =>
	fromAlertIcon.getAlertIcon(state.AlertIconReducer);
	

//RequisitionQuotation
export const getIsLoadingRequisitionQuotation = state =>
	fromRequisitionQuotation.getIsLoadingRequisitionQuotation(state.RequisitionQuotation);

export const getIsRefreshingRequisitionQuotation = state =>
	fromRequisitionQuotation.getIsRefreshingRequisitionQuotation(state.RequisitionQuotation);

export const getErrorRequisitionQuotation = state =>
	fromRequisitionQuotation.getErrorRequisitionQuotation(state.RequisitionQuotation);

export const getRequisitionQuotation = state =>
	fromRequisitionQuotation.getRequisitionQuotation(state.RequisitionQuotation);

export const getRequisitionQuotationPaginationData = state =>
	fromRequisitionQuotation.getRequisitionQuotationPaginationData(state.RequisitionQuotation);

export const getRequisitionQuotationEndReached = state =>
	fromRequisitionQuotation.getRequisitionQuotationEndReached(state.RequisitionQuotation);

//Requisitions
export const getIsLoadingRequisitions = state =>
	fromRequisitions.getIsLoadingRequisitions(state.Requisitions);

export const getIsRefreshingRequisitions = state =>
	fromRequisitions.getIsRefreshingRequisitions(state.Requisitions);

export const getRequisitions = (state, size = null, category, hasFavorites) =>
	fromRequisitions.getRequisitions(state.Requisitions, size, category, hasFavorites);

export const getRequisitionsPaginationData = state =>
	fromRequisitions.getRequisitionsPaginationData(state.Requisitions);

export const getRequisitionsEndReached = state =>
	fromRequisitions.getRequisitionsEndReached(state.Requisitions);

export const getRequisitionsFilters = state =>
	fromRequisitions.getRequisitionsFilters(state.Requisitions);

export const getRequisitionsSearch = state =>
	fromRequisitions.getRequisitionsSearch(state.Requisitions);

export const getErrorRequisitions = state =>
	fromRequisitions.getErrorRequisitions(state.Requisitions);

//FeaturedRequisitions
export const getIsLoadingFeaturedRequisitions = state =>
	fromFeaturedRequisitions.getIsLoadingFeaturedRequisitions(state.FeaturedRequisitions);

export const getFeaturedRequisitions = state =>
	fromFeaturedRequisitions.getFeaturedRequisitions(state.FeaturedRequisitions);

export const getErrorFeaturedRequisitions = state =>
	fromFeaturedRequisitions.getErrorFeaturedRequisitions(state.FeaturedRequisitions);

//EndsToday
export const getIsLoadingEndsToday = state =>
	fromEndsToday.getIsLoadingEndsToday(state.EndsToday);

export const getIsRefreshingEndsToday = state =>
	fromEndsToday.getIsRefreshingEndsToday(state.EndsToday);

export const getEndsToday = (state, size = null) =>
	fromEndsToday.getEndsToday(state.EndsToday, size);

export const getEndsTodayPaginationData = state =>
	fromEndsToday.getEndsTodayPaginationData(state.EndsToday);

export const getEndsTodayEndReached = state =>
	fromEndsToday.getEndsTodayEndReached(state.EndsToday);

export const getEndsTodayError = state =>
	fromEndsToday.getEndsTodayError(state.EndsToday);

//Tenders
export const getIsLoadingTenders = state =>
	fromTenders.getIsLoadingTenders(state.Tenders);

export const getIsRefreshingTenders = state =>
	fromTenders.getIsRefreshingTenders(state.Tenders);

export const getTenders = (state, size = null, category, hasFavorites) =>
	fromTenders.getTenders(state.Tenders, size, category, hasFavorites);

export const getTendersPaginationData = state =>
	fromTenders.getTendersPaginationData(state.Tenders);

export const getTendersEndReached = state =>
	fromTenders.getTendersEndReached(state.Tenders);

export const getTendersFilters = state =>
	fromTenders.getTendersFilters(state.Tenders);

export const getTendersSearch = state =>
	fromTenders.getTendersSearch(state.Tenders);

export const getErrorTenders = state =>
	fromTenders.getErrorTenders(state.Tenders);

//Orders
export const getIsLoadingOrders = state =>
	fromOrders.getIsLoadingOrders(state.Orders);

export const getIsRefreshingOrders = state =>
	fromOrders.getIsRefreshingOrders(state.Orders);

export const getOrders = state =>
	fromOrders.getOrders(state.Orders);

export const getOrdersPaginationData = state =>
	fromOrders.getOrdersPaginationData(state.Orders);

export const getOrdersEndReached = state =>
	fromOrders.getOrdersEndReached(state.Orders);

export const getErrorOrders = state =>
	fromOrders.getErrorOrders(state.Orders);

export const getOrdersFilters = state =>
	fromOrders.getOrdersFilters(state.Orders);

export const getOrdersSearch = state =>
	fromOrders.getOrdersSearch(state.Orders);

//OrderId
export const getIsLoadingOrderId = state =>
	fromOrderId.getIsLoadingOrderId(state.OrderId);

export const getIsRefreshingOrderId = state =>
	fromOrderId.getIsRefreshingOrderId(state.OrderId);

export const getOrderId = state =>
	fromOrderId.getOrderId(state.OrderId);

export const getOrderIdPaginationData = state =>
	fromOrderId.getOrderIdPaginationData(state.OrderId);

export const getOrderIdEndReached = state =>
	fromOrderId.getOrderIdEndReached(state.OrderId);

export const getErrorOrderId = state =>
	fromOrderId.getErrorOrderId(state.OrderId);

export const getCurrentOrderId = state =>
	fromOrderId.getCurrentOrderId(state.OrderId);

//Comments
export const getIsLoadingComments = state =>
	fromComments.getIsLoadingComments(state.Comments);

export const getIsRefreshingComments = state =>
	fromComments.getIsRefreshingComments(state.Comments);

export const getComments = (state) =>
	fromComments.getComments(state.Comments);

export const getCommentsSize = (state, id, size) =>
	fromComments.getCommentsSize(state.Comments, id, size);

export const getCommentsPaginationData = state =>
	fromComments.getCommentsPaginationData(state.Comments);

export const getCommentsEndReached = state =>
	fromComments.getCommentsEndReached(state.Comments);

export const getErrorComments = state =>
	fromComments.getErrorComments(state.Comments);

//Categories
export const getIsLoadingCategories = state =>
	fromCategories.getIsLoadingCategories(state.Categories);

export const getIsRefreshingCategories = state =>
	fromCategories.getIsRefreshingCategories(state.Categories);

export const getCategories = (state) =>
	fromCategories.getCategories(state.Categories);

export const getCategoriesPaginationData = state =>
	fromCategories.getCategoriesPaginationData(state.Categories);

export const getCategoriesEndReached = state =>
	fromCategories.getCategoriesEndReached(state.Categories);

export const getErrorCategories = state =>
	fromCategories.getErrorCategories(state.Categories);

//RequisitionsOffers
export const getIsLoadingRequisitionsOffers = state =>
	fromRequisitionsOffers.getIsLoadingRequisitionsOffers(state.RequisitionsOffers);

export const getIsRefreshingRequisitionsOffers = state =>
	fromRequisitionsOffers.getIsRefreshingRequisitionsOffers(state.RequisitionsOffers);

export const getRequisitionsOffers = (state, size = null) =>
	fromRequisitionsOffers.getRequisitionsOffers(state.RequisitionsOffers, size);

export const getRequisitionsOffersPaginationData = state =>
	fromRequisitionsOffers.getRequisitionsOffersPaginationData(state.RequisitionsOffers);

export const getRequisitionsOffersEndReached = state =>
	fromRequisitionsOffers.getRequisitionsOffersEndReached(state.RequisitionsOffers);

export const getRequisitionsOffersError = state =>
	fromRequisitionsOffers.getRequisitionsOffersError(state.RequisitionsOffers);

//RequisitionId
export const getIsLoadingRequisitionId = state =>
	fromRequisitionId.getIsLoadingRequisitionId(state.RequisitionId);

export const getErrorRequisitionId = state =>
	fromRequisitionId.getErrorRequisitionId(state.RequisitionId);

export const getRequisitionId = (state) =>
	fromRequisitionId.getRequisitionId(state.RequisitionId);

//Entries
export const getIsLoadingEntries = state =>
	fromEntries.getIsLoadingEntries(state.Entries);

export const getIsRefreshingEntries = state =>
	fromEntries.getIsRefreshingEntries(state.Entries);

export const getErrorEntries = state =>
	fromEntries.getErrorEntries(state.Entries);

export const getEntries = state =>
	fromEntries.getEntries(state.Entries);

export const getEntriesPaginationData = state =>
	fromEntries.getEntriesPaginationData(state.Entries);

export const getEntriesEndReached = state =>
	fromEntries.getEntriesEndReached(state.Entries);

//Hes
export const getIsLoadingHes = state =>
	fromHes.getIsLoadingHes(state.Hes);

export const getIsRefreshingHes = state =>
	fromHes.getIsRefreshingHes(state.Hes);

export const getErrorHes = state =>
	fromHes.getErrorHes(state.Hes);
export const getHes = state =>
	fromHes.getHes(state.Hes);

export const getHesPaginationData = state =>
	fromHes.getHesPaginationData(state.Hes);

export const getHesEndReached = state =>
	fromHes.getHesEndReached(state.Hes);
