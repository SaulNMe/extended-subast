import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	AsyncStorage,
	Alert
} from 'react-native';

import styles from './LanguageScreenStyle';
import HugeText from 'cotizame-native/app/components/HugeText';
import SelectList from 'cotizame-native/app/components/SelectList';
import BottomDrawer from 'cotizame-native/app/components/BottomDrawer';
import HeaderNav from 'cotizame-native/app/components/HeaderNav';
import BackBtn from 'cotizame-native/app/components/BackBtn';
import PrimaryBtn from 'cotizame-native/app/components/PrimaryBtn';
import HelpItem from 'cotizame-native/app/components/HelpItem';
import Local from 'cotizame-native/app/services/Local';
import ApiService from 'cotizame-native/app/services/ApiService';

export default class LanguageScreen extends Component {
	static navigationOptions = {
		header: null
	}
	items = [{
		label: Local.get('languageScreen.spanish'),
		value: 'spanish'
	},{
		label: Local.get('languageScreen.english'),
		value: 'english'
	}]

	constructor (props) {
		super(props);
		this.state = {
			selected: 'spanish'
		}
	}

	async componentDidMount(){
		let locale = await AsyncStorage.getItem('locale');
		if(locale === 'en-US') this.setState({selected: 'english'});
		else this.setState({selected: 'spanish'});
	}

	async _setLanguage (language) {
		await AsyncStorage.setItem('locale', language);
		Local.setLocal(language);
		this.props.navigation.navigate('AuthLoading');
	}

	handleSelect(value) {
		this.setState({
			selected: value
		})
	}

	async handleSetLanguage () { 
		try{
			let token = await ApiService.setlanguage();
			token = JSON.stringify(token)
			this.token = await AsyncStorage.setItem('@token', token);
			let me = await ApiService.getMe();
			me = JSON.stringify(me);
			AsyncStorage.setItem('@me',me);
			let language = 'es-MX';
			if (this.state.selected === 'english' || this.state.selected === 'English') language = 'en-US';
			this._setLanguage(language);
			this.props.navigation.navigate('AuthLoadingScreen');
		} catch (error) {
			let errorMsg = '';
			if(String(error.Error) == 'TypeError: Network request failed') errorMsg = 'Inténtelo más tarde.';
			Alert.alert('Ha ocurrido un error', errorMsg);
			this.props.navigation.navigate('ProfileScreen');
		}
	}
	
	render () {
		return (
			<View style={styles.container}>
				<HeaderNav
					headerLeft={
						<BackBtn
							navigation={this.props.navigation}
							backLabel
						/>
					}
					statusBar={'dark-content'}
				/>
				<View style={styles.marginHorizontal}>
					<HugeText 
						text={Local.get('languageScreen.head')}
						weight='bold'
						color='darker'
					/>
				</View>
				<View style={styles.marginHorizontal}>
					<SelectList 
						selected={this.state.selected}
						items={this.items}
						onSelect={(value) => this.handleSelect(value)}
					/>
				</View>
				<View style={styles.marginHorizontal}>
					<HelpItem
						text= {Local.get('languageScreen.bottom')}
					/>
				</View>
				<BottomDrawer
					right={
						<PrimaryBtn 
							text='Aplicar cambios'
							addShadow
							onPress={() => this.handleSetLanguage()}
						/>
					}
				/>
			</View>
		);
	}
}
