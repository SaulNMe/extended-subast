import { StyleSheet, Platform } from 'react-native';
import { ApplicationStyles, Fonts, Colors, Metrics } from 'cotizame-native/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	navBarHeight: {
		height: Metrics.navBarHeight*1.2,
		justifyContent: 'center',
		paddingHorizontal: Metrics.baseMargin,
	},
});
