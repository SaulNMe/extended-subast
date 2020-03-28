import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import Local from 'cotizame-native/app/services/Local';
import LabelText from 'cotizame-native/app/components/LabelText';
import SimpleCard from 'cotizame-native/app/components/SimpleCard';
import InlineBodyText from 'cotizame-native/app/components/InlineBodyText';

import styles from './ServiceCardStyle';

export default class ServiceCard extends Component {
	render() {
		return (
			<React.Fragment>
				<SimpleCard
					elevation
				>
					<View style={[styles.row, styles.justifyContentSpaceBetween, styles.marginBottom]}>
						<LabelText
							text={this.props.title}
							color='darker'
							weight='bold'
						/>
					</View>
					<InlineBodyText 
						leftText={Local.get('serviceCard.line')}
						rightText={this.props.line}
						colorLeft='blue'
						colorRight='darker'
					/>
					<InlineBodyText 
						leftText={Local.get('serviceCard.serviceNo')}
						rightText={this.props.serviceNo}
						colorLeft='blue'
						colorRight='darker'
					/>
					<InlineBodyText 
						leftText={Local.get('serviceCard.quantity')}
						rightText={this.props.quantity}
						colorLeft='blue'
						colorRight='darker'
					/>
					<InlineBodyText 
						leftText='UM'
						rightText={this.props.UM}
						colorLeft='blue'
						colorRight='darker'
					/>
					<InlineBodyText 
						leftText={Local.get('serviceCard.currency')}
						rightText={this.props.currency}
						colorLeft='blue'
						colorRight='darker'
					/>
				</SimpleCard>
			</React.Fragment>
		);
	}
}

	ServiceCard.propTypes = {
		title: PropTypes.string,
		line: PropTypes.string,
		quantity: PropTypes.string,
		serviceNo: PropTypes.string,
		UM: PropTypes.string,
		currency: PropTypes.string,
	}

	ServiceCard.defaultProps = {
		title: '',
		line: '',
		quantity: '',
		serviceNo: '',
		UM: '',
		currency: '',
	}
