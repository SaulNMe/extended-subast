import { StyleSheet, Platform } from 'react-native';
import { ApplicationStyles, Fonts, Colors, Metrics } from 'cotizame-native/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	container: {
		height: (Platform.OS === 'ios') ? Metrics.doubleSection : Metrics.navBarHeight,
		width: '100%',
		backgroundColor: Colors.white
	},
	Divider: {
		width: '100%',
		borderBottomWidth: 0.4,
		borderColor: Colors.light 
	},
	Boxes: {
		width: '20%'
	},
	marginIos: {
		marginVertical: (Platform.OS === 'ios') ? 3 : 0,
	}
});
