import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	TextInput
} from 'react-native';
import { Fonts, Colors, Metrics } from 'cotizame-native/app/styles';

// import ApiService from 'cotizame-native/app/services/ApiService';

class TransparentInput extends Component {
	render() {
		return (
			<View style={styles.wrapper}>
				<TextInput
					{...this.props}
					underlineColorAndroid={'rgba(0, 0, 0, 0)'}
					style={styles.input}
					placeholderTextColor='#fff'
				/>
			</View>
		)
	}
}

export default TransparentInput;

let styles = StyleSheet.create({
	/* 	We use a wrapper to prevent ios adding backgroundColor to the text
		Yup, I know it's weird, but it happens
	*/
	wrapper: {
		backgroundColor: 'rgba(255, 255, 255, 0.2)',
		borderRadius: 5,
		marginBottom: 15,
		width: '100%'
	},
	input: {
		padding: 11,
		width: '100%',
		borderWidth: 0,
		color: '#ffffff',
		width:'100%'
	},
});