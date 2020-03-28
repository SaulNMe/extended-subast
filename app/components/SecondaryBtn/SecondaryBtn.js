import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
	Text,
	View,
	TouchableOpacity
} from 'react-native';

import styles from './SecondaryBtnStyle';

export default class SecondaryBtn extends Component {
	render () {
		let backgroundStyle, textStyle;
		if (this.props.loading || this.props.disabled) {
			backgroundStyle = styles.disabledBg;
			textStyle = styles.disabledText;
		} else if (this.props.highlight) {
			backgroundStyle = styles.highlightBg;
			textStyle = styles.highlightText;
		} else if (this.props.forWhite) {
			backgroundStyle = styles.whiteBg;
			textStyle = styles.whiteText;
		} else if (this.props.negative) {
			backgroundStyle = styles.negativeBg;
			textStyle = styles.negativeText;
		} else {
			backgroundStyle = styles.actionBg;
			textStyle = styles.actionText;
		}

		return (
			<TouchableOpacity
				disabled={this.props.disabled || this.props.loading}
				onPress={this.props.onPress}
				style ={[styles.defaultBackground, backgroundStyle, 
					(this.props.addShadow && styles.shadow), (this.props.isRound && styles.round), 
					(this.props.isRounder && styles.rounder)]}
			>
				<Text style={[styles.defaultText, textStyle]}>{this.props.text}</Text>
			</TouchableOpacity>
		);
	}
	
}

SecondaryBtn.propTypes = {
	forWhite: PropTypes.bool,
	disabled: PropTypes.bool,
	loading: PropTypes.bool,
	action: PropTypes.bool,
	highlight: PropTypes.bool,
	negative: PropTypes.bool,
	isRound: PropTypes.bool,
	isRounder: PropTypes.bool,
	addShadow: PropTypes.bool,
	text: PropTypes.string,
	onPress: PropTypes.func
}

SecondaryBtn.defaultProps = {
	forWhite: false,
	disabled: false,
	loading: false,
	action: true,
	highlight: false,
	negative: false,
	isRound: true,
	isRounder: false,
	addShadow: false,
	text: 'Click me',
	onPress: () => {}
}
