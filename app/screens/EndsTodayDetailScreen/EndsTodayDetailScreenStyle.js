import { StyleSheet } from 'react-native';
import { ApplicationStyles, Metrics, Colors } from 'cotizame-native/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	whiteBg: {
		backgroundColor: Colors.white,
	},
	material:{
		width: 50,
		height: 50,
	},
	materialContainer: {
		width: 50,
		height: 50,
		borderRadius: 5,
		backgroundColor: 'rgba(0,0,0,0.2)'
	},
	newRequests: {
		backgroundColor: Colors.lightBlue,
	}
});
