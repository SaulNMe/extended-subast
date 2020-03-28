import React, { Component } from 'react';
import {
	View,
	Platform,
	BackHandler,
	Image,
	KeyboardAvoidingView,
	TextInput,
	AsyncStorage,
	StatusBar,
	Alert
} from 'react-native';

import styles from './LoginScreenStyle';
import Feather from 'react-native-vector-icons/Feather';
import LabelText from 'cotizame-native/app/components/LabelText';
import PrimaryBtn from 'cotizame-native/app/components/PrimaryBtn';
import TransparentInput from 'cotizame-native/app/containers/TransparentInput'
import TextDivider from 'cotizame-native/app/components/TextDivider';
import { login } from 'cotizame-native/app/actions/LoginActions';
import { getMe } from 'cotizame-native/app/actions/MeActions';
import InputIcon from 'cotizame-native/app/components/InputIcon';
import Local from 'cotizame-native/app/services/Local';

import { connect } from 'react-redux';

class LoginScreen extends Component {

	constructor (props) {
		super(props);
		this.handleUsernameChange = this.handleUsernameChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.state = { 
			username:'',
			password: ''
		};
		this.a = React.createRef();
		this.b = React.createRef();
	}

	componentDidMount(){
		BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
	}

	componentWillUnmount(){
		BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
	}

	onBackPress = () => {
		this.props.navigation.navigate('WelcomeScreen')
		return true;
	}

	handleUsernameChange (username) {
		this.setState({ username });
	}

	handlePasswordChange (password) {
		this.setState({ password });
	}

	async onPressLogin (){
		try {
			await this.props.dispatch(login(this.state));
			let me = await this.props.dispatch(getMe());
			me = JSON.stringify(me);
			await AsyncStorage.setItem('@me',me);
			this.props.navigation.navigate('AuthLoadingScreen');
		} catch (error) {
			let errorMsg = '';
			if(String(error.Error) == 'SyntaxError: Unexpected end of JSON input') errorMsg = 'Correo o contraseña incorrectos.';
			if(String(error.Error) == 'TypeError: Network request failed' || errorMsg === '') errorMsg = 'Inténtelo más tarde.';

			Alert.alert('Ha ocurrido un error', errorMsg);
		}
	}

	render () {
		return (
			<View style={styles.paddedContainer}>
				<StatusBar barStyle="light-content"/>
				<Image 
					style={styles.imageFill}
					source={require('cotizame-native/assets/background.png')}
				/>

				<View style={[styles.content, styles.column, styles.justifyContentSpaceBetween]}>
					<KeyboardAvoidingView
						style={styles.fullWidth}
						behavior='padding'
						enabled
					>
						<View style={[styles.centerObjects]}>
							<Image	
								style={styles.imageStretch}				
								source={require('cotizame-native/assets/logo.png')}
								resizeMode="contain"
							/>
							<View style={styles.marginVertical}>
								<LabelText 
									text={Local.get('loginScreen.infoAlert')}
									color='white' 
									weight='regular'
									center
								/>
							</View>
						</View>
						<View style={styles.justifyContentCenter}>
							<InputIcon
								textInput={(
									<TextInput
										ref={this.a}
										value={this.state.username}
										placeholder={Local.get('loginScreen.usernameBox')}
										value= {this.state.username}
										onChangeText={this.handleUsernameChange}
										returnKeyType='next'
										underlineColorAndroid={'rgba(0, 0, 0, 0)'}
										style={styles.input}
										blurOnSubmit={ true }
										placeholderTextColor='#fff'
										onSubmitEditing={() => this.b.current.focus()}
									/>
								)}
							/>
							<InputIcon
								textInput={(
									<TextInput
										ref={this.b}
										value={this.state.password}
										secureTextEntry
										placeholder={Local.get('loginScreen.passwordBox')}
										value= {this.state.password}
										returnKeyType='go'
										onChangeText={this.handlePasswordChange}
										underlineColorAndroid={'rgba(0, 0, 0, 0)'}
										style={styles.input}
										blurOnSubmit={ true }
										placeholderTextColor='#fff'
										onSubmitEditing={() => this.onPressLogin()}
									/>
								)}
								iconName={'lock'}
							/>
						</View>
					</KeyboardAvoidingView>
					<View> 
						<PrimaryBtn 
							text= {this.props.isLoading?  Local.get('loginScreen.loadingButton') : Local.get('loginScreen.button')}
							colorBckg= 'white'
							colorTxt= 'cotizame'
							onPress={() => this.onPressLogin()} 
							disabled={!(this.state.password && this.state.username) || this.props.isLoading}
						/>
						{
							// <TextDivider
							// 	text='¿Olvidaste tu contraseña?'
							// />
							// <PrimaryBtn 
							// 	text='Recuperar contraseña'
							// 	colorBckg='transparent'
							// 	transparent
							// 	colorTxt='white'
							// 	onPress={() => { this.props.navigation.navigate('DashboardScreen') }} 
							// />
						}
					</View>
				</View>
			</View>
		);
	}

}

mapStateToProps = state => ({
	login: state.LoginReducer.login,
	error: state.LoginReducer.error,
	isLoading: state.LoginReducer.isLoading
});

export default connect(mapStateToProps)(LoginScreen);