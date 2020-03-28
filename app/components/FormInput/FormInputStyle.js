import { StyleSheet } from 'react-native';
import { Fonts, Colors, Metrics } from 'cotizame-native/app/styles';
import { ApplicationStyles } from 'cotizame-native/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	colorText: {
		color: Colors.darker
	},
	doubleMarginHorizontal: {
		marginHorizontal: Metrics.doubleBaseMargin
	}
});
