import React, { Component } from 'react';
import { Text, View } from 'react-native';
import SmallText from 'cotizame-native/app/components/SmallText';
import BodyText from 'cotizame-native/app/components/BodyText';

import PropTypes from 'prop-types';

import styles from './DetailHeaderStyle';

export default class DetailHeader extends Component {
	render() {
		return (
			<React.Fragment>
				<SmallText
					text= {this.props.label} 
					color='subdued'
				/>
				<BodyText
					text= {this.props.title}
					color='black'
					weight='medium'
				/>
			</React.Fragment>
		);
	}
}

	DetailHeader.propTypes = {
		label: PropTypes.string,
		title: PropTypes.string
	}

	DetailHeader.defaultProps = {
		label: '',
		title: ''
	}
