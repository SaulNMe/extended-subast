import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	ScrollView
} from 'react-native';

import styles from './NotificationConfigScreenStyle';
import HugeText from 'cotizame-native/app/components/HugeText';
import SubtitleText from 'cotizame-native/app/components/SubtitleText';
import LabelText from 'cotizame-native/app/components/LabelText';
import BodyText from 'cotizame-native/app/components/BodyText';
import Divider from 'cotizame-native/app/components/Divider';
import InlineSwitch from 'cotizame-native/app/components/InlineSwitch';
import HeaderNav from 'cotizame-native/app/components/HeaderNav';
import BackBtn from 'cotizame-native/app/components/BackBtn';
import Local from 'cotizame-native/app/services/Local';

export default class NotificationConfigScreen extends Component {
	static navigationOptions = {
		header: null
	}
	state = {
		exceeded: false,
		best: false,
		expired: false,
		newOrder: false,
		updatedOrder: false,
		newEntry: false,
	}
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
				<ScrollView>
					<View style={[styles.flex1, styles.marginHorizontal]}>
						<HugeText
							text={Local.get('NotificationConfigScreen.title')}
							weight='bold'
							color='darker'
						/>
					</View>
					<View style={styles.margin}>
						<SubtitleText
							text={Local.get('NotificationConfigScreen.offers')}
							weight='bold'
							color='main'
						/>
						<View style={styles.smallMarginVertical}>
							<LabelText
								text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, hic.'
								color='dark'
							/>
						</View>
						<InlineSwitch 
							title={Local.get('NotificationConfigScreen.exceeded')}
							value={this.state.exceeded}
							onPress={(value) => this.setState({exceeded: value})}
						/>
						<InlineSwitch 
							title={Local.get('NotificationConfigScreen.best')}
							value={this.state.best}
							onPress={(value) => this.setState({best: value})}
						/>
						<InlineSwitch 
							title={Local.get('NotificationConfigScreen.expired')}
							value={this.state.expired}
							onPress={(value) => this.setState({expired: value})}
						/>
					</View>
					<View style={styles.marginHorizontal}>
						<SubtitleText
							text={Local.get('NotificationConfigScreen.orders')}
							weight='bold'
							color='main'
						/>
						<View style={styles.smallMarginVertical}>
							<LabelText
								text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, hic.'
								color='dark'
							/>
						</View>
						<InlineSwitch
							title={Local.get('NotificationConfigScreen.newOrder')}
							value={this.state.newOrder}
							onPress={(value) => this.setState({newOrder: value})}
						/>
						<InlineSwitch 
							title={Local.get('NotificationConfigScreen.updatedOrder')}
							value={this.state.updatedOrder}
							onPress={(value) => this.setState({updatedOrder: value})}
						/>
						<InlineSwitch 
							title={Local.get('NotificationConfigScreen.newEntry')}
							value={this.state.newEntry}
							onPress={(value) => this.setState({newEntry: value})}
						/>
					</View>
				</ScrollView>
			</View>
		);
	}
}
