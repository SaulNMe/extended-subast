import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	TouchableOpacity,
	FlatList,
	Alert
} from 'react-native';

import styles from './OfferDetailScreenStyle';
import { Colors } from 'cotizame-native/app/styles';
import Feather from 'react-native-vector-icons/Feather';

import BottomDrawer from 'cotizame-native/app/components/BottomDrawer';
import PrimaryBtn from 'cotizame-native/app/components/PrimaryBtn';
import LabelText from 'cotizame-native/app/components/LabelText';
import SmallText from 'cotizame-native/app/components/SmallText';
import HeaderNav from 'cotizame-native/app/components/HeaderNav';
import BackBtn from 'cotizame-native/app/components/BackBtn';
import HeaderActions from 'cotizame-native/app/components/HeaderActions';
import ReqItem from 'cotizame-native/app/components/ReqItem';
import SimpleCard from 'cotizame-native/app/components/SimpleCard';
import InlineBodyText from 'cotizame-native/app/components/InlineBodyText';
import CommentItem from 'cotizame-native/app/components/CommentItem';
import BodyText from 'cotizame-native/app/components/BodyText';
import Divider from 'cotizame-native/app/components/Divider';
import SecondaryBtn from 'cotizame-native/app/components/SecondaryBtn';
import DetailHeader from 'cotizame-native/app/components/DetailHeader';
import Local from 'cotizame-native/app/services/Local';
import DetailInformationList from 'cotizame-native/app/components/DetailInformationList';
import moment from 'moment';

export default class OfferDetailScreen extends Component {
	state = {
		selected: false,
		commentPosition: 0,
	};

	static navigationOptions = {
		header: null
	}

	handleReaction = () => {
		this.setState({selected: !this.state.selected})
	}

	handleMessageAction = () => {
		this.scroll.scrollTo({y: this.state.commentPosition, animated: true, duration: 10000})
	}

	

	render () {
		const { navigation } = this.props;
    	const requisition = navigation.getParam('requisition', {});
    	const quotation = navigation.getParam('quotation', []);
		return (
			<View style={[styles.container]}>
				<HeaderNav
					headerLeft={
						<BackBtn
							navigation={this.props.navigation}
							backLabel
						/>
					}
					headerCenter={ 
						<LabelText
							text={Local.get('requisitionsDetailScreen.offer')}
							color='darker'
						/>
					}
				/>
				<ScrollView style={styles.paddingHorizontal}>
					<DetailHeader 
						label={Local.get('requisitionsDetailScreen.requisition') + requisition.NoRequisition}
						title={requisition.ShortDescription}
					/>
					<View style={styles.marginVertical}>
						{
							quotation.map((item, index) => {
								let getOfferDetails = [
									{label: Local.get('requisitionsDetailScreen.unitPrice'), info: item.PriceCeiling},
									{label: Local.get('requisitionsDetailScreen.minOffer'), info: item.Subtotal},
									{label: Local.get('requisitionsDetailScreen.discount'), info: item.DiscountFactor},
									{label: Local.get('requisitionsDetailScreen.quantity'), info: item.Quantity},
									{label: Local.get('requisitionsDetailScreen.valid'), info: moment(requisition.ValidityDate).format('LL')},
									{label: Local.get('requisitionsDetailScreen.deadline'), info: moment(requisition.DeliverDate).format('LL')}
								];
								return (
									<React.Fragment key={String(index)}>
										<DetailInformationList
											subtitle={Local.get('requisitionsDetailScreen.offerDetails')}
											data={getOfferDetails}
										/>
									</React.Fragment>
								);
							})
						}
					</View>
				</ScrollView>
			</View>
		);
	}
}
