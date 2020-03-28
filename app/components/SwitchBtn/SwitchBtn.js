import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
	Text,
	View
} from 'react-native';

import styles from './SwitchBtnStyle';
import { Colors } from 'cotizame-native/app/styles';
import SwitchSelector from 'react-native-switch-selector';
import Feather from 'react-native-vector-icons/Feather';

export default class SwitchBtn extends Component {
	state = {
		selected: this.props.btnValue ? true : false
	}
	handleChoice = (value) => {
		this.props.onPress(value);
	}
	render () {
		let bgColor = this.props.btnValue ? Colors.blue : Colors.light;
		const options = [
			{
				value: false,
				customIcon: <Feather
					name='x'
					size={20}
					color={ this.props.btnValue ? Colors.transparent : Colors.light }
				/>
			},
			{
				value: true,
				customIcon: <Feather
					name='check'
					size={20}
					color={ this.props.btnValue ? Colors.blue : Colors.transparent }
				/>
			}
		];

		return (
			<View style={[styles.switchContainer, (!this.props.noMargin && styles.marginHorizontal)]}>
				<SwitchSelector
					initial={this.props.btnValue ? 1 : 0}
					borderColor={Colors.transparent}
					backgroundColor={bgColor}
					buttonColor={Colors.white}
					hasPadding
					options={options}
					height={24}
					onPress={this.handleChoice}
				/>
			</View>
		);
	}
}

SwitchBtn.propTypes = {
	// data: PropTypes.array
	noMargin: PropTypes.bool
}

SwitchBtn.defaultProps = {
	// data: []
	noMargin: false
}
