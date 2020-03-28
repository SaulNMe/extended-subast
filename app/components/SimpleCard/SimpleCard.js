import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
	Text,
	View,
	TouchableOpacity
} from 'react-native';

import styles from './SimpleCardStyle';

export default class SimpleCard extends Component {
	render = () => (
		<TouchableOpacity
			onPress={this.props.onPress}
			disabled={!this.props.onPress}
			activeOpacity={0.2}
			style={[styles.card, {elevation: this.props.elevation ?  5: 1}, ( !this.props.noPaddingHorizontal && styles.noPaddingHorizontal)]}
		>
			{this.props.children}
		</TouchableOpacity>
	);
}

SimpleCard.propTypes = {
	onPress: PropTypes.func,
	noPaddingHorizontal: PropTypes.bool,
	elevation: PropTypes.bool,
}

SimpleCard.defaultProps = {
	onPress: null,
	noPaddingHorizontal: false,
	elevation: false
}
