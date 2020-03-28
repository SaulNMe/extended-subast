import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
	Text,
	View,
	TextInput,
	TouchableOpacity
} from 'react-native';

import styles from './FormInputStyle';
import { Colors } from 'cotizame-native/app/styles';
import Divider from 'cotizame-native/app/components/Divider';
import LabelText from 'cotizame-native/app/components/LabelText';
import Feather from  'react-native-vector-icons/Feather';

export default class FormInput extends Component {
	render = () => (
		<View>
			<View style={[styles.row, styles.marginHorizontal]}>
				<LabelText 
					text={this.props.label}
					color='darker'
				/>
			</View>
			<View style={[styles.row, styles.doubleMarginHorizontal]}>
				<TextInput
					placeholderTextColor={Colors.light}
					placeholder={this.props.placeholder}
					selectionColor={Colors.dark}
					style={[styles.flex1, styles.colorText]}
					underlineColorAndroid={Colors.transparent}
				/>
				<TouchableOpacity
					onPress={()=>{alert(this.props.message)}}
				>
					<View style={styles.justifyContentSpaceAround}>
						<Feather name="info" size={20} color={Colors.light} />
					</View>
				</TouchableOpacity>
			</View>
			<Divider 
				marginVertical
				marginHorizontal={this.props.marginHorizontal}
			/>
		</View>
	);
}

FormInput.propTypes = {
	label: PropTypes.string,
	placeholder: PropTypes.string,
	marginHorizontal: PropTypes.bool,
	message: PropTypes.string
}

FormInput.defaultProps = {
	label: "",
	placeholder: "",
	marginHorizontal: true,
	message: ''
}
