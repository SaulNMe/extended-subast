import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './DetailInformationListStyle';
import LabelText from 'cotizame-native/app/components/LabelText';
import InlineBodyText from 'cotizame-native/app/components/InlineBodyText';

export default class DetailInformationList extends Component {
	render() {
		let ComponentList = this.props.data.map((item, index) => {
			return (
				<View key={String(index)} style={styles.smallMarginTop}>
					<InlineBodyText
						leftText={item.label ? String(item.label) : " - - "}
						rightText={item.info ? String(item.info) : " - - "}
						colorLeft='dark'
						colorRight='darker'
					/>
				</View>
			)
		});
		return (
			<React.Fragment>
				<View style={styles.marginVertical}>
					<LabelText
						text={String(this.props.subtitle)}
						color='darker'
						weight='medium'
					/>
				</View>
				{ComponentList}
			</React.Fragment>
		);
	}
}

	DetailInformationList.propTypes = {
		data: PropTypes.array,
		subtitle: PropTypes.string,
		label: PropTypes.string,
		info: PropTypes.string
	}

	DetailInformationList.defaultProps = {
		data: [],
		subtitle: "",
		label: "",
		info: ""
	}
