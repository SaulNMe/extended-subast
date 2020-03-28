import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Button
} from 'react-native';

import styles from './UpdatePriceScreenStyle';
import HugeText from 'cotizame-native/app/components/HugeText';

export default class UpdatePriceScreen extends Component {
	static navigationOptions = {
		title: 'UpdatePriceScreen'
	}
	render () {
		return (
			<View style={styles.container}>
				<HugeText 
					text='Mejora tu precio para ganar la solicitud #133718'
				/>
				<Button
					onPress={() => { this.props.navigation.navigate('ReqDetailScreen') }}
					title='Go to detalle solicitud'
				/>
			</View>
		);
	}
}
