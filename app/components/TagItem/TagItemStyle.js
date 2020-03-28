import { StyleSheet } from 'react-native';
import { Fonts, Colors } from 'cotizame-native/app/styles';

export default StyleSheet.create({
	completed: {
		backgroundColor: Colors.lightGreen,
		color: Colors.green
	},
	pending: {
		backgroundColor: Colors.lightYellow,
		color: Colors.yellow
	},
	joined: {
		backgroundColor: Colors.lightBlue,
		color: Colors.blue
	},
	expired: {
		backgroundColor: Colors.light,
		color: Colors.main
	},
	defaultProps: {
		paddingVertical: 4,
		paddingHorizontal: 10,
		borderRadius: 5,
		alignSelf:'flex-end',
		fontSize: 12,
		marginLeft: 10
	}
});
