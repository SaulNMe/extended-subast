import { StyleSheet, StatusBar, Platform } from 'react-native';
import { ApplicationStyles, Colors, Metrics } from 'cotizame-native/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	navBarHeight: {
		height: (Platform.OS === 'ios') ? Metrics.navBarHeight*0.7 : Metrics.navBarHeight*1.4, 
	},
	marginStatus: {
		paddingTop: (Platform.OS != 'ios') ? StatusBar.currentHeight : 0,
	},
});
