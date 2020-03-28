import React, { Component } from 'react';
import { 
	View,
	TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './AnchorButtonStyle';
import SmallText from 'cotizame-native/app/components/SmallText'

export default class AnchorButton extends Component {
	render() {
		return (
			<TouchableOpacity
				{...this.props}
				onPress={this.props.onPress}
			>
				<SmallText
					text='Ver Detalles'
					color='blue'
				/>
			</TouchableOpacity>
		);
	}
}

AnchorButton.propTypes = {
	onPress: PropTypes.func,
	text: PropTypes.string,
}

AnchorButton.defaultProps = {
	onPress: () => {},
	text: ''
}
