import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
	View
} from 'react-native';

import styles from './HelpItemStyle';
import LabelText from 'cotizame-native/app/components/LabelText';
import Feather from 'react-native-vector-icons/Feather';
import { Colors } from 'cotizame-native/app/styles';


export default class HelpItem extends Component {
	render = () => (
		<View style={styles.row}>
			<View style={styles.smallMarginRight}>
				<Feather name='info' size={20} color={Colors.main}/>
			</View>
			<View style={styles.flex1}>
				<LabelText 
					text= {this.props.text}
					color='dark'
				/>
			</View>
		</View>
	);
}

HelpItem.propTypes = {
	text: PropTypes.string
}

HelpItem.defaultProps = {
	text: ''
}
