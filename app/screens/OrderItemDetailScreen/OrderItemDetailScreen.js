import React, { Component } from 'react';
import {
	View,
	Text,
	FlatList,
	StyleSheet
} from 'react-native';

import styles from './OrderItemDetailScreenStyle';
import SubtitleText from 'cotizame-native/app/components/SubtitleText';
import LabelText from 'cotizame-native/app/components/LabelText';
import SmallText from 'cotizame-native/app/components/SmallText';
import SimpleCard from 'cotizame-native/app/components/SimpleCard';
import EntryCard from 'cotizame-native/app/components/EntryCard';
import Lines from 'cotizame-native/app/components/Lines';
import PositionDisplayDetail from 'cotizame-native/app/components/PositionDisplayDetail';
import TagItem from 'cotizame-native/app/components/TagItem';
import SegmentedControlOffersTab from 'cotizame-native/app/components/SegmentedControlOffersTab';
import Divider from 'cotizame-native/app/components/Divider';
import HeaderNav from 'cotizame-native/app/components/HeaderNav';
import BackBtn from 'cotizame-native/app/components/BackBtn';
import OrderCardDescription from 'cotizame-native/app/components/OrderCardDescription';
import Local from 'cotizame-native/app/services/Local';
import EntriesContainer from 'cotizame-native/app/containers/EntriesContainer';
import moment from 'moment';

export default class OrderItemDetailScreen extends Component {

	state = {
		item: this.props.navigation.state.params.item,
	}
	static navigationOptions = {
		header: null
	}

	renderItem = ({item}) => (
		<View style={[styles.container]}>
			<EntryCard 
				title= {String(item.EntryId)}
				entryDate= {moment(item.ReceptionDate).format('LL')}
				entryHour= {item.ReceptionHour}
				quantity= {item.QuantityReceived + ' ' + item.UnitMeasurement}
				amount= {String(item.Amount)}
			/>
		</View>
	)
	render () {
		return (
			<View style={[styles.container]}>
				<HeaderNav
					headerLeft={
						<BackBtn
							navigation={this.props.navigation}
							backLabel
						/>
					}
				/>
				<View style={[styles.marginHorizontal]}>
					<OrderCardDescription
						title={(this.state.item.BriefText)}
						position={this.state.item.Position}
						creation={this.state.item.CreationDate}
						subtotal={this.state.item.NetPrice}
						tag='Completado'
					/>
					<LabelText
						text={Local.get('orderItemDetailScreen.entries')}
						weight='medium'
					/>
				</View>
				<EntriesContainer
					id='EntryId'
					orderId={this.state.item.OrderId}
					position={this.state.item.Position}
					renderItem={this.renderItem}
				/>
			</View>
		);
	}
}
