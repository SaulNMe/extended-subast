import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image
} from 'react-native';

import ApiService from 'cotizame-native/app/services/ApiService';

import { AsyncStorage } from "react-native";
import { rehydrateMe } from "cotizame-native/app/actions/MeActions";
import { connect } from 'react-redux';
import { Localization } from 'expo-localization';
import Local from 'cotizame-native/app/services/Local';
import moment from 'moment';
import 'cotizame-native/locales/moment-es'
import styles from './AuthLoadingScreenStyle';

class AuthLoadingScreen extends Component {
	static navigationOptions = {
		title: 'AuthLoadingScreen'
	}

	constructor (props) {
		super(props)
		this._boostrapAsync();
	}
	async setLocal(locale){
		Local.setLocal(locale);
		await AsyncStorage.setItem('locale', locale);
	}

	_boostrapAsync = async () => {
		let token = await AsyncStorage.getItem('@token');
		let me = await AsyncStorage.getItem('@me');
		let locale = await AsyncStorage.getItem('locale');
		token = JSON.parse(token);
		me = JSON.parse(me)
		if(me){
			if(me.Language === 'en') this.setLocal('en-US');
			else this.setLocal('es-MX');
		} else {
			if(!locale) {
				switch (Localization.locale){
					case 'en-US':
						this.setLocal('en-US');
						break;
					case 'es-MX':
						this.setLocal('es-MX');
						break;
					default:
						this.setLocal('es-MX');
				}
			} else Local.setLocal(locale);
		}
		if(Local.locale ==='en-US') moment.locale('en');
		else moment.locale('es');
		
		if (token && me) {
			this.props.dispatch(rehydrateMe(me));
			this.props.navigation.navigate('App');
			const member = await ApiService.getMembership();
			await AsyncStorage.setItem('@membership', JSON.stringify(member));
		} else {
			this.props.navigation.navigate('Auth');
		}
	}

	render () {
		return (
			<View style={styles.paddedContainer}>
				<Image		
					style={styles.imageFill}		
					source={require('cotizame-native/assets/background.png')}
				/>
			</View>
		);
	}
}

mapStateToProps = state => ({
	auth: state
});

export default connect(mapStateToProps)(AuthLoadingScreen);
