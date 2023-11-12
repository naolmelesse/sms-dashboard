import { Classes, StudentResultData, StudentResultOptions } from "@/lib/dummy-data";
import { ClassSession } from "@/lib/types";
import BarChart from "./bar-chart";
import { FcCalendar } from "react-icons/fc";
import Notices from "./notices";
import DailyTimeTable from "./daily-timetable";

export default function StudentInfoContainer(){

    return(
        <div className="lg:w-4/5 px-2 lg:px-0 min-h-screen py-10 mx-auto gap-20 grid grid-cols-1 md:grid-cols-2">
            <Notices/>
            {/* Time Table for today's classes */}
            <DailyTimeTable/>
            
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