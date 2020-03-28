import React, { Component } from 'react';
import { 
	Text,
	View,
} from 'react-native';

import SegmentedControlOffersTab from 'cotizame-native/app/components/SegmentedControlOffersTab';
import Local from 'cotizame-native/app/services/Local';
import styles from './OrderItemTabStyle';

import HeaderNav from 'cotizame-native/app/components/HeaderNav';
import BackBtn from 'cotizame-native/app/components/BackBtn';
import OrderItemHeaderContainer from 'cotizame-native/app/containers/OrderItemHeaderContainer';
import NavigationService from 'cotizame-native/app/services/NavigationService.js';

export default class OrderItemTab extends Component {
	state = {
		order: {}
	}	
	onRenderContainer = (order) =>{
		this.setState({order});
	}
	render() {
		let routeName = this.props.navigation.state.routes[this.props.navigation.state.index].routeName;
		return (
			<View style={[styles.mainContainer]}>
				<HeaderNav
					headerLeft={
						<BackBtn
							navigation={this.props.navigation}
							backLabel
						/>
					}
				/>
				<View style={styles.whiteBg}>
					<View style={[styles.marginHorizontal]}>
						<OrderItemHeaderContainer onRender={this.onRenderContainer}/>
					</View>
					<View style={[styles.whiteBg, styles.smallMarginTop]}>
						<SegmentedControlOffersTab 
							leftText={Local.get('OrderItemTab.left')}
							leftName={'OrderItemSheetsListScreen'}
							rightText={Local.get('OrderItemTab.right')}
							rightName={'OrderItemLinesListScreen'}
							leftAction={() => this.props.navigation.navigate('OrderItemSheetsListScreen', {order: this.state.order})}
							rightAction={() => this.props.navigation.navigate('OrderItemLinesListScreen', {order: this.state.order})}
							current={routeName}
						/>
					</View>
				</View>
			</View>
		);
  }
}