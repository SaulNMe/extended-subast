import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
	Text,
	View
} from 'react-native';

import styles from './TextDividerStyle';
import LabelText from 'cotizame-native/app/components/LabelText';

export default class TextDivider extends Component {
	render = () => (
		<View style={[styles.row, styles.verticalMargin]}>
			<View style={styles.flex1}>
				<View style={styles.line}/>
				<View style={styles.flex1}/>
			</View>
			<View style={styles.flex3}>
				<LabelText 
					text={this.props.text}
					color='white' 
					center 
				/>
			</View>
			<View style={styles.flex1}>
				<View style={styles.line}/>
				<View style={styles.flex1}/>
			</View>
		</View>
	)
}

TextDivider.propTypes = {
	text: PropTypes.string
}

TextDivider.defaultProps = {
	text: ''
}
