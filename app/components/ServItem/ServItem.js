import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
	Text,
	View
} from 'react-native';

import style from './ServItemStyle';
import Feather from 'react-native-vector-icons/Feather';
import BodyText from 'cotizame-native/app/components/BodyText';
import LabelText from 'cotizame-native/app/components/LabelText';
import SmallText from 'cotizame-native/app/components/SmallText';

import { Colors } from 'cotizame-native/app/styles';

export default class ServItem extends Component {
	render = () => (
		<View style={(this.props.marginHorizontal && style.marginHorizontal)}>
			<View style={[style.row, style.alignItemsCenter]}>
				<View style={style.flex1}>
					<LabelText
						text={this.props.title}
						color='darker'
						weight='medium'
					/>
					<SmallText
						text={this.props.subtitle}
						color='dark'
					/>
					<SmallText 
						text={this.props.time}
						color='dark'
					/>
				</View>
				<View style={[style.justifyContentCenter, style.alignItemsFlexEnd]}>
					<SmallText 	
						text='Mejor Precio'
						color='dark'
					/>
					<LabelText 
						text={this.props.price}
					/>
				</View>
				<View>
					<Feather name='chevron-right' size={24} color={Colors.light}/>
				</View>
			</View>
		</View>
	);
}

ServItem.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string,
	time:  PropTypes.string,
	price: PropTypes.string,
	marginHorizontal: PropTypes.bool
}

ServItem.defaultProps = {
	title: "",
	subtitle: "",
	time: "",
	price: "",
	marginHorizontal: false
}
