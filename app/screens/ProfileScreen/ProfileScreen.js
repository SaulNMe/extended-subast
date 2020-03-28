import React, { Component } from 'react';
import {
	View,
	ScrollView,
	Image,
	AsyncStorage,
	StatusBar,
	Text
} from 'react-native';

import styles from './ProfileScreenStyle';
import IconButton from 'cotizame-native/app/components/IconButton';
import AlertButton from 'cotizame-native/app/components/AlertButton';
import LabelText from 'cotizame-native/app/components/LabelText';
import SmallText from 'cotizame-native/app/components/SmallText';
import HeaderNav from 'cotizame-native/app/components/HeaderNav';
import { Fonts } from 'cotizame-native/app/styles';
import Local from 'cotizame-native/app/services/Local';
import AuthService from 'cotizame-native/app/services/AuthService';
import ApiService from 'cotizame-native/app/services/ApiService';
import ProfileStatsContainer from 'cotizame-native/app/containers/ProfileStatsContainer';
import moment from 'moment';



export default class ProfileScreen extends Component {

	constructor (props) {
		super(props);
		this.getParams = this.getParams.bind(this);
	}

	state = {
		jsonMe: [],
		rating: '- -'
	}

	componentDidMount(){
		this.getParams();
	}

	async getParams () {
		let me = await AsyncStorage.getItem('@me');
		let jsonMe = JSON.parse(me);
		this.setState({ jsonMe });
	}
	
	static navigationOptions = {
		header: null
	}


	async onPressLogout(){
		AuthService.logout();
	}

	render () {
		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<Image 
						style={styles.imageFill}
						source={require('cotizame-native/assets/profile.png')}
					/>
					<HeaderNav
						statusBar="light-content"
						headerCenter={
							<LabelText
								color="white"
								weight="medium" 
								center
								text={Local.get('profileScreen.yourProfile')}
							/>
						}
						headerRight={
							<AlertButton 
								white
								onPress={() => {this.props.navigation.navigate('AlertModal')}}
							/>
						}
						headerLeft={
							<React.Fragment />
						}
					/>
					<View style={styles.imageContainer}>
						<Image 
							style={styles.circle}
							source={ require('cotizame-native/assets/msgLogo.png')}
						/>
					</View>
					<View style={styles.dataBox}>
						<LabelText
							text= {this.state.jsonMe.SupplierName}
							color='white'
							weight='medium'
						/>
						<SmallText 
							text={this.state.jsonMe.FullName}
							color="white"
							weight="medium"
						/>
						<SmallText
							text= { this.state.jsonMe.Roles + ' #' +this.state.jsonMe.SupplierId }
							color='white'
							weight='light'
						/>
					</View>
					<ProfileStatsContainer />
				</View>
				<ScrollView>
					<View style={styles.btnContainer}>
						<IconButton
							title='Mis suscripciones'
							onPress={() => {this.props.navigation.navigate('MySubscriptionsScreen')}}
							iconName='bookmark'
						/>
						<IconButton
							title='Mis favoritos'
							onPress={() => {this.props.navigation.navigate('FavoritesScreen')}}
							iconName='heart'
						/>
						<IconButton
							title={Local.get('profileScreen.myAccount')}
							onPress={() => {this.props.navigation.navigate('AccountScreen')}}
							iconName='info'
						/>
						<IconButton
							title={Local.get('profileScreen.membership')}
							onPress={() => {this.props.navigation.navigate('MembershipScreen')}}
							iconName='credit-card'
						/>
						<IconButton
							title={Local.get('profileScreen.language')}
							onPress={() => {this.props.navigation.navigate('LanguageScreen')}}
							iconName='globe'
						/>
						 <IconButton
						 	title='Configuración'
						 	onPress={() => {this.props.navigation.navigate('NotificationConfigScreen')}}
						 	iconName='bell'
						 />
						<IconButton
							title={Local.get('profileScreen.logout')}
							onPress={() => this.onPressLogout()}
							iconName='log-out'
							hideBorder={true}
						/>
					</View>
				</ScrollView>
			</View>
		);
	}
}

