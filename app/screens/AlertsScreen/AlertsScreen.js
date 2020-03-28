import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  BackHandler,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Platform,
  StatusBar,
  RefreshControl
} from 'react-native';


import styles from './AlertsScreenStyle';
import HugeText from 'cotizame-native/app/components/HugeText';
import LabelText from 'cotizame-native/app/components/LabelText';
import Divider from 'cotizame-native/app/components/Divider';
import AlertItem from 'cotizame-native/app/components/AlertItem';
import Feather from 'react-native-vector-icons/Feather';
import AlertsListContainer from 'cotizame-native/app/containers/AlertsListContainer';
import HeaderNav from 'cotizame-native/app/components/HeaderNav';
import BackBtn from 'cotizame-native/app/components/BackBtn';
import Local from 'cotizame-native/app/services/Local';
import NavigationService from 'cotizame-native/app/services/NavigationService.js';

export default class AlertsScreen extends Component {
	static navigationOptions = {
		header: null
	}

	_renderFooter = () => {
	    return (
	    	<View style={styles.customePaddingVertical}></View>
	    	);
	};

	render () {
		return (
			<View style={styles.container}>
			<StatusBar barStyle="dark-content" />
				<View>
					<HeaderNav
						headerLeft={
							<BackBtn
								navigation={this.props.navigation}
								backLabel
							/>
						}
					/>
					<View style={[styles.row, styles.marginHorizontal, styles.smallMarginBottom]}>
						<View style={styles.flex1}>
							<HugeText 
								text={Local.get('alertsScreen.header')}
								weight='bold'
								color='darker'
							/>
						</View>
					</View>
					<AlertsListContainer
						ListFooterComponent={this._renderFooter}
					/>
				</View>
			</View>
		);
	}
}
