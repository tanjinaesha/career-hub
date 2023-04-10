import React, { Component } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

class Statics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { assignment: 1, mark: 80 },
        { assignment: 2, mark: 90 },
        { assignment: 3, mark: 75 },
        { assignment: 4, mark: 85 },
        { assignment: 5, mark: 95 },
        { assignment: 6, mark: 70 }
      ]
    };
  }

  renderTooltip = ({ active, payload, label }) => {
    if (active) {
      const marks = this.state.data.map(d => d.mark);
      const mean = marks.reduce((a, b) => a + b, 0) / marks.length;
      const variance = marks.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / marks.length;
      const stdDev = Math.sqrt(variance);

      return (
        <div className="custom-tooltip">
          <p>{`Assignment ${label}`}</p>
          <p>{`Mark: ${payload[0].value}`}</p>
          <p>{`Mean: ${mean.toFixed(2)}`}</p>
          <p>{`Standard deviation: ${stdDev.toFixed(2)}`}</p>
        </div>
      );
    }

    return null;
  }

  render() {
    return (
      <LineChart width={600} height={300} data={this.state.data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="assignment" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip content={this.renderTooltip} />
        <Legend />
        <Line type="monotone" dataKey="mark" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    );
  }
}

export default Statics;
