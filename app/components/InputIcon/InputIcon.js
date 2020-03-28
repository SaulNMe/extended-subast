import React, { Component } from 'react';
import {
	View,
	TextInput,
} from 'react-native';
import PropTypes from 'prop-types';
import Feather from 'react-native-vector-icons/Feather';

import styles from './InputIconStyle';

export default class InputIcon extends Component {
	render() {
		return (
			<View style={[styles.wrapper, styles.alignItemsCenter]}>
				<View style={styles.icon}>
					<Feather name={this.props.iconName} size={25} color={this.props.tintColor}/>
				</View>
				{this.props.textInput}
			</View>
		);
	}
}

InputIcon.propTypes = {
	iconName: PropTypes.string,
	tintColor: PropTypes.string,
	textInput: PropTypes.object,
}

InputIcon.defaultProps = {
	iconName: 'user',
	tintColor: 'white',
	textInput: null,
}
