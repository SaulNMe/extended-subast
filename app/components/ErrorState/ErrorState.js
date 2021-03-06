import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './ErrorStateStyle';
import SubtitleText from 'cotizame-native/app/components/SubtitleText';
import BodyText from 'cotizame-native/app/components/BodyText';
import Local from 'cotizame-native/app/services/Local';


export default class ErrorState extends Component {
	render() {
		return (
			<View style={[styles.column, styles.flex1, styles.marginHorizontal, styles.centerObjects, styles.marginTop]}>
				<SubtitleText
					text={Local.get('errorState.title')}
					color="subdued"
					center
				/>
				<BodyText 
					text={Local.get('errorState.subtitle')}
					color="light"
					center
				/>
			</View>
		);
	}
}

	ErrorState.propTypes = {
		// data: PropTypes.array
	}

	ErrorState.defaultProps = {
		// data: []
	}
