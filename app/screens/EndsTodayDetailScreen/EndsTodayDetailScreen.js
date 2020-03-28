import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	FlatList,
	ScrollView,
	TouchableOpacity,
} from 'react-native';

import styles from './EndsTodayDetailScreenStyle';
import Subtitle from 'cotizame-native/app/components/SubtitleText';
import HeaderNav from 'cotizame-native/app/components/HeaderNav';
import BackBtn from 'cotizame-native/app/components/BackBtn';
import SmallText from 'cotizame-native/app/components/SmallText';
import LabelText from 'cotizame-native/app/components/LabelText';
import BodyText from 'cotizame-native/app/components/BodyText';
import HeaderActions from 'cotizame-native/app/components/HeaderActions';
import ReqItem from 'cotizame-native/app/components/ReqItem';
import Divider from 'cotizame-native/app/components/Divider';
import InlineBodyText from 'cotizame-native/app/components/InlineBodyText';
import CommentItem from 'cotizame-native/app/components/CommentItem';
import Local from 'cotizame-native/app/services/Local';
import SecondaryBtn from 'cotizame-native/app/components/SecondaryBtn';

export default class EndsTodayDetailContainer extends Component {
	state = {
		selected: false,
		item: this.props.navigation.state.params.item,
		commentPosition: 0,
	};
	
	static navigationOptions = {
		header: null
	}

	handleReaction = () => {
		this.setState({selected: !this.state.selected})
	}
	handleMessageAction = () => {
		this.scroll.scrollTo({y: this.state.commentPosition, animated: true, duration: 10000});
	}
	render() {
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
							<HeaderActions
								messages={data.length}
								messageAction={this.handleMessageAction}
								likeAction={this.handleReaction}
								selected={this.state.selected}
							/>
						</View>
					}
				/>
				<ScrollView
					ref={(node) => this.scroll = node}
				>
					<View style={[styles.marginVertical, styles.container]}>
						<View style={styles.marginHorizontal}>
							<ReqItem 
								label={Local.get('requisitionsDetailScreen.requisition') + this.state.item.Solped}
								title={this.state.item.ShortDescription}
								price={this.state.item.Offer ===  0 ? '--' : this.state.item.Offer}
								url={this.state.item.DriveId}
								time={this.state.item.Validity} 
								noImage
								noMoreButton
							/>
						</View>
						<View style={styles.marginVertical, styles.marginHorizontal}>
							<View style={styles.baseMarginTop}>
								<LabelText
									text={Local.get('requisitionsDetailScreen.material')}
									color='darker'
									weight='medium'
								/>
							</View>
							<View style={[styles.row, styles.marginVertical, styles.centerObjects]}>
								<View style={[styles.materialContainer]}>
									<Image
										source={{uri: 'http://www.clker.com/cliparts/x/m/q/f/A/P/colored-paper-md.png'}}
										resizeMode='cover'
										style={styles.material}
									/>
								</View>
								<View style={[styles.flex1, styles.marginHorizontal]}>
									<LabelText
										text={Local.get('requisitionsDetailScreen.letter')}
										color='dark'
									/>
								</View>
							</View>
						</View>
						<Divider/>
						<View style={[styles.marginHorizontal, styles.marginVertical]}>
							<LabelText
								text={Local.get('endsTodayListContainer.description')}
								color='darker'
								weight='medium'
							/>
							<LabelText
								text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
								color='main'
							/>
						</View>
						<View style={[styles.marginHorizontal, styles.marginTop]}>
							<LabelText
								text={Local.get('requisitionsDetailScreen.information')}
								color='darker'
								weight='medium'
							/>
							<InlineBodyText
								leftText={Local.get('requisitionsDetailScreen.quantity')}
								rightText='17 Motores'
								colorLeft='dark'
								colorRight='darker'
							/>
							<InlineBodyText
								leftText={Local.get('requisitionsDetailScreen.type')}
								rightText='Material'
								colorLeft='dark'
								colorRight='darker'
							/>
							<InlineBodyText
								leftText={Local.get('requisitionsDetailScreen.requires')}
								rightText='Si'
								colorLeft='dark'
								colorRight='darker'
							/>
							<InlineBodyText
								leftText={Local.get('requisitionsDetailScreen.competing')}
								rightText='3'
								colorLeft='dark'
								colorRight='darker'
							/>
						</View>
						<View style={[styles.marginHorizontal, styles.marginTop]}>
							<LabelText
								text={Local.get('requisitionsDetailScreen.attached')}
								color='darker'
								weight='medium'
							/>
							<InlineBodyText
								leftText={Local.get('requisitionsDetailScreen.technical')}
								rightText='Es_técnicas.pdf'
								colorLeft='dark'
								colorRight='darker'
							/>
							<InlineBodyText
								leftText={Local.get('requisitionsDetailScreen.additional')}
								rightText='Información.pdf'
								colorLeft='dark'
								colorRight='darker'
							/>
						</View>
						<View 
							style={[styles.marginHorizontal, styles.marginTop]}
						>
							<LabelText
								text={Local.get('requisitionsDetailScreen.comments')}
								color='darker'
								weight='medium'
							/>
							<FlatList
								data={data}
								keyExtractor={(item) => String(item.userId)}
								renderItem={({item}) =>
									<CommentItem
										item={item}
									/>
								}
							/>
						</View>
						<View style={styles.marginHorizontal}>
							<LabelText
								text={Local.get('tenderDetailScreen.questions')}
								color='darker'
								weight='medium'
							/>
							<View style={styles.marginVertical}>
								<SecondaryBtn
									text={Local.get('tenderDetailScreen.writeComment')}
								/>
							</View>
						</View>
						<View style={[styles.newRequests, styles.paddingHorizontal, styles.verticalPadding]}>
							<SmallText
								text={Local.get('endsTodayListContainer.interest')}
								color='dark'
							/>
							<BodyText
								text={Local.get('dashboardScreen.applications')}
								color='darker'
								weight='medium'
							/>
							<FlatList
								data={requests}
								keyExtractor={(item) => String(item.id) }
								renderItem = {({item})=> 
									<TouchableOpacity 
										style={[styles.marginHorizontal, styles.smallMarginVertical]}
										onPress={() => { this.props.navigation.navigate('EndsTodayDetailScreen', item)}}
									>
										<ReqItem 
											label= {Local.get('requisitionsDetailScreen.requisition') + item.Solped}
											title= {item.ShortDescription}
											price= {item.offer}
											url= {item.DriveId}
											time= {item.Validity} 
										/>
									</TouchableOpacity>
								}
								ItemSeparatorComponent={() => 
									<Divider 
										marginVertical
									/>
								}
							/>
						</View>
					</View>
				</ScrollView>
			</View>
		);
	}
}
const data = [{
	userId: '0',
	user: 'provider',
	avatar: 'https://www.searchpng.com/wp-content/uploads/2019/02/Men-Profile-Image-715x657.png',
	comment: ';)',
	date: '2019-03-20T08:00:16-06:00'
}, {
	userId: '1',
	user: 'shopper',
	avatar: 'https://www.searchpng.com/wp-content/uploads/2019/02/Men-Profile-Image-715x657.png',
	comment: '<3',
	date: '2019-03-20T08:00:16-06:00'
}, {
	userId: '2',
	user: 'provider',
	avatar: 'https://www.searchpng.com/wp-content/uploads/2019/02/Men-Profile-Image-715x657.png',
	comment: ';)',
	date: '2019-03-20T08:00:16-06:00'
}]

const requests =[{
	id: 0,
	Solped: '133718-17',
	ShortDescription: 'Motores de Helicóptero Modelo H1337-B',
	offer: 1337.00,
	Validity: '2019-03-21T23:20:36.53'
}, {
	id: 1,
	Solped: '133718-17',
	ShortDescription: 'Motores de Helicóptero Modelo H1337-B',
	offer: 1337.00,
	Validity: '2019-03-21T23:20:36.53'
}, {
	id: 2,
	Solped: '133718-17',
	ShortDescription: 'Motores de Helicóptero Modelo H1337-B',
	offer: 1337.00,
	Validity: '2019-03-21T23:20:36.53'
}, ]
