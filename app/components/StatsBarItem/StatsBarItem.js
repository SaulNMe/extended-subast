import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
	Text,
	View
} from 'react-native';

import style from './StatsBarItemStyle';
import SubtitleText from 'cotizame-native/app/components/SubtitleText';
import SmallText from 'cotizame-native/app/components/SmallText';

export default class StatsBarItem extends Component {
	render = () => (
		<View style={style.container}>
			<SubtitleText
				text= {this.props.data}
				color='white'
				weight='regular'
			/>
			<SmallText
				text= {this.props.title}
				color='white'
				weight='regular'
			/>
		</View>
	)
}

StatsBarItem.propTypes = {
	data: PropTypes.string,
	title: PropTypes.string
}

StatsBarItem.defaultProps = {
	data: "- -",
	title: "- -"
}
