import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import store from 'cotizame-native/app/Store';
import 'cotizame-native/config/ReactotronConfig';
import moment from 'moment';
import './locales/moment-es';
import MainNavigator from './app/Router';
import { Asset, AppLoading } from 'expo';
import NavigationService from 'cotizame-native/app/services/NavigationService.js';

export default class App extends React.Component {
	
	state = {
		isReady: false,
	};

	async _cacheResourcesAsync() {
		const images = [
			require('cotizame-native/assets/background-1.png'),
			require('cotizame-native/assets/background.png'),
			require('cotizame-native/assets/background222.png'),
			require('cotizame-native/assets/msgLogo.png'),
			require('cotizame-native/assets/profile.png')
		];

		const cacheImages = images.map((image) => {
			return Asset.fromModule(image).downloadAsync();
		});
		return Promise.all(cacheImages);

	}

	render() {
		if (!this.state.isReady) {
			return (
				<AppLoading
					startAsync={this._cacheResourcesAsync}
					onFinish={() => this.setState({ isReady: true })}
					onError={console.warn}
				/>
			);
		}
		return (
			<Provider store={store}>
				<View style={styles.container}>
					<MainNavigator
						ref={navigatorRef => {
							NavigationService.setTopLevelNavigator(navigatorRef);
						}}
					/>
				</View>
			</Provider>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
