import React, { Component } from 'react';
import {
	View,
	Text,
	FlatList,
	TouchableOpacity,
	RefreshControl
} from 'react-native';
import styles from './EndsTodayListScreenStyle';
import HeaderNav from 'cotizame-native/app/components/HeaderNav';
import ReqItem from 'cotizame-native/app/components/ReqItem';
import Divider from 'cotizame-native/app/components/Divider';
import BackBtn from 'cotizame-native/app/components/BackBtn';
import TitleText from 'cotizame-native/app/components/TitleText';

import { connect } from 'react-redux';
import { getEndsToday, getEndsTodayClear } from 'cotizame-native/app/actions/EndsTodayActions';
import Local from 'cotizame-native/app/services/Local';
import EndsTodayListContainer from 'cotizame-native/app/containers/EndsTodayListContainer';
import { withNavigationFocus } from "react-navigation";

export default class EndsTodayListScreen extends Component {	
	static navigationOptions = {
		header: null
	}
	
	renderItem = ({ item }) => { 
		return( 
			<TouchableOpacity 
				style={[styles.marginHorizontal, styles.smallMarginVertical]}
				onPress={() => { this.props.navigation.navigate('RequisitionsDetailScreen', {item: item})}}
				activeOpacity={0.2}
			>
				<ReqItem 
					label= {Local.get('dashboardScreen.requisition') + item.Solped}
					title= {item.ShortDescription}
					price= {item.Offer === null ? '--' : item.Offer}
					url= {item.DriveId}
					expirationDatetime= {item.Validity}
					noMoreButton
				/>
			</TouchableOpacity>
		)
	}
	render() {
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
					
				<View style={[ styles.marginHorizontal]}>
					<TitleText
						text={Local.get('endsTodayListContainer.title')}
						color='cotizame'
						weight='bold'
					/>
				</View>
				<EndsTodayListContainer
					renderItem={this.renderItem}
					ItemSeparatorComponent={() => 
						<Divider 
							marginVertical
						/>
					}
					header = { () => <View style={styles.smallMarginTop}/>}
					ListFooterComponent = { () => <View style={styles.smallMarginTop}/>}
				/>
			</View>
		);
	}
}

