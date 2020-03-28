import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './LinesStyle';
import InlineBodyText from 'cotizame-native/app/components/InlineBodyText';
import SimpleCard from 'cotizame-native/app/components/SimpleCard';
import LabelText from 'cotizame-native/app/components/LabelText';
import SubtitleText from 'cotizame-native/app/components/SubtitleText';
import Local from 'cotizame-native/app/services/Local';

export default class Lines extends Component {
	render() {
		return (
			<SimpleCard>
				<View style={styles.smallMarginBottom}>
					<LabelText
						text= {Local.get('linesComponent.lines') + this.props.id}
						color='darker'
						weight='medium'
					/>
					<SubtitleText
						text= { this.props.title}
						color= 'darker'
						weight= 'bold'
					/>
				</View>
				<InlineBodyText 
					leftText={Local.get('entryCardComponent.quantity')}
					highlight
					rightText={this.props.quantity + "PZA"}
				/>
				<InlineBodyText 
					leftText='Subtotal'
					highlight
					rightText={`$ ${this.props.amount} ${this.props.currency}`}
				/>
			</SimpleCard>
		);
	}
}

	Lines.propTypes = {
		id: PropTypes.string,
		title: PropTypes.string,
		quantity: PropTypes.string,
		amount: PropTypes.string,
		currency: PropTypes.string,
	}

	Lines.defaultProps = {
		id: '',
		title: '',
		quantity: '',
		amount: '',
		currency: ''
	}
