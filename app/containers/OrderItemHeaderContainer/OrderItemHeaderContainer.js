import React, { Component } from 'react';
import {
	View,
	Text,
} from 'react-native';

import { connect } from "react-redux";
import { 
	getCurrentOrderId
} from "cotizame-native/app/reducers";
import PositionDisplayDetail from 'cotizame-native/app/components/PositionDisplayDetail';

class OrderItemHeaderContainer extends Component {	
	componentDidMount = () => {
		this.props.onRender(this.props.current)
	}
	render() {
		return (
				<PositionDisplayDetail
					label= {this.props.current.Position}
					title={this.props.current.BriefText}
					date={this.props.current.DocumentDate}
					amount={String(this.props.current.NetPrice)}
					marginHorizontal
					onPress={() => {}}
				/>
		);
	}
}


mapStateToProps = state => ({
	current: getCurrentOrderId(state),
})

OrderItemHeaderContainer.propTypes = {
}

OrderItemHeaderContainer.defaultProps = {
}

export default connect(
	mapStateToProps,
)(OrderItemHeaderContainer);