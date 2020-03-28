import { StyleSheet } from 'react-native';
import { Fonts, Colors, Metrics } from 'cotizame-native/app/styles';
import { ApplicationStyles } from 'cotizame-native/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	button: {
		flex:1,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		borderBottomColor: Colors.light,
		borderBottomWidth: 1,
		paddingTop: 16,
		paddingBottom: 16
	},
	title: {
		fontSize: Fonts.size.regular,
		color: Colors.dark
	},
	noBorder: {
		borderBottomWidth: 0
	}
});
