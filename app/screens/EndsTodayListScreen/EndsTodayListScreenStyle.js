import { StyleSheet, StatusBar } from 'react-native';
import { ApplicationStyles, Fonts, Colors, Metrics } from 'cotizame-native/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	whiteBg: {
		backgroundColor: Colors.white,
	},
	headerPadding: {
		paddingTop: StatusBar.currentHeight,
		paddingBottom: Metrics.baseMargin,

	}
});
