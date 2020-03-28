import { StyleSheet, StatusBar, Platform } from 'react-native';
import { ApplicationStyles, Metrics } from 'cotizame-native/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	statusBarSpace: {
		paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
	}
});
