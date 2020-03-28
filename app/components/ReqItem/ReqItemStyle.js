import { StyleSheet } from 'react-native';
import { Fonts, Colors } from 'cotizame-native/app/styles';
import { ApplicationStyles } from 'cotizame-native/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	dateStyle: {
		fontSize: Fonts.size.small,
		fontWeight: Fonts.weight.regular
	},
	imageStyle: {
		width: 60,
		height: 60,
		borderRadius:10
	},
	redText: {
		color: Colors.red
	}
});
