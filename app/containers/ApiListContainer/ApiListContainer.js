import React, { Component } from 'react';
import {
	FlatList,
	RefreshControl,
	View,
	Text
} from 'react-native';

import PropTypes from 'prop-types';
import EmptyState from 'cotizame-native/app/components/EmptyState';
import ErrorState from 'cotizame-native/app/components/ErrorState';
import ErrorComment from 'cotizame-native/app/components/ErrorComment';

export default class ApiListContainer extends Component {	

	componentDidMount () {
		this.loadData();
	}

	loadData = () => {
		this.props.loadData();
	}

	onEndReached = () => {
		this.loadData();
	}

	onRefresh = () => {
		this.props.onRefresh();
	}

	render() {
		return (
			<FlatList
				data={this.props.data}
				keyExtractor={this.props.keyExtractor}
				renderItem={this.props.renderItem}
				style={ this.props.isReverse && {  transform: [{ scaleY: -1 }] }}
				ListEmptyComponent={() =>{
					//if(this.props.comments != '') return (<Text>Hola</Text>);
					if(this.props.error != '') return (<ErrorState/>);
					if(!this.props.isRefreshing) return (<EmptyState />);
					return null;
				}}
				refreshControl={
					this.props.isCommentList && <RefreshControl
						refreshing={this.props.isRefreshing}
						onRefresh={this.onRefresh}
					/>
				}
				onEndReached={this.onEndReached}
				ListHeaderComponent={this.props.header}
				ListFooterComponent={this.props.ListFooterComponent}
				onEndReachedThreshold={this.props.onEndReachedThreshold}
				ItemSeparatorComponent={this.props.ItemSeparatorComponent}
			/>
		);	
	}
}

ApiListContainer.propTypes = {
	data: PropTypes.array,
	keyExtractor: PropTypes.func,
	error: PropTypes.string,
	isRefreshing: PropTypes.bool,
	loadData: PropTypes.func.isRequired,
	renderItem: PropTypes.func.isRequired,
	onEndReachedThreshold: PropTypes.number,
	onRefresh: PropTypes.func,
	isReverse: PropTypes.bool,
	isCommentList: PropTypes.bool,
	//header: PropTypes.func,
}

ApiListContainer.defaultProps = {
	data: [],
	error: '',
	isRefreshing: false,
	isReverse: false,
	isCommentList: true
	
	//header: {<View />}
}
