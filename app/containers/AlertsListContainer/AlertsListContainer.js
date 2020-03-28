import React, { Component } from 'react';
import {
	View,
	Text,
} from 'react-native';
import PropTypes from 'prop-types';

import AlertItem from 'cotizame-native/app/components/AlertItem';
import NavigationService from 'cotizame-native/app/services/NavigationService.js';
import ApiService from 'cotizame-native/app/services/ApiService';

import ApiListContainer from 'cotizame-native/app/containers/ApiListContainer';
import { connect } from "react-redux";
import { getAlerts, getIsRefreshingAlerts, getErrorAlerts } from "cotizame-native/app/reducers";
import { fetchAlertsBatch, reloadAlerts } from "cotizame-native/app/actions/AlertsActions";

class AlertsListContainer extends Component {
	onPress(item){
		ApiService.putAlerts(item.AlertId);
		item.Type === 1 ? NavigationService.navigate('RequisitionsDetailScreen', {item: item}) : NavigationService.navigate('TendersDetailScreen', {item: item});
		this.props.reloadAlerts();
	}
	_renderItem = ({ item }) => {
		return (
			<View>
				<AlertItem 
					title= {item.Content}
					subtitle= {item.Title}
					seen={item.Confirmed}
					time= {item.RegisterDate}
					onPress={() => this.onPress(item)}
				/>
			</View>
		);
	}

	render() {
		return (
			<ApiListContainer
				data={this.props.alerts}
				keyExtractor={alert => String(alert.AlertId)}
				loadData={this.props.fetchAlertsBatch}
				onRefresh={this.props.reloadAlerts}
				renderItem={this._renderItem}
				header={this.props.header}
				ListFooterComponent={this.props.ListFooterComponent}
				onEndReached={this.fetchAlertsBatch}
				error={String(this.props.error)}
				isRefreshing={this.props.isRefreshing}
			/>
		);

	}
}

mapStateToProps = state => ({
	alerts: getAlerts(state),
	isRefreshing: getIsRefreshingAlerts(state),
	error: getErrorAlerts(state)
})

AlertsListContainer.propTypes = {
}

AlertsListContainer.defaultProps = {
}

export default connect(
	mapStateToProps,
	{
		fetchAlertsBatch,
		reloadAlerts
	}
)(AlertsListContainer);
