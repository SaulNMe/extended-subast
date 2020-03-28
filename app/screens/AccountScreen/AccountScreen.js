import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	AsyncStorage
} from 'react-native';


import styles from './AccountScreenStyle';
import HugeText from 'cotizame-native/app/components/HugeText';
import LabelDisplay from 'cotizame-native/app/components/LabelDisplay';
import HeaderNav from 'cotizame-native/app/components/HeaderNav';
import BackBtn from 'cotizame-native/app/components/BackBtn';
import Divider from 'cotizame-native/app/components/Divider';
import Local from 'cotizame-native/app/services/Local';

export default class AccountScreen extends Component {
	static navigationOptions = {
		header: null
	}

	constructor (props) {
		super(props);
		this.state = {
			jsonMe: {}
		}
	}

	async componentDidMount () {
		let me = await AsyncStorage.getItem('@me');
		let jsonMe = JSON.parse(me);
		this.setState({ jsonMe });
	}

	render () {
		return (
			<ScrollView style={styles.container}>
				<HeaderNav
					headerLeft={
						<BackBtn
							navigation={this.props.navigation}
							backLabel
						/>
					}
					statusBar={'dark-content'}
				/>
				<View style={[styles.flex1, styles.marginHorizontal]}>
					<HugeText 
						text={Local.get('profileScreen.myAccount')}
						weight='bold'
						color='darker'
					/>
				</View>
				<View style={styles.margin}>
					<LabelDisplay 
						label={Local.get('myAccountScreen.telephone')}
						text={this.state.jsonMe.Phone === null ? '--' : this.state.jsonMe.Phone}
					/>
					<Divider
						marginVertical
					/>
					<LabelDisplay 
						labell={Local.get('myAccountScreen.person')}
						text={!this.state.jsonMe.IsPhysicalPerson ? 'Moral' : 'Física'}
					/>
					<Divider
						marginVertical
					/>
					<LabelDisplay 
						label={Local.get('myAccountScreen.provider')}
						text={!this.state.jsonMe.IsInternational ? 'Nacional' : 'Internacional'}
					/>
					<Divider
						marginVertical
					/>
					<LabelDisplay 
						label='RFC'
						text='CUPU800825569'
					/>
					<Divider
						marginVertical
					/>
					<LabelDisplay 
						label={Local.get('myAccountScreen.activity')}
						text={this.state.jsonMe.Roles === null ? '--' : this.state.jsonMe.Roles}
					/>
					<Divider
						marginVertical
					/>
					<LabelDisplay 
						label={Local.get('myAccountScreen.address')}
						text={this.state.jsonMe.PhysicalAddress === null ? '--' : this.state.jsonMe.PhysicalAddress}
					/>
				</View>
			</ScrollView>
		);
	}
}
