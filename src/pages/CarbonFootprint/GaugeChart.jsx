import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const GaugeChart = () => {
  const data = {
    labels: ['Commute', 'Food', 'Appliances'],
    datasets: [
      {
        data: [30, 40, 30], // Data for the sections (Commute, Food, Appliances)
        backgroundColor: ['#FFBF00', '#FF5F5F', '#5BE12C'], // Section colors
        borderWidth: 0, // Border thickness for the arcs
        hoverOffset: 4, 
        cutout: '90%', // This determines the size of the center, making the arc thinner
        rotation: 270, // Start the semi-circle from the bottom
        circumference: 180, // Create the half-circle shape
        weight: 0.5, // Decrease this to reduce the thickness of the arcs
        borderRadius: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: { enabled: false }, // Disable tooltip
      legend: { display: false },  // Hide the legend
    },
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <Doughnut data={data} options={options} />
      {/* Center Text */}
      <div
        style={{
          position: 'absolute',
          top: '70%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '16px',
         fontWeight:"800"
        }}
      >
        18 ton CO2
      </div>
    </div>
  );
};

export default GaugeChart;
