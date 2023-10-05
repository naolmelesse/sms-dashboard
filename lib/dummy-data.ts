import { TopStudent } from "./types";
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