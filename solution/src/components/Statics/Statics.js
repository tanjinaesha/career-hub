import React, { useState } from 'react';
import Plot from 'react-plotly.js';

const Statics= () => {
  const [assignmentMarks, setAssignmentMarks] = useState([
    { assignmentNumber: 1, mark: 60 },
    { assignmentNumber: 2, mark: 57 },
    { assignmentNumber: 3, mark: 58 },
    { assignmentNumber: 4, mark: 56 },
    { assignmentNumber: 5, mark: 55 },
    { assignmentNumber: 6, mark: 0 },
    { assignmentNumber: 7, mark: 60 },
    { assignmentNumber: 8, mark: 35},
  ]);

  const data = {
    x: assignmentMarks.map((item) => item.assignmentNumber),
    y: assignmentMarks.map((item) => item.mark),
    type: 'scatter',
    mode: 'markers',
    marker: {
      color: 'pink',
      size: 15,
    },
    text: assignmentMarks.map(
      (item) => `Assignment ${item.assignmentNumber}: ${item.mark}`
    ),
    hovertemplate: '%{text}',
  };

  const layout = {
    title: 'Aav Assignment Marks ',
    xaxis: { title: 'Number' },
    yaxis: { title: 'Mark' },
  };

  return (
    <div>
      <Plot data={[data]} layout={layout} />
    </div>
  );
};

export default Statics;
