import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
	Text,
	View
} from 'react-native';

import styles from './OrdersCardContentStyle';
import BodyText from 'cotizame-native/app/components/BodyText';
import LabelText from 'cotizame-native/app/components/LabelText';
import SmallText from 'cotizame-native/app/components/SmallText';
import TagItem from 'cotizame-native/app/components/TagItem';
import moment from 'moment';
import Local from 'cotizame-native/app/services/Local';

export default class OrdersCardContent extends Component {
	render = () => (
		<View>
			<View style={[styles.row]}>
				<View style={[styles.flex1]}>
					<BodyText
						text={Local.get('ordersScreen.tag') + this.props.title} 
						weight='bold'
						color='darker'
					/>
				</View>
				<TagItem
					tag={this.props.tag}
				/>
			</View>
			<View style={[styles.row, styles.alignItemsCenter]}>
				<View style={styles.flex1}>
					<SmallText 
						text= {Local.get('ordersScreen.date')}
						color='dark'
					/>
					<LabelText
						text={moment(this.props.deliveryDate).format('LL')}
						color='darker'
						weight='regular'
					/>
				</View>
				<View style={[styles.flex1, styles.alignItemsFlexEnd]}>
					<SmallText 
						text="Total"
						color='blue'
					/>
					<LabelText 
						text= {'$ ' + parseFloat(this.props.amount).toFixed(2) + ' MXN'}
						color='darker'
						weight='regular'
					/>
				</View>
			</View>
		</View>
	);
}

OrdersCardContent.propTypes = {
	tag: PropTypes.string,
	title: PropTypes.string,
	concepts: PropTypes.string,
	deliveryDate: PropTypes.string,
	amount: PropTypes.string

}

OrdersCardContent.defaultProps = {
	tag: '',
	title: 0,
	concepts: '',
	deliveryDate: '',
	amount: ''

}
