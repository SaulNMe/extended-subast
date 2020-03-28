import { StyleSheet } from 'react-native';
import { Fonts, Colors } from 'cotizame-native/app/styles';
import { ApplicationStyles } from 'cotizame-native/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	bottomBorder: {
		borderBottomColor: Colors.lighter,
		borderBottomWidth: 1,
	},
	textContainer: {
		flex: .85
	},
	iconContainer: {
		flex: .15,
		alignItems: 'flex-end'
	},
	noBorder: {
		borderBottomWidth: 0
	}
});
