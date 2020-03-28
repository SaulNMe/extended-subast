import { StyleSheet } from 'react-native';
import { Fonts, Colors, ApplicationStyles, Metrics } from 'cotizame-native/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	baseMarginRight: {
		marginRight: Metrics.baseMargin
	},
	imgContainer: {
		width:40, 
		height: 40, 
		marginLeft: Metrics.baseMargin
	}
});
