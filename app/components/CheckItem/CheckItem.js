import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
	Text,
	View,
	TouchableOpacity
} from 'react-native';

import styles from './CheckItemStyle';
import Feather from 'react-native-vector-icons/Feather';
import color from 'cotizame-native/app/styles';
import BodyText from 'cotizame-native/app/components/BodyText';
import Divider from 'cotizame-native/app/components/Divider';
import { Colors } from 'cotizame-native/app/styles';

export default class CheckItem extends Component {
	render = () => (
		<React.Fragment>
			<TouchableOpacity
				onPress={ () => this.props.onPress(this.props.value)}
				style={[styles.row, styles.alignItemsCenter]}
			>
				<View style={styles.textContainer}>
					<BodyText 
						text={this.props.label}
						color='main'
						weight='regular'
					/>
				</View>
				<View style={styles.iconContainer}>
					<Feather name={this.props.iconName} size={28} color={this.props.color}/>
				</View>
			</TouchableOpacity>
			<Divider
				marginVertical
			/>
		</React.Fragment>
	);
}

CheckItem.propTypes = {
	onPress: PropTypes.func,
	value: PropTypes.string,
	label: PropTypes.string,
	iconName: PropTypes.string,
	color: PropTypes.string,
}

CheckItem.defaultProps = {
	onPress: () => {},
	value: 'yes',
	label: 'CheckItem',
	iconName: 'circle',
	color: Colors.dark,
}
