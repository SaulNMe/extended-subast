import React, { Component } from 'react';
import {
	View,
	Text,
} from 'react-native';
import PropTypes from 'prop-types';


import { connect } from "react-redux";
import ApiMapContainer from 'cotizame-native/app/containers/ApiMapContainer';
import { 
	getEndsToday, 
	getIsLoadingEndsToday,
	getEndsTodayError
} from "cotizame-native/app/reducers";
import { fetchEndsTodayBatch, reloadEndsToday } from "cotizame-native/app/actions/EndsTodayActions";

class EndsTodayListSizeContainer extends Component {	
	
	
	render() {
		return (
			<ApiMapContainer 
				id={this.props.id}
				loadData={this.props.fetchEndsTodayBatch}
				data={this.props.endsToday(this.props.size)}
				renderItem={this.props.renderItem}
				ItemSeparatorComponent={this.props.ItemSeparatorComponent}
				isLoading={this.props.isLoading}
				error={this.props.error}

			/>
		);
	}
}


mapStateToProps = state => ({
	endsToday: (size = null) => getEndsToday(state, size),
	isLoading: getIsLoadingEndsToday(state),
	error: getEndsTodayError(state)
})

EndsTodayListSizeContainer.propTypes = {
}

EndsTodayListSizeContainer.defaultProps = {
}

export default connect(
	mapStateToProps,
	{
		fetchEndsTodayBatch,
		reloadEndsToday
	}
)(EndsTodayListSizeContainer);
