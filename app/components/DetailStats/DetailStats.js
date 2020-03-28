import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './DetailStatsStyle';

import SmallText from 'cotizame-native/app/components/SmallText';
import LabelText from 'cotizame-native/app/components/LabelText';
import TinyText from 'cotizame-native/app/components/TinyText';
import RNMomentCountDown from 'react-native-moment-countdown';
import moment from 'moment';
import Local from 'cotizame-native/app/services/Local';


export default class DetailStats extends Component {
	render() {
		let endTime  = String(moment().format('YYYY-MM-DD HH:mm:ss'));
		let beginningTime  = String(moment(this.props.time).format('YYYY-MM-DD HH:mm:ss'));
		return (
			<View style={[styles.row, styles.justifyContentSpaceBetween, styles.baseMarginTop]}>
				<View style={[styles.centerObjects, styles.column, styles.flex1]}>
					<LabelText
						text={this.props.quantity}
						color='darker'
					/>
					<TinyText
						text={Local.get('requisitionsDetailScreen.quantity')}
						color='subdued'
					/>
				</View>
				<View style={[styles.column, styles.centerObjects, styles.flex1]}>
					<LabelText
						center
						text={'$' + this.props.price + ' MXN'}
						color='darker'
					/>
					<TinyText
						center
						text={Local.get('reqItem.bestPrice')}
						color='subdued'
					/>
				</View>
				<View style={[styles.column, styles.centerObjects, styles.flex1]}>
					{moment(beginningTime).isBefore(endTime) ?
						<LabelText
							text='Expired'
							color='red'
						/>
						:
						<RNMomentCountDown
		 					timeStyle={styles.dateStyle}
		 					toDate= {this.props.time}
		 					sourceFormatMask='YYYY-MM-DD HH:mm:ss'
		 				 />
					}
					<TinyText
						text={Local.get('reqItem.time')}
						color='subdued'
					/>
				</View>
			</View>
		);
	}
}

DetailStats.propTypes = {
	quantity: PropTypes.string,
	price: PropTypes.string,
	time: PropTypes.string
}

DetailStats.defaultProps = {
	quantity: null,
	price: '',
	time: moment(0).format('YYYY-MM-DD HH:mm:ss'),

}



					