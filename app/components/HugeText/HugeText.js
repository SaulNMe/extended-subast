import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
	Text,
	View
} from 'react-native';

import styles from './HugeTextStyle';
import { Fonts, Colors } from 'cotizame-native/app/styles';

export default class HugeText extends Component {
	render() {
		const textColor = this.props.color ? { color: Colors[this.props.color] }: { color: Colors.black };
		const weight = this.props.weight ? { fontWeight: Fonts.weight[this.props.weight] }: { fontWeight: Fonts.weight.regular };
		const center = this.props.center ? { textAlign: 'center' } : {};

		return (
			<React.Fragment>
				<Text style={[styles.hugeText, textColor, weight, center]}>
					{this.props.text}
				</Text>
			</React.Fragment>
		);
	}
}

HugeText.propTypes = {
	text: PropTypes.string
}

HugeText.defaultProps = {
	text: ''
}
