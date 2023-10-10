import { TopStudent, ClassSession } from "./types";
import { ColumnDef } from "@tanstack/react-table";

export const TopStudents : TopStudent[] = [
    {
        name: "Abel",
        student_id: 1080,
        average: 98.78,
        class: "10B",
        year: 2014
    },
    {
        name: "Edom",
        student_id: 1132,
        average: 97.89,
        class: "9A",
        year: 2015
    },
    {
        name: "Kalab",
        student_id: 1034,
        average: 97.09,
        class: "12C",
        year: 2015
    },
    {
        name: "Alazar",
        student_id: 1070,
        average: 97.55,
        class: "11C",
        year: 2013
    },
]

export const columns: ColumnDef<TopStudent>[] = [
    {
      accessorKey: "student_id",
      header: "Student ID",
    },
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "class",
      header: "Class",
    },
    {
      accessorKey: "average",
      header: "Average",
    },
    {
     accessorKey: "year",
     header: "Year",
    },
  ]

export const Classes : ClassSession[] = [
  {
    subject: "C++",
    teacher: "Prof. Yared",
    time: "8:00AM - 9:30AM",
    class_location: "MC302"
  },
  {
    subject: "Calculus II",
    teacher: "Prof. Tamirat",
    time: "10:00AM - 11:30AM",
    class_location: "MB202"
  },
  {
    subject: "Writing Skills",
    teacher: "Prof. Edom",
    time: "11:30AM - 12:00AM",
    class_location: "MC301"
  },
  {
    subject: "Data Structures",
    teacher: "Dr. Yasin",
    time: "2:00PM - 3:30PM",
    class_location: "MC302"
  },
  {
    subject: "Computer Networks",
    teacher: "Prof. Bamlak",
    time: "4:00PM - 5:00PM",
    class_location: "MA310"
  },
]

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
  
 export const labels = [2017,2018, 2019, 2020, 2021, 2022, 2023];
  
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
  
  export const StudentResultOptions = {
  responsive: true,
  scales: {
    y: {
      beginAtZero: true,
      max: 4.0, // Adjust the maximum CGPA value (usually it's 4.0)
      grid: {
        // display: false, // Hide the y-axis grid lines
      },
    },
    x: {
      grid: {
        display: false, // Hide the x-axis grid lines
      },
    },
    },  
  };
  
  
  export const StudentResultData = {
    labels: ['Semester 1', 'Semester 2', 'Semester 3', 'Semester 4', 'Semester 5'],
    datasets: [
      {
        label: 'CGPA',
        data: [3.5, 3.7, 3.1, 2.8, 3.43],
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)', // Color for Semester 1
          'rgba(255, 99, 132, 0.6)', // Color for Semester 2
          'rgba(54, 162, 235, 0.6)', // Color for Semester 3
          'rgba(255, 206, 86, 0.6)', // Color for Semester 4
          'rgba(153, 102, 255, 0.6)', // Color for Semester 5
        ],
      },
    ],
  };