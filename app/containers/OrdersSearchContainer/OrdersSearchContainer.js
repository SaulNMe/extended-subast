import React, { Component } from 'react';

import { connect } from "react-redux";

import { setOrdersSearch, reloadOrders } from "cotizame-native/app/actions/OrdersActions";
import { getOrdersSearch } from "cotizame-native/app/reducers";
import PropTypes from 'prop-types';
import SearchInput from 'cotizame-native/app/components/SearchInput';


class OrdersSearchContainer extends Component {	

	onSearch = (text) => {
		this.props.setOrdersSearch(text);
		this.props.reloadOrders();
	}

	render() {
		return(
			<SearchInput 
				value={this.props.searchText}
				onSearch={this.onSearch}
				onIconPress={this.props.onIconPress}
			/>
		);
		
	}
}


mapStateToProps = state => ({
	searchText: getOrdersSearch(state)
})

OrdersSearchContainer.propTypes = {
	onIconPress: PropTypes.func
}

OrdersSearchContainer.defaultProps = {
	onIconPress: () => {},
}

export default connect(
	mapStateToProps,
	{
		setOrdersSearch,
		reloadOrders
	}
)(OrdersSearchContainer);
