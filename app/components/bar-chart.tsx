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
  


export default function BarChart({options, data} : any) {
    return(
    <div className="rounded-xl bg-[#fff] p-5">
        <Bar options={options} data={data} />
    </div>
    );
}

