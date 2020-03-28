import { StyleSheet } from 'react-native';
import { ApplicationStyles, Fonts, Colors, Metrics } from 'cotizame-native/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	searchCard: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: 'space-between',
		backgroundColor: Colors.lighterBlue
	},
	flex095: { flex: 0.95 },
	inputContainer: { width: '94%' },
	input: {
		flex: 1,
		paddingHorizontal: 10,
		color: Colors.cotizame,
	},
	iconPadding: {
		paddingHorizontal: Metrics.baseSpace,
	}
});
