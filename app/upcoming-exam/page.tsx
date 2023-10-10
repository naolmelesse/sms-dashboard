import { DataTable } from "../components/data-table";
import { Exams, ExamsTablecolumns } from "@/lib/dummy-data";
import { Exam } from "@/lib/types";

export default function UpcomingExam(){
    return(
        <div className="p-5 lg:px-20">
            <h2 className="text-lg lg:text-2xl py-5 text-center lg:text-left">Up-Coming Examination</h2>
            <div>
                <DataTable columns={ExamsTablecolumns} data={Exams}/>
                <br /><br />
                <table className="table-auto text-sm w-full border">
                    <tbody className="divide-y divide-slate-100">
                    <tr className="text-left py-2">
                        <th className="p-4">Subject Code</th>
                        <th className="p-4">Subject</th>
                        <th className="p-4">Time</th>
                        <th className="p-4">Date</th>
                        <th className="p-4">Exam Location</th>
                    </tr>
                    
                    {Exams.map((item : Exam) => 
                    <tr key={item.subject}>
                        <td className="p-4">{item.subject_code}</td>
                        <td className="p-4">{item.subject}</td>
                        <td className="p-4">{item.time}</td>
                        <td className="p-4">{item.date.toISOString()}</td>
                        <td className="p-4">{item.exam_location}</td>
                    </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}