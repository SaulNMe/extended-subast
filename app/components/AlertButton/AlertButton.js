import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	Text,
	View, 
	TouchableOpacity
} from 'react-native';
import styles from './AlertButtonStyle';
import Feather from 'react-native-vector-icons/Feather';
import { Colors } from 'cotizame-native/app/styles';

export default class AlertButton extends Component {
	render () {
		let notificationsLimit = (this.props.notification >= 99) ? '99+' : this.props.notification;
		let iconBadge = !!(this.props.notification) ?  
			<View style={styles.iconBadge}>
		    	<Text style={{color:Colors.white, fontSize: 8}}>{notificationsLimit}</Text>
			</View> : null;
		return (
			<TouchableOpacity
				style={[styles.mainContainer]}
				onPress={this.props.onPress}
			>	
				<View style={[styles.flexStart, {width: 24}]}>
					<Feather  name='bell' size={24} color={(this.props.white ? Colors.white : Colors.darker)}/>
				</View>
				{iconBadge}
			</TouchableOpacity>
		);
	}
}

AlertButton.propTypes = {
	white: PropTypes.bool,
	onPress: PropTypes.func,
	notification: PropTypes.number
}

AlertButton.defaultProps = {
	white: false,
	onPress: () => {},
	notification: 0
}
