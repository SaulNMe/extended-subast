import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';

import styles from './FavoritesScreenStyle';
import HugeText from 'cotizame-native/app/components/HugeText';
import LabelText from 'cotizame-native/app/components/LabelText';
import BodyText from 'cotizame-native/app/components/BodyText';
import SimpleCard from 'cotizame-native/app/components/SimpleCard';
import ReqItem from 'cotizame-native/app/components/ReqItem';
import HeaderNav from 'cotizame-native/app/components/HeaderNav';
import BackBtn from 'cotizame-native/app/components/BackBtn';
import Local from 'cotizame-native/app/services/Local';
import RequisitionsListContainer from 'cotizame-native/app/containers/RequisitionsListContainer';
import NavigationService from 'cotizame-native/app/services/NavigationService';

export default class FavoritesScreen extends Component {
	static navigationOptions = {
		header: null, 
	}
	renderItem = ({ item }) => (
		<SimpleCard
			onPress={() => { NavigationService.navigate('RequisitionsDetailScreen', {item: item})}}
		>
			<ReqItem
				label= {Local.get('dashboardScreen.requisition') + item.Solped}
				title= {item.ShortDescription}
				price= {String(item.BestPrice)}
				url= {item.DriveId}
				expirationDatetime= {item.Validity}
				noMoreButton
			/>
		</SimpleCard>
	);
	render () {
		return (
			<View style={styles.container}>
				<HeaderNav
					headerLeft={
						<BackBtn
							navigation={this.props.navigation}
							backLabel
						/>
					}
					statusBar={'dark-content'}
				/>
				<View style={styles.marginHorizontal}>
					<HugeText 
						text={Local.get('favoritesScreen.myFavorites')}
						weight='bold'
						color='darker'
					/>
					<LabelText 
						text={Local.get('favoritesScreen.subtitle')}
						color='dark'
						weight='regular'
					/>
				</View>
				<RequisitionsListContainer
					noSeparator
					filtersOverride={{getOnlyFavorites: true}}
					itemSeparatorComponent={this.itemSeparatorComponent}
					renderItem={this.renderItem}
				/>
			</View>
		);
	}
}
