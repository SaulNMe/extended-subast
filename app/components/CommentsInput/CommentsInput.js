import React, { Component } from 'react';
import { 
	Text,
	View,
	TextInput,
	SafeAreaView 
} from 'react-native';
import PropTypes from 'prop-types';
import Feather from 'react-native-vector-icons/Feather';
import TouchableIcon from 'cotizame-native/app/components/TouchableIcon';
import { Colors, Metrics } from 'cotizame-native/app/styles';

import styles from './CommentsInputStyle';

export default class CommentsInput extends Component {
	constructor (props) {
		super(props);
		this.state = { text: props.value, focused: false };
	}

	onChangeText = (text) => this.setState({ text });

	render() {
		const searchIconColor = this.state.focused || this.state.text ? Colors.blue : Colors.subdued;
		return (
			<SafeAreaView style={[styles.card, styles.row, styles.alignItemsCenter, styles.smallVerticalPadding]}>
				<View style={[styles.flex1, styles.smallMarginHorizontal]}>
					<TextInput 
						defaultValue={this.props.value}
						placeholder={this.props.placeholder}
						onChangeText={this.onChangeText}
						onFocus={() => this.setState({focused: true})}
						onBlur={() => this.setState({focused: false})}
						selectionColor={Colors.mainText}
						underlineColorAndroid='transparent'
					/>
				</View>
				<View style={styles.smallMarginHorizontal}>
					<TouchableIcon
						disabled={!this.state.text} 
						onPress={() => this.props.onPress(this.state.text)}
						iconName='send'
						iconSize='small'
						iconColor={searchIconColor}
					/>
				</View>
			</SafeAreaView>
		);
	}
}

	CommentsInput.propTypes = {
		placeholder: PropTypes.string,
		onPress: PropTypes.func,
		value: PropTypes.string
	}

	CommentsInput.defaultProps = {
		placeholder: "Agrega un comentario",
		onPress: ()=>{},
		value: ''
	}
