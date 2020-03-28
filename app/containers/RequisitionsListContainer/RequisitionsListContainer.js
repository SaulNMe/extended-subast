import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OfferItem from 'cotizame-native/app/components/OfferItem';
import Divider from 'cotizame-native/app/components/Divider';
import Spacer from 'cotizame-native/app/components/Spacer';
import { connect } from 'react-redux';
import ApiListContainer from 'cotizame-native/app/containers/ApiListContainer';
import { 
	getRequisitions,
	getIsRefreshingRequisitions,
	getErrorRequisitions
} from 'cotizame-native/app/reducers';
import { fetchRequisitionsBatch, reloadRequisitions } from 'cotizame-native/app/actions/RequisitionsActions';

class RequisitionsListContainer extends Component {	

	itemSeparatorComponent = () => (
		<Divider 
			marginVertical
		/>
	);
	Spacer = () => (
		<Spacer />
	)
 
	render() {
		return (
			<ApiListContainer
				data={this.props.favorites ? this.props.requisitions(true) : this.props.requisitions(null)}
				keyExtractor={requisition => String(requisition.RequisitionId)}
				renderItem={this.props.renderItem}
				header={this.props.header}
				ItemSeparatorComponent={this.props.noSeparator ? null : this.itemSeparatorComponent}
				loadData={() => this.props.fetchRequisitionsBatch(this.props.filtersOverride)}
				onRefresh={() => this.props.reloadRequisitions(this.props.filtersOverride)}
				onEndReached={() => this.props.fetchRequisitionsBatch(this.props.filtersOverride)}
				header={this.props.header}
				error={String(this.props.error)}
				isRefreshing={this.props.isRefreshing}
				ListFooterComponent = {this.Spacer}
			/>
		);
	}
}

mapStateToProps = state => ({
	requisitions: (hasFavorites)=> getRequisitions(state, null, null, hasFavorites),
	isRefreshing: getIsRefreshingRequisitions(state),
	error: getErrorRequisitions(state),
})

RequisitionsListContainer.propTypes = {
}

RequisitionsListContainer.defaultProps = {
}

export default connect( mapStateToProps, {
	fetchRequisitionsBatch,
	reloadRequisitions
})(RequisitionsListContainer);



