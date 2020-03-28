import ApiService from 'cotizame-native/app/services/ApiService';
import { AsyncStorage, Alert } from 'react-native';
import NavigationService from 'cotizame-native/app/services/NavigationService';

export default {

	// externalLogin: async function (credentials) {
	// 	let Error = "Parece que tus datos no son correctos. Revisa de nuevo y vuelve a intentar.";
	// 	let result = await apiService.getToken();
	// 	await AsyncStorage.setItem('@authData', JSON.stringify({token: result.access_token}));
	// 	let { data, status } = await apiService.externalAccountLogin(credentials).catch(e => {
	// 		throw ({Error});
	// 	});
	// 	if ( status !== "success" ) throw ({Error});
	// 	currentUserData = await CurrentUserService.setupForExternalUser(data);
	// 	GaService.loginEvent('external login');
	// 	return currentUserData;
	// },

	logout: async function () {
		let locale = await AsyncStorage.getItem('locale');
		await AsyncStorage.getAllKeys().then(AsyncStorage.multiRemove);
		await AsyncStorage.setItem('locale', locale);
		NavigationService.navigate('Auth');
	}
};
