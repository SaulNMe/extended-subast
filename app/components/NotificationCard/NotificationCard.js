import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
	Text,
	View
} from 'react-native';

import styles from './NotificationCardStyle';
import Feather from 'react-native-vector-icons/Feather';
import { Fonts, Colors, Metrics } from 'cotizame-native/app/styles';
import HugeText from 'cotizame-native/app/components/HugeText';
import SmallText from 'cotizame-native/app/components/SmallText';

export default class NotificationCard extends Component {
	render() {
		const backColor = this.props.color ? { backgroundColor: Colors[this.props.color] }: { backgroundColor: Colors.red };
		return (
			<View style={[backColor, styles.cardStyle]}>
				<View style={[styles.rowCard, styles.smallHorizontalMargin]}> 
					<Feather name={this.props.iconName} size={24} color='white' style={styles.tinyMarginRight} />
					<HugeText
						text= {!this.props.dataNumber? '- -':String(this.props.dataNumber)}
						color="white"
						weight="bold"
					/>
				</View>
				<View style={styles.marginTop}> 
					<SmallText
						text= {String(this.props.text)}
						color='white'
						center
					/>
				</View>
			</View>
			);
		}
	}

NotificationCard.propTypes = {
	text: PropTypes.string,
	iconName: PropTypes.string,
	dataNumber: PropTypes.number
}

NotificationCard.defaultProps = {
	text: "Notificacion name",
	iconName: "user",
	dataNumber: null
}
