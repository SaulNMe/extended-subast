
import React, { Component } from 'react';
import {
	View,
	Modal
} from 'react-native';

import styles from './TenderScreenStyle';
import Divider from 'cotizame-native/app/components/Divider';
import SearchInput from 'cotizame-native/app/components/SearchInput';
import TendersListContainer from 'cotizame-native/app/containers/TendersListContainer';
import Local from 'cotizame-native/app/services/Local';
import OfferItem from 'cotizame-native/app/components/OfferItem';
import TenderFiltersContainer from 'cotizame-native/app/containers/TenderFiltersContainer';
import TenderSearchContainer from 'cotizame-native/app/containers/TenderSearchContainer';

export default class TenderScreen extends Component {
	state = {
		description: '',
		modalVisible: false,
	}

	renderItem = ({item}) => (
		<OfferItem 
			label= {item.Type == 1 ? Local.get('tenderDetailScreen.tender') + item.TenderContractNumber : "Contrato: #" + item.TenderContractNumber}
			title= {item.Description.substring(0, 30)}
			price= {String(item.price? item.price:'- -')}
			time= {item.Validity} 
			kind= {item.Type == 1 ? 'Licitación' : 'Contrato'}
			onPress={()=> this.props.navigation.navigate('TendersDetailScreen', {item: item})}
		/>
	)

	setModalVisible(visible) {
		this.setState({modalVisible: visible});
	}

	onSearch = (text) => this.setState({
		description: text
	});
	
	render () {
		return (
			<View style={styles.container}>
				<Modal
					animationType='slide'
					transparent={false}
					visible={this.state.modalVisible}
					onRequestClose={() => {}}
				>	
					<TenderFiltersContainer
						onClose={() => this.setModalVisible(!this.state.modalVisible)}
					/>
				</Modal>
				<TenderSearchContainer 
					onIconPress={() => this.setModalVisible(true)}
				/>
				<TendersListContainer
					renderItem={this.renderItem}
					ItemSeparatorComponent={() => <Divider marginVertical/>}
					header = { () => <View style={styles.baseMarginTop}/>}
					ListFooterComponent = { () => <View style={styles.baseMarginTop}/>}
				/>
			</View>
		);
	}
}
