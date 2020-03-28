import { StyleSheet } from 'react-native';
import { ApplicationStyles, Fonts, Colors, Metrics } from 'cotizame-native/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	materialContainer: {
		width: 50,
		height: 50,
		borderRadius: 5,
		backgroundColor: 'transparent'
	},
});
