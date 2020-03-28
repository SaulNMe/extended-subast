import React, { Component } from 'react';
import {
	View,
	Text,
	FlatList
} from 'react-native';
import styles from './OrderItemSheetsListScreenStyle';
import Lines from 'cotizame-native/app/components/Lines';
import EntryCard from 'cotizame-native/app/components/EntryCard';
import HesContainer from 'cotizame-native/app/containers/HesContainer';
export default class OrderItemSheetsListScreen extends Component {	
	static navigationOptions = {
		header: null
	}
	state = {
		order: this.props.navigation.state.params.item
	}
	renderItemEntry = ({item}) => (
		<View style={[styles.container]}>
			<EntryCard 
				title= {String(item.id)}
				entryDate= {item.date}
				entryHour= {item.hour}
				quantity= {item.stock}
				amount= {item.price}
			/>
		</View>
	)
	renderItem = ({hes}) => (
		<EntriesContainer
			id='EntryId'
			orderId={hes.Order}
			position={hes.PositionOrder}
			hes={item.HES}
			renderItem={this.renderItem}
		/>
	)
	render() {
		return (
			<View style={[styles.container]}>
				<HesContainer 
					entryCardStyle={ [styles.container] }
					labelStyle={[styles.smallMarginBottom, styles.margin]}
				/>
			</View>
		);
	}
}