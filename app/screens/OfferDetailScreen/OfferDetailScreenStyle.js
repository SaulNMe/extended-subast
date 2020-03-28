import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors, Metrics } from 'cotizame-native/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	whiteBg: {
		backgroundColor: Colors.white,
	},
	newRequests: {
		backgroundColor: Colors.lightBlue,
	}
});
