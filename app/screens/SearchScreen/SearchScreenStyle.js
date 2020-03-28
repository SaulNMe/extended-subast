import { StyleSheet, StatusBar } from 'react-native';
import { Fonts, Colors, Metrics } from 'cotizame-native/app/styles';
import { ApplicationStyles } from 'cotizame-native/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,

	doubleMarginVertical: {
		marginVertical: Metrics.doubleBaseMargin
	},
	smallMarginVertical: {
		marginVertical: Metrics.tinyMargin
	},
	doubleMarginHorizontal: {
		marginHorizontal: Metrics.section
	},
	headerPadding: {
		paddingTop: StatusBar.currentHeight,
	}
});
