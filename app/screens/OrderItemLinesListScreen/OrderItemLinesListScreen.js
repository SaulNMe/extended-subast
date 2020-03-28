import React, { Component } from 'react';
import {
	View
} from 'react-native';
import styles from './OrderItemLinesListScreenStyle';
import LineOrderListContainer from 'cotizame-native/app/containers/LineOrderListContainer';

export default class OrderItemLinesListScreen extends Component {
	static navigationOptions = {
		header: null
	}

	render() {
		return (
			<View style={[styles.container]}>
				<LineOrderListContainer style={[styles.container]} />
			</View>
		);
	}
}