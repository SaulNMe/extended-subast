import React, { Component } from 'react';
import {
	View,
	Text,
} from 'react-native';
import PropTypes from 'prop-types';


import { connect } from "react-redux";
import ApiListContainer from 'cotizame-native/app/containers/ApiListContainer';
import { 
	getOrders,
	getIsRefreshingOrders,
	getErrorOrders
} from "cotizame-native/app/reducers";
import Divider from 'cotizame-native/app/components/Divider';
import Spacer from 'cotizame-native/app/components/Spacer';
import { fetchOrdersBatch, reloadOrders } from "cotizame-native/app/actions/OrdersActions";
import { reloadOrderId, resetPagination, resetOrderId } from "cotizame-native/app/actions/OrderIdActions";
import NavigationService from 'cotizame-native/app/services/NavigationService.js';

class OrdersListContainer extends Component {	
	
	onPress = (item) => {
		this.props.resetOrderId();
		this.props.resetPagination();
		NavigationService.navigate('OrderDetailScreen', {item: item});
	};

	itemSeparator = () => (
		<Divider 
			marginVertical
		/>
	);

	spacer = () => (
		<Spacer />
	);

	render() {
		return (
			<ApiListContainer
				data={this.props.orders}
				keyExtractor={orders => String(orders.OrderId)}
				loadData={this.props.fetchOrdersBatch}
				onRefresh={this.props.reloadOrders}
				header={this.spacer}
				ItemSeparatorComponent={this.itemSeparator}
				renderItem={({item}) => this.props.renderItem(item, this.onPress)}
				ListFooterComponent={this.spacer}
				error={this.props.error}
				onEndReached={() => this.props.fetchOrdersBatch()}
				isRefreshing={this.props.isRefreshing}
			/>
		);
	}
}

mapStateToProps = state => ({
	orders: getOrders(state),
	isRefreshing: getIsRefreshingOrders(state),
	error: getErrorOrders(state),
})

OrdersListContainer.propTypes = {
}

OrdersListContainer.defaultProps = {
}

export default connect(
	mapStateToProps,
	{
		fetchOrdersBatch,
		reloadOrders,
		reloadOrderId,
		resetPagination,
		resetOrderId
	}
)(OrdersListContainer);
