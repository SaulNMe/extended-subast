import React, { Component } from 'react';
import { 
	Text, 
	View,
	TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './ReactionButtonStyle';
import Foundation from 'react-native-vector-icons/Foundation';
import { Colors } from 'cotizame-native/app/styles';
import ApiService from 'cotizame-native/app/services/ApiService';

export default class ReactionButton extends Component {

	handleReaction = () => this.props.handleIsFavorite();

	render() {
		return (
			<TouchableOpacity
				disabled={this.props.isLoading}
				onPress={() => this.handleReaction()}
				style={[styles.mainContainer]}
			>	
			<View style={[styles.heartContainer, {borderColor: this.props.selected ? Colors.red : Colors.light}]}>
				<Foundation style={{margin: 0, padding: 0, width: 15, height: 18, justifyContent: 'space-between', alignItems: 'center'}} name='heart' size={18.5} color={this.props.selected ? Colors.red : Colors.light}/>
			</View>
			</TouchableOpacity>
		);
	}
}

ReactionButton.propTypes = {
	id: PropTypes.number.isRequired,
	selected: PropTypes.bool,
}

ReactionButton.defaultProps = {
	selected: false,
}
