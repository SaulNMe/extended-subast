import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
	Text,
	TouchableOpacity
} from 'react-native';

import style from './IconButtonStyle';
import Feather from 'react-native-vector-icons/Feather';
import LabelText from 'cotizame-native/app/components/LabelText';
import { Colors } from 'cotizame-native/app/styles';

export default class IconButton extends Component {
	render = () => (
		<TouchableOpacity
			style={[style.button, style.paddingHorizontal, (this.props.hideBorder && style.noBorder) ]}
			onPress={this.props.onPress}
			activeOpacity={0.5}
		>
			<LabelText
				text={this.props.title}
				color='main'
				weight='regular'
			/>
			<Feather name={this.props.iconName} color={this.props.color} size={24} />
	    </TouchableOpacity>
	);
}

IconButton.propTypes = {
	title: PropTypes.string,
	onPress: PropTypes.func,
	color: PropTypes.string,
	iconName: PropTypes.string,
}

IconButton.defaultProps = {
	title: '',
	onPress: () => {},
	color: Colors.light,
	iconName: "hexagon"
}
