import React, { Component } from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	ScrollView
} from 'react-native';

import styles from './CategoryListScreenStyle';

import Divider from 'cotizame-native/app/components/Divider';
import BackBtn from 'cotizame-native/app/components/BackBtn';
import HeaderNav from 'cotizame-native/app/components/HeaderNav';
import TitleText from 'cotizame-native/app/components/TitleText';
import ReqItem from 'cotizame-native/app/components/ReqItem';

import NewRequisitionsContainer from 'cotizame-native/app/containers/NewRequisitionsContainer';

import Local from 'cotizame-native/app/services/Local';

export default class CategoryListScreen extends Component {	
	static navigationOptions = {
		header: null
	}
	state = {
		item: {}
	}
	componentDidMount(){
		const { navigation } = this.props;
		const item = navigation.getParam('item', {});
		this.setState({item: item});
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
				price= {String(item.Offer)}
				url= {item.DriveId}
				time= {item.Validity}
				noMoreButton
			/>
		</TouchableOpacity>
	)

	itemSeparatorComponent = () => (
		<Divider 
			marginVertical
		/>
	);

	render() {
		const { navigation } = this.props;
		const item = navigation.getParam('item', null);
		return (
			<View style={styles.container}>
				<HeaderNav
					headerLeft={
						<BackBtn
							navigation={this.props.navigation}
							backLabel
						/>
					}
				/>
				<View style={[styles.marginBottom, styles.marginHorizontal]}>
					<TitleText
						text={this.state.item.Category}
						color='cotizame'
						weight='bold'
					/>
				</View>
				<RequisitionsListContainer
					filtersOverride={{articleGroup: item.CategoryId, serviceType: item.CategoryId}}
					itemSeparatorComponent={this.itemSeparatorComponent}
					renderItem={this.renderItem}
				/>
			</View>
		);
	}
}
