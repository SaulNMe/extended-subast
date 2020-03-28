import React, { Component } from 'react';
import { 
	Text,
	View,
	TouchableHighlight,
	TouchableOpacity,
	ScrollView
} from 'react-native';
import PropTypes from 'prop-types';

import InlineSwitch from 'cotizame-native/app/components/InlineSwitch';
import DateTimePicker from 'react-native-modal-datetime-picker';
import ActionSheet from 'react-native-actionsheet'
import Local from 'cotizame-native/app/services/Local';
import HeaderNav from 'cotizame-native/app/components/HeaderNav';
import BackBtn from 'cotizame-native/app/components/BackBtn';
import BodyText from 'cotizame-native/app/components/BodyText';
import InlineBodyText from 'cotizame-native/app/components/InlineBodyText';
import BottomDrawer from 'cotizame-native/app/components/BottomDrawer';
import PrimaryBtn from 'cotizame-native/app/components/PrimaryBtn';
import SecondaryBtn from 'cotizame-native/app/components/SecondaryBtn';
import moment from 'moment'
import styles from './TenderModalFilterStyle';

export default class TenderModalFilter extends Component {

	state = {
		params: {
			startDate: null,
			endDate: null,
			new: true,
			inProcess: true,
			finished: true,
			tender: true,
			contract: true,
			...this.props.currentFilters
		},
		isDateTimePickerVisible: false,
		keyParam: ''
	}

	showDateTimePicker = (keyParam) => this.setState({ 
		isDateTimePickerVisible: true,
		keyParam: keyParam
	})

	hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false })

	handleDatePicked = (date) => {
		date = moment.utc(date).format();
		this.setParam(date);
		this.hideDateTimePicker();
	}	

	setParam = (value) => {
		let obj = {};
		let key = this.state.keyParam;
		obj[key]= String(value);
		this.setState({
			params: {
				...this.state.params,
				...obj
			}
		});
	}
	render(){
		return (
			<View style={styles.bgContainer}>
				<TouchableOpacity
						onPress={ () => this.props.close()}
				>
					<HeaderNav
						headerLeft={
							<BackBtn
								navigation={this.props.navigation}
								goTo={'OffersScreen'}
								backLabel
								isCloseModal
							/>
						}
					/>
				</TouchableOpacity>
				<View style={[styles.flex1]}>
					<View style={styles.marginHorizontal}>
						<BodyText
							text={'Busca en Licitaciones'}
							color='cotizame'
							weight='bold'
						/>
					</View>
					<ScrollView>
						<View style={styles.margin}>
							<View style={styles.marginVertical}>
								<BodyText
									text='Por Fecha'
									color='main'
									weight='bold'
								/>
							</View>
							<TouchableOpacity 
								onPress={() => this.showDateTimePicker('startDate')}
							>
								<InlineBodyText
									leftText='Desde'
									rightText={this.state.params.startDate? moment(this.state.params.startDate).format('LL'):'Selecciona una fecha'}
									colorLeft='main'
									colorRight='blue'
								/>
							</TouchableOpacity>
							<TouchableOpacity 
								onPress={() => this.showDateTimePicker('endDate')}
							>
								<InlineBodyText
									leftText='Hasta'
									rightText={this.state.params.endDate? moment(this.state.params.endDate).format('LL'):'Selecciona una fecha'}
									colorLeft='main'
									colorRight='blue'
								/>
							</TouchableOpacity>
							<View style={styles.marginVertical}>
								<BodyText
									text='Por Status'
									color='main'
									weight='bold'
								/>
							</View>
							<InlineSwitch
								value={this.state.params.new}
								title={'Nuevos'}
								onPress={(val)=> this.setState({
									params: {
										...this.state.params,
										new: val
									}
								})}
							/>
							<InlineSwitch
								value={this.state.params.inProcess}
								title={'En proceso'}
								onPress={(val)=> this.setState({
									params: {
										...this.state.params,
										inProcess: val
									}
								})}
							/>
							<InlineSwitch
								value={this.state.params.finished}
								title={'Finalizados'}
								onPress={(val)=> this.setState({
									params: {
										...this.state.params,
										finished: val
									}
								})}
							/>
							<View style={styles.marginVertical}>
								<BodyText
									text='Por Tipo'
									color='main'
									weight='bold'
								/>
							</View>
							<InlineSwitch
								value={this.state.params.tender}
								title={'Licitaciones'}
								onPress={(val)=> this.setState({
									params: {
										...this.state.params,
										tender: val
									}
								})}
							/>
							<InlineSwitch
								value={this.state.params.contract}
								title={'Contrato'}
								onPress={(val)=> this.setState({
									params: {
										...this.state.params,
										contract: val
									}
								})}
							/>
						</View>
					</ScrollView>
					<BottomDrawer
						Divider
						left={
							<SecondaryBtn
								text={Local.get('modalFilter.reset')}
								onPress={() => this.setState({
									params: {
										startDate: null,
										endDate: null,
										new: true,
										inProcess: true,
										finished: true,
										tender: true,
										contract: true,									}
								})}
							/>
						}
						right={
							<PrimaryBtn
								text={Local.get('modalFilter.search')}
								onPress={() => {
									let params = this.state.params;
									if(!params.startDate) delete params.startDate;
									if(!params.endDate) delete params.endDate;
									this.props.setParams(params);
								}}
							/>
						}
					/>
					</View>
				<DateTimePicker
					isVisible={this.state.isDateTimePickerVisible}
					onConfirm={this.handleDatePicked}
					onCancel={this.hideDateTimePicker}
				/>
			</View>
		);
	}
}

	TenderModalFilter.propTypes = {
		// data: PropTypes.array
	}

	TenderModalFilter.defaultProps = {
		// data: []
	}