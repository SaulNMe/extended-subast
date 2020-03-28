import React, { Component } from 'react';
import { 
	View, 
	Platform,
	TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import Feather from 'react-native-vector-icons/Feather';
import SmallText from 'cotizame-native/app/components/SmallText';
import styles from './BackBtnStyle';
import Local from 'cotizame-native/app/services/Local';
import NavigationService from 'cotizame-native/app/services/NavigationService.js';
export default class BackBtn extends Component {
	render() {
		let mainView = (
			<View style={styles.column}>
				<Feather
					name={Platform.OS === 'ios' ? 'chevron-left':'arrow-left'}
					size={Platform.OS === 'ios' ? 35:24}
					style={styles.icon}
					color={this.props.color}
				/>
			</View>
		);
		return (
			<View style={[styles.row, styles.alignItemsCenter]}>
			{
				this.props.isCloseModal? (
					<View style={[styles.row, styles.alignItemsCenter]}>
						{ mainView }
						{this.props.backLabel &&
							<View style={styles.column}>
								<SmallText
									text={Local.get('back')}
									color={this.props.color}
								/>
							</View>
						}
					</View>
				):(
					<TouchableOpacity
						onPress={() => this.props.navigation.goBack()}
						style={[styles.row, styles.alignItemsCenter]}
					>
						{ mainView }
						{this.props.backLabel &&
							<View style={styles.column}>
								<SmallText
									text={Local.get('back')}
									color={this.props.color}
								/>
							</View>
						}
					</TouchableOpacity>
				)
			}
			</View>
		);
	}
}

BackBtn.propTypes = {
	color: PropTypes.string,
	backLabel: PropTypes.bool,
	isCloseModal: PropTypes.bool,
}

BackBtn.defaultProps = {
	color: 'black',
	backLabel: false,
	isCloseModal: false,
}
