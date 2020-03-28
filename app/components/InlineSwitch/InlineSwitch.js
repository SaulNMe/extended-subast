import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
	Text,
	View,
	Image
} from 'react-native';

import styles from './InlineSwitchStyle';
import LabelText from 'cotizame-native/app/components/LabelText';
import SwitchBtn from 'cotizame-native/app/components/SwitchBtn';
import Divider from 'cotizame-native/app/components/Divider';

export default class InlineSwitch extends Component {
	render(){ 
		let sub = this.props.sub ? (
			<LabelText 
				text={this.props.sub}
				color='dark'
			/>
		) : null;

		let image = this.props.img ? (
			<Image 
				source={require('cotizame-native/assets/msgLogo.png')}
				style={styles.imgContainer}
			/>
		) : null;

		return (
			<React.Fragment>
				<View style={[styles.row, styles.alignItemsCenter]}>
					{image && 
						<View style={styles.marginHorizontal}>
							{image}
						</View>
					}
					<View style={[styles.flex1]}>
						<LabelText 
							text={this.props.title}
							color='main'
						/>
						{sub}
					</View>
					<View style={styles.baseMarginRight}>
						<SwitchBtn 
							btnValue={this.props.value}
							onPress={(value)=>{ this.props.onPress(value) }}
							noMargin
						/>
					</View>
				</View>
				<Divider 
					marginVertical
					disabled
				/>
			</React.Fragment>
		);
	}
}

InlineSwitch.propTypes = {
	title: PropTypes.string,
	sub: PropTypes.string,
	img: PropTypes.string,
	onPress: PropTypes.func,
	value: PropTypes.bool,
}

InlineSwitch.defaultProps = {
	title: '',
	sub: null,
	img: null,
	onPress: ()=>{},
	value: false,
}
