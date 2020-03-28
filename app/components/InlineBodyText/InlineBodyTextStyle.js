import { StyleSheet } from 'react-native';
import { Fonts, Colors } from 'cotizame-native/app/styles';
import { ApplicationStyles } from 'cotizame-native/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	pdfIcon: {
		width: 17, 
		height: 21,
		marginRight: 5,
	}
});
