import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';

import styles from './FilterSearchScreenStyle';
import HeaderNav from 'cotizame-native/app/components/HeaderNav';
import BackBtn from 'cotizame-native/app/components/BackBtn';
import BodyText from 'cotizame-native/app/components/BodyText';
import InlineBodyText from 'cotizame-native/app/components/InlineBodyText';
import InlineSwitch from 'cotizame-native/app/components/InlineSwitch';
import BottomDrawer from 'cotizame-native/app/components/BottomDrawer';
import PrimaryBtn from 'cotizame-native/app/components/PrimaryBtn';
import SecondaryBtn from 'cotizame-native/app/components/SecondaryBtn';

export default class FilterSearchScreen extends Component {
	static navigationOptions = {
		header: null
	}
	state = {
		winning: false,
		completed: false,
		materials: false,
		services: false
	}
	handleReset = () => {
		this.setState({
			winning: false, 
			completed: false,
			materials: false,
			services: false
		})
	}
	render () {
		// const { navigation } = this.props;
		// const searchText = navigation.getParam('searchText', '');
		// const action = navigation.getParam('action', () => {});
		let searchText = '';
		const action = () => {};
		return (
			<View style={[styles.bgContainer, styles.whiteBg]}>
				<HeaderNav
					headerLeft={
						<BackBtn
							navigation={this.props.navigation}
							backLabel
						/>
					}
				/>
				<View style={[styles.flex1, styles.marginHorizontal]}>
					<BodyText
						text='Busca entre mis Ofertas'
						color='cotizame'
						weight='bold'
					/>
					<View style={styles.marginHorizontal}>
						<View style={styles.marginVertical}>
							<BodyText
								text='Por fecha'
								color='main'
								weight='bold'
							/>
						</View>
						<InlineBodyText
							leftText='Desde'
							rightText='10 de Agosto 2018'
							colorLeft='main'
							colorRight='blue'
							hasIcon
						/>
						<InlineBodyText
							leftText='Hasta'
							rightText='18 de Agosto 2018'
							colorLeft='main'
							colorRight='blue'
							hasIcon
						/>
						<View style={styles.marginVertical}>
							<BodyText
								text='Por Status'
								color='main'
								weight='bold'
							/>
						</View>
						<InlineSwitch
							value={this.state.winning}
							title='Ganando'
							onPress={(value)=> this.setState({winning: value})}
						/>
						<InlineSwitch
							value={this.state.completed}
							title='Completadas'
							onPress={(value)=> this.setState({completed: value})}
						/>
						<View style={styles.marginVertical}>
							<BodyText
								text='Por tipo de partida'
								color='main'
								weight='bold'
							/>
						</View>
						<InlineSwitch
							value={this.state.materials}
							title='Materiales'
							onPress={(value)=> this.setState({materials: value})}
						/>
						<InlineSwitch
							value={this.state.services}
							title='Servicios'
							onPress={(value)=> this.setState({services: value})}
						/>
					</View>
					<BottomDrawer
						Divider
						left={
							<SecondaryBtn
								text='Reiniciar'
								onPress={this.handleReset}
							/>
						}
						right={
							<PrimaryBtn
								text='Buscar'
							/>
						}
					/>
				</View>
			</View>
		);
	}
}
