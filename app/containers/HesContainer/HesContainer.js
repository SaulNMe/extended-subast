import React, { Component } from 'react';
import {
	View,
	Text,
} from 'react-native';

import ApiListContainer from 'cotizame-native/app/containers/ApiListContainer';
import { fetchHes, fetchHesBatch, reloadHes } from 'cotizame-native/app/actions/HesActions';

import { connect } from "react-redux";
import { 
	getCurrentOrderId,
	getHes,
	getIsRefreshingHes,
	getErrorHes, 
	getEntries,
	getErrorEntries,
	getIsRefreshingEntries,
	getIsLoadingEntries
} from "cotizame-native/app/reducers";

import EntryCard from 'cotizame-native/app/components/EntryCard';
import ApiMapContainer from 'cotizame-native/app/containers/ApiMapContainer';
import { fetchEntriesBatch } from 'cotizame-native/app/actions/EntriesActions';
import EmptyState from 'cotizame-native/app/components/EmptyState';
import LabelText from 'cotizame-native/app/components/LabelText';

class HesContainer extends Component {	


	renderItemEntry = (item) => (
		<View style={this.props.entryCardStyle}>
			<EntryCard 
				title= {String(item.EntryId)}
				entryDate= {moment(item.ReceptionDate).format('LL')}
				entryHour= {item.ReceptionHour}
				quantity= {item.QuantityReceived + ' ' + item.UnitMeasurement}
				amount= {String(item.Amount)}
			/>
		</View>
	)

	renderItem = ({item}) => {
		return(
			<View>
				<View style={this.props.labelStyle}>
					<LabelText
						text={' Hes: ' + item.HES}
						color='darker'
						weight='bold'
					/>
				</View>
				<EmptyState /> 
				{
					// <ApiMapContainer 
					// 	id={'EntryId'}
					// 	loadData={this.props.fetchEntriesBatch}
					// 	data={this.props.entries.filter( item => item.)}
					// 	renderItem={this.props.renderItemEntry}
					// 	isLoading={this.props.isLoading}
					// 	error={this.props.error}
					// />	
				}
			</View>
		)}

	render() {
		return (
			<ApiListContainer
				data={this.props.hes}
				keyExtractor={hes => String(hes.HES)}
				loadData={() => this.props.fetchHesBatch(this.props.current.OrderId, this.props.current.Position)}
				onRefresh={this.props.reloadHes}
				renderItem={this.renderItem}
				header={this.props.header}
				ListFooterComponent={this.props.ListFooterComponent}
				onEndReached={this.fetchHesBatch}
				error={String(this.props.error)}
				isRefreshing={this.props.isRefreshing}
			/>
		);
	}
}

mapStateToProps = state => ({
	hes: getHes(state),
	isRefreshing: getIsRefreshingHes(state),
	error: getErrorHes(state),
	current: getCurrentOrderId(state),
	entries: getEntries(state),
	errorEntries: getErrorEntries(state),
	isRefreshingEntries: getIsRefreshingEntries(state),
	isLoading: getIsLoadingEntries(state),
})


export default connect(
	mapStateToProps,
	{
		fetchHesBatch,
		reloadHes,
		fetchEntriesBatch
	}
)(HesContainer);
