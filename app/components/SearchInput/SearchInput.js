import React, { Component } from 'react';
import {
	Text,
	View,
	TextInput
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './SearchInputStyle';
import Local from 'cotizame-native/app/services/Local';
import { Colors, Metrics } from 'cotizame-native/app/styles';
import TouchableIcon from 'cotizame-native/app/components/TouchableIcon';
import Feather from 'react-native-vector-icons/Feather';

export default class SearchInput extends Component {

	constructor (props) {
		super(props);
		this.state = { text: props.value, focused: false };
		this.input = null;
	}

	onChangeText = (text) => this.setState({ text });

	render() {
		const searchIconColor = this.state.focused || this.state.text ? Colors.blue : Colors.subdued;
		return (
			<View style={[styles.searchCard, styles.iconPadding, styles.baseMargin, styles.paddingAround]}>
				<View style={[styles.row, styles.alignItemsCenter, styles.flex095]}>
					<Feather  
						name='search'
						size={Metrics.icons.small}
						color={searchIconColor}
					/>
					<View style={[styles.baseMargin, styles.smallMarginHorizontal, styles.inputContainer]}>
						<TextInput 
							placeholder={Local.get('searchInput')} 
							onChangeText={this.onChangeText}
							defaultValue={this.props.value}
							onFocus={() => this.setState({focused: true})}
							onBlur={() => this.setState({focused: false})}
							selectionColor={Colors.mainText}
							ref={input => { this.input = input }}
							underlineColorAndroid='transparent'
							onSubmitEditing={() => {
								this.props.onSearch(this.state.text)
							}}
						/>
					</View>
				</View>
				<View style={[styles.row]}>
					<View style={[styles.smallMarginRight]}>
						<TouchableIcon 
							onPress={() => {
								this.setState({ text: '' });
								this.input.blur();
								this.props.onSearch('');
								this.input.clear()
							}}
							iconName='x'
							iconSize='small'
							iconColor={this.state.text != '' ? Colors.subdued : Colors.lighterBlue}
						/>
					</View>
					<TouchableIcon 
						onPress={() => {
							this.props.onIconPress();
						}}
						iconName='sliders'
						iconSize='small'
						iconColor={searchIconColor}
					/>
				</View>
			</View>
		);
	}
}

SearchInput.propTypes = {
	placeholder: PropTypes.string,
	text: PropTypes.string,
	onSearch: PropTypes.func,
}

SearchInput.defaultProps = {
	placeholder: 'Búsqueda',
	text: '',
	onSearch: () => {}
}
