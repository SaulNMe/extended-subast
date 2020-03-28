import React, { Component } from 'react';
import { 
	Text, 
	View,
	Image,
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './SubscriptionSwitchStyle';
import LabelText from 'cotizame-native/app/components/LabelText';
import SwitchBtn from 'cotizame-native/app/components/SwitchBtn';
import Divider from 'cotizame-native/app/components/Divider';

export default class SubscriptionSwitch extends Component {
	state = {
		value: this.props.value
	}
	render() {
		return (
			<React.Fragment>
				<View style={[styles.row, styles.alignItemsCenter]}>
					<Image
						source={this.props.imageUrl ? {uri: this.props.imageUrl} : require('cotizame-native/assets/msgLogo.png')}
						style={styles.imageStyle}
						resizeMode='cover'
					/>
					<View style={styles.flex1}>
						<LabelText
							text={this.props.title}
							color='darker'
							weight='medium'
						/>
					</View>
					<SwitchBtn 
						btnValue={this.state.value}
						onPress={(value)=>{ this.setState({value}) }}
						noMargin
					/>
				</View>
				<Divider 
					marginVertical
					disabled
				/>
			</React.Fragment>
		);
	}
}

SubscriptionSwitch.propTypes = {
	imageUrl: PropTypes.string,
	title: PropTypes.string,
	value: PropTypes.bool
}

SubscriptionSwitch.defaultProps = {
	imageUrl: '',
	title: 'Empty subscription',
	value: false,

}
