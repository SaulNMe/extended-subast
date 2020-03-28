import React, { Component } from 'react';
import {
	View,
	Text,
} from 'react-native';

import { connect } from "react-redux";
import HeaderActions from 'cotizame-native/app/components/HeaderActions';
import { fetchRequisitionIdIsFavorite } from "cotizame-native/app/actions/RequisitionIdActions";
import PropTypes from 'prop-types';

class HeaderActionsContainer extends Component {	
	state= {
		isLoading: false
	}
	change = () => {
		this.setState({isLoading: true})
		this.props.fetchRequisitionIdIsFavorite(this.props.id)
		.then( r => {
			this.setState({isLoading: false})
		}, e => {
			this.setState({isLoading: false})
		});
	}
	render() {
		return (
			<HeaderActions
				messages={0}
				messageAction={this.props.messageAction}
				isFavorite={this.props.requisition.IsFavorite}//!!this.props.requisitions.IsFavorite == null ? false : this.props.requisitions.IsFavorite}
				id={this.props.id}
				status={this.props.requisition.Status}
				handleIsFavorite={() => this.change()}
				isLoading={this.state.isLoading}
				hasReaction={this.props.hasReaction}
				hasComments={this.props.hasComments}
				hasButton={this.props.hasButton}
				onPress={this.props.onPress}
				btnText={this.props.btnText}
				colorTxt={this.props.colorTxt}
				text={this.props.text}
				width={this.props.width}
			/>
		);
	}
}

mapStateToProps = state => ({
	requisition: state.RequisitionId.requisitionsId,
});

HeaderActionsContainer.propTypes = {
	messages: PropTypes.number,
	messageAction: PropTypes.func,
	buttonAction: PropTypes.func,
	hasReaction: PropTypes.bool,
	hasComments: PropTypes.bool,
	hasButton: PropTypes.bool,
	id: PropTypes.number,
	isFavorite: PropTypes.bool,
	isLoading: PropTypes.bool,
	btnText: PropTypes.string,
	colorTxt: PropTypes.string,
	text: PropTypes.string,
	onPress: PropTypes.func,
	width: PropTypes.number

}

HeaderActionsContainer.defaultProps = {
	messages: 30,
	messageAction: () => {},
	likeAction: () => {}, 
	buttonAction: () => {},
	hasReaction: true,
	hasComments: false,
	hasButton: false,
	id: 0,
	isLoading: false,
	btnText: 'white',
	colorTxt: 'blue',
	text: 'Cotizar',
	width: 100,
	onPress: () => {},

}
export default connect(
	mapStateToProps,
	{
		fetchRequisitionIdIsFavorite
	}
	)(HeaderActionsContainer);
