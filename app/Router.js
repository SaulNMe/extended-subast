// Use this file to create all app navigators.
import Feather from 'react-native-vector-icons/Feather';
import React, { Component } from 'react';
import { createStackNavigator, createSwitchNavigator} from 'react-navigation';
import { createBottomTabNavigator, createMaterialTopTabNavigator, TabBarBottom, BottomTabBar, MaterialTopTabBar } from 'react-navigation-tabs';


// For each navigator, import its screens. Each screen may be used in many navigators
// To add more screens, run yo rng:g screen <screen-name>

import AuthLoadingScreen from 'cotizame-native/app/screens/AuthLoadingScreen';
import WelcomeScreen from 'cotizame-native/app/screens/WelcomeScreen';
import LoginScreen from 'cotizame-native/app/screens/LoginScreen';

import AlertsScreen from 'cotizame-native/app/screens/AlertsScreen';
import FilterSearchScreen from 'cotizame-native/app/screens/FilterSearchScreen';

import DashboardScreen from 'cotizame-native/app/screens/DashboardScreen';
import RequisitionsDetailScreen from 'cotizame-native/app/screens/RequisitionsDetailScreen';
import CommentsScreen from 'cotizame-native/app/screens/CommentsScreen';

import SearchScreen from 'cotizame-native/app/screens/SearchScreen';
import CategoryListScreen from 'cotizame-native/app/screens/CategoryListScreen';

import ProfileScreen from 'cotizame-native/app/screens/ProfileScreen';
import SubscriptionsScreen from 'cotizame-native/app/screens/SubscriptionsScreen';
import FavoritesScreen from 'cotizame-native/app/screens/FavoritesScreen';
import AccountScreen from 'cotizame-native/app/screens/AccountScreen';
import MembershipScreen from 'cotizame-native/app/screens/MembershipScreen';
import LanguageScreen from 'cotizame-native/app/screens/LanguageScreen';
import NotificationConfigScreen from 'cotizame-native/app/screens/NotificationConfigScreen';

import OffersScreen from 'cotizame-native/app/screens/OffersScreen';
import ReqDetailScreen from 'cotizame-native/app/screens/ReqDetailScreen';
import OfferDetailScreen from 'cotizame-native/app/screens/OfferDetailScreen';
import DeclineOfferScreen from 'cotizame-native/app/screens/DeclineOfferScreen';
import CreateOfferIndexScreen from 'cotizame-native/app/screens/CreateOfferIndexScreen';
import CreateOfferPriceMaterialScreen from 'cotizame-native/app/screens/CreateOfferPriceMaterialScreen';
import CreateOfferPriceInformationScreen from 'cotizame-native/app/screens/CreateOfferPriceInformationScreen';
import CreateOfferPricePerUnitScreen from 'cotizame-native/app/screens/CreateOfferPricePerUnitScreen';
import CreateOfferPriceCommentScreen from 'cotizame-native/app/screens/CreateOfferPriceCommentScreen';
import CreateOfferLimitDateScreen from 'cotizame-native/app/screens/CreateOfferLimitDateScreen';
import CreateOfferDueDateScreen from 'cotizame-native/app/screens/CreateOfferDueDateScreen';
import CreateOfferDocsScreen from 'cotizame-native/app/screens/CreateOfferDocsScreen';
import CreateOfferSummaryScreen from 'cotizame-native/app/screens/CreateOfferSummaryScreen';
import UpdatePriceScreen from 'cotizame-native/app/screens/UpdatePriceScreen';

import OffersTabs from 'cotizame-native/app/components/OffersTabs';

import TenderScreen from 'cotizame-native/app/screens/TenderScreen';
import OrdersScreen from 'cotizame-native/app/screens/OrdersScreen';
import OrderDetailScreen from 'cotizame-native/app/screens/OrderDetailScreen';
import OrderItemDetailScreen from 'cotizame-native/app/screens/OrderItemDetailScreen';
import TendersDetailScreen from 'cotizame-native/app/screens/TendersDetailScreen'

import EndsTodayListScreen from 'cotizame-native/app/screens/EndsTodayListScreen';
import EndsTodayDetailScreen from 'cotizame-native/app/screens/EndsTodayDetailScreen';

import OrderItemLinesListScreen from 'cotizame-native/app/screens/OrderItemLinesListScreen';
import OrderItemSheetsListScreen from 'cotizame-native/app/screens/OrderItemSheetsListScreen';
import MySubscriptionsScreen from 'cotizame-native/app/screens/MySubscriptionsScreen';

import OrderItemTab from 'cotizame-native/app/components/OrderItemTab';

import SandboxScreen from 'cotizame-native/app/screens/SandboxScreen';

// You might want to add some navigator options to your navigator.
// You can edit this options in app/serivices/navigatorOptions.jsx
// import { stackNavigatorOptions } from 'cotizame-native/app/services/navigatorOptions';
import { ApplicationStyles } from 'cotizame-native/app/styles';

import BottomBar from 'cotizame-native/app/components/BottomBar';


const OrderItemTabNavigator = createMaterialTopTabNavigator({ 
	OrderItemSheetsListScreen,
	OrderItemLinesListScreen
}, {
	initialRouteName: 'OrderItemSheetsListScreen',
	swipeEnabled: false,
	animationEnabled: true,
	tabBarComponent: (props) => <OrderItemTab {...props} /> 
});

const OffersTabNavigator = createMaterialTopTabNavigator({ 
	OffersScreen,
	TenderScreen
}, {
	initialRouteName: 'OffersScreen',
	swipeEnabled: false,
	animationEnabled: true,
	tabBarComponent: (props) => <OffersTabs {...props} /> 
});

const OrdersStackNavigator = createStackNavigator({ 
	OrdersStackNavigator: {
		screen: OrdersScreen,
		navigationOptions: {
			header: null
		}
	}
});

const SearchStackNavigator = createStackNavigator({ 
	SearchStackNavigator: {
		screen: SearchScreen,
		navigationOptions: {
			header: null
		}
	}
});

const ProfileStackNavigator = createStackNavigator({ ProfileScreen });

const BottomTabNavigator = createBottomTabNavigator({
	DashboardScreen,
	OffersTabNavigator,
	OrdersStackNavigator,
	SearchStackNavigator,
	ProfileStackNavigator,
	//SandboxScreen
}, {
	initialRouteName: 'DashboardScreen',
	tabBarComponent: (props) => <BottomBar {...props} />
});


const MainStackNavigator = createStackNavigator({
	BottomTabNavigator:{
		screen: BottomTabNavigator,
		navigationOptions:{
			header: null,
		}
	},
	ReqDetailScreen,
	OfferDetailScreen,
	DeclineOfferScreen,
	UpdatePriceScreen,
	CreateOfferIndexScreen,
	CreateOfferPriceMaterialScreen,
	CreateOfferPriceInformationScreen,
	CreateOfferPricePerUnitScreen,
	CreateOfferPriceCommentScreen,
	CreateOfferLimitDateScreen,
	CreateOfferDueDateScreen,
	CreateOfferDocsScreen,
	CreateOfferSummaryScreen,
	OrderDetailScreen,
	OrderItemDetailScreen,
	FavoritesScreen,
	AccountScreen,
	MembershipScreen,
	LanguageScreen,
	NotificationConfigScreen,
	EndsTodayListScreen,
	EndsTodayDetailScreen,
	RequisitionsDetailScreen,
	TendersDetailScreen,
	CategoryListScreen,
	CommentsScreen,
	MySubscriptionsScreen,
	OrderItemTabNavigator:{
		screen: OrderItemTabNavigator,
		navigationOptions:{
			header: null,
		}
	},
},{
	navigationOptions: {
		...ApplicationStyles.stackNavigatorOptions.transparentHeader
	}
});

const ModalStack = createStackNavigator({
	Main: {
		screen: MainStackNavigator
	},
	AlertModal: {
		screen: AlertsScreen
	},
	FilterSearchModal: {
		screen: FilterSearchScreen
	},
	SubscriptionsModal: {
		screen: SubscriptionsScreen
	}
}, {
	mode: 'modal',
	headerMode: 'none'
});


const AuthStackNavigator = createStackNavigator({
	WelcomeScreen,
	LoginScreen
},{
	navigationOptions: {
		...ApplicationStyles.stackNavigatorOptions.transparentHeader
	}
});

const MainNavigator = createSwitchNavigator({
	AuthLoadingScreen,
	App: ModalStack,
	Auth: AuthStackNavigator
}, {
	initialRouteName: 'AuthLoadingScreen',
	navigationOptions: {
		...ApplicationStyles.stackNavigatorOptions.removeHeader
	}
});

export default MainNavigator;