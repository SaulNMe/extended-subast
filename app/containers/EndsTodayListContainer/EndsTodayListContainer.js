import React, { Component } from 'react';
import {
	View,
	Text,
} from 'react-native';
import PropTypes from 'prop-types';


import { connect } from "react-redux";
import ApiListContainer from 'cotizame-native/app/containers/ApiListContainer';
import { getEndsToday, getIsRefreshingEndsToday } from "cotizame-native/app/reducers";
import { fetchEndsTodayBatch, reloadEndsToday } from "cotizame-native/app/actions/EndsTodayActions";
import Local from 'cotizame-native/app/services/Local';

class EndsTodayListContainer extends Component {	

	render() {
		return (
			<ApiListContainer
				data={this.props.endsToday}
				keyExtractor={endsToday => String(endsToday.RequisitionId)}
				loadData={this.props.fetchEndsTodayBatch}
				onRefresh={this.props.reloadEndsToday}
				header={this.props.header}
				ItemSeparatorComponent={this.props.ItemSeparatorComponent}
				renderItem={this.props.renderItem}
				ListFooterComponent={this.props.ListFooterComponent}
				onEndReached={this.props.fetchEndsTodayBatch}
				isRefreshing={this.props.isRefreshing}
			/>
		);
	}
}

mapStateToProps = state => ({
	endsToday: getEndsToday(state),
	isRefreshing: getIsRefreshingEndsToday(state)
})

EndsTodayListContainer.propTypes = {
}

EndsTodayListContainer.defaultProps = {
}

export default connect(
	mapStateToProps,
	{
		fetchEndsTodayBatch,
		reloadEndsToday
	}
)(EndsTodayListContainer);
