import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
	Text,
	View,
	Image,
} from 'react-native';

import styles from './InlineBodyTextStyle';
import { Colors } from 'cotizame-native/app/styles';

import LabelText from 'cotizame-native/app/components/LabelText';
import Divider from 'cotizame-native/app/components/Divider';
import Feather from 'react-native-vector-icons/Feather';
import Foundation from 'react-native-vector-icons/Foundation';


export default class InlineBodyText extends Component {
	
	handleRightText = (text) => {
		return;
		if (text) {
			if(text.search('.pdf') > 0) {
				return <View style={[styles.column]}>
					<Image
						source={require('cotizame-native/assets/pdf-icon.png')}
						style={styles.pdfIcon}
					/>
				</View>			
			}
			if(text.search('.docx') > 0 || text.search('.xls') > 0 || text.search('ppt') > 0 || text.search('txt') > 0) {
				return <View style={[styles.column]}>
					<Foundation color={Colors.dark}	size={24} name='page' style={{marginRight: 8}}/>
				</View>		
			}
		}
	}

	render (){ 
		const iconColor = this.props.iconColor ? { color: Colors[this.props.iconColor] }: { color: Colors.black };
		leftText = this.props.hasIcon ? 
			<View style={[styles.row, styles.centerObjects]}>
				<Feather  name='calendar' size={20} color={iconColor.color}/>
				<View style={styles.marginHorizontal}>
					<LabelText
						text= {this.props.leftText}
						color={this.props.colorLeft}
						weight='regular'
					/>
				</View>
			</View>
			:
			<LabelText
				text= {this.props.leftText}
				color={this.props.colorLeft}
				weight='regular'
			/>

		return (
			<React.Fragment key={this.props.key}>
				<View style={[styles.row, this.props.margin && styles.marginHorizontal]}>
					<View style={styles.flex1}>
						{leftText}
					</View>
					<View style={styles.alignItemsFlexEnd}>
						<View style={[styles.row, styles.centerObjects]}>
							{this.handleRightText(this.props.rightText)}
							<React.Fragment>
								<LabelText 
									text={this.props.rightText}
									color={this.props.colorRight}
								/>
							</React.Fragment>
						</View>
					</View>
				</View>
				<Divider 
					marginVertical
				/>
			</React.Fragment>
		);
	}
}

InlineBodyText.propTypes = {
	colorLeft: PropTypes.string,
	colorRight: PropTypes.string,
	leftText: PropTypes.string,
	rightText: PropTypes.string,
	highlight: PropTypes.bool,
	margin: PropTypes.bool,
	hasIcon: PropTypes.bool,
	key: PropTypes.string
}

InlineBodyText.defaultProps = {
	leftText: '',
	rightText: '',
	highlight: false,
	colorLeft: 'blue',
	colorRight:'dark',
	margin: false,
	hasIcon: false,
	key: ''
}
