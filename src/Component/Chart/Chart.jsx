import React from 'react';
import "./chart.css"
import { LineChart, Line, XAxis, CartesianGrid, Tooltip,  ResponsiveContainer } from 'recharts';

export default function Chart() {
    //Rechart Data
    const data = [
        {
          name: 'Monday',
          uv: 4000,
          pv: 1000,
          amt: 2400,
        },
        {
          name: 'Tuesday',
          uv: 3000,
          pv: 1300,
          amt: 2210,
        },
        {
          name: 'Weadnesday',
          uv: 2000,
          pv: 1600,
          amt: 2290,
        },
        {
          name: 'Thrusday',
          uv: 2580,
          pv: 1900,
          amt: 2000,
        },
        {
          name: 'Friday',
          uv: 1690,
          pv: 2200,
          amt: 2181,
        },
        {
          name: 'Saturday',
          uv: 2300,
          pv: 2500,
          amt: 2500,
        },
        {
          name: 'Sunday',
          uv: 3500,
          pv: 2800,
          amt: 2100,
        },
      ];
  return (
    <div className='Chart'>
        <h3 className="chartTittle">
            Sales Analytics
        </h3>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
            <LineChart data={data}>
                <XAxis dataKey="name" stroke="#5550bd" />
                {/* <YAxis dataKey="uv" /> */}
                <Line type="monotone" dataKey="uv" stroke="#5550bd" />
                <Tooltip />
                <CartesianGrid stroke='#e0dfdf' strokeDasharray={5 / 5}/>
                {/* <Legend /> */}
            </LineChart>

        </ResponsiveContainer>
    </div>
  )
}
