import React, { Component } from 'react';
import {
	View,
	Text,
} from 'react-native';

import { connect } from "react-redux";
import TenderModalFilter from 'cotizame-native/app/components/TenderModalFilter';
import PropTypes from 'prop-types';

import { setTenderFilters, reloadTenders } from "cotizame-native/app/actions/TendersActions";
import { getTendersFilters } from "cotizame-native/app/reducers";


class TenderFiltersContainer extends Component {	

	setParams = (params = {}) => {
		this.props.onClose();
		this.props.setTenderFilters(params);
		this.props.reloadTenders();
	}

	render() {
		return(
			<TenderModalFilter
				close={this.props.onClose} 
				setParams={this.setParams}
				currentTenders={this.props.currentTenders}
			/>
		);
		
	}
}

mapStateToProps = state => ({
	currentTenders: getTendersFilters(state)
})

TenderFiltersContainer.propTypes = {
	onClose: PropTypes.func,
}

TenderFiltersContainer.defaultProps = {
	onClose: () => {},
}

export default connect(
	mapStateToProps,
	{
		setTenderFilters,
		reloadTenders
	}
)(TenderFiltersContainer);
