import React, { Component } from 'react';
import {
	View,
	Text,
} from 'react-native';

import ApiListContainer from 'cotizame-native/app/containers/ApiListContainer';
import CommentItem from 'cotizame-native/app/components/CommentItem';

import { connect } from "react-redux";
import { getComments, getIsRefreshingComments, getErrorComments } from "cotizame-native/app/reducers";
import { fetchCommentsBatch, reloadComments } from "cotizame-native/app/actions/CommentsActions";


class CommentListContainer extends Component {

	render() {
		return (
			<ApiListContainer
				data={this.props.Comments.reverse()}
				keyExtractor={Comments => String(Comments.MessageId)}
				loadData={() => this.props.fetchCommentsBatch({
					keyId: this.props.keyId,
					type: this.props.type
				})}
				onRefresh={this.props.reloadComments}
				renderItem={({item}) => (
					<View style={{ transform: [{ scaleY: -1 }]}}>
						<CommentItem item={item}/>
					</View>
				)}
				error={String(this.props.error)}
				onEndReached={() => this.props.fetchCommentsBatch({
					keyId: this.props.keyId,
					type: this.props.type
				})}
				isRefreshing={this.props.isRefreshing}
				isReverse
				isCommentList={false}
			/>
		);
	}
}

mapStateToProps = (state, ownProps) => ({
	Comments: getComments(state, ownProps.keyId),
	isRefreshing: getIsRefreshingComments(state),
	error: getErrorComments(state)
})

CommentListContainer.propTypes = {
}

CommentListContainer.defaultProps = {
}

export default connect(
	mapStateToProps,
	{
		fetchCommentsBatch,
		reloadComments
	}
)(CommentListContainer);

