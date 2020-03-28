import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	Text,
	View,
	TouchableOpacity
} from 'react-native';

import styles from './OfferItemStyle';
import TagItem from 'cotizame-native/app/components/TagItem';
import BodyText from 'cotizame-native/app/components/BodyText';
import LabelText from 'cotizame-native/app/components/LabelText';
import SmallText from 'cotizame-native/app/components/SmallText';
import TinyText from 'cotizame-native/app/components/TinyText';
import RNMomentCountDown from 'react-native-moment-countdown';
import Local from 'cotizame-native/app/services/Local';
import moment from 'moment';

export default class OfferItem extends Component {

	constructor (props) {
		super(props)
		this.state = { endCountdown: false, hourLimit: false }
	}

	countdownEnd = () => {
		this.setState({ endCountdown: true });
	}

	onHourLimit = (expiration) => {
		let hour = String(moment().add(1, 'h').format('YYYY-MM-DD HH:mm:ss'));
		return moment(expiration).isBefore(hour) ? styles.redText : null;
	}

	render(){
		let endTime  = String(moment().format('YYYY-MM-DD HH:mm:ss'));
		let beginningTime  = String(moment(this.props.time).format('YYYY-MM-DD HH:mm:ss'));

		return (
			<TouchableOpacity
				onPress={this.props.onPress}
				activeOpacity={.5}
				style={[styles.marginHorizontal, styles.smallMarginVertical]}
			>
				<View style={styles.row}>
					<View style={styles.flex1}>
						<SmallText
							text= {this.props.label} 
							color='dark'
						/>
						<BodyText
							text={this.props.title}
							color='darker'
							weight='medium'
						/>
					</View>
					<View>
						{this.props.tags && <TagItem 
							tag={this.props.tag}
						/>}
					</View>
				</View>
				<View style={[styles.row, styles.justifyContentSpaceBetween, styles.tinyMargin]}>
					<View>
						<SmallText
							text= {Local.get('tenderDetailScreen.kind')}
							color='subdued'
						/>
						<SmallText
							text={this.props.kind}
							color='darker'
						/>
					</View>
					<View>
						<SmallText
							text= {Local.get('tenderDetailScreen.bestPrice')}
							color='subdued'
						/>
						<SmallText 
							text={this.props.price === null ? '--' : ("$ " + String(this.props.price) + " MXN")}
							color='darker'
						/>
					</View>
					<View>
						<SmallText
							text={Local.get('tenderDetailScreen.time')}
							color='subdued'
						/>
						{this.state.endCountdown ?
							<SmallText
								text={Local.get('reqItem.expired')}
								color='red'
							/>
							:
							<RNMomentCountDown
			 					timeStyle={[styles.dateStyle, this.onHourLimit(beginningTime)]}
			 					toDate= {beginningTime}
			 					sourceFormatMask='YYYY-MM-DD HH:mm:ss'
			 					onCountdownEnd={this.countdownEnd}
			 				 />
						}
					</View>
				</View>
			</TouchableOpacity>
		)
	}
}

OfferItem.propTypes = {
	label: PropTypes.string,
	title: PropTypes.string,
	kind: PropTypes.string,
	price: PropTypes.string,
	time: PropTypes.string,
	tag: PropTypes.string,
	onPress: PropTypes.func

}

OfferItem.defaultProps = {
	label: '',
	title: '',
	kind: '',
	price: '',
	time: moment(0).format('YYYY-MM-DD HH:mm:ss'),
	tag: '',
	onPress: ()=>{}
}
