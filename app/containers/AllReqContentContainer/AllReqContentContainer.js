import React, { Component } from 'react';
import {
	View,
	Text,
} from 'react-native';

import { connect } from "react-redux";
import { fetchRequisitionId } from "cotizame-native/app/actions/RequisitionIdActions";
import { fetchRequisitionQuotationBatch } from "cotizame-native/app/actions/RequisitionQuotationActions";
import AllReqContent from 'cotizame-native/app/components/AllReqContent';
import { 
	getRequisitions,
	getRequisitionQuotation,
	getIsLoadingRequisitions,
	getIsLoadingRequisitionQuotation,
	getErrorRequisitions,
	getErrorRequisitionQuotation
} from "cotizame-native/app/reducers";
import EmptyState from 'cotizame-native/app/components/EmptyState';
import ErrorState from 'cotizame-native/app/components/ErrorState';
import HeaderNav from 'cotizame-native/app/components/HeaderNav';

import BackBtn from 'cotizame-native/app/components/BackBtn';

class AllReqContentContainer extends Component {	

	componentDidMount(){
		this.props.fetchRequisitionId(this.props.item.SolpedId? this.props.item.SolpedId:this.props.item.RequisitionId);
		this.props.fetchRequisitionQuotationBatch(this.props.item.SolpedId? this.props.item.SolpedId:this.props.item.RequisitionId);
	}

	backHeader = () => (
		<HeaderNav
			headerLeft={
				<BackBtn
					navigation={this.props.navigation}
					backLabel
				/>
			}
		/>
	)

	render() {
		let isSubscribed = false;
		let hasPendigRequest = false;
		let offerId = [];
		if(this.props.isLoadingRequisition || this.props.isLoadingQuotation) return (
			<View style={{height: '100%', width:'100%'}}>
				{this.backHeader()}
				<EmptyState isLoading/>
			</View>
		);
		if(this.props.errorRequisition != '' || this.props.errorQuotation != '' ) return (
			<View style={{height: '100%', width:'100%'}}>
				{this.backHeader()}
				<ErrorState/>
			</View>
		);
		if(JSON.stringify(this.props.quotation) === '[]' || JSON.stringify(this.props.requisition) === '{}') return (
			<View style={{height: '100%', width:'100%'}}>
				{this.backHeader()}
				<EmptyState/>
			</View>
		);
		return (
			<AllReqContent
				quotation={this.props.quotation}
				requisition={{...this.props.item, ...this.props.requisition}}
				isMaterial={this.props.item.PositionType === 'M'? true:false}
				navigation={this.props.navigation}
			/>
		);
	}
}



mapStateToProps = state => ({
	requisition: state.RequisitionId.requisitionsId,
	quotation: getRequisitionQuotation(state),
	isLoadingRequisition: state.RequisitionId.isLoading,
	isLoadingQuotation: getIsLoadingRequisitionQuotation(state),
	errorRequisition: state.RequisitionId.error,
	errorQuotation: getErrorRequisitionQuotation(state),
});

export default connect(mapStateToProps, {
	fetchRequisitionId,
	fetchRequisitionQuotationBatch
})(AllReqContentContainer);


