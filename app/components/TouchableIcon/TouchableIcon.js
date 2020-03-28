import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
	Text,
	View,
	TouchableOpacity
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import Metrics from 'cotizame-native/app/styles/Metrics';
import colors from 'cotizame-native/app/styles/Colors';

import styles from './TouchableIconStyle';

export default class TouchableIcon  extends Component {
	render () {
		iconSizes = Metrics.icons
		const iconSize = (function(size){
			switch (size) {
				case 'tiny':
					return iconSizes.tiny;
				case 'small':
					return iconSizes.small;
				case 'large':
					return iconSizes.large;
				case 'xl':
					return iconSizes.xl;
				default:
					return iconSizes.small;
			}
		})(this.props.iconSize);

		return (
			<TouchableOpacity
				{...this.props}
				activeOpacity={0.5}
				onPress={this.props.onPress}
			>
				<Feather name={this.props.iconName} size={iconSize} color={this.props.iconColor}/>
			</TouchableOpacity>
		)
	}
}

TouchableOpacity.propTypes = {
	iconName: PropTypes.string,
	iconSize: PropTypes.string,
	iconColor: PropTypes.string,
}

TouchableOpacity.defaultProps = {
	iconName: 'info',
	iconSize: 'small',
	iconColor: colors.light
}