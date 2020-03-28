import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	FlatList
} from 'react-native';

import styles from './SubscriptionsScreenStyle';
import HugeText from 'cotizame-native/app/components/HugeText';
import SubtitleText from 'cotizame-native/app/components/SubtitleText';
import BodyText from 'cotizame-native/app/components/BodyText';
import LabelText from 'cotizame-native/app/components/LabelText';
import HeaderNav from 'cotizame-native/app/components/HeaderNav';
import BackBtn from 'cotizame-native/app/components/BackBtn';
import Divider from 'cotizame-native/app/components/Divider';
import InlineSwitch from 'cotizame-native/app/components/InlineSwitch';
import PrimaryBtn from 'cotizame-native/app/components/PrimaryBtn';
import CotizameSignature from 'cotizame-native/app/components/CotizameSignature';

export default class SubscriptionsScreen extends Component {
	static navigationOptions = {
		header: null
	}

	render () {
		return (
			<View style={styles.container}>
				<HeaderNav
					headerLeft={
						<BackBtn
							navigation={this.props.navigation}
							backLabel
						/>
					}
				/>
				<ScrollView>
					<View style={[styles.flex1, styles.marginHorizontal]}>
						<HugeText 
							text='Solicitar suscripción'
							weight='bold'
								color= 'cotizame'
						/>
					</View>
					<View>
						<View style={styles.margin}>
							<LabelText 
								text='Para poder participar en cotizaciones de Motores de Helicóptero, debes estar suscrito a esta categoría.'
								color= 'cotizame'
							/>
						</View>
						<View style={[styles.marginHorizontal, styles.baseMarginBottom]}>
							<LabelText 
								text='Para iniciar tu suscripción, lee los siguientes términos y condiciones, y luego haz click en aceptar y continuar.'
								color= 'cotizame'
							/>
						</View>
						<View style={[styles.marginHorizontal]}>
							<LabelText 
								text='Te notificaremos cuando tu solicitud sea aprobada.'
								color= 'cotizame'
							/>
						</View>
					</View>
					<View>
						<CotizameSignature />
					</View>
					<View style={styles.margin}>
						<View style={styles.baseMarginBottom}>
							<BodyText
								text= 'Condiciones'
								weight= 'bold'
								color= 'cotizame'
							/>
						</View>
						<LabelText
							text= 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit hic, maiores odio rerum voluptate nesciunt illum! Error molestias libero tenetur, aspernatur quia qui ut reiciendis animi, ipsam nihil amet in?'
							weight= 'light'
							color= 'cotizame'
						/>
					</View>	
					<View style={styles.margin}>
						<View style={styles.baseMarginBottom}>
							<BodyText
								text= 'Clásulas'
								weight= 'bold'
								color= 'cotizame'
							/>
						</View>
						<LabelText
							text= "Favor de contestar esta solicitud antes de la 'Fecha limite de Cotización'.

	Todos los precios deberán ser Netos y totalizar la cotización. 
	Si se requiere de un anticipo, favor de indicar el porcentaje sobre el valor Neto. 

	Todos los cargos adicionales deberán anotarse en la propuesta. En caso de existir diferencias en a Descripción del Material o Servicio, Número de Parte o Catálogo, Unidad de Medida o presentación, favor de hacer mención en su oferta como observación. 
	Se consideraran los precios de los materiales o servicios D.A.P. o D.D.P Almacén de Cotemar en Cd. Del Carmen, incluidos en su propuesta, así como también cualquier impuesto o cargo especial. En caso de existir diferencias en a Descripción del Material o Servicio, Número de Parte o Catálogo, Unidad de Medida o presentación, favor de hacer mención en su oferta como observación. 
	En caso de presentar discrepancias en la entrada, nos reservamos el derecho de aceptar su material. 

	Favor de confirmar participación en la licitación o en su defecto enviar su declinación al correo del comprador indicado."
							weight= 'light'
							color= 'cotizame'
						/>
					</View>	
					<View style={styles.margin}>
						<View style={styles.baseMarginBottom}>
							<BodyText
								text= 'Condiciones de entrega'
								weight= 'bold'
								color= 'cotizame'
							/>
						</View>
						<LabelText
							text= 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit hic, maiores odio rerum voluptate nesciunt illum! Error molestias libero tenetur, aspernatur quia qui ut reiciendis animi, ipsam nihil amet in?'
							weight= 'light'
							color= 'cotizame'
						/>
					</View>	
					<Divider
						marginHorizontal
						marginTop
					/>
					<View style={styles.margin}>
						<PrimaryBtn 
							text= 'Aceptar y continuar'
							colorBckg= 'blue'
							colorTxt= 'white'
							onPress= {() => this.props.navigation.navigate('DashboardScreen')}
						/>
					</View>
				</ScrollView>
			</View>
		);
	}
}


const data = [{
		id: 133718,
		name: 'Motores de Helicóptero Modelo H1337-B',
	}, {
		id: 133719,
		name: 'Motores de Helicóptero Modelo H1337-B',
	}, {
		id: 133720,
		name: 'Motores de Helicóptero Modelo H1337-B',
	}, {
		id: 133721,
		name: 'Motores de Helicóptero Modelo H1337-B',
}]