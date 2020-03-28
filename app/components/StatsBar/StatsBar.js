import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
	Text,
	View
} from 'react-native';

import style from './StatsBarStyle';
import StatsBarItem from 'cotizame-native/app/components/StatsBarItem'

export default class StatsBar extends Component {
	render = () => (
		<View style={style.container}>
			<StatsBarItem data={this.props.rating} title='Rating'/>
			<StatsBarItem data={this.props.offers} title='Ofertas'/>
			<StatsBarItem data={this.props.orders} title='Pedidos'/>
		</View>
	);
}

StatsBar.propTypes = {
	rating: PropTypes.string,
	offers: PropTypes.string,
	orders: PropTypes.string
}

StatsBar.defaultProps = {
	rating: '- -',
	offers: '- -',
	orders: '- -'
}
