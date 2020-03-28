import React, { Component } from 'react';
import { TouchableOpacity, View, SafeAreaView } from 'react-native';
import PropTypes from 'prop-types';

import styles from './BottomBarStyle';
import { Colors } from 'cotizame-native/app/styles';
import Local from 'cotizame-native/app/services/Local';
import { BottomTabBar } from 'react-navigation-tabs';
import Feather from 'react-native-vector-icons/Feather';
import TinyText from 'cotizame-native/app/components/TinyText';
import { ApplicationStyles } from 'cotizame-native/app/styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class BottomBar extends Component {
	//let routeName = this.props.navigation.state.routes[this.props.navigation.state.index].routeName		

	state = {
		routeName: this.props.navigation.state.routes[this.props.navigation.state.index].routeName,
		arrayColors:[
			Colors.blue,
			Colors.light,
			Colors.light,
			Colors.light,
			Colors.light
		]
	}
	handleNavigation(screen){
		let arrayColors = this.state.arrayColors;
		arrayColors = arrayColors.map(i => i = Colors.light);
		if(screen === 'DashboardScreen') arrayColors[0] = Colors.blue;
		if(screen === 'OffersTabNavigator') arrayColors[1] = Colors.blue;
		if(screen === 'OrdersStackNavigator') arrayColors[2] = Colors.blue;
		if(screen === 'SearchStackNavigator') arrayColors[3] = Colors.blue;
		if(screen === 'ProfileStackNavigator') arrayColors[4] = Colors.blue;
		this.setState({ arrayColors }, () => this.props.navigation.navigate(screen));
	}
	render() {
		return (
			<SafeAreaView style={styles.whiteBg}>	
				<View style={styles.Divider} />
				<View style={[styles.container, styles.row, styles.justifyContentSpaceAround]}>
					<TouchableOpacity 
						onPress={() => this.handleNavigation('DashboardScreen')}
						style={[styles.centerObjects, styles.Boxes]}
						activeOpacity={0.5}
					>
						<View style={styles.marginIos}>
							<Feather 
								name={'compass'} 
								size={25}
								color={this.state.arrayColors[0]}
							/>
						</View>
						<TinyText
							text={Local.get('bottomBar.dashboard')}
							color={(this.state.arrayColors[0] === '#2D9CDB')? 'blue':'light'}
							weight='light'
						/>
					</TouchableOpacity>
					<TouchableOpacity 
						onPress={() => this.handleNavigation('OffersTabNavigator')}
						activeOpacity={0.5}
						style={[styles.centerObjects, styles.Boxes]}
					>
						<View style={styles.marginIos}>
							<Feather 
								name={'tag'} 
								size={25}
								color={this.state.arrayColors[1]}
							/>
						</View>
						<TinyText
							text={Local.get('bottomBar.offers')}
							color={(this.state.arrayColors[1] === '#2D9CDB')? 'blue':'light'}
							weight='light'
						/>
					</TouchableOpacity>
					<TouchableOpacity 
						onPress={() => this.handleNavigation('OrdersStackNavigator')}
						activeOpacity={0.5}
						style={[styles.centerObjects, styles.Boxes]}
					>
						<View style={styles.marginIos}>
							<Feather 
								name={'check-square'} 
								size={25}
								color={this.state.arrayColors[2]}
							/>
						</View>
						<TinyText
							text={Local.get('bottomBar.orders')}
							color={(this.state.arrayColors[2] === '#2D9CDB')? 'blue':'light'}
							weight='light'
						/>
					</TouchableOpacity>
					<TouchableOpacity 
						onPress={() => this.handleNavigation('SearchStackNavigator')}
						activeOpacity={0.5}
						style={[styles.centerObjects, styles.Boxes]}
					>
						<View style={styles.marginIos}>
							<MaterialIcons 
								name={'map'} 
								size={25}
								color={this.state.arrayColors[3]}
							/>
						</View>
						<TinyText
							text={Local.get('bottomBar.search')}
							color={(this.state.arrayColors[3] === '#2D9CDB')? 'blue':'light'}
							weight='light'
						/>
					</TouchableOpacity>
					<TouchableOpacity 
						onPress={() => this.handleNavigation('ProfileStackNavigator')}
						activeOpacity={0.5}
						style={[styles.centerObjects, styles.Boxes]}
					>
						<View style={styles.marginIos}>
							<Feather 
								name={'user'} 
								size={25}
								color={this.state.arrayColors[4]}
							/>
						</View>
						<TinyText
							text={Local.get('bottomBar.profile')}
							color={(this.state.arrayColors[4] === '#2D9CDB')? 'blue':'light'}
							weight='light'
						/>
					</TouchableOpacity>
				</View>
			</SafeAreaView>
		);
	}
}

	BottomBar.propTypes = {
		// data: PropTypes.array
	}

	BottomBar.defaultProps = {
		// data: []
	}
