import { DataTable } from "../components/data-table";
import { Exams, ExamsTablecolumns } from "@/lib/dummy-data";
import { Exam } from "@/lib/types";
import Nav from '../components/nav';
import StudentQuickTabs from "../components/student-quick-tabs";

export default function UpcomingExam(){
    return(
        <>
        <Nav/>
        <StudentQuickTabs/>
        <div className="p-5 lg:px-20">
            <h2 className="text-lg lg:text-2xl py-5 text-center lg:text-left">Up-Coming Examination</h2>
            <div>
                {/* <DataTable columns={ExamsTablecolumns} data={Exams}/>
                <br /><br /> */}
                <div className="rounded-xl border overflow-hidden">
                    <table className="table-auto text-sm w-full">
                        <tbody className="divide-y-2 divide-[#fff]">
                            <tr className="text-left py-2 bg-[#232D3F] text-[#fff]">
                                <th className="p-4">Subject Code</th>
                                <th className="p-4">Subject</th>
                                <th className="p-4">Time</th>
                                <th className="p-4">Date</th>
                                <th className="p-4">Exam Location</th>
                            </tr>

                            {Exams.map((item: Exam) =>
                                <tr key={item.subject} className="bg-slate-100 hover:bg-slate-200 transition duration-300">
                                    <td className="p-4">{item.subject_code}</td>
                                    <td className="p-4">{item.subject}</td>
                                    <td className="p-4">{item.time}</td>
                                    <td className="p-4">{item.date}</td>
                                    <td className="p-4">{item.exam_location}</td>
                                </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </>
    )
}