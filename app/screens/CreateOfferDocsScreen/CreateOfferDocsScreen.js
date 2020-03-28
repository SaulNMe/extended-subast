import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Button
} from 'react-native';


import styles from './CreateOfferDocsScreenStyle';
import HugeText from 'cotizame-native/app/components/HugeText';
import BottomDrawer from 'cotizame-native/app/components/BottomDrawer';
import PrimaryBtn from 'cotizame-native/app/components/PrimaryBtn';
import HelpItem from 'cotizame-native/app/components/HelpItem';

export default class CreateOfferDocsScreen extends Component {
	static navigationOptions = {
	}
	render () {
		return (
			<View style={styles.container}>
				<HugeText 
					text='Adjunta los siguientes documentos'
				/>
				<HelpItem 
					text='lorem ipsum dolor si amet h ue hueh ueh ueheu hue hue uehu heu heu hueh ueh '
				/>
				<BottomDrawer
					right={
						<PrimaryBtn 
								text='Siguiente'
								action
								onPress={() => { this.props.navigation.navigate('CreateOfferIndexScreen') }}
						/>
					}
				/>
			</View>
		);
	}
}
