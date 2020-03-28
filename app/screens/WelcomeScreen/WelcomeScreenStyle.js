import { ApplicationStyles } from 'cotizame-native/app/styles';
import { Fonts, Colors, Metrics } from 'cotizame-native/app/styles';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	content: {
		flex: 1,
		paddingTop: '10%'
	},
	imageStretch: {
		height: 93,
	    width: 145
	}
});