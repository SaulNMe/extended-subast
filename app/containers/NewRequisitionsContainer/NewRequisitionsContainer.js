import React, { Component } from 'react';
import {
	View,
	Text,
} from 'react-native';
import PropTypes from 'prop-types';

import { connect } from "react-redux";
import ApiMapContainer from 'cotizame-native/app/containers/ApiMapContainer';
import { 
	getFeaturedRequisitions,
	getIsLoadingFeaturedRequisitions,
	getErrorFeaturedRequisitions
} from 'cotizame-native/app/reducers';
import { fetchFeaturedRequisitions } from 'cotizame-native/app/actions/FeaturedRequisitionsActions';
import Local from 'cotizame-native/app/services/Local';


class NewRequisitionsContainer extends Component {	

	render() {
		return (
			<ApiMapContainer
				id={this.props.id}
				loadData={this.props.fetchFeaturedRequisitions}
				data={this.props.feateuredRequisitions}
				renderItem={this.props.renderItem}
				ItemSeparatorComponent={this.props.ItemSeparatorComponent}
				isLoading={this.props.isLoading}
				error={this.props.error}
			/>
		);
	}
}

mapStateToProps = state => ({
	feateuredRequisitions: getFeaturedRequisitions(state),
	isLoading: getIsLoadingFeaturedRequisitions(state),
	error: getErrorFeaturedRequisitions(state),
})

export default connect(
	mapStateToProps,
	{
		fetchFeaturedRequisitions
	}
)(NewRequisitionsContainer);
