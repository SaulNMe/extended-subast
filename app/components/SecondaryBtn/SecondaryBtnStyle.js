import { StyleSheet } from 'react-native';
import { Fonts, Colors } from 'cotizame-native/app/styles';

export default StyleSheet.create({
	defaultBackground: {
		width: '100%',
		paddingHorizontal: 10,
		paddingVertical: 12,
		backgroundColor: Colors.transparent,
		borderWidth: 1
	},
	shadow: {
		elevation: 1,
		shadowColor: '#000',
		shadowRadius: 4,
		shadowOpacity: 0.15,
		shadowOffset: { width: 0, height: 5 }
	},
	round: {
		borderRadius: 5
	},
	rounder: {
		borderRadius: 20
	},
	defaultText: {
		fontSize: Fonts.regular,
		textAlign: 'center'
	},
	actionBg: {
		borderColor: Colors.blue
	},
	actionText: {
		color: Colors.blue
	},
	highlightBg: {
		borderColor: Colors.highlight
	},
	whiteBg: {
		borderColor: Colors.white
	},
	whiteText: {
		color: Colors.white
	},
	highlightText: {
		color: Colors.highlight
	},
	negativeBg: {
		borderColor: Colors.white
	},
	negativeText: {
		color: Colors.white
	},
	disabledBg: {
		borderColor: Colors.disabled
	},
	disabledText: {
		color: Colors.disabled
	}
});
