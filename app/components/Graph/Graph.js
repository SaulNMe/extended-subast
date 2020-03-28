import { 
	VictoryArea,
	VictoryChart,
	VictoryAxis,
	VictoryLegend,
	VictoryLabel
} from 'victory-native';
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { Colors } from 'cotizame-native/app/styles';
// import { LinearGradient } from 'expo';
import {Defs, LinearGradient, Polygon, Stop, Svg} from "react-native-svg";


import CotizameTheme from 'cotizame-native/app/styles/CotizameTheme';
import styles from './GraphStyle';

export default class Graph extends Component {
	render() {
		return (
				<VictoryChart
					theme={CotizameTheme}
					width={this.props.width}
					height={this.props.height}
					// domainPadding={{ x: [10, 10] }}
				>
					<VictoryAxis dependentAxis crossAxis
						tickLabelComponent={<VictoryLabel style={{fill: "transparent"}}/>}
						style={{
							grid: {stroke: Colors.lightgrey, strokeDasharray: "8, 5"}
						}}
					/>
					<VictoryAxis crossAxis/>

					<VictoryArea
						interpolation="catmullRom"
						data={this.props.data}
						style={{ data: { fill: "#2D9CDB1A", stroke: "#2D9CDB" } }}
					/>

					<VictoryLegend x={8} y={20}
						title={[
							"Mis ventas",
							`${this.props.label}`
						]}
						style={{ title: {fontSize: 20 } }}
						titleComponent={
							<VictoryLabel 
								style={ [
									{ fontSize: 16, fontWeight: "bold", fill: Colors.black }, 
									{ fontSize: 20, fontWeight: "bold", fill: Colors.blue }
								]}
							/>
						}
						data={[]}
					/>
				</VictoryChart>
		);
	}
}

	Graph.propTypes = {
		data: PropTypes.array,
		width: PropTypes.number,
		height: PropTypes.number,
		label: PropTypes.string
	}

	Graph.defaultProps = {}
