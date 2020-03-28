import { StyleSheet } from 'react-native';
import { Fonts, Colors, Metrics } from 'cotizame-native/app/styles';
import { ApplicationStyles } from 'cotizame-native/app/styles';

export default StyleSheet.create({
	rowCard:{
		flexDirection: 'row',
		height: 43,
		width:'100%',
		justifyContent: "center",
		alignItems: "center"
	},
	tinyMarginRight:{
		marginRight: Metrics.smallMargin
	},
	cardStyle:{
		height: 100,
		width: 100,
		borderRadius: 10,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		paddingHorizontal: Metrics.smallMargin
	}
});
