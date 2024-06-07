// import React from 'react';
// import { Bar } from 'react-chartjs-2';
// import './Chart.css'
// const Chart = () => {
//   const data = {
//     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//     datasets: [
//       {
//         label: 'Sales',
//         data: [65, 59, 80, 81, 56, 55, 40],
//         backgroundColor: 'rgba(75, 192, 192, 0.6)',
//         borderColor: 'rgba(75, 192, 192, 1)',
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options = {
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//       x: {
//         type: 'category',
//         labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//       },
//     },
//   };

//   return (
//     <div className="chart-container">
//       <Bar data={data} options={options} />
//     </div>
//   );
// };

// export default Chart;
import React from 'react';

const Chart = () => {
  return (
    <div className="chart-container">
      <h2>Chart Component</h2>
      {/* Placeholder content */}
      <div style={{ width: '100%', height: '300px', backgroundColor: '#f0f0f0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <span style={{ fontSize: '24px', color: '#333' }}>Chart will be displayed here</span>
      </div>
    </div>
  );
};

export default Chart;
