import React, { Component } from 'react';
import {
	View,
	Text,
} from 'react-native';
import PropTypes from 'prop-types';

import { connect } from "react-redux";
import ApiListContainer from 'cotizame-native/app/containers/ApiListContainer';
import { 
	getCategories, 
	getIsRefreshingCategories,
	getErrorCategories,
	getRequisitions
} from "cotizame-native/app/reducers";
import { 
	fetchCategoriesBatch, 
	reloadCategories,
	resetCategories
} from "cotizame-native/app/actions/CategoriesActions";
import {
	resetPagination,
} from "cotizame-native/app/actions/RequisitionsActions";
import NavigationService from 'cotizame-native/app/services/NavigationService.js';

class CategoriesListContainer extends Component {	
	onPress = (item) => {
		this.props.resetPagination();
		NavigationService.navigate('CategoryListScreen', {item: item});
	};

	render() {
		return (
			<ApiListContainer
				data={this.props.categories}
				keyExtractor={categories => String(categories.CategoryId)}
				loadData={this.props.fetchCategoriesBatch}
				onRefresh={this.props.reloadCategories}
				header={this.props.header}
				ItemSeparatorComponent={this.props.ItemSeparatorComponent}
				renderItem={({item}) => this.props.renderItem(item, this.onPress)}
				ListFooterComponent={this.props.ListFooterComponent}
				error={this.props.error}
				onEndReached={this.props.fetchCategoriesBatch}
				isRefreshing={this.props.isRefreshing}
			/>
		);
	}
}

mapStateToProps = state => ({
	requisitions: (size = null, category = null) => getRequisitions(state, size, category),
	categories: getCategories(state),
	isRefreshing: getIsRefreshingCategories(state),
	error: getErrorCategories(state)
})

CategoriesListContainer.propTypes = {
}

CategoriesListContainer.defaultProps = {
}

export default connect(
	mapStateToProps,
	{
		fetchCategoriesBatch,
		reloadCategories,
		resetPagination, 
		resetCategories
	}
)(CategoriesListContainer);
