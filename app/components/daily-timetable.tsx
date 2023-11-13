import { SCHEDULE } from '@/lib/dummy-schedule';
import { isTodaysClass } from '@/lib/helper-functions';

const DailyTimeTable = () => {
    return(
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
                
                {SCHEDULE.data.map((subject) => 
                 isTodaysClass(subject.schedule_date) &&                
                    <tr key={subject.idx} className="bg-slate-100 hover:bg-slate-200 transition duration-300">
                        <td className="p-2">{subject.from_time} - {subject.to_time}</td>
                        <td className="p-2">{subject.course}</td>
                        <td className="p-2">{subject.room}</td>
                        <td className="p-2 hidden lg:block">{subject.instructor_name}</td>
                    </tr>
                )}
                
                {/* {Classes.map((item : ClassSession) => 
                <tr key={item.subject} className="bg-slate-100 hover:bg-slate-200 transition duration-300">
                    <td className="p-2">{item.time}</td>
                    <td className="p-2">{item.subject}</td>
                    <td className="p-2">{item.class_location}</td>
                    <td className="p-2 hidden lg:block">{item.teacher}</td>
                </tr>)} */}
                </tbody>
            </table>
        </div>
    </div>
    )
}

export default DailyTimeTable;