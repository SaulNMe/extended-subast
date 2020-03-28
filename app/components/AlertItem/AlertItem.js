import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
	Text,
	View,
	TouchableOpacity
} from 'react-native';

import styles from './AlertItemStyle';
import LabelText from 'cotizame-native/app/components/LabelText';
import SmallText from 'cotizame-native/app/components/SmallText';
import BodyText from 'cotizame-native/app/components/LabelText';
import Divider from 'cotizame-native/app/components/Divider';
import moment from 'moment';

export default class AlertItem extends Component {
	render = () => (
		<TouchableOpacity 
			style={(!this.props.seen && styles.bgBlue)}
			onPress={this.props.onPress}
			activeOpacity={0.5}
		>
			<View style={[styles.marginVertical, styles.marginHorizontal]}>
				<BodyText
					text={this.props.title}
					weight='bold'
					color='darker'
				/>
				<LabelText 
					text={this.props.subtitle}
					color='light'
				/>
				<SmallText
					text= {moment(this.props.time).startOf('day').fromNow()}
					color='dark'
				/>
			</View>
			<Divider />
		</TouchableOpacity>
	);
}

AlertItem.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string,
	time: PropTypes.string,
	seen: PropTypes.bool,
	onPress: PropTypes.func
}

AlertItem.defaultProps = {
	title: '',
	subtitle: '',
	time: '',
	seen: false,
	onPress: ()=>{}
}
