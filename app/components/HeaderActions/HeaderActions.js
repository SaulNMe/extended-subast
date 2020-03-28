import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './HeaderActionsStyle';
import CommentsButton from 'cotizame-native/app/components/CommentsButton';
import ReactionButton from 'cotizame-native/app/components/ReactionButton';
import PrimaryBtn from 'cotizame-native/app/components/PrimaryBtn';

export default class HeaderActions extends Component {
	

	hasReactionView = (hasReaction) => hasReaction? (
	<View style={[styles.column]}>
		<ReactionButton
			id={this.props.id}
			selected={this.props.isFavorite}
			handleIsFavorite={this.props.handleIsFavorite}
			isLoading={this.props.isLoading}
		/>
	</View>
	):(<View />) 

	hasCommentsView = (hasComments) => {
		return hasComments ? (
			<View style={[styles.column]}>
				<CommentsButton
					textNotification={this.props.messages}
					onPress={this.props.messageAction}
				/>
			</View>
		):(<View />);
	}

	hasButtonView = (hasButton) => {
		return hasButton ?(
			<View style={{width: this.props.width}}>
				<PrimaryBtn
					colorTxt={this.props.btnText}
					colorBckg={this.props.colorTxt}
					text={this.props.text}
					isRounder
					height={35}
					onPress={this.props.onPress}
				/>
			</View>
		):(<View />);} 

	render() {

		return (
			<View style={[styles.row, styles.alignItemsCenter, styles.justifyContentFlexEnd]}> 
				{ this.hasReactionView(this.props.hasReaction) }
				{ this.hasCommentsView(this.props.hasComments) }
				{ this.hasButtonView(this.props.hasButton)}
			</View>
		);
	}
}

HeaderActions.propTypes = {
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

HeaderActions.defaultProps = {
	messages: 30,
	messageAction: () => {},
	likeAction: () => {}, 
	buttonAction: () => {},
	hasReaction: true,
	hasComments: true,
	hasButton: true,
	id: 0,
	isLoading: false,
	btnText: 'white',
	colorTxt: 'blue',
	text: 'Cotizar',
	width: 100,
	onPress: () => {},

}
