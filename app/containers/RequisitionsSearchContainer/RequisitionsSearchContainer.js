import React, { Component } from 'react';

import { connect } from "react-redux";

import { setRequisitionsSearch, reloadRequisitions } from "cotizame-native/app/actions/RequisitionsActions";
import { getRequisitionsSearch } from "cotizame-native/app/reducers";
import PropTypes from 'prop-types';
import SearchInput from 'cotizame-native/app/components/SearchInput';


class RequisitionsSearchContainer extends Component {	

	onSearch = (text) => {
		this.props.setRequisitionsSearch(text);
		this.props.reloadRequisitions();
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
	searchText: getRequisitionsSearch(state)
})

RequisitionsSearchContainer.propTypes = {
	onIconPress: PropTypes.func
}

RequisitionsSearchContainer.defaultProps = {
	onIconPress: () => {},
}

export default connect(
	mapStateToProps,
	{
		setRequisitionsSearch,
		reloadRequisitions
	}
)(RequisitionsSearchContainer);
