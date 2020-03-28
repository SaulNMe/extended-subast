import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Button
} from 'react-native';

import styles from './CreateOfferSummaryScreenStyle';
import HugeText from 'cotizame-native/app/components/HugeText';
import BottomDrawer from 'cotizame-native/app/components/BottomDrawer';
import PrimaryBtn from 'cotizame-native/app/components/PrimaryBtn';
import SubtitleText from 'cotizame-native/app/components/SubtitleText';
import LabelText from 'cotizame-native/app/components/LabelText';

export default class CreateOfferSummaryScreen extends Component {
	static navigationOptions = {
	}
	render () {
		return (
			<View style={styles.container}>
				<HugeText 
					text='Revisa que todos los datos sean correctos'
				/>
				<SubtitleText
					text='Lorem Ipsum Dolor Sit Amet'
				/>
				<LabelText
					text='Detalles de oferta'
					bold
				/>
				<LabelText
					text='Archivos adjuntos'
					bold
				/>
				<BottomDrawer
					Divider
					left={
						<LabelText 
							noMargin
							text='El precio total de tu cotización es de $200,000.00 MXN'
						/>
					}
					right={
						<PrimaryBtn 
								text='Confirmar'
								action
								onPress={() => { this.props.navigation.navigate('ReqDetailScreen') }}
						/>
					}
				/>
			</View>
		);
	}
}
