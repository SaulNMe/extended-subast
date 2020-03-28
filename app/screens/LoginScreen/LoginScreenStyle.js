import { StyleSheet } from 'react-native';
import { ApplicationStyles } from 'cotizame-native/app/styles';
import { Platform } from 'react-native';
import { Colors, Fonts, Metrics } from 'cotizame-native/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	back:{
		marginLeft: Platform.OS === 'ios' ? -1:12,
		color: Colors.white
	},
	content: {
		flex: 1,
		paddingTop: '10%'
	},
	subtitle: {
		color: "#FFFFFF",
		fontSize: Fonts.regular,
		textAlign: 'center',
		marginVertical: Metrics.baseMargin
	},
	imageStretch: {
	    width: 145,
	    height: 93
  	},
	m10: {
		marginBottom: 10
	},
	input: {
		padding: 11,
		width: '100%',
		borderWidth: 0,
		color: '#ffffff',
		width:'100%'
	},
});