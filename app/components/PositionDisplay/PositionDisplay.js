import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
	Text,
	View,
	TouchableOpacity
} from 'react-native';

import styles from './PositionDisplayStyle';
import BodyText from 'cotizame-native/app/components/BodyText';
import LabelText from 'cotizame-native/app/components/LabelText';
import SmallText from 'cotizame-native/app/components/SmallText';
import TinyText from 'cotizame-native/app/components/TinyText';
import TagItem from 'cotizame-native/app/components/TagItem';
import Feather from 'react-native-vector-icons/Feather';
import Local from 'cotizame-native/app/services/Local';
import { Colors } from 'cotizame-native/app/styles';


export default class PositionDisplay extends Component {
	render = () => (
		<TouchableOpacity
			onPress={this.props.onPress}
			style={(this.props.marginHorizontal && styles.marginHorizontal)}
			activeOpacity={0.5}
		>
			<View style={styles.row}>
				<View style={[styles.flex1]}>
					<SmallText
						text= {Local.get('ordersScreen.label') + this.props.label} 
						color='blue'
						weight='regular'
					/>
					<BodyText
						text={this.props.title}
						weight='medium'
						color='darker'
					/>
				</View>
				<View style={[styles.alignItemsFlexEnd, styles.justifyContentSpaceBetween]}>
					<TagItem
						tag={this.props.tag}
					/>
					<View style={styles.alignItemsFlexEnd}>
						<SmallText 
							text='Subtotal'
							color='blue'
							weight='regular'
						/>
						<LabelText 
							text= {"$" + parseFloat(this.props.amount).toFixed(2) + " MXN"}
							color='darker'
							weight='regular'
						/>
					</View>
				</View>
				<View style={[styles.centerObjects, styles.smallMarginLeft]}>
					<Feather name='chevron-right' size={24} color={Colors.light}/>
				</View>
			</View>
		</TouchableOpacity>
	);
}

PositionDisplay.propTypes = {
	onPress: PropTypes.func,
	label: PropTypes.string,
	title: PropTypes.string,
	amount: PropTypes.string,
	marginHorizontal: PropTypes.bool
}

PositionDisplay.defaultProps = {
	onPress: () => {},
	label: '',
	title: '',
	amount: '',
	marginHorizontal: false
}
