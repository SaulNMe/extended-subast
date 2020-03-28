import React, { Component } from 'react';
import {
	View,
	Text,
	ScrollView,
	FlatList,
	TouchableOpacity
} from 'react-native';
import { Metrics } from 'cotizame-native/app/styles';
import styles from './TendersDetailScreenStyle';
import HeaderNav from 'cotizame-native/app/components/HeaderNav';
import BackBtn from 'cotizame-native/app/components/BackBtn';
import LabelText from 'cotizame-native/app/components/LabelText';
import HeaderActions from 'cotizame-native/app/components/HeaderActions';
import ReqItem from 'cotizame-native/app/components/ReqItem';
import InlineBodyText from 'cotizame-native/app/components/InlineBodyText';
import CommentItem from 'cotizame-native/app/components/CommentItem';
import SecondaryBtn from 'cotizame-native/app/components/SecondaryBtn';
import DescriptionCard from 'cotizame-native/app/components/DescriptionCard';
import SmallText from 'cotizame-native/app/components/SmallText';
import moment from 'moment';
import Local from 'cotizame-native/app/services/Local';
import CommentsContainer from 'cotizame-native/app/containers/CommentsContainer';
import DetailHeader from 'cotizame-native/app/components/DetailHeader';
import DetailStats from 'cotizame-native/app/components/DetailStats';
import DetailInformationList from 'cotizame-native/app/components/DetailInformationList';

import { getTenderId } from 'cotizame-native/app/actions/TenderIdActions';
import { connect } from 'react-redux';
import EmptyState from 'cotizame-native/app/components/EmptyState';
import ErrorState from 'cotizame-native/app/components/ErrorState';
import HeaderActionsContainer from 'cotizame-native/app/containers/HeaderActionsContainer';


class TendersDetailScreen extends Component {	
	static navigationOptions = {
		header: null, 
	}
	state = {
		item: this.props.navigation.state.params.item,
		commentPosition: 0,
		showFullDescription: false,
		messages: 0,
	}

	handleMessageAction = () => {
		this.scroll.scrollTo({y: this.state.commentPosition, animated: true, duration: 10000})
	}
	async componentDidMount(){
		await this.props.dispatch(getTenderId(this.state.item.TenderId));

	}

	handleTitle = ( title ) => {
		let titleItem = title;
		if (titleItem){
			return titleItem.split(' ').slice(0,5).join(' ');
		}
	}

	getInfoData = () => [
		{
			label: Local.get('tenderDetailScreen.quantity'),
			info: 1
		},{
			label: Local.get('tenderDetailScreen.materialKey'),
			info: this.props.tenderId.MaterialKey
		},{
			label: Local.get('tenderDetailScreen.typeQuote'),
			info: this.props.tenderId.QuoteType
		},{
			label: 'PTE',
			info: this.props.tenderId.PTE
		},{
			label: Local.get('tenderDetailScreen.competing'),
			info: this.props.tenderId.Guests
		}
	]
	allTenderContent() {
		if(this.props.isLoading) return (<EmptyState isLoading/>);
		if(this.props.error != '') return (<ErrorState/>);
		if(this.props.requisitions === {}) return (<EmptyState/>);
		return(
			<View>
				<View style={styles.marginHorizontal}>
					<DetailHeader
						label={this.props.tenderId.QuoteType == 'LICITACION' ? Local.get('tenderDetailScreen.tender') + this.props.tenderId.NumberTenderContract : Local.get('tenderDetailScreen.contract') + this.props.tenderId.NumberTenderContract}
						title={this.handleTitle(this.props.tenderId.Description)}
					/>
				</View>
				<DetailStats 
					price={String(this.props.tenderId.BestOffer)}
					time={this.props.tenderId.Validity} 
					quantity={String(1)} //Falta conectar esta prop
				/>
				<View style={[styles.marginHorizontal, styles.marginTop]}>
					<DescriptionCard
						data={this.props.tenderId.Description}
					/>
				</View>
				<View style={[styles.marginHorizontal, styles.marginTop]}>
					<DetailInformationList 
						subtitle={Local.get('tenderDetailScreen.information')}
						data={this.getInfoData()}
					/>
				</View>
			</View>
		);
	}

	componentsContent = ()  => (
		<View 
			style={[styles.marginTop]}
			onLayout={e => {
				const layout = e.nativeEvent.layout;
				this.setState({commentPosition: layout.y});
			}}
		>
			<CommentsContainer
				style={[styles.marginHorizontal, styles.marginTop]}
				baseMargin={[{marginVertical: Metrics.baseMargin}, styles.marginTop]}
				messageId={'MessageId'}
				size={3}
				type='tender'
				id={this.state.item.TenderId}
				//messages={(messages) => this.setState({messages})}
			/>
		</View>
	)

	handleMessageAction = () => {
		this.scroll.scrollTo({y: this.state.commentPosition})
	}

	render() {
		let item = this.state.item;
		if('ReferenceId' in item) item.TenderId = item.ReferenceId;
		return (
			<View style={[styles.bgContainer, styles.whiteBg]}>
				<HeaderNav
					headerLeft={
						<BackBtn
							navigation={this.props.navigation}
							backLabel
						/>
					}
					headerRight={ 
						<View>
							<HeaderActionsContainer
								messageAction={()=> this.handleMessageAction()}
								id={item}
								hasReaction={false}
								hasButton={false}
							/>
						</View>
					}
					statusBar={'dark-content'}
				/>
				<ScrollView
					ref={(tenderScroll) => this.scroll = tenderScroll}
				>
					<View style={[styles.container]}>
						{this.allTenderContent()}
						{!this.props.isLoading && this.componentsContent()}
					</View>
				</ScrollView>
			</View>
		);
	}
}

mapStateToProps = state => ({
	tenderId: state.TenderId.items,
	isLoading: state.TenderId.isLoading,
	error: state.TenderId.error,
})

export default connect(mapStateToProps)(TendersDetailScreen);