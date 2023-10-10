import { Classes } from "@/lib/dummy-data"
import { ClassSession } from "@/lib/types";
import BarChart from "./bar-chart";
import { StudentResultData, StudentResultOptions } from "@/lib/dummy-data";
import { FcCalendar } from "react-icons/fc";

export default function StudentInfoContainer(){

    return(
        <div className="lg:w-4/5 px-2 lg:px-0 min-h-screen py-10 mx-auto gap-10 grid grid-cols-1 md:grid-cols-2">
            <div className="border rounded-xl p-5">
                <h3 className="text-lg md:text-xl font-medium">Notices</h3>
                <p>School start</p>
            </div>
            {/* Time Table for today's classes */}
            <div className="border rounded-xl p-5">
                <h3 className="text-lg md:text-xl font-medium py-2">Today's class</h3>
                <table className="table-auto text-sm w-full divide-y-reverse divide-y-2 divide-slate-50 ">
                    <tbody>
                    <tr className="text-left py-2">
                        <th className="p-2">Time</th>
                        <th className="p-2">Subject</th>
                        <th className="p-2">Class</th>
                        <th className="p-2 hidden lg:block">Teacher</th>
                    </tr>
                    
                    {Classes.map((item : ClassSession) => 
                    <tr key={item.subject}>
                        <td className="p-2">{item.time}</td>
                        <td className="p-2">{item.subject}</td>
                        <td className="p-2">{item.class_location}</td>
                        <td className="p-2 hidden lg:block">{item.teacher}</td>
                    </tr>)}
                    </tbody>
                </table>
            </div>
            {/* Student's Attendance */}
            <div className="border rounded-xl h-min hover:shadow hover:scale-105 transition duration-300 cursor-pointer overflow-hidden">
                <div className="flex justify-center text-2xl lg:text-6xl bg-slate-100 py-5">
                    <FcCalendar className=""/>
                </div>
                <div className="flex items-center justify-between px-5 py-7">
                    <h3 className="text-lg md:text-xl font-medium">Your Attendance</h3>
                    <p className="text-lg lg:text-2xl">89%</p>
                </div>
            </div>
            {/* Student's Result */}
            <div className="border rounded-xl p-5">
                <h3 className="text-lg md:text-xl font-medium">Your Result</h3>
                <BarChart options={StudentResultOptions} data={StudentResultData}/>
            </div>
        </div>
    )
}