import React, { Component } from 'react';
import {
	View,
	Text,
	ScrollView,
	StatusBar,
	TouchableOpacity,
	AsyncStorage,
	SafeAreaView
} from 'react-native';

import styles from './DashboardScreenStyle';
import TitleText from 'cotizame-native/app/components/TitleText';
import SubtitleText from 'cotizame-native/app/components/SubtitleText';
import BodyText from 'cotizame-native/app/components/BodyText';
import SmallText from 'cotizame-native/app/components/SmallText';
import ReqItem from 'cotizame-native/app/components/ReqItem';
import Divider from 'cotizame-native/app/components/Divider';
import NotificationCard from 'cotizame-native/app/components/NotificationCard';
import Graph from 'cotizame-native/app/components/Graph';

import Local from 'cotizame-native/app/services/Local';

import AlertIconContainer from 'cotizame-native/app/containers/AlertIconContainer';
import EndsTodayListSizeContainer from 'cotizame-native/app/containers/EndsTodayListSizeContainer';
import NotificationCardContainer from 'cotizame-native/app/containers/NotificationCardContainer';
import { withNavigationFocus } from "react-navigation";

export default class DashboardScreen extends Component {
	
	state = {
		jsonMe: [],
	};

	static navigationOptions = {
		header: null
	}

	componentDidMount(){
		this.getParams();
	}

	async getParams () {
		let me = await AsyncStorage.getItem('@me');
		let jsonMe = JSON.parse(me);
		this.setState({ jsonMe });
	}

	renderItem = (item) => (
		<TouchableOpacity 
			style={[styles.marginHorizontal, styles.smallMarginVertical]}
			onPress={() => { this.props.navigation.navigate('RequisitionsDetailScreen', {item: item})}}
			activeOpacity={0.2}
		>
			<ReqItem 
				label= {Local.get('dashboardScreen.requisition') + item.Solped}
				title= {item.ShortDescription}
				price= {String(item.BestPrice)}
				url= {item.DriveId}
				expirationDatetime= {item.Validity}
				noMoreButton
			/>
		</TouchableOpacity>
	)

	render () {
		return (
			<SafeAreaView style={[styles.flex1, styles.whiteBg]} >
				<View style={[styles.container]}>
					<StatusBar backgroundColor="transparent" barStyle="dark-content"/>
					<View style={[styles.row, styles.marginHorizontal, styles.baseMarginTop, styles.statusBarSpace, styles.alignItemsCenter]}>
						<View style={[styles.flex1, styles.smallMarginRight]}>
							<TitleText
								text={Local.get('dashboardScreen.hello') + this.state.jsonMe.FullName + '!'}
								color='cotizame'
								weight='bold'
							/>
							<BodyText
								text={Local.get('dashboardScreen.welcome')}
								color='subdued'
								weight='regular'
							/>
						</View>
						<AlertIconContainer navigation={this.props.navigation} />
					</View>
					<ScrollView>
						<Graph 
							width={375}
							height={300}
							data={[
								// {x:17,y:0},
								{x: 18, y: 1343.44},
								{x: 19, y: 643.44}, 
								{x: 20, y: 1643.44}, 
								{x: 21, y: 1343.44}, 
								{x: 22, y: 2643.44}, 
								{x: 23, y: 3133.32}, 
								{x: 24, y: 2566.23},
								{x: 25, y: 4001.12},
								{x: 26, y: 2801.12},
								{x: 27, y: 4401.12},
								{x: 28, y: 5001.12},
								{x: 29, y: 4601.12},
								// {x:30,y:0},
							]}
							label={"$1,337,000 - Enero"}
						/>
						<NotificationCardContainer
							style={[styles.row, styles.baseMarginTop, styles.marginHorizontal, styles.justifyContentSpaceBetween]}
						/>
						<TouchableOpacity
							style={[ styles.column, styles.baseMarginTop, styles.marginHorizontal]}
							onPress={() => { 
								this.props.navigation.navigate('EndsTodayListScreen', this.props.endsToday) 
							}}
							activeOpacity={0.5}
						>
							<SmallText 
								text={Local.get('dashboardScreen.interest')}
								color='blue'
							/>
							<SubtitleText
								text={Local.get('dashboardScreen.requisitionsEndToday')}
								color='darker'
								weight='bold'
							/>
						</TouchableOpacity>
						<View style={styles.smallMarginTop}/>
						<EndsTodayListSizeContainer
							id={'RequisitionId'}
							size={3}
							renderItem={this.renderItem}
							ItemSeparatorComponent={() => 
								<Divider 
									marginVertical
								/>
							}
						/>
						<View style={styles.smallMarginTop}/>
					</ScrollView>
				</View>
			</SafeAreaView>
		);
	}
}
