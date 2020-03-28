import React, { Component } from 'react';
import { View } from 'react-native';

import AlertButton from 'cotizame-native/app/components/AlertButton';
import { connect } from 'react-redux';
import { fetchAlertUnread } from 'cotizame-native/app/actions/AlertsActions';
import { getAlertIcon } from 'cotizame-native/app/reducers';
import NavigationService from 'cotizame-native/app/services/NavigationService.js';

class AlertIconContainer extends Component {	

	componentDidMount(){
       		this.props.fetchAlertUnread();
	}
	
	render() {
		return (
			<View style={this.props.style}>	
				<AlertButton
                    notification = {this.props.alertsUnread.TotalUnread}
                    navigation= {this.props.navigation}
			        onPress={() => NavigationService.navigate('AlertModal')}
				/>
			</View>
		);
	}
}

mapStateToProps = state => ({
	alertsUnread: getAlertIcon(state),
})

export default connect(mapStateToProps,{
	fetchAlertUnread
})(AlertIconContainer);
