import React, { Component } from 'react';
import { 
	Text,
	View,
	Image,
	FlatList,
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './CommentItemStyle';
import SmallText from 'cotizame-native/app/components/SmallText';
import moment from 'moment';

export default class CommentItem extends Component {
	render() {
		return (
			<View style={[styles.row, styles.marginVertical, styles.marginHorizontal]}>
				<Image 
					source={{uri: avatar}}
					style={styles.userImage}
					resizeMode='cover'
				/>
				<View style={styles.flex1}>
					<SmallText
						text={this.props.item.Message}
						color='darker'
					/>
					<View style={styles.row}>
						<SmallText
							text={this.props.item.Username + ' - '}
							color='dark'
						/>
						<SmallText
							text={moment(this.props.item.Date).fromNow()}
							color='dark'
						/>
					</View>
				</View>
			</View>
		);
	}
}
const avatar = 'https://www.searchpng.com/wp-content/uploads/2019/02/Men-Profile-Image-715x657.png';

CommentItem.propTypes = {
	item: PropTypes.object
}

CommentItem.defaultProps = {
	item: {
		userId: '0',
		user: 'provider',
		avatar: 'https://www.searchpng.com/wp-content/uploads/2019/02/Men-Profile-Image-715x657.png',
		comment: ';)',
		date: '2019-03-20T08:00:16-06:00'
	}
}
