import React, { Component } from 'react';
import {
	View,
	Modal,
} from 'react-native';

import styles from './OffersScreenStyle';
import SearchInput from 'cotizame-native/app/components/SearchInput';
import OfferItem from 'cotizame-native/app/components/OfferItem';
import RequisitionsListContainer from 'cotizame-native/app/containers/RequisitionsListContainer';
import RequisitionsFiltersContainer from 'cotizame-native/app/containers/RequisitionsFiltersContainer';
import Local from 'cotizame-native/app/services/Local';
import NavigationService from 'cotizame-native/app/services/NavigationService';
import RequisitionsSearchContainer from 'cotizame-native/app/containers/RequisitionsSearchContainer';

export default class OffersScreen extends Component {
	state = {
		description: '',
		modalVisible: false,
	}
	renderItem = ({ item }) => (
		<OfferItem 
			onPress={() => { NavigationService.navigate('RequisitionsDetailScreen', {item: item})}}
			label= {Local.get('tenderDetailScreen.offer') + item.FolioPetition}
			title= {item.ShortDescription}
			price= {item.BestPrice === null ? '--' : String(item.BestPrice)}
			time= {item.Validity} 
			tags
			kind= {item.PositionType === 'M' ? 'Material' : 'Servicio'}
		/>
	);
	setModalVisible(visible) {
		this.setState({modalVisible: visible});
	}

	onSearch = (text) => {
		this.setState({
			description: text
		});
	}
	
	render () {
		return (
			<View style={styles.container}>
				<Modal
					animationType='slide'
					transparent={false}
					visible={this.state.modalVisible}
					onRequestClose={() => {}}
				>	
					<RequisitionsFiltersContainer
						onClose={() => this.setModalVisible(!this.state.modalVisible)}
					/>
				</Modal>
				<RequisitionsSearchContainer 
					onIconPress={() => this.setModalVisible(true)}
				/>
				<RequisitionsListContainer
					header = { () => <View style={styles.baseMarginTop}/>}
					renderItem={this.renderItem}
				/>
			</View>
		);
	}
}

