import { StyleSheet } from 'react-native';
import { Fonts, Colors, Metrics } from 'cotizame-native/app/styles';
import { ApplicationStyles } from 'cotizame-native/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	tabsConteiner: {
		width: '90%',
		alignSelf: 'center',
		borderRadius: 5,
		borderColor: Colors.blue,
		borderWidth: 1
	},
	blueButton: {
		backgroundColor: Colors.blue,
	},
	whiteButton: {
		backgroundColor: Colors.white,	
	},
	buttonStyleLeft: {
		flex: 0.5,
		padding: Metrics.smallMargin,
		borderTopLeftRadius: 4,
		borderBottomLeftRadius: 4
	},
	buttonStyleRight: {
		flex: 0.5,
		padding: Metrics.smallMargin,
		borderTopRightRadius: 4,
		borderBottomRightRadius: 4
	},
});
