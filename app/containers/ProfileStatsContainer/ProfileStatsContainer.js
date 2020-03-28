import React, { Component } from 'react';
import {
	View,
	Text,
} from 'react-native';

import { connect } from "react-redux";
import StatsBar from 'cotizame-native/app/components/StatsBar';
import { getSummary } from 'cotizame-native/app/actions/SummaryActions';
import Local from 'cotizame-native/app/services/Local';

class ProfileStatsContainer extends Component {	


	
	render() {
		return (
			<StatsBar
				rating={String(this.props.summary.Rating)}
				offers={String(this.props.summary.HistoricalQuotes)}
				orders={String(this.props.summary.HistoricalOrders)}
			/>
		);
	}
}

mapStateToProps = state => ({
	summary: state.Summary.summary,
})

export default connect(mapStateToProps)(ProfileStatsContainer);
