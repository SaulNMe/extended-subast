import { StyleSheet } from 'react-native';
import { ApplicationStyles, Fonts, Colors, Metrics } from 'cotizame-native/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	wrapper: {
		flexDirection: 'row',
		backgroundColor: 'rgba(255, 255, 255, 0.2)',
		borderRadius: 5,
		marginBottom: 15,
		width: '100%'
	},
	input: {
		padding: 11,
		width: '100%',
		borderWidth: 0,
		color: '#ffffff',
		width:'100%'
	},
	icon:{
		marginHorizontal: Metrics.baseMargin, 
	},
});
