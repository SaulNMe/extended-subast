import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './GradientBannerStyle';
import { LinearGradient } from 'expo';
import { Metrics, Colors, ApplicationStyles } from 'cotizame-native/app/styles';
import LabelText from 'cotizame-native/app/components/LabelText';
import PrimaryBtn from 'cotizame-native/app/components/PrimaryBtn';

export default class GradientBanner extends Component {
	render() {
		return (
			<View>
				<LinearGradient colors={['#1B99D6',  '#363E83']} style={[styles.navBarHeight]} start={[0, 0]} end={[1, 0]}>
					<View style={styles.row}>
						<View style={[styles.column, styles.flex1]}>
							<LabelText
								text={this.props.text}
								color='white'
								weight='medium'
							/>
						</View>
						<View style={[styles.column]}>
							<PrimaryBtn
								text={this.props.btnText}
								onPress={this.props.onPress}
								colorTxt='blue'
								colorBckg='white'
							/>
						</View>
					</View>
				</LinearGradient>
			</View>
		);
	}
}

GradientBanner.propTypes = {
	onPress: PropTypes.func,
	btnText: PropTypes.string,
	text: PropTypes.string,
}

GradientBanner.defaultProps = {
	onPress: () => {},
	btnText: 'Button',
	text: 'Lorem',	
}
