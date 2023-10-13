import { Classes, StudentResultData, StudentResultOptions } from "@/lib/dummy-data";
import { ClassSession } from "@/lib/types";
import BarChart from "./bar-chart";
import { FcCalendar } from "react-icons/fc";
import Notices from "./notices";

export default function StudentInfoContainer(){

    return(
        <div className="lg:w-4/5 px-2 lg:px-0 min-h-screen py-10 mx-auto gap-20 grid grid-cols-1 md:grid-cols-2">
                        <Notices/>
            {/* Time Table for today's classes */}
            <div>
                <h3 className="text-2xl md:text-3xl py-1 px-2 lg:py-2 text-center lg:text-left mb-5">Today's class</h3>
                <div className="border rounded-xl overflow-hidden">
                    <table className="table-auto text-sm w-full divide-y-reverse ">
                        <tbody className="divide-y-2 divide-[#fff] ">
                        <tr className="text-left py-2 bg-[#232D3F] text-[#fff]">
                            <th className="p-4">Time</th>
                            <th className="p-4">Subject</th>
                            <th className="p-4">Class</th>
                            <th className="p-4 hidden lg:block">Teacher</th>
                        </tr>
                        
                        {Classes.map((item : ClassSession) => 
                        <tr key={item.subject} className="bg-slate-100 hover:bg-slate-200 transition duration-300">
                            <td className="p-2">{item.time}</td>
                            <td className="p-2">{item.subject}</td>
                            <td className="p-2">{item.class_location}</td>
                            <td className="p-2 hidden lg:block">{item.teacher}</td>
                        </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* Student's Attendance */}
            <div>
                <h2 className="text-2xl md:text-3xl py-1 px-2 lg:py-3 text-center lg:text-left mb-5">Attendance</h2>
                <div className="border rounded-xl h-min hover:shadow hover:scale-105 transition duration-300 cursor-pointer overflow-hidden">
                    <div className="flex justify-center text-2xl lg:text-6xl bg-slate-100 py-5">
                        <FcCalendar className=""/>
                    </div>
                    <div className="flex items-center justify-between px-5 py-7">
                        <h3 className="text-lg md:text-xl font-medium">Your Attendance</h3>
                        <p className="text-lg lg:text-2xl">89%</p>
                    </div>
                </div>
            </div>
            {/* Student's Result */}
            <div>
                <h2 className="text-2xl md:text-3xl py-1 px-2 lg:py-3 text-center lg:text-left mb-5">Your Result</h2>
                <div className="border rounded-xl p-5">
                    <BarChart options={StudentResultOptions} data={StudentResultData}/>
                </div>
            </div>
        </div>
    )
}