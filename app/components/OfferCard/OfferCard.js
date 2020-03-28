import React, { Component } from 'react';
import { 
	Text, 
	View,
	TouchableOpacity
 } from 'react-native';
import PropTypes from 'prop-types';
import LabelText from 'cotizame-native/app/components/LabelText';
import InlineBodyText from 'cotizame-native/app/components/InlineBodyText';
import ServiceCardItem from 'cotizame-native/app/components/ServiceCardItem';
import AnchorButton from 'cotizame-native/app/components/AnchorButton';
import moment from 'moment';
import styles from './OfferCardStyle';

export default class OfferCard extends Component {
	render() {
		let ComponentList = this.props.data.map((item, index) => {
			if(this.props.type === 'M') {
				return (
					<React.Fragment key={String(index)}>
						<InlineBodyText
							leftText={'Oferta minima'}
							rightText={item.Subtotal ? String(item.Subtotal) :' - - '}
							colorLeft='dark'
							colorRight='darker'
						/>
						<InlineBodyText
							leftText={'Factor de descuento'}
							rightText={item.DiscountFactor ? String(item.DiscountFactor) :' - - '}
							colorLeft='dark'
							colorRight='darker'
						/>
						<InlineBodyText
							leftText={'Válido hasta'}
							rightText={this.props.requisition.ValidityDate ? moment(this.props.requisition.ValidityDate).format('LL'):' - - '}
							colorLeft='dark'
							colorRight='darker'
						/>
						<InlineBodyText
							leftText={'Fecha de entrega'}
							rightText={this.props.requisition.DeliverDate ? moment(this.props.requisition.DeliverDate).format('LL'):' - - '}
							colorLeft='dark'
							colorRight='darker'
						/>
					</React.Fragment>
				)
			} else if (this.props.type === 'S') {
				return (
					<React.Fragment key={String(index)}>
						<ServiceCardItem 
							subtitle={item.ShortDescription ? String(item.ShortDescription) :' - - '}
							leftText1={'Oferta minima'}
							rightText1={item.Subtotal ? String(item.Subtotal) :' - - '}
							leftText2={'Factor de descuento'}
							rightText2={item.DiscountFactor ? String(item.DiscountFactor) :' - - '}
						/>
					</React.Fragment>
				)
			}

		});

		return (
			<TouchableOpacity
				{...this.props}
				activeOpacity={.5}
				style={[styles.card]}
			>
				<View style={[styles.row, styles.justifyContentSpaceBetween, styles.baseMarginBottom]}>
					<LabelText
						text={this.props.title}
						color='darker'
						weight='bold'
					/>
					<AnchorButton
						text={this.props.btnText}
						disabled
					/>
				</View>
				{ComponentList}
			</TouchableOpacity>
		);
	}
}

OfferCard.propTypes = {
	title: PropTypes.string,
	btnText: PropTypes.string,
	type: PropTypes.string,
	data: PropTypes.array,
	label: PropTypes.string,
	text: PropTypes.string,
	label1: PropTypes.string,
	text1: PropTypes.string
}

OfferCard.defaultProps = {
	title: "",
	btnText: "",
	type: "",
	data: [],
	label: "",
	text: "",
	label1: "",
	text1: ""
}
