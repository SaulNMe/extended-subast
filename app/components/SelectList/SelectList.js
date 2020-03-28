import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
	Text,
	View
} from 'react-native';

import styles from './SelectListStyle';
import CheckItem from 'cotizame-native/app/components/CheckItem';
import { Colors } from 'cotizame-native/app/styles';

export default class SelectList extends Component {
	render () {
		const items = this.props.items.map((item, index)=>{
			var icon = item.value === this.props.selected ? 'check-circle' : 'circle';
			var iconColor = item.value === this.props.selected ? Colors.green : Colors.dark;
			return (
				<CheckItem
					item={item}
					value={item.value}
					label={item.label}
					iconName={icon}
					color={iconColor}
					onPress={(value)=>this.props.onSelect(value)}
					key={item.value}
				/>
			)
		})
		return (
			<View style={[styles.fullWidth, styles.marginTop]}>
				{items}
			</View>
		);
	}
}

SelectList.propTypes = {
	items: PropTypes.array
}

SelectList.defaultProps = {
	items: []
}
