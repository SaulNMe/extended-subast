import { StyleSheet } from 'react-native';
import { ApplicationStyles, Fonts, Colors } from 'cotizame-native/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	whiteBg: {
		backgroundColor: Colors.white,
	},
	sizeBottom: { height: 40 }
});
