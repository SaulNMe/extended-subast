import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	StatusBar,
} from 'react-native';

import styles from './WelcomeScreenStyle';
import PrimaryBtn from 'cotizame-native/app/components/PrimaryBtn';
import SecondaryBtn from 'cotizame-native/app/components/SecondaryBtn';
import TextDivider from 'cotizame-native/app/components/TextDivider';
import Local from 'cotizame-native/app/services/Local';
import HugeText from 'cotizame-native/app/components/HugeText';
import BodyText from 'cotizame-native/app/components/BodyText';
import NotificationCard from 'cotizame-native/app/components/NotificationCard';

export default class WelcomeScreen extends Component {
	render () {
		return (
			<View style={styles.paddedContainer}>
				<StatusBar barStyle="light-content"/>
				<Image 
					style={styles.imageFill}
					source={require('cotizame-native/assets/background.png')}
				/>
				<View style={[styles.content, styles.column, styles.justifyContentSpaceBetween]}>
					<View style={[styles.centerObjects]}>
						<Image	
							style={styles.imageStretch}				
							source={require('cotizame-native/assets/logo.png')}
							resizeMode='contain'
						/>
					</View>
					<View>
						<HugeText
							text={Local.get('loginScreen.welcome')}
							color='white'
							weight='bold'
						/>
						<BodyText
							text={Local.get('loginScreen.introduction')}
							color='white'
						/>
						<View style={styles.marginTop}> 
							<PrimaryBtn 
								onPress={()=>{this.props.navigation.navigate('LoginScreen')}}
								colorBckg='white'
								colorTxt='cotizame'
								text={Local.get('loginScreen.button')}
							/>
						</View>
					</View>
				</View>
			</View>
		);
	}
}