import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
	Text,
	View
} from 'react-native';

import style from './LabelDisplayStyle';
import LabelText from 'cotizame-native/app/components/LabelText';
import SmallText from 'cotizame-native/app/components/SmallText';

export default class LabelDisplay extends Component {
	render = () => (
		<React.Fragment>
			<SmallText
				text={this.props.label}
				color='dark'
				weight='regular'
			/>
			<LabelText 
				text={this.props.text}
				color='darker'
				weight='regular'
			/>
		</React.Fragment>
	);
}

LabelDisplay.propTypes = {
	label: PropTypes.string,
	text: PropTypes.string
}

LabelDisplay.defaultProps = {
	label: '',
	text: ''
}
