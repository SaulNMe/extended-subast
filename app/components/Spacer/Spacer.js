import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './SpacerStyle';

export default class Spacer extends Component {
	render() {
		return (
			<View style={styles.baseMarginTop} />
		);
	}
}

	Spacer.propTypes = {
		// data: PropTypes.array
	}

	Spacer.defaultProps = {
		// data: []
	}
