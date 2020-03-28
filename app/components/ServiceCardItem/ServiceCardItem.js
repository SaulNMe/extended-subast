import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import InlineBodyText from 'cotizame-native/app/components/InlineBodyText';
import SmallText from 'cotizame-native/app/components/SmallText';
import styles from './ServiceCardItemStyle';

export default class ServiceCardItem extends Component {
	render() {
		return (
			<View key={this.props.key}>
				<SmallText 
					text={this.props.subtitle}
					weight="medium"
				/>
				<InlineBodyText 
					leftText={this.props.leftText1}
					rightText={this.props.rightText1}
					colorLeft='dark'
					colorRight='darker'
				/>
				<InlineBodyText 
					leftText={this.props.leftText2}
					rightText={this.props.rightText2}
					colorLeft='dark'
					colorRight='darker'
				/>
			</View>
		);
	}
}

	ServiceCardItem.propTypes = {
		subtitle: PropTypes.string,
		leftText1: PropTypes.string,
		rightText1: PropTypes.string,
		leftText2: PropTypes.string,
		rightText2: PropTypes.string,
		key: PropTypes.string,

	}

	ServiceCardItem.defaultProps = {
		subtitle: "",
		leftText1: "",
		rightText1: "",
		leftText2: "",
		rightText2: "",
		key: "",
	}
