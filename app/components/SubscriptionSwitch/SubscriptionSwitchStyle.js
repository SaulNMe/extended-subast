import { StyleSheet } from 'react-native';
import { ApplicationStyles, Fonts, Colors, Metrics } from 'cotizame-native/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	imageStyle: {
		width: 45,
		height: 45,
		borderRadius:5,
		marginRight: 5,
	},
});
