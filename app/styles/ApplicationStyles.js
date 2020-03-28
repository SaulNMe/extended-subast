import Fonts from './Fonts'
import Colors from './Colors'
import Metrics from './Metrics'

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const ApplicationStyles = {
	screen: {
		paddedContainer: {
			flex: 1,
			flexDirection: 'column',
			padding: 16,
		},
		column: {
			flexDirection: 'column'
		},
		imageFill: {
			position:'absolute', 
			top: 0, 
			bottom: 0, 
			right: 0, 
			left: 0, 
			width:null, 
			height:null			
		},
		container: {
			flex: 1,
			backgroundColor: Colors.white
		},
		margin: {
			margin: Metrics.baseMargin
		},
		smallMarginHorizontal: {
			marginHorizontal: Metrics.smallMargin
		},
		marginHorizontal: {
			marginHorizontal: Metrics.baseMargin
		},
		marginVertical: {
			marginVertical: Metrics.baseMargin
		},
		smallMarginVertical: {
			marginVertical: Metrics.smallMargin
		},
		doubleMarginVertical: {
			marginVertical: Metrics.doubleBaseMargin
		},
		smallMarginTop: {
			marginTop: Metrics.smallMargin
		},
		baseMarginTop: {
			marginTop: Metrics.baseMargin
		},
		marginTop: {
			marginTop: Metrics.doubleBaseMargin
		},
		marginBottom:{
			marginBottom: Metrics.baseMargin
		},
		baseMarginBottom: {
			marginBottom: Metrics.baseMargin
		},
		smallMarginBottom: {
			marginBottom: Metrics.smallMargin
		},
		smallMarginLeft: {
			marginLeft: Metrics.smallMargin
		},
		baseMarginLeft : {
			marginLeft: Metrics.baseMargin
		},
		smallMarginRight: {
			marginRight: Metrics.smallMargin
		},
		marginRight:{
			marginRight: Metrics.baseMargin
		},
		paddingHorizontal: {
			paddingHorizontal: Metrics.baseMargin
		},
		basePaddingTop: {
			paddingTop: Metrics.baseMargin
		},
		doublePaddingTop: {
			paddingTop: Metrics.doubleSection
		},
		row: {
			flexDirection: 'row'
		},
		flex: (f = 0) => { flex: f },
		flex1: {
			flex: 1
		},
		flex2: {
			flex:2
		},
		justifyContentCenter: {
			justifyContent: 'center'
		},
		justifyContentFlexEnd: {
			justifyContent: 'flex-end'
		},
		justifyContentFlexStart: {
			justifyContent: 'flex-start'
		},
		justifyContentSpaceBetween: {
			justifyContent: 'space-between'
		},
		justifyContentSpaceAround:{
			justifyContent: 'space-around'
		},
		justifyContentSpaceEvenly:{
			justifyContent: 'space-evenly'
		},
		alignItemsFlexEnd: {
			alignItems: 'flex-end'
		},
		alignItemsCenter: {
			alignItems: 'center'
		},
		centerObjects: {
			justifyContent: 'center',
			alignItems: 'center'
		},
		wrap: {
			flexWrap: 'wrap'
		},
		fullWidth: {
			width: '100%'
		},
		fullHeight: {
			height: '100%'
		},
		paddingAround: {
			padding: Metrics.baseMargin
		},
		verticalPadding: {
			paddingVertical: Metrics.baseMargin
		},
		smallVerticalPadding: {
			paddingVertical: Metrics.smallMargin
		},
		centerText: {
			textAlign: 'center'
		},
		statusBarSpace: {
			paddingTop: Metrics.statusBarHeight
		},
		card: {
			margin: Metrics.smallMargin,
			backgroundColor: Colors.white,
			shadowColor: '#000',
			shadowRadius: 4,
			shadowOpacity: 0.1,
			shadowOffset: { width: 0, height: 3 },
			elevation: 1,
			borderRadius: 5,
		},
		bgContainer: {
			flex: 1,
			height: Metrics.screenHeight,
			width: Metrics.screenWidth,
		},
		whiteBg: {
			backgroundColor: Colors.white
		}
	},
	stackNavigatorOptions: {
		removeHeader: {
			header: null
		},
		transparentHeader: {
			headerTransparent: true,
			headerStyle: {
				backgroundColor: Colors.transparent,
				elevation: 0, // remove shadow on Android
				shadowOpacity: 0, // remove shadow on iOS
				borderBottomWidth: 0,
			},
			gesturesEnabled: false,
			headerTintColor: Colors.white
		},
		bottomTab: {
			activeTintColor: Colors.blue,
			inactiveTintColor: Colors.light,
			style: {
				backgroundColor: Colors.white
			}
		}
	},
}

export default ApplicationStyles