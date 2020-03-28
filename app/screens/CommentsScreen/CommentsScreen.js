import React, { Component } from 'react';
import {
	View,
	Text,
	FlatList,
	KeyboardAvoidingView
} from 'react-native';

import styles from './CommentsScreenStyle';
import HeaderNav from 'cotizame-native/app/components/HeaderNav';
import BackBtn from 'cotizame-native/app/components/BackBtn';
import CommentItem from 'cotizame-native/app/components/CommentItem';
import Divider from 'cotizame-native/app/components/Divider';
import TitleText from 'cotizame-native/app/components/TitleText';
import Local from 'cotizame-native/app/services/Local';
import CommentsInput from 'cotizame-native/app/components/CommentsInput';

import CommentListContainer from 'cotizame-native/app/containers/CommentListContainer';

import ApiService from 'cotizame-native/app/services/ApiService';

export default class CommentsScreen extends Component {	
	static navigationOptions = {
		header: null
	}
	state = {
		keyId: '',
		type: '',
		comment: ''
	}

	componentDidMount () {
		const { navigation } = this.props;
		const keyId = navigation.getParam('keyId', '');
		const type = navigation.getParam('type', '');
		this.setState({ keyId, type });
	}

	async setForum(text) {
		await ApiService.setForum(this.state.type, this.state.keyId, text);
	} 
	render() {
		return (
			<View style={[styles.container]}>
				<HeaderNav
					headerLeft={
						<BackBtn
							navigation={this.props.navigation}
							backLabel
						/>
					}
				/>
					<KeyboardAvoidingView style={styles.flex1} behavior="padding" enabled>
						<View style={[styles.marginHorizontal, styles.smallMarginBottom]}>
							<TitleText
								text={Local.get('requisitionsDetailScreen.comments')}
								weight='medium'
							/>
						</View>
						<CommentListContainer
							type={ this.state.type}
							keyId={ this.state.keyId } 
						/>
						<CommentsInput 
							value={this.state.comment}
							onPress={(txt) => this.setForum(txt)}
						/>
					</KeyboardAvoidingView>

			</View>
		);
	}
}
