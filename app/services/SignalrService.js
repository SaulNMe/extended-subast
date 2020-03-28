import store from 'axioma-native/app/store';
import * as signalR from '@aspnet/signalr';
import { createLocalComment } from 'axioma-native/app/actions/chat-actions';
import ApiService from 'cotizame-native/app/services/ApiService';
import { AsyncStorage } from 'react-native';

export default {

	connection: null,
	group: '',

	async connect ( TipoForoId,  ReferenciaId) {
		this.group = 'Referencia_' + TipoForoId + '_' + ReferenciaId;
		let token = await AsyncStorage.getItem('@token');
		this.connection = new signalR.HubConnectionBuilder()
			.withUrl(ApiService.host + 'api/negotiate', { accessTokenFactory: () => token })
			.configureLogging(signalR.LogLevel.Information)
			.build();

		await this.connection.start().catch(err => console.error(err.toString()));

		await this.connection.invoke('AddToGroup', this.group).catch(err => console.error(err.toString()));

		// this.connection.on('ReceiveGroupMessage', (message, user) => { 
		// 	const parsedMessage = JSON.parse(message);
		// 	store.dispatch(createLocalComment(parsedMessage.data, parsedMessage.conversationId, parsedMessage.eventKey));
		// });

		this.connection.onclose(() =>{
			this.connection = null;
			this.group = '';
		})
	},

	async sendMessage ( TipoForoId,  ReferenciaId, messageData ) {
		if(!this.connection) await this.connect(store.getState().chat.currentGraphicId);
		this.connection.invoke('SendMessageToGroups', this.group, JSON.stringify(messageData));
	},

	disconnect () {
		if(this.connection) this.connection.stop();
		this.connection = null;
		this.group = '';
	}
}
