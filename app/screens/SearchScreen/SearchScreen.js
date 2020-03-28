import React, { Component } from 'react';
import {
	View,
	TouchableOpacity,
	SafeAreaView,
	StatusBar
} from 'react-native';

import styles from './SearchScreenStyle';
import SubtitleText from 'cotizame-native/app/components/SubtitleText';
import TitleText from 'cotizame-native/app/components/TitleText';
import SmallText from 'cotizame-native/app/components/SmallText';
import SearchInput from 'cotizame-native/app/components/SearchInput';
import ReqItem from 'cotizame-native/app/components/ReqItem';
import CategoriesListContainer from 'cotizame-native/app/containers/CategoriesListContainer';


import { ApplicationStyles } from 'cotizame-native/app/styles';
import Local from 'cotizame-native/app/services/Local';

export default class SearchScreen extends Component {
	static navigationOptions = {
		...ApplicationStyles.stackNavigatorOptions.transparentHeader
	}

	state = {
		search: ''
	}

	renderItem = ( item, onPress ) => {
		return (
			<View>
				<TouchableOpacity
					onPress={() => onPress(item)}
					activeOpacity={0.5}
				>
					<View style={[styles.marginVertical, styles.marginHorizontal]}>
						<SmallText 
							text= {Local.get('searchScreen.body')}
							color='blue'
						/>
						<SubtitleText
							text={item.Category}
							color='darker'
							weight='bold'
						/>
					</View>
				</TouchableOpacity>

				{
					item.Requisitions.map((itemReq, index) => (
						<TouchableOpacity 
							style={[styles.marginHorizontal, styles.smallMarginVertical]}
							onPress={() => { this.props.navigation.navigate('RequisitionsDetailScreen', {item: itemReq})}}
							activeOpacity={0.5}
							key={index}
						>
							<ReqItem 
								label= {Local.get('dashboardScreen.requisition') + itemReq.Solped}
								title= {itemReq.ShortDescription}
								price= {String(itemReq.BestPrice? itemReq.BestPrice:'--')}
								url= {itemReq.DriveId}
								time= {itemReq.Validity}
								noMoreButton
							/>
						</TouchableOpacity>
					))
					
				}
			</View>
		)}

	render () {
		return (
			<SafeAreaView style={[styles.container, styles.headerPadding]}>
				<StatusBar backgroundColor="transparent" barStyle="dark-content"/>
				<View style={[styles.marginHorizontal, styles.marginTop]}>
					<TitleText 
						text= {Local.get('searchScreen.header')}
						weight='bold'
						color='cotizame'
					/>
				</View>
				{
					
					// <View>
					// 	<SearchInput
					// 		value={this.state.search}
					// 		placeholder='¿Qué oferta estás buscando?'
					// 		navigation={() => this.props.navigation.navigate('FilterSearchModal', {
					// 			searchText: this.props.searchText,
					// 			action: (data = {}) => this.getRequisitionsSerch(data)
					// 		})}
					// 	/>
					// </View>
				}
				<CategoriesListContainer
					renderItem={this.renderItem}
					header = { () => <View />}
					ListFooterComponent = { () => <View style={styles.basePaddingTop}/>}
				/>
			</SafeAreaView>
		);
	}
}
