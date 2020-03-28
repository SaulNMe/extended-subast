import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Button
} from 'react-native';

import styles from './DeclineOfferScreenStyle';
import HugeText from 'cotizame-native/app/components/HugeText';
import BottomDrawer from 'cotizame-native/app/components/BottomDrawer';
import PrimaryBtn from 'cotizame-native/app/components/PrimaryBtn';
import SelectList from 'cotizame-native/app/components/SelectList';
import HelpItem from 'cotizame-native/app/components/HelpItem';

export default class DeclineOfferScreen extends Component {
	items = [{
		label: 'No, no quiero declinar', 
		value: 'no'
	},{
		label: 'Sí, quiero declinar mi oferta',
		value: 'yes'
	}]

	constructor (props) {
		super(props);
		this.state = {
			selected: 'no'
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
				<HugeText
					text='¿Estás seguro que quieres declinar tu oferta?'
				/>
				<SelectList 
					selected={this.state.selected}
					items={this.items}
					onSelect={(value) => {this.handleSelect(value)}}
				/>
				<HelpItem 
					text='Si declinas, tu rating de proveedor bajará de 8.2 a 7.2. Esto podría hacer más difícil que ganes pedidos'
				/>

				<BottomDrawer
					right={
						<PrimaryBtn 
								text='Continuar'
								action
								onPress={() => { this.props.navigation.navigate('ReqDetailScreen') }}
						/>
					}
				/>
			</View>
		);
	}
}
