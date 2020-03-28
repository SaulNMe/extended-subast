import React, { Component } from 'react';
import {
	View,
	Text,
} from 'react-native';
import PropTypes from 'prop-types';


import { connect } from "react-redux";
import ApiListContainer from 'cotizame-native/app/containers/ApiListContainer';
import { 
	getOrderId,
	getIsRefreshingOrderId,
	getErrorOrderId
} from "cotizame-native/app/reducers";
import { fetchOrderIdBatch, reloadOrderId, currentOrderId } from "cotizame-native/app/actions/OrderIdActions";
import NavigationService from 'cotizame-native/app/services/NavigationService';
import PositionDisplay from 'cotizame-native/app/components/PositionDisplay';
import Spacer from 'cotizame-native/app/components/Spacer';
import { resetEntries } from 'cotizame-native/app/actions/EntriesActions';
import { fetchHesBatch, resetHes } from "cotizame-native/app/actions/HesActions";

class OrderIdListContainer extends Component {	

	spacer = () => (
		<Spacer />
	);

	renderItem = ({item}) => { 
		return(
			<View style={this.props.style}>
				<PositionDisplay 
					label= {item.Position}
					title= {item.BriefText}
					amount={String(item.NetPrice)}
					onPress={() => {
						this.props.resetHes();
						this.props.resetEntries();
						let screen = item.PositionType === 'S' ? 'OrderItemTabNavigator' : 'OrderItemDetailScreen' 
						this.props.currentOrderId(item.Position);
						NavigationService.navigate(screen, { 
							item: item,
						});
					}}
				/>
			</View>
		)
	}

	render() {
		return (
			<ApiListContainer
				data={this.props.orderIdData}
				keyExtractor={orderId => String(orderId.Position)}
				loadData={() => this.props.fetchOrderIdBatch(this.props.orderId)}
				onRefresh={() => this.props.reloadOrderId(this.props.orderId)}
				ItemSeparatorComponent={this.props.ItemSeparatorComponent}
				renderItem={this.renderItem}
				ListFooterComponent={this.spacer}
				error={String(this.props.error)}
				onEndReached={() => this.props.fetchOrderIdBatch(this.props.orderId)}
				isRefreshing={this.props.isRefreshing}
			/>
		);
	}
}

mapStateToProps = state => ({
	orderIdData: getOrderId(state),
	isRefreshing: getIsRefreshingOrderId(state),
	error: getErrorOrderId(state),
})

OrderIdListContainer.propTypes = {
}

OrderIdListContainer.defaultProps = {
}

export default connect(
	mapStateToProps,
	{
		fetchOrderIdBatch,
		reloadOrderId,
		currentOrderId,
		resetEntries,
		resetHes
	}
)(OrderIdListContainer);
