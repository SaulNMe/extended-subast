import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './EmptyStateStyle';
import SubtitleText from 'cotizame-native/app/components/SubtitleText';
import BodyText from 'cotizame-native/app/components/BodyText';
import Local from 'cotizame-native/app/services/Local';

export default class EmptyState extends Component {
	render() {
		return (
			<View style={[styles.flex1, styles.marginHorizontal, styles.centerObjects, styles.marginTop]}>
				<SubtitleText
					text={Local.get(this.props.isLoading ? 'emptyState.titleLoading': this.props.title)}
					color="subdued"
					center
				/>
				<BodyText 
					text={Local.get(this.props.isLoading ? 'emptyState.subtitleLoading': this.props.subtitle)}
					color="light"
					center
				/>
			</View>
		);
	}
}

EmptyState.propTypes = {
	isLoading: PropTypes.bool,
	title: PropTypes.string,
	subtitle: PropTypes.string
}

EmptyState.defaultProps = {
	isLoading: false,
	title: 'emptyState.title',
	subtitle: 'emptyState.subtitle'
}
