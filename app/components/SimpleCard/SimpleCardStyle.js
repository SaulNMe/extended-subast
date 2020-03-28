import { StyleSheet } from 'react-native';
import { Fonts, Colors, Metrics, ApplicationStyles } from 'cotizame-native/app/styles';

export default StyleSheet.create({
	card: {
		...ApplicationStyles.screen.card,
		paddingVertical: Metrics.baseMargin,
		marginHorizontal: Metrics.baseMargin,
	},
	noPaddingHorizontal: {
		paddingHorizontal: Metrics.baseMargin
	}
});