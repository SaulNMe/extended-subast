import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Button,
	ScrollView,
} from 'react-native';

import styles from './CreateOfferIndexScreenStyle';
import HugeText from 'cotizame-native/app/components/HugeText';
import TitleText from 'cotizame-native/app/components/TitleText';
import SubtitleText from 'cotizame-native/app/components/SubtitleText';
import BodyText from 'cotizame-native/app/components/BodyText';
import Divider from 'cotizame-native/app/components/Divider';
import BottomDrawer from 'cotizame-native/app/components/BottomDrawer';
import PrimaryBtn from 'cotizame-native/app/components/PrimaryBtn';
import InlineDrawer from 'cotizame-native/app/components/InlineDrawer';
import SecondaryBtn from 'cotizame-native/app/components/SecondaryBtn';
import LabelText from 'cotizame-native/app/components/LabelText'

export default class CreateOfferIndexScreen extends Component {
	static navigationOptions = {
	}
	render () {
		return (
			<View style={styles.container}>
				<HugeText 
					text='Empecemos con los detalles de tu oferta'
				/>
				<SubtitleText
					text='Lorem Ipsum Dolor Sit Amet'
				/>
				<Divider 
					marginTop
					marginHorizontal
				/>
				<ScrollView>
					<View style={styles.verticalPadding}>
						<TitleText 
							text='Detalles de Oferta'
						/>
						<BodyText 
							text='Llena los datos de precio'
						/>
						<InlineDrawer 
							left={
								<PrimaryBtn 
									text='Comenzar'
									action
									onPress={() => { this.props.navigation.navigate('CreateOfferPriceMaterialScreen') }}
								/>
							}
						/>
						<Divider 
							marginVertical
							marginHorizontal
						/>
						<TitleText 
							text='Fechas'
						/>
						<BodyText
							text='Válida hasta, fecha de entregas'
						/>
						<InlineDrawer 
							left={
								<PrimaryBtn 
									text='Comenzar'
									action
									onPress={() => { this.props.navigation.navigate('CreateOfferLimitDateScreen') }}
								/>
							}
						/>
						<Divider 
							marginVertical
							marginHorizontal
						/>
						<TitleText 
							text='Archivos Adjuntos (Opcional)'
						/>
						<BodyText 
							text='Cotización, Propuesta técnica'
						/>
						<InlineDrawer 
							left={
								<SecondaryBtn 
									text='Agregar'
									action
									onPress={() => { this.props.navigation.navigate('CreateOfferDocsScreen') }}
								/>
							}
						/>
					</View>
				</ScrollView>
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
							action 
							text='Finalizar'
							onPress={() => { this.props.navigation.navigate('CreateOfferSummaryScreen') }}
						/>
					}
				/>
			</View>
		);
	}
}
