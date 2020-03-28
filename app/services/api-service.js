import { Constants } from 'expo';
import { AsyncStorage } from 'react-native';

export default ApiService = {
	token: null,

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
		let token = await this.makeRequest('POST', url, data, headers);
		this.token = JSON.stringify(token);
		this.token = await AsyncStorage.setItem('@token', token.AccessToken);
		return token;
	},

	async getMe () {
		const url = `${ApiService.host}api/me/`;
		
		return this.makeAuthorizedRequest('GET', url);
	},

	async getMembership () {
		const url = `${ApiService.host}api/user/membership`;
		
		return this.makeAuthorizedRequest('GET', url);
	},

	async getAlerts () {
		data = {
			alertIdClasification: 3,
			confirmed: false,
			limit: 20,
			offset: 15,
			orderBy: 'id',
			orderDir: 1
		}

		const url =`${ApiService.host}api/Alerts?alertFilter.classificationId=${data.alertIdClasification}&alertFilter.confirmed=${data.confirmed}
			&alertFilter.orderBy=${data.orderBy}&alertFilter.limit=${data.limit}&alertFilter.orderDir=${data.orderDir}`;

		return this.makeAuthorizedRequest('GET', url);
	},


	async makeRequest (method, url, data={}, headers={}) {

		headers['Content-Type'] = 'application/json';
		
		const options = {
			headers,
			method: method
		};

		if (method === 'POST' || method === 'PUT') {
			options.body = JSON.stringify(data);
		}

		let res = await fetch(url, options);

		let text = await res.text();
		let json = JSON.parse(text);

		if (!res.ok) {
			throw json;
		} else {
			return json;
		}
	},

	async makeAuthorizedRequest (method, url, data, headers={}) {
		let token = await AsyncStorage.getItem('@token');
		let accessToken = token;
		if (accessToken)
			headers['Authorization'] = `Bearer ${accessToken}`;

		return this.makeRequest(method, url, data, headers);
	},
}