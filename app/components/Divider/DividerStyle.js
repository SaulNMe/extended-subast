import { StyleSheet } from 'react-native';
import { Fonts, Colors, Metrics } from 'cotizame-native/app/styles';

export default StyleSheet.create({
	Divider: {
		width: '100%',
		borderBottomWidth: 1,
		borderColor: Colors.light 
	},
	marginVertical: {
		marginVertical: Metrics.baseMargin
	},
	marginHorizontal: {
		marginHorizontal: Metrics.baseMargin
	},
	marginTop: {
		marginTop: Metrics.smallMargin
	},
	disabled: {
		borderColor: Colors.disabled
	},
	marginBottom: {
		marginBottom: Metrics.smallMargin
	}
});
