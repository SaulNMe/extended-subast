import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
	Text,
	View
} from 'react-native';

import styles from './TagItemStyle';

export default class TagItem extends Component {
	render () {
		let statusColor;
		switch(this.props.tag) {
			case 'Completado':
				statusColor = styles.completed;
			break;
			case 'Pendiente':
				statusColor = styles.pending;
			break;
			case 'Participando':
				statusColor = styles.joined;
			break;
			case 'Mejor Oferta':
				statusColor = styles.completed;
			break;
			case 'Expirada':
				statusColor = styles.expired;
			break;
			case 'Incompleto':
				statusColor = styles.pending;
			break;
		}
		return (
			<React.Fragment>
				<Text style={[styles.defaultProps, statusColor]}>{this.props.tag}</Text>
			</React.Fragment>
		);	
	}
}

TagItem.propTypes = {
	tag: PropTypes.string
}

TagItem.defaultProps = {
	tag: 'Completado'
}
