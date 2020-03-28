import React, { Component } from 'react';
import { 
	Text, 
	View,
	Image
} from 'react-native';
import PropTypes from 'prop-types';
import LabelText from 'cotizame-native/app/components/LabelText';

import styles from './MaterialInfoStyle';

export default class MaterialInfo extends Component {
	handleUrl = (url) => {
		let newUrl = {uri: 'https://drive.google.com/uc?id='+ url};
		return newUrl;
	}
	render() {
		return (
			<React.Fragment>
				<LabelText
					text={this.props.title}
					color='darker'
					weight='medium'
				/>
				<View style={[styles.row, styles.marginVertical, styles.alignItemsCenter]}>
					<Image
						source={ this.props.imageURL ? this.handleUrl(this.props.imageURL) : require('cotizame-native/assets/msgLogo.png')}
						resizeMode='cover'
						style={styles.materialContainer}
					/>
					<View style={[styles.flex1, styles.marginHorizontal]}>
						<LabelText
							text={this.props.description}
							color='dark'
						/>
					</View>
				</View>
			</React.Fragment>


		);
	}
}

	MaterialInfo.propTypes = {
		title: PropTypes.string,
		imageURL: PropTypes.string,
		description: PropTypes.string
	}

	MaterialInfo.defaultProps = {
		title: '',
		imageURL: '',
		description: ''

	}
