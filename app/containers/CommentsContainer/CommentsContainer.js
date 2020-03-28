import React, { Component } from 'react';
import {
	View,
	Text,
} from 'react-native';

import CommentItem from 'cotizame-native/app/components/CommentItem';
import LabelText from 'cotizame-native/app/components/LabelText';
import SecondaryBtn from 'cotizame-native/app/components/SecondaryBtn';
import Local from 'cotizame-native/app/services/Local';

import { Metrics } from 'cotizame-native/app/styles';
import { connect } from "react-redux";
import { 
	getCommentsSize,
	getIsLoadingComments,
	getErrorComments
} from "cotizame-native/app/reducers";

import NavigationService from 'cotizame-native/app/services/NavigationService.js';
import ApiMapContainer from 'cotizame-native/app/containers/ApiMapContainer';
import { fetchCommentsBatch} from "cotizame-native/app/actions/CommentsActions";


class CommentsContainer extends Component {

	state = {
		commentPosition: 0
	}

	render() {
		return(
			<View 
				style={this.props.style}
				onLayout={e => {
				    const layout = e.nativeEvent.layout;
				    this.setState({commentPosition: layout.y});
				}}
			>
				<LabelText
					text={Local.get('tenderDetailScreen.comments')}
					color='darker'
					weight='medium'
				/>
				<ApiMapContainer 
					id={this.props.messageId}
					loadData={() => this.props.fetchCommentsBatch({
						referenceId: this.props.keyId,
						type: this.props.type
					})}
					data={this.props.comments}
					renderItem={(item) => (<CommentItem item={item}/>)}
					isLoading={this.props.isLoading}
					emptyTitle= {'errorState.head'}
					emptySubtitle= {'errorState.subtitle'}
					error={String(this.props.error)}
				/>
				<View style={this.props.baseMargin}>
					<LabelText
						text={Local.get('tenderDetailScreen.questions')}
						color='darker'
						weight='medium'
					/>
					<View style={this.props.baseMargin}>
						<SecondaryBtn
							onPress={()=> {
								NavigationService.navigate('CommentsScreen', {
									keyId: this.props.keyId,
									type: this.props.type
								})
							}}
							text={Local.get('tenderDetailScreen.writeComment')}
						/>
					</View>
				</View>
			</View>
		);
		
	}
}
mapStateToProps = (state, ownProps) => ({
	comments: getCommentsSize(state, ownProps.keyId, 3),
	isLoading: getIsLoadingComments(state),
	error: getErrorComments(state),
})

CommentsContainer.propTypes = {
}

CommentsContainer.defaultProps = {
}

export default connect(
	mapStateToProps,
	{
		fetchCommentsBatch,
	}
)(CommentsContainer);
