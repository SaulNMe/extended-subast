import React, { Component } from 'react';
import {
	View,
	Text,
	ScrollView,
} from 'react-native';

import styles from './MySubscriptionsScreenStyle';
import BackBtn from 'cotizame-native/app/components/BackBtn';
import HeaderNav from 'cotizame-native/app/components/HeaderNav';
import TitleText from 'cotizame-native/app/components/TitleText';
import LabelText from 'cotizame-native/app/components/LabelText';
import BodyText from 'cotizame-native/app/components/BodyText';
import SubscriptionSwitch from 'cotizame-native/app/components/SubscriptionSwitch';
import Local from 'cotizame-native/app/services/Local';

export default class MySubscriptionsScreen extends Component {	
	static navigationOptions = {
		header: null, 
	}
	render() {
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
					<View style={styles.marginHorizontal}>
						<TitleText
							text={Local.get('subscriptions.subscriptions')}
							weight='medium'
						/>
						<LabelText
							text={Local.get('subscriptions.subtitle')}
							color='dark'
						/>
						<View style={styles.marginVertical}>
							{subscriptions.map((item, index) =>(
								<SubscriptionSwitch
									key={index}
									title={item.title}
									value={item.value}
									imageUrl={item.imageUrl}
								/>
							))}
						</View>
						<View style={styles.marginVertical}>
							<BodyText
								text={Local.get('subscriptions.newSubscriptions')}
								weight='medium'
							/>
							<LabelText
								text={Local.get('subscriptions.subtitleSecond')}
								color='dark'
							/>
							<View style={styles.marginVertical}>
								{availableSubs.map((item, index) =>(
									<SubscriptionSwitch
										key={index}
										title={item.title}
										value={item.value}
										imageUrl={item.imageUrl}
									/>
								))}
							</View>
						</View>
					</View>
				</ScrollView>
			</View>
		);
	}
}

const subscriptions = [{
		id: 1,
		title: 'Helicóptero',
		imageUrl: 'https://cdn.pixabay.com/photo/2010/12/06/22/helicopter-1003_960_720.jpg',
		value: true
	},{
		id: 2,
		title: 'Helicóptero',
		imageUrl: 'https://cdn.pixabay.com/photo/2010/12/06/22/helicopter-1003_960_720.jpg',
		value: true
	},{
		id: 3,
		title: 'Helicóptero',
		imageUrl: 'https://cdn.pixabay.com/photo/2010/12/06/22/helicopter-1003_960_720.jpg',
		value: true
	},{
		id: 4,
		title: 'Helicóptero',
		imageUrl: 'https://cdn.pixabay.com/photo/2010/12/06/22/helicopter-1003_960_720.jpg',
		value: true
	},{
		id: 5,
		title: 'Helicóptero',
		imageUrl: 'https://cdn.pixabay.com/photo/2010/12/06/22/helicopter-1003_960_720.jpg',
		value: true
	}
]

const availableSubs = [{
		id: 1,
		title: 'Helicóptero',
		imageUrl: 'https://cdn.pixabay.com/photo/2010/12/06/22/helicopter-1003_960_720.jpg',
		value: false
	},{
		id: 2,
		title: 'Helicóptero',
		imageUrl: 'https://cdn.pixabay.com/photo/2010/12/06/22/helicopter-1003_960_720.jpg',
		value: false
	},{
		id: 3,
		title: 'Helicóptero',
		imageUrl: 'https://cdn.pixabay.com/photo/2010/12/06/22/helicopter-1003_960_720.jpg',
		value: false
	},{
		id: 4,
		title: 'Helicóptero',
		imageUrl: 'https://cdn.pixabay.com/photo/2010/12/06/22/helicopter-1003_960_720.jpg',
		value: false
	},{
		id: 5,
		title: 'Helicóptero',
		imageUrl: 'https://cdn.pixabay.com/photo/2010/12/06/22/helicopter-1003_960_720.jpg',
		value: false
	}
]
