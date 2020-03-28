import axios from 'axios';
import { Constants } from 'expo';
import { AsyncStorage } from 'react-native';
import moment from 'moment';
import AuthService from 'cotizame-native/app/services/AuthService';
import restructureReqQueries from 'cotizame-native/app/utils/RestructureReqQueries';
import restructureTendersQueries from 'cotizame-native/app/utils/RestructureTendersQueries';
import restructureOrderQueries from 'cotizame-native/app/utils/RestructureOrderQueries';
const authAxios = axios.create();


let getAccessTokenData = async () => {
	let token = await AsyncStorage.getItem('@token');
	return JSON.parse(token);
};

authAxios.interceptors.request.use( async request => {
	let tokenData = await getAccessTokenData();
	let accessToken = tokenData.AccessToken;
	request.headers['Authorization'] = `Bearer ${accessToken}`;
	return request;
});

export default ApiService = {
	
	isRefreshingToken: false,
	refreshCall: null,

	host: function () {
		releaseChannel = Constants.manifest.releaseChannel;
		// const { hostname } = url.parse(NativeModules.SourceCode.scriptURL);
		// return 'http://' + hostname + ':9001/HubApi'; //Activate mock server by executing node server.js on the folder
		return releaseChannel && releaseChannel.indexOf('prod') !== -1
			? 'https://cotizameapidev.azurewebsites.net/'
			: 'https://cotizameapidev.azurewebsites.net/' ;
	}(),

	async login (data = {}) {
		const url = ApiService.host + 'api/auth/login';
		const headers = {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
		let authToken = await this.makeRequest('POST', url, data, headers);
		this.authToken = await AsyncStorage.setItem('@token', JSON.stringify(authToken));
		return authToken.AccessToken;
	},

	async getMe () {
		const url = `${ApiService.host}api/me/`;
		return this.makeAuthorizedRequest('GET', url);
	},

	async getMembership () {
		const url = `${ApiService.host}api/user/membership`;
		return this.makeAuthorizedRequest('GET', url);
	},

	async getAlerts (paginationData={}) {
		let { limit, offset } = paginationData;
		data = {
			limit,
			offset,
			orderDir: 'ASC',
		};
		const queries = ApiService.makeQueryParams('alertFilter.', data);
		const url = `${ApiService.host}api/Alerts?${queries}`;
		return this.makeAuthorizedRequest('GET', url);
	},

	getEndsToday (paginationData={}) {
		let { limit, offset } = paginationData;
		data = {
			limit,
			offset
		};
		const queries = ApiService.makeQueryParams('filter.', data);
		const url = `${ApiService.host}api/dashboard/endsToday?${queries}`;
		return this.makeAuthorizedRequest('GET', url);
	},

	getSummary () {
		const url = `${ApiService.host}api/user/summary`;

		return this.makeAuthorizedRequest('GET',url);
	},

	getComments (paginationData = {}, data = {}) {
		let { limit, offset } = paginationData;
		data = {
			limit,
			offset,
			...data
		};
		const queries = ApiService.makeQueryParams('filter.', data);
		const url = `${ApiService.host}api/Forum?${queries}`;
		return this.makeAuthorizedRequest('GET', url);
	},
	
	postFavorite(requsitionId) {
		const url = `${ApiService.host}api/requisitions/${requsitionId}/favorite`;

		return this.makeAuthorizedRequest('PUT' , url)
	},

	getRating (year, month) {
		const url = `${ApiService.host}api/dashboard/rating/${year}/${month}`;
		
		return this.makeAuthorizedRequest('GET', url);
	},

	getRequisitions(paginationData = {} , uiFilters = {}) {
		let { limit, offset } = paginationData;
		let filters = {
			limit,
			offset,
			myOffers: true,
			mySubscriptions: true,
			others: true,
			new: true,
			inProcess: true,
			finished: true,
			material: true,
			services: true,
			orderDir: 'ASC',
			positionType: ['M', 'S'],
			...uiFilters
		};

		const queries = this.makeQueryParams('filter.', restructureReqQueries(filters));
		let url = `${ApiService.host}api/requisitions?${queries}`;
		return this.makeAuthorizedRequest('GET', url);
	},

	getCategories () {
		const url = `${ApiService.host}api/requisitions/TopCategories?status=1`;
		return this.makeAuthorizedRequest('GET', url);
	},

	getTenders (paginationData={}, uiFilters) {
		let { limit, offset } = paginationData;
		let filters = {
			limit,
			offset,
			new: true,
			inProcess: true,
			finished: true,
			tender: true,
			contract: true,
			orderDir: 'ASC',
			...uiFilters
		}
		const queries = this.makeQueryParams('filter.', restructureTendersQueries(filters));
		const url = `${ApiService.host}api/Tenders?${queries}`;
		return this.makeAuthorizedRequest('GET', url);
	},

	getTenderId (id) {
		data = {
			id: id
		}
		const url = `${ApiService.host}api/Tenders/${data.id}`;
		return this.makeAuthorizedRequest('GET', url);
	},


	getOrders (paginationData={}, uiFilters = {}) {
		let { limit, offset } = paginationData;
		let filters = {
			limit,
			offset,
			incomplete: true,
			complete: true,
			material: true,
			service: true,
			orderDir: 'ASC',
			...uiFilters
		};
		const queries = this.makeQueryParams('filter.', restructureOrderQueries(filters));
		const url = `${ApiService.host}api/orders?${queries}`;
		return this.makeAuthorizedRequest('GET', url);
	},
	
	getOrderId (orderId) {
		const url = `${ApiService.host}api/orders/${orderId}`;
		return this.makeAuthorizedRequest('GET', url);
	},

	getEntries(orderId, position, hes){
		const url = `${ApiService.host}api/orders/${orderId}/${position}/Entry`;
		return this.makeAuthorizedRequest('GET', url);
	},
	
	getHes(orderId, position){
		const url = `${ApiService.host}api/orders/${orderId}/${position}/Hes`;
		return this.makeAuthorizedRequest('GET', url);
	},

	getRequisitionId (id) {
		const url = `${ApiService.host}api/requisitions/${id}`;
		return this.makeAuthorizedRequest('GET', url);
	},

	setlanguage(){
		const url = `${ApiService.host}api/change_language`;
		return this.makeAuthorizedRequest('PATCH', url);
	},

	getRequisitionQuotation (requisitionId) {
		const url = `${ApiService.host}api/requisitions/${requisitionId}/quotation`;
		return this.makeAuthorizedRequest('GET', url);
	},
	
	setForum (type, id, text) {
		let data = {
			message: text
		}
		const queries = ApiService.makeQueryParams('', data);
		const url = `${ApiService.host}api/forum/${type}/${id}?${queries}`;
		return this.makeAuthorizedRequest('POST', url);
	},

	getRequisitionOffers (paginationData= {}, requisitionId){
		let {limit, offset } = paginationData;
		data = {
			requisitionId: requsitionId,
			limit: limit,
			offset: 0,
		};
		const url = `${ApiService.host}api/requisitions/${requisitionId}/offers`;
		return this.makeAuthorizedRequest('GET', url);
	},

	putAlerts (id){
		const url = `${ApiService.host}/api/Alerts/${id}`;
		
		return this.makeAuthorizedRequest('PUT', url)
	},

	getAlertsUnread(){
		const url = `${ApiService.host}api/Alerts/TotalUnread`;
		
		return this.makeAuthorizedRequest('GET', url)
	},

	makeQueryParams (obj ='', params) {
		let queries ='';
		for(var key in params){
			if(Array.isArray(params[key])){
				params[key].map(item => queries += `${obj}${key}=${item}&`);
			} else queries += `${obj}${key}=${params[key]}&`;
		}
		return queries;
	},

	async getNewToken ( token ) {
		const url = this.host + 'api/auth/refresh';
		const method = 'POST';
		let { RefreshToken } = await getAccessTokenData();
		const data = {
			RefreshToken
		};
		const headers = {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
		return this.makeRequest(method, url, data, headers);
	},


	async makeRequest (method, url, data={}, headers={}) {
		let res = await axios({
			data,
			headers: { ...headers, 'Content-Type': 'application/json' },
			url,
			method
		});

		return res.data;
	},

	async makeAuthorizedRequest (method, url, data, headers={}) {
		try {
			let res = await authAxios({
				data,
				headers: { ...headers, 'Content-Type': 'application/json' },
				url,
				method
			});
			return res.data;
		} catch (error) {
			let status = error.response ? error.response.status : 0;
			if ( status === 401 ) {
				await this.suscribeForRefreshAuth();
				let retryResult = await this.makeAuthorizedRequest(method, url, data, headers);
				return retryResult;
			} else {
				throw error;
			}
		}

	},

	async suscribeForRefreshAuth() {
		if (this.isRefreshingToken) {
			await this.refreshCall;
		} else {
			this.isRefreshingToken = true;
			let refreshPromise = this.refreshAuth();
			this.refreshCall = refreshPromise;
			await refreshPromise;
			this.isRefreshingToken = false;
		}
	},

	async refreshAuth () {
		try {
			let tokenData = await ApiService.getNewToken();
			await AsyncStorage.setItem('@token', JSON.stringify(tokenData));
		} catch (error) {
			if (error.response)
				AuthService.logout();
			throw error;
		}
	}
}
