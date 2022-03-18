import React, { Component } from 'react';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

class Chart extends Component {
  getData = () => {
    const { locations, events } = this.props;
    const data = locations.map((location) => {
      const number = events.filter(
        (event) => event.location === location
      ).length;
      const city = location.split(', ').shift();
      return { city, number };
    });
    return data;
  };

  placeHolderdata = [
    { x: 100, y: 200, z: 200 },
    { x: 120, y: 100, z: 260 },
    { x: 170, y: 300, z: 400 },
    { x: 140, y: 250, z: 280 },
    { x: 150, y: 400, z: 500 },
    { x: 110, y: 280, z: 200 },
  ];
  render() {
    return (
      <ResponsiveContainer height={400}>
        <ScatterChart
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="category" dataKey="city" name="stature" />
          <YAxis
            type="number"
            dataKey="number"
            name="weight"
            allowDecimals={false}
          />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter data={this.placeHolderdata} fill="#8884d8" />
        </ScatterChart>
      </ResponsiveContainer>
    );
  }
}
export default Chart;
