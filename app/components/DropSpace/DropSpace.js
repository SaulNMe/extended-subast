import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Metrics } from 'cotizame-native/app/styles';

import {
	View
} from 'react-native';

import style from './DropSpaceStyle';

export default class DropSpace extends Component {
	render () {
		return (
			<View style={{marginHorizontal: Metrics.baseMargin}}>
				{this.props.children}
			</View>
		);
	}
}
