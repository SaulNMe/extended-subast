import React, { Component } from 'react';
import {
	View,
	Text,
} from 'react-native';
import PropTypes from 'prop-types';


import { connect } from "react-redux";
import ApiListContainer from 'cotizame-native/app/containers/ApiListContainer';
import { 
	getTenders,
	getIsRefreshingTenders,
	getErrorTenders
} from "cotizame-native/app/reducers";
import { fetchTendersBatch, reloadTenders } from "cotizame-native/app/actions/TendersActions";

class TendersListContainer extends Component {
	render() {
		return (
			<ApiListContainer
				data={this.props.tenders}
				keyExtractor={tenders => String(tenders.TenderId)}
				loadData={() => this.props.fetchTendersBatch(this.props.filtersOverride)}
				onRefresh={() => this.props.reloadTenders(this.props.filtersOverride)}
				header={this.props.header}
				ItemSeparatorComponent={this.props.ItemSeparatorComponent}
				renderItem={this.props.renderItem}
				ListFooterComponent={this.props.ListFooterComponent}
				error={String(this.props.error)}
				onEndReached={() => this.props.fetchTendersBatch(this.props.filtersOverride)}
				isRefreshing={this.props.isRefreshing}
			/>
		);
	}
}

mapStateToProps = state => ({
	tenders: getTenders(state),
	isRefreshing: getIsRefreshingTenders(state),
	error: getErrorTenders(state),
})

TendersListContainer.propTypes = {
}

TendersListContainer.defaultProps = {
}

export default connect(
	mapStateToProps,
	{
		fetchTendersBatch,
		reloadTenders
	}
)(TendersListContainer);
