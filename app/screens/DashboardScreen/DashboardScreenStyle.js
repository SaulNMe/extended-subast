import { StyleSheet, StatusBar, Platform } from 'react-native';
import { Fonts, Colors, Metrics } from 'cotizame-native/app/styles';
import { ApplicationStyles } from 'cotizame-native/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	statusBarSpace: {
		paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
	}
});
