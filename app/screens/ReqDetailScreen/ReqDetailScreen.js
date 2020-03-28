import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Button
} from 'react-native';

import styles from './ReqDetailScreenStyle';

export default class ReqDetailScreen extends Component {
	static navigationOptions = {
		title: 'ReqDetailScreen'
	}
	render () {
		return (
			<View style={styles.container}>
				<Text style={styles.bodyText}>ReqDetailScreen</Text>
				<Button
					onPress={() => { this.props.navigation.navigate('CreateOfferIndexScreen') }}
					title='Go to cotizar (si no tiene una oferta)'
				/>
				<Button
					onPress={() => { this.props.navigation.navigate('OfferDetailScreen') }}
					title='Go to offer detail (si ya tiene una oferta)'
				/>
				<Button
					onPress={() => { this.props.navigation.navigate('UpdatePriceScreen') }}
					title='Go to update price (si ya tiene una oferta pero ya hay mejores)'
				/>
			</View>
		);
	}
}
