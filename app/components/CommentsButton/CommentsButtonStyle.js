import { StyleSheet } from 'react-native';
import { ApplicationStyles, Fonts, Colors, Metrics } from 'cotizame-native/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	mainContainer: {
		width: 25,
		height: 25,
		marginRight: 5,
		position: 'relative'
	},
	iconBadge: {
		paddingHorizontal: 2,
		height: 15,
		minWidth: 15, 
		position: 'absolute',
		left: 10,
		top: -5,
		alignItems: 'center', 
		justifyContent: 'center',
		borderRadius: 999,
		backgroundColor: Colors.red,
	}
});
