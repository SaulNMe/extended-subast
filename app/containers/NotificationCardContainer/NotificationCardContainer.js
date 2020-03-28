import React, { Component } from 'react';
import {
	View,
	Text,
} from 'react-native';

import { connect } from "react-redux";
import NotificationCard from 'cotizame-native/app/components/NotificationCard';
import { getSummary } from 'cotizame-native/app/actions/SummaryActions';
import Local from 'cotizame-native/app/services/Local';

class NotificationCardContainer extends Component {	

	componentDidMount(){
		this.props.dispatch(getSummary());
	}
	
	render() {
		return (
			<View style={this.props.style}>	
				<NotificationCard 
					color='tagGreen'
					iconName='tag'
					dataNumber={this.props.summary.NewRequest}
					text={Local.get('dashboardScreen.applications')}
				/>
				<NotificationCard 
					color='tagOrange'
					iconName='clock'
					dataNumber={this.props.summary.QuotesInProcess}
					text={Local.get('dashboardScreen.quotes')}
				/>
				<NotificationCard 
					color='tagBlue'
					iconName='calendar'
					dataNumber={this.props.summary.CurrentOrders}
					text={Local.get('dashboardScreen.purchase')}
				/>
			</View>
		);
	}
}

mapStateToProps = state => ({
	summary: state.Summary.summary,
})

export default connect(mapStateToProps)(NotificationCardContainer);
