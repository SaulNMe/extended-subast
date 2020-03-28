import { StyleSheet } from 'react-native';
import { ApplicationStyles, Fonts, Colors, Metrics } from 'cotizame-native/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	card:{
		...ApplicationStyles.screen.card,
		elevation: 5,
		padding: Metrics.baseMargin
	}
});
