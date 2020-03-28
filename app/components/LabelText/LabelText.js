import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
	Text
} from 'react-native';

import styles from './LabelTextStyle';
import { Fonts, Colors } from 'cotizame-native/app/styles';

export default class LabelText extends Component {
	render() {
		const textColor = this.props.color ? { color: Colors[this.props.color] }: { color: Colors.black };
		const weight = this.props.weight ? { fontWeight: Fonts.weight[this.props.weight] }: { fontWeight: Fonts.weight.regular };
		const center = this.props.center ? { textAlign: 'center' } : {};

		return (
			<React.Fragment>
				<Text style={[styles.labelText, textColor, weight, center]}>
					{this.props.text}
				</Text>
			</React.Fragment>
		);
	}
}

LabelText.propTypes = {
	text: PropTypes.string
}

LabelText.defaultProps = {
	text: ""
}
