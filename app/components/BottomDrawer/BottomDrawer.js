import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
	View,
	SafeAreaView
} from 'react-native';

import styles from './BottomDrawerStyle';
import Divider from 'cotizame-native/app/components/Divider'

export default class BottomDrawer extends Component {
	render = () => (
		<SafeAreaView style ={styles.setToBottom}>
			{this.props.Divider ? 
				<Divider />
				: null
			}
			<View style={[styles.row, styles.padding]}>
				<View style={[styles.flex1, styles.centerObjects, styles.paddingRight]}>
					{this.props.left}
				</View>
				<View style={[styles.flex1, styles.centerObjects, styles.paddingLeft]}>
					{this.props.right}
				</View>
			</View>
		</SafeAreaView>
	);
}

BottomDrawer.propTypes = {
	Divider: PropTypes.bool,
	left: PropTypes.element,
	right: PropTypes.element
}

BottomDrawer.defaultProps = {
	Divider: false,
	left: <React.Fragment />,
	right: <React.Fragment />
}
