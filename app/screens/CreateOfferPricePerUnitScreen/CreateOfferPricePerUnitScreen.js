import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Button
} from 'react-native';

import styles from './CreateOfferPricePerUnitScreenStyle';
import HugeText from 'cotizame-native/app/components/HugeText';
import BottomDrawer from 'cotizame-native/app/components/BottomDrawer';
import PrimaryBtn from 'cotizame-native/app/components/PrimaryBtn';
import HelpItem from 'cotizame-native/app/components/HelpItem';
import FormInput from 'cotizame-native/app/components/FormInput';

export default class CreateOfferPricePerUnitScreen extends Component {
	static navigationOptions = {
	}
	render () {
		return (
			<View style={styles.container}>
				<HugeText
					text='Define el precio de tu producto'
				/>
				<View style={styles.marginTop}>
					<FormInput
						label='Precio unitario'
						placeholder='Precio unitario de oferta'
					/>
				</View>
				<HelpItem 
					text='lorem ipsum dolor si amet h ue hueh ueh ueheu hue hue uehu heu heu hueh ueh '
				/>
				<BottomDrawer
					right={
						<PrimaryBtn 
								text='Siguiente'
								action
								onPress={() => { this.props.navigation.navigate('CreateOfferPriceCommentScreen') }}
						/>
					}
				/>
			</View>
		);
	}
}
