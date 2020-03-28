import { StyleSheet } from 'react-native';
import { ApplicationStyles, Fonts, Colors, Metrics } from 'cotizame-native/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	userImage: {
		width: 40,
		height: 40,
		marginRight: 5,
		borderRadius: 10,
	}
});
