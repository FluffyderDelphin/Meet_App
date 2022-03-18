import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

export default function ChartPie({ events }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(() => getData());
  }, [events]);

  const getData = () => {
    const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];

    const data = genres.map((genre) => {
      const value = events.filter((event) =>
        event.summary.split(' ').includes(genre)
      ).length;

      return { name: genre, value };
    });
    return data;
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie
          data={getData()}
          cx={200}
          cy={200}
          labelLine={false}
          label={({ name, percent }) =>
            `${name} ${(percent * 100).toFixed(0)}%`
          }
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        ></Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
