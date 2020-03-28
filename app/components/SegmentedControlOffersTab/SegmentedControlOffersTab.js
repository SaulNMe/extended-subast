import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import styles from './SegmentedControlOffersTabStyle';
import LabelText from 'cotizame-native/app/components/LabelText';

export default class SegmentedControlOffersTab extends Component {

	render() {
		return (
			<View style={[styles.row, styles.tabsConteiner]}>
				<TouchableOpacity 
					style={[
						styles.buttonStyleLeft,
						styles.alignItemsCenter,
						this.props.current === this.props.leftName ? styles.blueButton : styles.whiteButton
					]}
					onPress={this.props.leftAction}
				>
					<LabelText
						text={this.props.leftText}
						color={this.props.current === this.props.leftName ? 'white' : 'blue'}
					/>
				</TouchableOpacity>
				<TouchableOpacity 
					style={[
						styles.buttonStyleRight,
						styles.alignItemsCenter,
						this.props.current === this.props.rightName? styles.blueButton : styles.whiteButton
					]}
					onPress={this.props.rightAction}
				>
					<LabelText
						text={this.props.rightText}
						color={this.props.current === this.props.rightName ? 'white' : 'blue'}
					/>
				</TouchableOpacity>	
			</View>
		);
	}
}

SegmentedControlOffersTab.propTypes = {
	leftText: PropTypes.string,
	rightText: PropTypes.string,
	leftAction: PropTypes.func,
	rightAction: PropTypes.func,
	current: PropTypes.string,
}

SegmentedControlOffersTab.defaultProps = {
	left: '',
	right: '',
	leftAction: () => {},
	rightAction: () => {},
	current: '',
}
