import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	AsyncStorage
} from 'react-native';

import styles from './MembershipScreenStyle';
import HugeText from 'cotizame-native/app/components/HugeText';
import BodyText from 'cotizame-native/app/components/BodyText';
import LabelDisplay from 'cotizame-native/app/components/LabelDisplay';
import HeaderNav from 'cotizame-native/app/components/HeaderNav';
import BackBtn from 'cotizame-native/app/components/BackBtn';
import Divider from 'cotizame-native/app/components/Divider';
import moment from 'moment';
import Local from 'cotizame-native/app/services/Local';

export default class MembershipScreen extends Component {
	static navigationOptions = {
		header: null
	}

	state = {
		membership: {}
	}

	async componentDidMount(){
		let membership = await AsyncStorage.getItem('@membership');
		membership = JSON.parse(membership);
		this.setState({membership: membership});
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
				<View style={styles.marginHorizontal}>
					<HugeText 
						text={Local.get('profileScreen.membership')}
						weight='bold'
						color='darker'
					/>
				</View>
				<View style={styles.margin}>
					<BodyText
						text={Local.get('membershipScreen.headerOne')}
						weight='bold'
						color='darker'
					/>
					<LabelDisplay 
						label={Local.get('membershipScreen.providerUser')}
						text={this.state.membership.SupplierName === null ? '--' : this.state.membership.SupplierName}
					/>
					<Divider
						marginVertical
					/>
					<LabelDisplay 
						label={Local.get('membershipScreen.email')}
						text={this.state.membership.Email === null ? '--' : this.state.membership.Email}
					/>
					<View style={styles.marginVertical}>
						<BodyText
							text={Local.get('membershipScreen.headerTwo')}
							weight='bold'
							color='darker'
						/>
					</View>
					<LabelDisplay 
						label={Local.get('membershipScreen.username')}
						text={this.state.membership.username === null ? '--' : this.state.membership.username}
					/>
					<Divider
						marginVertical
					/>
					<LabelDisplay 
						label={Local.get('membershipScreen.startDate')}
						text={this.state.membership.StartValidityDate === null ? '--' : moment(this.state.membership.StartValidityDate).format('DD MMMM YYYY')}
					/>
					<Divider
						marginVertical
					/>
					<LabelDisplay 
						label={Local.get('membershipScreen.finishDate')}
						text={this.state.membership.EndValidityDate=== null ? '--' : moment(this.state.membership.EndValidityDate).format('DD MMMM YYYY')}
						
					/>
					<Divider
						marginVertical
					/>
					<LabelDisplay 
						label={Local.get('membershipScreen.status')}
						text={this.state.membership.Status === null ? '--' : this.state.membership.Status}
					/>
					<Divider
						marginVertical
					/>
					<LabelDisplay 
						label={Local.get('membershipScreen.amount')}
						text={this.state.membership.Amount === null ? '--' : '$ ' + this.state.membership.Amount}
					/>
				</View>
			</ScrollView>
		);
	}
}