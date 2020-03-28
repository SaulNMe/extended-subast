import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	TouchableOpacity,
	FlatList,
	Image,
} from 'react-native';

import styles from './RequisitionsDetailScreenStyle';
import { Colors, Metrics } from 'cotizame-native/app/styles';
import Feather from 'react-native-vector-icons/Feather';

import BottomDrawer from 'cotizame-native/app/components/BottomDrawer';
import PrimaryBtn from 'cotizame-native/app/components/PrimaryBtn';
import TinyText from 'cotizame-native/app/components/TinyText';
import HeaderActions from 'cotizame-native/app/components/HeaderActions';
import ReqItem from 'cotizame-native/app/components/ReqItem';
import SimpleCard from 'cotizame-native/app/components/SimpleCard';
import InlineBodyText from 'cotizame-native/app/components/InlineBodyText';
import BodyText from 'cotizame-native/app/components/BodyText';
import Divider from 'cotizame-native/app/components/Divider';
import SecondaryBtn from 'cotizame-native/app/components/SecondaryBtn';
import AnchorButton from 'cotizame-native/app/components/AnchorButton';
import ServiceCard from 'cotizame-native/app/components/ServiceCard';
import DescriptionCard from 'cotizame-native/app/components/DescriptionCard';
import MaterialInfo from 'cotizame-native/app/components/MaterialInfo';

import Local from 'cotizame-native/app/services/Local';
import moment from 'moment';


import CommentsContainer from 'cotizame-native/app/containers/CommentsContainer';
import { getRequisitionId } from 'cotizame-native/app/actions/RequisitionIdActions';
import { getRequisitionQuotation } from 'cotizame-native/app/actions/RequisitionQuotationActions';
import { connect } from 'react-redux';
import AllReqContentContainer from 'cotizame-native/app/containers/AllReqContentContainer';

export default class RequisitionsDetailScreen extends Component {	
	
	static navigationOptions = {
		header: null
	}

	state = {
		item: this.props.navigation.state.params.item,
	};

	render () {
		let item = this.state.item;
		if('ReferenceId' in item) item.RequisitionId = item.ReferenceId;
		return (
			<View style={[styles.container, styles.whiteBg]}>
				<AllReqContentContainer 
					item={item}
					navigation={this.props.navigation}
				/>
			</View>
		);
	}
}



