import { StyleSheet } from 'react-native';
import { Fonts, Colors } from 'cotizame-native/app/styles';

export default StyleSheet.create({
	defaultBackground: {
		width: '100%',
		paddingHorizontal: 10,
		paddingVertical: 12,
	},
	hasHeight: {
		width: '100%',
		justifyContent: 'center',
		alignItems:'center'
	},
	shadow: {
		elevation: 5,
		shadowColor: '#000',
		shadowRadius: 4,
		shadowOpacity: 0.15,
		shadowOffset: { width: 0, height: 5 }
	},
	round: {
		borderRadius: 5,
	},
	rounder: {
		borderRadius: 20
	},
	transparentBorder: {
		borderWidth: 1,
		borderColor: Colors.white
	},
	defaultText: {
		fontSize: Fonts.body,
		fontWeight: Fonts.weight.medium,
		textAlign: 'center'
	},
	
	actionBg: {
		backgroundColor: Colors.blue
	},
	actionText: {
		color: Colors.white
	},
	highlightBg: {
		backgroundColor: Colors.highlight
	},
	highlightText: {
		color: Colors.white
	},
	negativeBg: {
		backgroundColor: Colors.white
	},
	negativeText: {
		color: Colors.blue
	},
	disabledBg: {
		backgroundColor: Colors.disabled
	},
	disabledText: {
		color: Colors.dark
	}
});
