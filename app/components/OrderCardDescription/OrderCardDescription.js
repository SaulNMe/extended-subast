import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './OrderCardDescriptionStyle';
import SmallText from 'cotizame-native/app/components/SmallText';	
import LabelText from 'cotizame-native/app/components/LabelText';	
import TagItem from 'cotizame-native/app/components/TagItem';	
import Local from 'cotizame-native/app/services/Local';
import { Metrics } from 'cotizame-native/app/styles';
import moment from 'moment';

export default class OrderCardDescription extends Component {
	render() {
		return (
			<View>
				<View style={[styles.row]}>
					<View style={[styles.flex1]}>
						<SmallText
							text={Local.get('ordersScreen.label') + this.props.position} 
							weight='bold'
							color='dark'
						/>
					</View>
					<TagItem
						tag={this.props.tag}
					/>
				</View>
				<View style={{marginTop: Metrics.tinyMargin}}>
					<LabelText
						text={this.props.title}
						weight='medium'
						color='darker'
					/>
				</View>
				<View style={[styles.row]}>
					<View style={[styles.flex1]}>
						<SmallText
							text={Local.get('ordersScreen.offerDate')}
							color='dark'
						/>
						<SmallText
							text={moment(this.props.creationDate).format('LL')}
						/>
					</View>
					<View style={[styles.flex1, styles.alignItemsFlexEnd]}>
						<SmallText
							text='SubTotal'
							color='dark'
						/>
						<SmallText
							text={`$ ${this.props.subtotal} MXN`}
						/>
					</View>
				</View>
			</View>
		);
	}
}

OrderCardDescription.propTypes = {
	title: PropTypes.string,
	position: PropTypes.string,
	creation: PropTypes.string,
	subtotal: PropTypes.number,
	tag: PropTypes.string,
}

OrderCardDescription.defaultProps = {
	title: 'Pedido',
	position: '1',
	creation: moment().format('LL'),
	subtotal: 0,
	tag: 'Expirada',
}
