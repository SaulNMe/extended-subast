import { StyleSheet } from 'react-native';
import { Fonts, Colors, Metrics } from 'cotizame-native/app/styles';
import { ApplicationStyles } from 'cotizame-native/app/styles';


export default StyleSheet.create({
	...ApplicationStyles.screen,
	...ApplicationStyles.fontWeight,
	...ApplicationStyles.fontColor,
	hugeText: {
		fontSize: Fonts.size.h1
	}
});