import React, { Component } from 'react';
import {
	View,
	Text,
} from 'react-native';

import { connect } from "react-redux";
import ApiListContainer from 'cotizame-native/app/containers/ApiListContainer';
import { 
	getEntries,
	getIsRefreshingEntries,
	getErrorEntries,
} from 'cotizame-native/app/reducers';

import { fetchEntriesBatch, reloadEntries } from 'cotizame-native/app/actions/EntriesActions';

class EntriesContainer extends Component {	
	render() {
		return (
			<ApiListContainer
				data={this.props.entries}
				keyExtractor={entry => String(entry.EntryId)}
				loadData={() => this.props.fetchEntriesBatch(this.props.orderId, this.props.position)}
				onRefresh={this.props.reloadEntries}
				renderItem={this.props.renderItem}
				header={this.props.header}
				ListFooterComponent={this.props.ListFooterComponent}
				onEndReached={this.props.fetchEntriesBatch(this.props.orderId, this.props.position)}
				error={String(this.props.error)}
				isRefreshing={this.props.isRefreshing}
			/>
		);
	}
}

mapStateToProps = state => ({
	entries: getEntries(state),
	error: getErrorEntries(state),
	isRefreshing: getIsRefreshingEntries(state),
})

export default connect(
	mapStateToProps,
	{
		reloadEntries,
		fetchEntriesBatch
	}
)(EntriesContainer);
