import { StyleSheet } from 'react-native';
import { Fonts, Colors } from 'cotizame-native/app/styles';
import { ApplicationStyles } from 'cotizame-native/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	mainContainer: {
		width: 25,
		marginRight: 5
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
	},
});
