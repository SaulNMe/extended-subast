import React, { Component } from 'react';
import { 
	View,
	ScrollView,
	TouchableOpacity,
	SafeAreaView
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './AllReqContentStyle';

import MaterialInfo from 'cotizame-native/app/components/MaterialInfo';
import InlineBodyText from 'cotizame-native/app/components/InlineBodyText';
import LabelText from 'cotizame-native/app/components/LabelText';
import ServiceCard from 'cotizame-native/app/components/ServiceCard';
import DetailStats from 'cotizame-native/app/components/DetailStats';
import OfferCard from 'cotizame-native/app/components/OfferCard';
import DescriptionCard from 'cotizame-native/app/components/DescriptionCard';
import Local from 'cotizame-native/app/services/Local';
import moment from 'moment';
import HeaderNav from 'cotizame-native/app/components/HeaderNav';
import BackBtn from 'cotizame-native/app/components/BackBtn';
import HeaderActions from 'cotizame-native/app/components/HeaderActions';
import HeaderActionsContainer from 'cotizame-native/app/containers/HeaderActionsContainer';
import GradientBanner from 'cotizame-native/app/components/GradientBanner';
import NavigationService from 'cotizame-native/app/services/NavigationService.js';
import DetailHeader from 'cotizame-native/app/components/DetailHeader';
import NewRequisitionsContainer from 'cotizame-native/app/containers/NewRequisitionsContainer';
import BodyText from 'cotizame-native/app/components/BodyText';
import Divider from 'cotizame-native/app/components/Divider';
import SmallText from 'cotizame-native/app/components/SmallText';
import ReqItem from 'cotizame-native/app/components/ReqItem';
import CommentsContainer from 'cotizame-native/app/containers/CommentsContainer';
import { Colors, Metrics } from 'cotizame-native/app/styles';

export default class AllReqContent extends Component {
	
	gradientBanner = (isBanner, offerId) => (!isBanner && !(offerId.length > 0))?  (
		<GradientBanner
			text={Local.get('gradientBanner.title')}
			btnText={Local.get('gradientBanner.body')}
			onPress={() => { NavigationService.navigate('SubscriptionsModal') }}
		/>
	) : ( <View /> );

	headers(isSubscribed, hasPendigRequest, offerId){

		if(offerId.length > 0){
			return (
				<HeaderActionsContainer
					messageAction={this.handleMessageAction}
					id={this.props.requisition.RequisitionId}
					hasComments={false}
					hasButton={true}
					text={'Participando'}
					btnText={'blue'}
					colorTxt={'lighterBlue'}
				/>
			);
		} 
		
		if(isSubscribed){
			return (
				<HeaderActionsContainer
					messageAction={this.handleMessageAction}
					id={this.props.requisition.RequisitionId}
					hasComments={true}
					hasButton={true}
				/>
			);
		} 		

		if(hasPendigRequest){
			return (
				<HeaderActionsContainer
					messageAction={this.handleMessageAction}
					id={this.props.requisition.RequisitionId}
					hasComments={false}
					hasButton={true}
					btnText={'blue'}
					width={180}
					text={'Esperando aprobación'}
					colorTxt={'lighterBlue'}
				/>
			);
		} 

		if(!(isSubscribed || hasPendigRequest)){
			return (
				<HeaderActionsContainer
					messageAction={this.handleMessageAction}
					id={this.props.requisition.RequisitionId}
				/>
			);
		}
		return (<View />);

	}

	materialHeader = (isMaterial) => isMaterial? (
		<View style={[styles.baseMarginTop, styles.marginHorizontal]}>
			<MaterialInfo
				title={Local.get('requisitionsDetailScreen.material')}
				imageURL={this.props.requisition.DriveId}
				description={this.props.requisition.ShortDescription}
			/>
		</View>
	):(<View />)

	renderItemEndsToday = (item) =>{ 
		return(
			<TouchableOpacity 
				style={[styles.marginHorizontal, styles.smallMarginVertical]}
				onPress={() => {
					NavigationService.pop();
					NavigationService.push('RequisitionsDetailScreen', {item: item});
				}}
			>
				<ReqItem
					label= {Local.get('dashboardScreen.requisition') + item.RequisitionId}
					title= {item.ShortDescription}
					price= {item.Offers === null ? '--' : String(item.Offers)}
					url= {item.DriveId}
					expirationDatetime= {item.Validity}
					noMoreButton
				/>
			</TouchableOpacity>
		)
	}

	offer = () => {
		return (
			<OfferCard 
				title={Local.get('requisitionsDetailScreen.offer')}
				btnText={Local.get('requisitionsDetailScreen.details')}
				onPress={()=> NavigationService.navigate('OfferDetailScreen', {
					requisition: this.props.requisition,
					quotation: this.props.quotation
				})}
				type={this.props.isMaterial? 'M':'S'}
				data={this.props.quotation}
				requisition={this.props.requisition}
			/>
		);
	}
	serviceCardLines = () => (
			<View>
				<View style={[styles.marginHorizontal, styles.marginTop]}>
					<LabelText
						text={Local.get('serviceCard.services')}
						color='darker'
						weight='medium'
					/>
				</View>
				{ this.props.quotation.map((item, index) => (
						<ServiceCard
							key={item.LineServiceId}
							title={item.ShortDescription}
							line={String(item.NoService)}
							quantity={String(item.Quantity)}
							serviceNo={String(item.serviceNo)}
							UM={item.MeasurementUnit}
							currency={item.Currency? item.OfferCurrency:this.props.requisition.Currency}
						/>
					)
				)}
			</View>
	)

	render(){
		let isSubscribed = false;
		let hasPendigRequest = false;
		let offerId = [];
		if(this.props.quotation.length > 0){
			this.props.quotation.map( a => isSubscribed = isSubscribed || a.IsSubscribed);
			this.props.quotation.map( a => hasPendigRequest = hasPendigRequest || a.HasPendigRequest );
			this.props.quotation.map( a => a.OfferId && offerId.push(a.offerId));
		}
		return(
			<SafeAreaView style={styles.container}>
				<HeaderNav
					headerLeft={
						<BackBtn
							navigation={this.props.navigation}
							backLabel
						/>
					}
					headerRight={ 
						<View>
							{this.headers(isSubscribed, hasPendigRequest, offerId)}
						</View>
					}
					statusBar={'dark-content'}
				/>
				{this.gradientBanner(isSubscribed || hasPendigRequest, offerId)}
				<ScrollView
					ref={(node) => this.requisitionScroll = node}
				>
					<View style={styles.marginHorizontal}>
						<DetailHeader
							label={Local.get('dashboardScreen.requisition') + this.props.requisition.RequisitionId}
							title={this.props.requisition.ShortDescription}
						/>
					</View>
					<DetailStats 
						price={this.props.requisition.BestPrice === null ? '--' : String(this.props.requisition.BestPrice)}
						time={this.props.requisition.Validity} 
						quantity={String(this.props.requisition.Quantity + ' ' + this.props.requisition.MeasurementUnit)}
					/>
					{ offerId.length > 0 && this.offer() }
					{ this.materialHeader(this.props.isMaterial) }
					<View style={[styles.marginHorizontal, styles.marginVertical]}>
						<DescriptionCard
							data={this.props.requisition.CompleteDescription}
						/>
					</View>
					<View style={[styles.marginHorizontal]}>
						<View style={styles.baseMarginBottom}>
							<LabelText
								text={Local.get('requisitionsDetailScreen.information')}
								color='darker'
								weight='medium'
							/>
						</View>
						<InlineBodyText
							leftText={Local.get('requisitionsDetailScreen.quantity')}
							rightText={String(this.props.requisition.Quantity) + ' ' + this.props.requisition.MeasurementUnit}
							colorLeft='dark'
							colorRight='darker'
						/>
						<InlineBodyText
							leftText={Local.get('requisitionsDetailScreen.type')}
							rightText={this.props.isMaterial ? 'Material' : 'Servicio'}
							colorLeft='dark'
							colorRight='darker'
						/>
						<InlineBodyText
							leftText={'Requiere evaluación tecnica'}
							rightText={this.props.requisition.RequiresEvaluation? 'Si':'No'}
							colorLeft='dark'
							colorRight='darker'
						/>
						<InlineBodyText
							leftText={Local.get('requisitionsDetailScreen.competing')}
							rightText={String(this.props.requisition.NoGuests)}
							colorLeft='dark'
							colorRight='darker'
						/>
						<InlineBodyText
							leftText={'Fecha de entrega '}
							rightText={moment(this.props.requisition.DeliverDate).format('D/M/YYYY')}
							colorLeft='dark'
							colorRight='darker'
						/>
						<InlineBodyText
							leftText={'Unidad de medida'}
							rightText={this.props.requisition.MeasurementUnit}
							colorLeft='dark'
							colorRight='darker'
						/>
					</View>
					{
						(isSubscribed || this.props.quotation.length > 0)? (
							<CommentsContainer
								style={[styles.marginHorizontal, styles.marginTop]}
								baseMargin={{marginVertical: Metrics.baseMargin}}
								messageId={'MessageId'}
								type='requisition'
								keyId={this.props.requisition.RequisitionId}
							/>
						):(<View />)
					}
					{
						!this.props.isMaterial && this.serviceCardLines()
					}
					<View style={[styles.newRequests, styles.verticalPadding]}>
						<View style={[styles.marginHorizontal, styles.baseMarginBottom]}>
							<SmallText
								text={Local.get('endsTodayListContainer.interest')}
								color='dark'
							/>
							<BodyText
								text={Local.get('dashboardScreen.applications')}
								color='darker'
								weight='medium'
							/>
						</View>
						<NewRequisitionsContainer
							category={null}
							size={3}
							requestData={{status: 1}}
							id={'RequisitionId'}
							renderItem={this.renderItemEndsToday}
							ItemSeparatorComponent={() => 
								<Divider marginVertical/>
							}
						/>
					</View>
				</ScrollView>
			</SafeAreaView>
		);
	}



}
