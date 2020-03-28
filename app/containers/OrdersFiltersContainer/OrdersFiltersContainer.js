import React, { Component } from 'react';

import { connect } from "react-redux";

import { setOrdersFilters, reloadOrders } from "cotizame-native/app/actions/OrdersActions";
import OrderModalFilter from 'cotizame-native/app/components/OrderModalFilter';
import PropTypes from 'prop-types';
import moment from 'moment';
import { getOrdersFilters } from "cotizame-native/app/reducers";


class OrdersFiltersContainer extends Component {	

	setParams = (params = {}) => {
		this.props.onClose();
		this.props.setOrdersFilters(params);
		this.props.reloadOrders();
	}

	render() {
		return(
			<OrderModalFilter
				close={this.props.onClose}
				setParams={this.setParams}
				currentFilters={this.props.currentFilters}
			/>
		);
		
	}
}

mapStateToProps = state => ({
	currentFilters: getOrdersFilters(state)
})

OrdersFiltersContainer.propTypes = {
	onClose: PropTypes.func,
}

OrdersFiltersContainer.defaultProps = {
	onClose: () => {}
}

export default connect(
	mapStateToProps,
	{
		setOrdersFilters,
		reloadOrders
	}
)(OrdersFiltersContainer);
