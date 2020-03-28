import React, { Component } from 'react';

import { connect } from "react-redux";

import { setTendersSearch, reloadTenders } from "cotizame-native/app/actions/TendersActions";
import { getTendersSearch } from "cotizame-native/app/reducers";
import PropTypes from 'prop-types';
import SearchInput from 'cotizame-native/app/components/SearchInput';


class TenderSearchContainer extends Component {	

	onSearch = (text) => {
		this.props.setTendersSearch(text);
		this.props.reloadTenders();
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
	searchText: getTendersSearch(state)
})

TenderSearchContainer.propTypes = {
	onIconPress: PropTypes.func
}

TenderSearchContainer.defaultProps = {
	onIconPress: () => {},
}

export default connect(
	mapStateToProps,
	{
		setTendersSearch,
		reloadTenders
	}
)(TenderSearchContainer);