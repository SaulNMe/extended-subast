import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Button
} from 'react-native';

import styles from './CreateOfferPriceMaterialScreenStyle';
import HugeText from 'cotizame-native/app/components/HugeText';
import SelectList from 'cotizame-native/app/components/SelectList';
import BottomDrawer from 'cotizame-native/app/components/BottomDrawer';
import PrimaryBtn from 'cotizame-native/app/components/PrimaryBtn';
import HelpItem from 'cotizame-native/app/components/HelpItem';

export default class CreateOfferPriceMaterialScreen extends Component {
	items = [{
		label: 'Sí, es el mismo', 
		value: 'yes'
	},{
		label: 'No, estoy ofreciendo un material alternativo',
		value: 'no'
	}]

	constructor (props) {
		super(props);
		this.state = {
			selected: 'yes'
		}
	}

	handleSelect(value) {
		this.setState({
			selected: value
		})
	}

	render () {
		return (
			<View style={styles.container}>
				<View style={ styles.marginHorizontal}>
					<Text style={ [ styles.hugeText,styles.bold ] }>
						¿El material que ofreces es {' '} 
						<Text style={ [styles.hugeText, styles.bold, styles.highlight]}>
					     Motores de Helicóptero Modelo H1337-B
						</Text>
						?
					</Text>
				</View>
				<SelectList
					selected={this.state.selected}
					items={this.items}
					onSelect={(value) => {this.handleSelect(value)}}
				/>
				<HelpItem 
					text='lorem ipsum dolor si amet h ue hueh ueh ueheu hue hue uehu heu heu hueh ueh '
				/>
				<BottomDrawer
					right={
						<PrimaryBtn 
								text='Siguiente'
								action
								onPress={() => { this.props.navigation.navigate('CreateOfferPriceInformationScreen') }}
						/>
					}
				/>
			</View>
		);
	}
}
