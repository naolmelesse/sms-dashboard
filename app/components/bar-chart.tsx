'use client'
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
  
  export const options = {
    responsive: true,
    stacked: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Number of students',
        font: {
          size: 18,
        },
      },
    },

  };
  
  const labels = [2017,2018, 2019, 2020, 2021, 2022, 2023];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Male',
        data: [480, 530, 520, 478, 499, 539, 542],
        backgroundColor: '#64CCC5',
        barThickness: 10,
      },
      {
        label: 'Female',
        data: [430, 450, 445, 429, 463, 439, 442],
        borderColor: '#1450A3',
        backgroundColor: '#1450A3',
        barThickness: 10,
      },
    ],
  };


export default function BarChart() {
    return(
    <div className="rounded-xl bg-[#fff] p-5">
        <Bar options={options} data={data} />
    </div>
    );
}

