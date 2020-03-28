import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './CotizameSignatureStyle';

export default class CotizameSignature extends Component {
	render() {
		return (
			<View style= {styles.centerObjects}>
				<Image 
					source={require('cotizame-native/assets/icon.png')} 
					style={styles.imageStyle}
				/>
			</View>
		);
	}
}

