import { StyleSheet } from 'react-native';
import { Fonts, Colors, Metrics } from 'cotizame-native/app/styles';
import { ApplicationStyles } from 'cotizame-native/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	dateStyle: {
		fontSize: Fonts.size.small,
		fontWeight: Fonts.weight.regular
	},
	tinyMargin: {
		marginTop: Metrics.tinyMargin
	},
	redText: {
		color: Colors.red
	}
});
