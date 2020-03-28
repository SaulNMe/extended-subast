import { StyleSheet } from 'react-native';
import { Fonts, Colors, Metrics } from 'cotizame-native/app/styles';
import { ApplicationStyles } from 'cotizame-native/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	btnContainer: {
		width:"100%",
	},
	header: {
		height: '45%',
	},
	dataBox: {
		//marginVertical: Metrics.baseMargin,
		alignItems: 'center',
		paddingHorizontal: Metrics.baseMargin
	},
	imageContainer: {
		alignSelf: "center",
		shadowColor: '#000',
		shadowRadius: 4,
		shadowOpacity: 0.15,
		shadowOffset: { width: 5, height: 5 }
	},
	circle: {
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 50,
		width:100,
		height: 100
	}
});
