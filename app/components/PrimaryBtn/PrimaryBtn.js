import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
	Text,
	View, 
	TouchableOpacity
} from 'react-native';

import styles from './PrimaryBtnStyle';
import { Fonts, Colors } from 'cotizame-native/app/styles';

export default class PrimaryBtn extends Component {
	
	render() {

		const textStyle =  { color: Colors[this.props.colorTxt] };
		const backgroundStyle = { backgroundColor: Colors[this.props.colorBckg] };
		const height = {height: this.props.height};

		return (
			<TouchableOpacity
				activeOpacity={0.5}
				disabled={this.props.disabled || this.props.loading}
				onPress={this.props.onPress}
				style ={[ backgroundStyle, this.props.isRounder ? styles.rounder : styles.round, this.props.height ? styles.hasHeight : styles.defaultBackground, (this.props.height && height), (this.props.disabled && styles.disabledBg), (this.props.addShadow && styles.shadow)]}
			>
				<Text style={[textStyle, styles.defaultText, (this.props.disabled && styles.disabledText)]}>{this.props.text}</Text>
			</TouchableOpacity>
		);
	}
}

PrimaryBtn.propTypes = {
	addShadow: PropTypes.bool,
	colorTxt: PropTypes.string,
	colorBckg: PropTypes.string,
	text: PropTypes.string,
	onPress: PropTypes.func,
	isRounder: PropTypes.bool,
	height: PropTypes.number,
}

PrimaryBtn.defaultProps = {
	addShadow: false,
	colorTxt: 'white',
	colorBckg: 'blue',
	text: 'Click me',
	onPress: () => {},
	isRounder: false,
	height: 0,
}
