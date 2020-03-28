import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
	Text,
	View,
} from 'react-native';

import styles from './PositionDisplayDetailStyle';
import SubtitleText from 'cotizame-native/app/components/SubtitleText';
import LabelText from 'cotizame-native/app/components/LabelText';
import SmallText from 'cotizame-native/app/components/SmallText';
import TagItem from 'cotizame-native/app/components/TagItem';
import moment from 'moment';
import Local from 'cotizame-native/app/services/Local';
import { Colors } from 'cotizame-native/app/styles';


export default class PositionDisplayDetail extends Component {
	render = () => (
		<View>
			<View style={[styles.row]}>
				<View style={[styles.flex1]}>
					<SmallText
						text= {Local.get('ordersScreen.label') + this.props.label} 
						color='dark'
						weight='regular'
					/>
					<SubtitleText
							text={this.props.title}
							weight='medium'
							color='darker'
					/>
				</View>
				<TagItem
					tag={this.props.tag}
				/>
			</View>
			<View style={[styles.row, styles.justifyContentSpaceBetween, styles.smallMarginTop]}>
				<View>
					<SmallText 
						text={Local.get('ordersScreen.offerDate')}
						color='dark'
						weight='regular'
					/>
					<LabelText 
						text= {moment(this.props.date).format('LL')}
						color='darker'
						weight='regular'
					/>
				</View>
				<View>
					<SmallText 
						text='Subtotal'
						color='dark'
						weight='regular'
					/>
					<LabelText 
						text= {'$ ' + this.props.amount + ' MXN'}
						color='darker'
						weight='regular'
					/>
				</View>
			</View>
		</View>
	);
}

PositionDisplayDetail.propTypes = {
	onPress: PropTypes.func,
	label: PropTypes.string,
	title: PropTypes.string,
	amount: PropTypes.string,
	marginHorizontal: PropTypes.bool
}

PositionDisplayDetail.defaultProps = {
	onPress: () => {},
	label: '',
	title: '',
	amount: '',
	marginHorizontal: false
}
