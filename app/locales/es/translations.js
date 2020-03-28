export default {
	name: 'Cotizame',
	locale: 'es',
	back: 'Regresar',
	searchInput: 'Buscar',
	loginScreen: {
		welcome: 'El portal de proveedores de Cotemar',
		introduction: 'Lorem ipsum dolor sit amet, consectetur.',
		button: 'Inicia Sesión',
		loadingButton: 'Iniciando sesión...',
		usernameBox: 'Escribe tu nombre de usuario',
		passwordBox: 'Escribe tu contraseña',
		infoAlert: 'Ingresa tu nombre de usuario y contraseña'
	},
	alertsScreen: {
		header: 'Alertas'
	},
	gradientBanner: {
		title: '¡Suscríbete a esta categoría para poder participar!',
		body: 'Suscribirme'
	},
	bottomBar: {
		'dashboard': 'Dashboard',
		'offers': 'Cotizaciones',
		'orders': 'Pedidos',
		'search': 'Descubre',
		'profile': 'Perfil'
	},
	dashboardScreen: {
		hello: '¡Hola ',
		welcome: 'Bienvenido a Cotízame',
		applications: 'Nuevas Solicitudes',
		quotes:	'Cotizaciones en proceso',
		purchase: 'Órdenes de compra',
		interest: 'PODRÍA INTERESARTE',
		requisitionsEndToday: 'Solicitudes que finalizan hoy',
		requisition: 'Solicitud: #'
	},
	ordersScreen: {
		header: 'Mis Pedidos',
		tag: 'Pedido #',
		date: 'Entrega el',
		positions: 'Posiciones',
		label: 'Posición #',
		offerDate: 'Fecha de Cotización',
		position: 'Posición: ',
	},
	searchScreen: {
		header: 'Descubre nuestras solicitudes',
		body: 'PODRÍA INTERESARTE',
		headerDescription: 'Todas las categorías',
	},
	profileScreen:{
		yourProfile: 'Tu Perfil',
		myAccount: 'Mi cuenta',
		membership: 'Membresía',
		logout: 'Cerrar sesión',
		language: 'Idioma'
	},
	OffersTabs: {
		title: 'Cotizaciones',
		left: 'Ofertas',
		right: 'Licitaciones'
	},
	reqItem:{
		time: 'Tiempo Restante',
		bestPrice: 'Mejor Precio',
		expired: 'Expirada'
	},
	endsTodayListContainer: {
		title: 'Finalizan hoy',
		interest: 'También podrían interesarte',
		description: 'Descripción Completa'
	},
	requisitionsDetailScreen:{
		offer: 'Tu Oferta',
		requisition: 'Solicitud: #',
		offerDetails: 'Detalles de oferta',
		details: 'Ver Detalles',
		unitPrice: 'Precio unitario',
		minOffer: 'Oferta mínima',
		discount: 'Factor de descuento',
		valid: 'Válida hasta',
		deadline: 'Fecha de entrega',
		material: 'Material',
		letter: 'Hojas de papel tamaño carta en colores variados',
		description: 'Descripción',
		noDescription: 'No hay descripción',
		fulldescription: 'Ver descripción completa',
		shortDescription: 'Ver menos',
		information: 'Información',
		quantity: 'Cantidad',
		type: 'Tipo de Partida',
		requires: 'Requiere Evaluación Técnica',
		competing: 'Proveedores Compitiendo',
		attached: 'Archivos adjuntos',
		technical: 'Especificaciones técnicas',
		it_is: 'Es_técnicas.docx',
		additional: 'Información adicional',
		informationPdf: 'Información.pdf',
		dateRequested: 'Fecha de entrega solicitada',
		measurement:'Unidad de medida', 
		comments: 'Comentarios',

	},
	errorState : {
		title: '¡Oops ha ocurrido un error!',
		head: '¡No se ha encontrado ningún comentario!',
		subtitle: 'Vuelve a intentar más tarde',
		btnText: 'Volver a cargar'
	},
	emptyState : {
		title: 'Todavía no hay registros',
		subtitle: 'Cuando halla registros disponibles podrás encontrarlos aquí',
		btnText: 'Refresh',
		titleLoading: 'Cargando...',
		subtitleLoading: ' '
	},
	tenderDetailScreen: {
		comments: 'Comentarios',
		description: 'Descripción',
		information: 'Información',
		quantity: 'Cantidad',
		type: 'Tipo de Partida',
		kind: 'Tipo',
		requires: 'Requiere Evaluación Técnica',
		questions: '¿Tienes alguna pregunta?',
		writeComment: 'Escribe un comentario',
		tender: 'Licitación #',
		contract: 'Contrato #',
		offer: 'Oferta #',
		materialKey: 'Clave material',
		typeQuote: 'Tipo de Cotización',
		competing: 'Proveedores Compitiendo',
		bestPrice: 'Mejor Precio',
		time: 'Tiempo Restante',
	},
	modalFilter: {
		startDate: 'Desde',
		endDate: 'Hasta',
		header: 'Busca entre mis Ofertas',
		status: 'Estatus',
		getOnlyFavorites: 'Favoritos',
		dateTitle: 'Por Fecha',
		switchTitle: 'Por estatus',
		arrayTitle: 'Por tipo de partida',
		new: 'Nuevo',
		reset: 'Reiniciar',
		search: 'Buscar',
		inProcess: 'En proceso',
		finished: 'Terminada',
		myOffers: 'Mis Ofertas',
		mySusbscriptions: 'Suscripciones',
		others: 'Otros',
		positionTypeS: 'Servicios',
		positionTypeM: 'Materiales',
		process: 'En proceso',
	},
	serviceCard: {
		services: 'Servicios',
		line: 'Línea',
		serviceNo: 'No. Servicio',
		quantity: 'Cantidad',
		currency: 'Moneda',
	},
	OrderItemTab: {
		left: 'Hojas de entrada',
		right: 'Líneas'
	},
	myAccountScreen: {
		telephone: 'Teléfono',
		person: 'Tipo de Persona',
		provider: 'Tipo de Proveedor',
		activity: 'Actividad Principal',
		address: 'Dirección Fiscal'
	},
	entryCardComponent:{
		number: 'No. Entrada: ',
		entryDate: 'Fecha de Entrada',
		entryHour: 'Hora de Entrada',
		quantity: 'Cantidad',
		amount: 'Importe',
	},
	linesComponent:{
		lines: 'Línea: '
	},
	membershipScreen: {
		headerOne: 'Información del proveedor',
		headerTwo: 'Tu membresía',
		providerUser: 'Nombre del proveedor',
		email: 'Correo de contacto',
		username: 'Nombre de Usuario',
		startDate: 'Fecha de Inicio',
		finishDate: 'Fecha de Vencimiento',
		status: 'Estatus',
		amount: 'Monto'
	},
	languageScreen: {
		head: 'Selecciona el idioma de tu preferencia',
		spanish: 'Español',
		english: 'Inglés',
		bottom: 'El idioma que selecciones será usado en esta aplicación, en el portal web, y en las notificaciones que enviemos a tu correo electrónico'
	},
	orderItemDetailScreen: {
		entries: 'Entradas'
	},
	subscriptions: {
		subscriptions: 'Suscripciones',
		subtitle: 'Te has suscrito a las siguientes categorías. Te notificaremos cuando aparezcan nuevas solicitudes de las categorías a las que te has suscrito',
		newSubscriptions: 'También podría interesarte estas categorías',
		subtitleSedond: 'Puedes suscribirte a estas categorías. Puedes cancelar tus suscripciones en cualquier momento',
	},
	favoritesScreen:{
		myFavorites: 'Mis Favoritos',
		subtitle: 'Has marcado las siguientes solicitudes como favoritos. Te notificaremos cuando expire o cuando alguien haga una oferta',
	},
	NotificationConfigScreen: {
		title: 'Configuración de notificaciones',
		offers: 'Ofertas',
		orders: 'Pedidos',
		exceeded: 'Mi oferta fue superada',
		best: 'Mi oferta fue la mejor',
		expired: 'Una solicitud expiró',
		newOrder: 'Nuevo pedido',
		updatedOrder: 'Pedido actualizado',
		newEntry: 'Nueva entrada en un pedido',
	}
}