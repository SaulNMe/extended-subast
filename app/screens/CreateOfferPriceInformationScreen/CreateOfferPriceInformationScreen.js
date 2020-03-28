import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Button
} from 'react-native';

import styles from './CreateOfferPriceInformationScreenStyle';
import HugeText from 'cotizame-native/app/components/HugeText';
import BottomDrawer from 'cotizame-native/app/components/BottomDrawer';
import PrimaryBtn from 'cotizame-native/app/components/PrimaryBtn';
import FormInput from 'cotizame-native/app/components/FormInput';

export default class CreateOfferPriceInformationScreen extends Component {
	static navigationOptions = {
	}
	render () {
		return (
			<View style={styles.container}>
				<HugeText
					text='Define los datos con respecto al precio'
				/>
				<View style={styles.marginTop}>
					<FormInput 
						label='Precio unitario'
						placeholder='Precio unitario de oferta'
					/>
					<FormInput 
						label='Oferta mínima'
						placeholder='Oferta mínima de oferta'
					/>
					<FormInput 
						label='Factor de descuento'
						placeholder='Factor de descuento deseado'
					/>
				</View>
				<BottomDrawer
					right={
						<PrimaryBtn 
								text='Siguiente'
								action
								onPress={() => { this.props.navigation.navigate('CreateOfferPricePerUnitScreen') }}
						/>
					}
				/>
			</View>
		);
	}
}
