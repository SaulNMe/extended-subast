import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
	Text,
	View
} from 'react-native';

import styles from './SmallTextStyle';
import { Fonts, Colors } from 'cotizame-native/app/styles';

export default class SmallText extends Component {
	render() {
		const textColor = this.props.color ? { color: Colors[this.props.color] }: { color: Colors.black };
		const weight = this.props.weight ? { fontWeight: Fonts.weight[this.props.weight] }: { fontWeight: Fonts.weight.regular };
		const center = this.props.center ? { textAlign: 'center' } : {};

		return (
			<React.Fragment>
				<Text style={[styles.smallText, textColor, weight, center]}>
					{this.props.text}
				</Text>
			</React.Fragment>
		);
	}
}

SmallText.propTypes = {
	text: PropTypes.string
}

SmallText.defaultProps = {
	text: ""
}
