import { StyleSheet } from 'react-native';
import { ApplicationStyles, Fonts, Colors, Metrics } from 'cotizame-native/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	heartContainer: {
		width: 24, 
		height: 24, 
		borderWidth: 1,
		borderRadius: 9999, 
		alignItems: 'center', 
		justifyContent: 'center',
	},
	mainContainer: {
		width: 24,
		marginRight: 5,
		alignItems: 'center', 
		justifyContent: 'center',
	}
});
