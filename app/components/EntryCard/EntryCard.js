import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
	View
} from 'react-native';

import styles from './EntryCardStyle';
import InlineBodyText from 'cotizame-native/app/components/InlineBodyText';
import SimpleCard from 'cotizame-native/app/components/SimpleCard';
import LabelText from 'cotizame-native/app/components/LabelText';
import Local from 'cotizame-native/app/services/Local';

export default class EntryCard extends Component {
	render = () => (
		<View>
			<SimpleCard>
				<View style={styles.smallMarginBottom}>
					<LabelText
						text= {Local.get('entryCardComponent.number') + this.props.title}
						color='darker'
						weight='bold'
					/>
				</View>
				<InlineBodyText 
					leftText={Local.get('entryCardComponent.entryDate')}
					highlight
					rightText={this.props.entryDate}
				/>
				<InlineBodyText 
					leftText={Local.get('entryCardComponent.entryHour')}
					highlight
					rightText={this.props.entryHour}
				/>
				<InlineBodyText 
					leftText={Local.get('entryCardComponent.quantity')}
					highlight
					rightText={this.props.quantity + " PZA"}
				/>
				<InlineBodyText 
					leftText={Local.get('entryCardComponent.amount')}
					highlight
					rightText={"$" + this.props.amount + " USD"}
				/>
			</SimpleCard>
		</View>
	);
}

EntryCard.propTypes = {
	title: PropTypes.string,
	entryDate: PropTypes.string,
	entryHour: PropTypes.string,
	quantity: PropTypes.string,
	amount: PropTypes.string
}

EntryCard.defaultProps = {
	title: '',
	entryDate: '',
	entryHour: '',
	quantity: '',
	amount: ''
}
