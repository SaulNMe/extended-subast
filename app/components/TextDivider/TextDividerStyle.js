import { StyleSheet } from 'react-native';
import { ApplicationStyles } from 'cotizame-native/app/styles';
import { Fonts, Colors, Metrics } from 'cotizame-native/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	verticalMargin: {
		marginVertical: Metrics.baseMargin
	},
	flex1: {
		flex: 1
	},
	flex3: {
		flex: 3
	},
	line: {
		flex:1,
		borderBottomColor: '#fff', 
		borderBottomWidth: 1
	},
	whiteText: {
		color: Colors.white,
		fontSize: Fonts.regular,
		textAlign: 'center'
	}
});
