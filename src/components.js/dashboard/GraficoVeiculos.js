import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';




export default class GraficoVeiculos extends PureComponent {

    static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';

    render() {

        return (
            <ResponsiveContainer width="100%" height="100%">

                <LineChart
                    width={500}
                    height={320}
                    data={this.props.data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Entradas" stroke="#8884d8" activeDot={{ r: 8 }} />

                </LineChart>
            </ResponsiveContainer>
        );
    }
}



