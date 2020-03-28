import React, { Component } from 'react';
import {
	View,
	TouchableOpacity,
	StatusBar,
	Modal,
	SafeAreaView
} from 'react-native';

import styles from './OrdersScreenStyle';
import OrdersCardContent from 'cotizame-native/app/components/OrdersCardContent';
import AlertButton from 'cotizame-native/app/components/AlertButton';
import AlertIconContainer from 'cotizame-native/app/containers/AlertIconContainer';
import TitleText from 'cotizame-native/app/components/TitleText';
import Divider from 'cotizame-native/app/components/Divider';
import OrdersSearchContainer from 'cotizame-native/app/containers/OrdersSearchContainer';
import OrdersListContainer from 'cotizame-native/app/containers/OrdersListContainer';
import OrdersFiltersContainer from 'cotizame-native/app/containers/OrdersFiltersContainer';
import Local from 'cotizame-native/app/services/Local';

export default class OrdersScreen extends Component {
	state = {
		orderNumber: '',
		modalVisible: false,
		params: {}
	}

	onSearch = (text) => this.setState({
		orderNumber: text
	})

	setModalVisible(visible) {
		this.setState({modalVisible: visible});
	}
	
	renderItem = (item, onPress) => {
		return (
			<TouchableOpacity 
				style={[styles.marginHorizontal]}
				onPress={() => onPress(item)}
				activeOpacity={.5}
			>
				<OrdersCardContent
					title= {item.Order}
					concepts= {item.concepts}
					deliveryDate= {item.DocumentDate} 
					amount= {String(item.Total)}
					tag={String(item.Status) === '1'? 'Completado':'Incompleto'}
					/>
			</TouchableOpacity>
		)}
	render () {
		return (
			<SafeAreaView style={[styles.container]}>
				<StatusBar barStyle="dark-content"/>
				<View style={[styles.row, styles.alignItemsCenter, styles.baseMarginTop, styles.statusBarSpace, styles.marginBottom]}>
					<View style={[styles.flex1, styles.marginHorizontal]}>
						<TitleText 
							text={Local.get('ordersScreen.header')}
							color='cotizame'
							weight='bold'
						/>
					</View>
					<View style={styles.marginHorizontal}>
						<AlertIconContainer navigation={this.props.navigation} />
					</View>
				</View>
				<Modal
					animationType='slide'
					transparent={false}
					visible={this.state.modalVisible}
					onRequestClose={() => {}}
				>	
					<OrdersFiltersContainer
						onClose={() => this.setModalVisible(!this.state.modalVisible)}
					/>
				</Modal>
				<OrdersSearchContainer 
					onIconPress={() => this.setModalVisible(true)}
				/>
				<OrdersListContainer
					style={[styles.marginHorizontal]}
					renderItem={this.renderItem}
				/>
			</SafeAreaView>
		);
	}
}
