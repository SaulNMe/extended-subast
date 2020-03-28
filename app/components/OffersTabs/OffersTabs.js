import React, { Component } from 'react';
import { 
	Text,
	View,
	TouchableOpacity,
	StatusBar,
	SafeAreaView
} from 'react-native';
import PropTypes from 'prop-types';
import { Colors, Metrics } from 'cotizame-native/app/styles';
import SegmentedControlOffersTab from 'cotizame-native/app/components/SegmentedControlOffersTab';
import TitleText from 'cotizame-native/app/components/TitleText';
import Local from 'cotizame-native/app/services/Local';
import styles from './OffersTabsStyle';

export default class OffersTabs extends Component {	
	render() {
		let routeName = this.props.navigation.state.routes[this.props.navigation.state.index].routeName
		return (
			<SafeAreaView style={[styles.whiteBg, styles.statusBarSpace]}>
				<StatusBar barStyle="dark-content"/>
				<View style={[styles.marginHorizontal, styles.marginVertical]}>
					<TitleText
						text={Local.get('OffersTabs.title')}
						weight='bold'
						color= 'cotizame'
					/>
				</View>
				<View style={styles.smallMarginBottom}>
					<SegmentedControlOffersTab 
						leftText={Local.get('OffersTabs.left')}
						leftName={'OffersScreen'}
						rightText={Local.get('OffersTabs.right')}
						rightName={'TenderScreen'}
						leftAction={() => this.props.navigation.navigate('OffersScreen')}
						rightAction={() => this.props.navigation.navigate('TenderScreen')}
						current={routeName}
					/>
				</View>
			</SafeAreaView>
		);
  }
}
