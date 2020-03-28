import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
	Text,
	View
} from 'react-native';

import styles from './InlineDrawerStyle';

export default class InlineDrawer extends Component {
	render = () => (
		<View style={[styles.row, this.props.noMargin ? null : styles.paddingTop , styles.paddingHorizontal]}>
			<View style={[styles.flex1, styles.centerObjects]}>
				{this.props.left}
			</View>
			<View style={[styles.flex1, styles.centerObjects]}>
				{this.props.right}
			</View>
		</View>
	);
}

InlineDrawer.propTypes = {
	noMargin: PropTypes.bool
}

InlineDrawer.defaultProps = {
	noMargin: false
}
