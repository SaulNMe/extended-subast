import { StyleSheet } from 'react-native';
import { Fonts, Colors, Metrics } from 'cotizame-native/app/styles';
import { ApplicationStyles } from 'cotizame-native/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,

	customeContainer: {
		flex: 1,
		paddingVertical: Metrics.baseMargin,
		backgroundColor: Colors.white
	},
	smallMarginLeft: {
		marginLeft: Metrics.smallMargin
	},
	customePaddingVertical: {
		paddingVertical: Metrics.doubleSection
	}
});
