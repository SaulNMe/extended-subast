import React, { Component } from 'react';
import {  
	View,
	StatusBar,
	SafeAreaView,
} from 'react-native';
import PropTypes from 'prop-types';

import { LinearGradient } from 'expo';
import styles from './HeaderNavStyle';
import { Metrics, Colors, ApplicationStyles } from 'cotizame-native/app/styles';

export default class HeaderNav extends Component {
	render() {
		let headerLeft =(
			<View style={[styles.flex1, styles.justifyContentFlexStart]}>
				{this.props.headerLeft}
			</View>
		)
		let headerCenter = (
			<View style={[styles.flex2, styles.centerObjects]}>
				{this.props.headerCenter}
			</View>
		)
		let headerRight = (
			<View style={[styles.flex1, styles.alignItemsFlexEnd, styles.marginRight]}>
				{this.props.headerRight}
			</View>
		)
		let content = (
				<View style={[styles.navBarHeight, styles.row, styles.alignItemsCenter, styles.marginStatus, {backgroundColor: !this.props.gradient ? this.props.backgroundColor : 'transparent' }]}>
					{this.props.headerLeft &&
						headerLeft || this.props.headerCenter && this.props.headerCenter &&
						headerLeft
					}
					{this.props.headerCenter &&
						headerCenter
					}
					{this.props.headerRight && 
						headerRight || !this.props.headerRight && this.props.headerCenter && 
						headerRight
					}
				</View>
		)
		return (
			<SafeAreaView>
				<StatusBar barStyle={this.props.statusBar}/>
				{this.props.gradient ? 
					<LinearGradient colors={this.props.colors} style={[styles.navBarHeight]} start={[0, 0]} end={[1, 0]}>
						{content}
					</LinearGradient>
				: 
					<React.Fragment>
						{content}
					</React.Fragment>
				}
			</SafeAreaView>
		);
	}
}

HeaderNav.propTypes = {
	headerLeft: PropTypes.object,
	headerCenter: PropTypes.object,
	headerRight: PropTypes.object, 
	statusBar: PropTypes.string,
	gradient: PropTypes.bool,
	colors: PropTypes.array,
	backgroundColor: PropTypes.string,
}

HeaderNav.defaultProps = {
	headerLeft: null,
	headerCenter: null,
	headerRight: null,
	StatusBar: 'default',
	gradient: false,
	colors: ['#1B99D6',  '#363E83'],
	backgroundColor: 'transparent'
}
