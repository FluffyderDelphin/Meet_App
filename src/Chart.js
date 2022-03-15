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
          <Scatter data={this.getData} fill="#8884d8" />
        </ScatterChart>
      </ResponsiveContainer>
    );
  }
}
export default Chart;
