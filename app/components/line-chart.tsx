'use client'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const options = {
    responsive: true,
    stacked: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Overview',
        font: {
            size: 18,
          },
      },
    },
    scales: {
        x:{
            grid: {
                drawOnChartArea: false,
              },
        },
        y: {
          type: 'linear' as const,
          display: false,
          position: 'right' as const,
          
          grid: {
            drawOnChartArea: false,
          },
        },
        y1: {
          type: 'linear' as const,
          display: true,
          position: 'left' as const,
        },
      },
  };
  
  const labels = [2017,2018, 2019, 2020, 2021, 2022, 2023];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Teacher',
        data: [30, 28, 29, 32, 35, 35, 34],
        borderColor: '#64CCC5',
        backgroundColor: '#64CCC5',
        yAxisID: 'y',
        tension: 0.4
      },
      {
        label: 'Student',
        data: [430, 450, 445, 429, 463, 439, 442],
        borderColor: '#1450A3',
        backgroundColor: '#1450A3',
        yAxisID: 'y1',
        xAxisID: 'x',
        tension:0.4
      },
    ],
  };

export default function LineChart() {
    return(
    <div className="rounded-xl bg-[#fff] p-5 h-[50vh]">
        <Line options={options} data={data} />
    </div>
    );
}