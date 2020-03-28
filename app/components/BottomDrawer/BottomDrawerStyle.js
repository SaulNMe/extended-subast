import { StyleSheet } from 'react-native';
import { Fonts, Colors, Metrics } from 'cotizame-native/app/styles';
import { ApplicationStyles } from 'cotizame-native/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	setToBottom: {
		marginTop: 'auto'
	},
	paddingRight: {
		paddingRight: 4
	},
	paddingLeft: {
		paddingLeft: 4
	},
	padding: {
		paddingHorizontal: Metrics.baseMargin,
		paddingVertical: 8
	}
});
