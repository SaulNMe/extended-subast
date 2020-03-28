import React, { Component } from 'react';
import { 
	Text, 
	View, 
	TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './CommentsButtonStyle';
import { Colors } from 'cotizame-native/app/styles';
import Feather from 'react-native-vector-icons/Feather';

export default class CommentsButton extends Component {
	render() {
		return (
			<TouchableOpacity
				onPress={this.props.onPress}
				style={styles.mainContainer}
			>	
				<View style={[styles.flexStart, {width: 24}]}>
					<Feather  name={'message-circle'} size={24} style={{width: 24}} color={Colors.blue}/>
				</View>
				{this.props.textNotification > 0 &&
					<View style={styles.iconBadge}>
				    	<Text style={{color: Colors.white, fontSize: 10}}>{this.props.textNotification> 9 ? '9+' : this.props.textNotification}</Text>
					</View>
				}
			</TouchableOpacity>
		);
	}
}

CommentsButton.propTypes = {
	onPress: PropTypes.func,
	textNotification: PropTypes.number
}

CommentsButton.defaultProps = {
	onPress: () => {},
	textNotification: 0
}
