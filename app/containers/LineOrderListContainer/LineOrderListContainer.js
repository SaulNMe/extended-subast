import React, { Component } from 'react';
import {
	View,
	Text,
	FlatList
} from 'react-native';

import { connect } from "react-redux";
import { 
	getCurrentOrderId
} from "cotizame-native/app/reducers";
import Lines from 'cotizame-native/app/components/Lines';

class LineOrderListContainer extends Component {	

	render() {
		return (
			<FlatList 
				data={this.props.current.LineOrderList}
				keyExtractor={(item) => String(item.Position) }
				renderItem = {({item})=>
					<View style={this.props.style}>
						<Lines 
							id= {item.Position}
							title= {item.BriefText}
							quantity= {String(item.Quantity)}
							amount= {String(item.Total)}
							currency={item.Currency}
						/>
					</View>
				}
			/>
		);
	}
}


mapStateToProps = state => ({
	current: getCurrentOrderId(state),
})

LineOrderListContainer.propTypes = {
}

LineOrderListContainer.defaultProps = {
}

export default connect(mapStateToProps)(LineOrderListContainer);
