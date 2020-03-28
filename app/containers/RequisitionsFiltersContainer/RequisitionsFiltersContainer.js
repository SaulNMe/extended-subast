import React, { Component } from 'react';

import { connect } from "react-redux";

import { setRequisitionFilters, reloadRequisitions } from "cotizame-native/app/actions/RequisitionsActions";
import ReqModalFilter from 'cotizame-native/app/components/ReqModalFilter';
import PropTypes from 'prop-types';
import { getRequisitionsFilters } from "cotizame-native/app/reducers";


class RequisitionsFiltersContainer extends Component {	

	setParams = (params = {}) => {
		this.props.onClose();
		this.props.setRequisitionFilters(params);
		this.props.reloadRequisitions();
	}

	render() {
		return(
			<ReqModalFilter
				close={this.props.onClose} 
				setParams={this.setParams}
				currentFilters={this.props.currentFilters}
			/>
		);
		
	}
}

mapStateToProps = state => ({
	currentFilters: getRequisitionsFilters(state)
})

RequisitionsFiltersContainer.propTypes = {
	onClose: PropTypes.func,
}

RequisitionsFiltersContainer.defaultProps = {
	onClose: () => {},
}

export default connect(
	mapStateToProps,
	{
		setRequisitionFilters,
		reloadRequisitions
	}
)(RequisitionsFiltersContainer);
