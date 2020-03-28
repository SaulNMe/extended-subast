import { StyleSheet, Platform } from 'react-native';
import { ApplicationStyles, Fonts, Colors, Metrics } from 'cotizame-native/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen, 
	icon: {
		marginLeft: Platform.OS === 'ios' ? -1:12,
	}
});
