import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
	Text,
	View,
	Image,
	TouchableOpacity
} from 'react-native';

import styles from './ReqItemStyle';
import SmallText from 'cotizame-native/app/components/SmallText';
import BodyText from 'cotizame-native/app/components/BodyText';
import Feather from 'react-native-vector-icons/Feather';
import RNMomentCountDown from 'react-native-moment-countdown';
import { Colors } from 'cotizame-native/app/styles';
import moment from 'moment';
import Local from 'cotizame-native/app/services/Local';


export default class ReqItem extends Component {
	constructor (props) {
		super(props)
		this.state = { endCountdown: false, hourLimit: false }
	}

	countdownEnd = () => {
		this.setState({ endCountdown: true });
	}

	handleUrl = (url) => {
		let newUrl = {uri: 'https://drive.google.com/uc?id='+ url};
		return newUrl;
	}

	onHourLimit = (expiration) => {
		let hour = String(moment().add(1, 'h').format('YYYY-MM-DD HH:mm:ss'));
		return moment(expiration).isBefore(hour) ? styles.redText : null;
	}

	render(){ 
		let now  = String(moment().format('YYYY-MM-DD HH:mm:ss'));
		let expiration  = String(moment(this.props.expirationDatetime).format('YYYY-MM-DD HH:mm:ss'));

		return (
			<View>
				<View style={[styles.row, this.props.marginHorizontal && styles.marginHorizontal]}>
					{!this.props.noImage &&
						<View style={[styles.justifyContentCenter, styles.marginRight]}>
							{this.props.url ?
							<Image source={this.handleUrl(this.props.url)} style={styles.imageStyle}/> :
							<Image source={require('cotizame-native/assets/msgLogo.png')} style={styles.imageStyle}/>
							}
						</View>
					}
					<View style={styles.flex1}>
						<View style={[styles.row]}>
							<View style={styles.flex1}>
								<SmallText
									text= {this.props.label} 
									color='subdued'
								/>
								<BodyText
									text= {this.props.title}
									color='black'
									weight='medium'
								/>
							</View>
							{!this.props.noMoreButton && 
								<View>
									<TouchableOpacity>
										<Feather name='more-vertical' size={24} color={Colors.light}/>
									</TouchableOpacity>
								</View>
							}
						</View>
						<View style={[styles.row, styles.justifyContentSpaceBetween]}>
							<View style={[styles.justifyContentSpaceBetween, styles.flex1, styles.row]}>
								<View style={styles.column}>
									<SmallText
										text={Local.get('reqItem.bestPrice')}
										color='subdued'
									/>
									<SmallText 
										text={this.props.price === null ? '--' : "$ " + String(this.props.price) + " MXN"}
										color='darker'
										weight='regular'
									/>
								</View>
								<View style={styles.column}>
									<SmallText
										text={Local.get('reqItem.time')}  
										color='subdued'
									/>
									{this.state.endCountdown ?
										<SmallText
											testId="hue"
											text={Local.get('reqItem.expired')}
											color='red'
										/>
										:
										<RNMomentCountDown
						 					timeStyle={[styles.dateStyle, this.onHourLimit(expiration)]}
						 					toDate= {expiration}
						 					sourceFormatMask='YYYY-MM-DD HH:mm:ss'
						 					onCountdownEnd={this.countdownEnd}
						 				 />
									}
								</View>
							</View>
						</View>
					</View>
				</View>
			</View>
		);}
}


ReqItem.propTypes = {
	label: PropTypes.string,
	title: PropTypes.string,
	price: PropTypes.string,
	expirationDatetime: PropTypes.string,
	marginHorizontal: PropTypes.bool,
	noImage: PropTypes.bool,
	noMoreButton: PropTypes.bool,
	url: PropTypes.string,
}

ReqItem.defaultProps = {
	label: '',
	title: '',
	price: null,
	expirationDatetime: moment(0).format('YYYY-MM-DD HH:mm:ss'),
	marginHorizontal: false,
	noImage: false,
	noMoreButton: false,
	url: ''
}
