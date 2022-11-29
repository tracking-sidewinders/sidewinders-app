import React from 'react';
import '../App.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function TrainingGraph() {
    // labels on y axis
    const labels = ['Ancilary', 'ITRM', 'MRDSS', 'Job-Specific'];

    const data = {
      labels: labels,
      datasets: [{
        axis: 'y',
        label: 'Missing (percent)',
        data: [30, 40, 50, 70],
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 99, 132, 1)'
        ],
        borderWidth: 1
      },
      {
        axis: 'y',
        label: 'Validating (percent)',
        data: [10, 10, 10, 10],
        fill: false,
        backgroundColor: [
          'rgba(255, 205, 86, 1)',
          'rgba(255, 205, 86, 1)',
          'rgba(255, 205, 86, 1)',
          'rgba(255, 205, 86, 1)'
        ],
        borderWidth: 1
      },
      {
        axis: 'y',
        label: 'Complete (percent)',
        data: [60, 50, 40, 20],
        fill: false,
        backgroundColor: [
          'rgba(112, 224, 0, 1)',
          'rgba(112, 224, 0, 1)',
          'rgba(112, 224, 0, 1)',
          'rgba(112, 224, 0, 1)'
        ],
        borderWidth: 1
      }]
    };

    const options = {
      indexAxis: 'y',
      elements: {
        bar: {
          borderWidth: 1,
        },
      },
      responsive: true,
      plugins: {
        legend: {
          position: 'right',
        },
        title: {
          display: false,
          text: 'Chart.js Horizontal Bar Chart',
        },
      },
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true
        }
      }
    }; 

    return(
        <Bar options={options} data={data}/>
    );
}

export default TrainingGraph;