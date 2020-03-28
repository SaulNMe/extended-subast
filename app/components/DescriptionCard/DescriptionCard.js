import React, { Component } from 'react';
import { 
	Text, 
	View, 
	TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './DescriptionCardStyle';
import LabelText from 'cotizame-native/app/components/LabelText';
import SmallText from 'cotizame-native/app/components/SmallText';
import Local from 'cotizame-native/app/services/Local';

export default class DescriptionCard extends Component {
	state = {
		showFullDescription: false,
	}

	reduceDescription = (description) => {
		if(this.state.showFullDescription && description.length > 80) return description;
		return String(description).substr(0,80);
	}

	showLinkButton = () => {
		let description = this.props.data;
		if (description && description.length > 80) return true;
		return false;
	}

	handleDescription = () => {
		let showFullDescription = !this.state.showFullDescription;
		this.setState({showFullDescription});
	}

	render() {
		return (
			<React.Fragment>
				{this.props.data.length>0 ?
					<LabelText
						text={Local.get('requisitionsDetailScreen.description')}
						color='darker'
						weight='medium'
					/>
					:
					<LabelText
						text={Local.get('requisitionsDetailScreen.noDescription')}
						color='darker'
						weight='medium'
					/>
				}
				<LabelText
					text={this.reduceDescription(this.props.data)}
					color='main'
				/>
				{this.showLinkButton() &&
					<TouchableOpacity
						onPress={()=> this.handleDescription()}
						style={[styles.row, styles.justifyContentFlexEnd]}
					>
						<SmallText
							text={this.state.showFullDescription ? Local.get('requisitionsDetailScreen.shortDescription') : Local.get('requisitionsDetailScreen.fulldescription')}
							color='blue'
						/>
					</TouchableOpacity>
				}
			</React.Fragment>
		);
	}
}

	DescriptionCard.propTypes = {
		data: PropTypes.string,
	}

	DescriptionCard.defaultProps = {
		data: 'No description',
	}
