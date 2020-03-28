import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Button,
	FlatList,
	ScrollView,
	RefreshControl
} from 'react-native';

import styles from './OrderDetailScreenStyle';
import OrdersCardContent from 'cotizame-native/app/components/OrdersCardContent';
import BottomDrawer from 'cotizame-native/app/components/BottomDrawer';
import PrimaryBtn from 'cotizame-native/app/components/PrimaryBtn';
import BodyText from 'cotizame-native/app/components/BodyText';
import LabelText from 'cotizame-native/app/components/LabelText';
import Divider from 'cotizame-native/app/components/Divider';

import { getOrderId, getOrderIdClear } from 'cotizame-native/app/actions/OrderIdActions';
import { connect } from 'react-redux';
import Local from 'cotizame-native/app/services/Local';

import EmptyState from 'cotizame-native/app/components/EmptyState';
import ErrorState from 'cotizame-native/app/components/ErrorState';
import HeaderNav from 'cotizame-native/app/components/HeaderNav';
import BackBtn from 'cotizame-native/app/components/BackBtn';
import OrderIdListContainer from 'cotizame-native/app/containers/OrderIdListContainer';

export default class OrderDetailScreen extends Component {

	static navigationOptions = {
		header: null
	}
	
	render () {
		const { navigation } = this.props;
    	const item = navigation.getParam('item', {});
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
				<View style={[styles.marginHorizontal]}>
					<OrdersCardContent
						title={String(item.Order)}
						deliveryDate={item.DocumentDate}
						amount={String(item.Total)}
						tag='Completado'
					/>
				</View>
				<View style={styles.margin}>
					<BodyText 
						text={Local.get('ordersScreen.positions')}
						weight='medium'
					/>
				</View>
				<OrderIdListContainer
					style={styles.marginHorizontal}
					orderId={item.OrderId}
					ItemSeparatorComponent={() => 
						<Divider 
							marginVertical
						/>
					}
					header = { () => <View style={styles.baseMarginTop}/>}
					ListFooterComponent = { () => <View style={styles.baseMarginTop}/>}
				/>
			</View>
		);
	}
}