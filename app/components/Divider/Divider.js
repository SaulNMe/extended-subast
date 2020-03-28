import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
	View
} from 'react-native';

import styles from './DividerStyle';

export default class Divider extends Component {
	render = () => (
		<View style={[ 
				(this.props.marginVertical && styles.marginVertical), 
				(this.props.marginHorizontal && styles.marginHorizontal), 
				(this.props.marginBottom && styles.marginBottom),
				(this.props.marginTop && styles.marginTop)
			]}>
			<View style={[styles.Divider, (this.props.disabled && styles.disabled)]}/>
		</View>		
	);
}

Divider.propTypes = {
	marginVertical: PropTypes.bool,
	marginHorizontal: PropTypes.bool,
	marginBottom: PropTypes.bool,
	marginTop: PropTypes.bool,
	disabled: PropTypes.bool
}

Divider.defaultProps = {
	marginHorizontal: false,
	marginVertical: false,
	marginBottom: false,
	marginTop: false,
	disabled: false
}
