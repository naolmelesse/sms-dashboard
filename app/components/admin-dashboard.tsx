import { PiStudentBold } from "react-icons/pi";
import { FaChalkboardTeacher, FaRegBuilding } from "react-icons/fa";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import LineChart from "./line-chart";
import BarChart from "./bar-chart";
import { DataTable } from "./data-table";
import { TopStudents, columns, options, data } from "@/lib/dummy-data";

const AdminDashboard = () => {

    return(
        <div className=" px-10 py-5 bg-slate-100 min-h-4/5 overflow-y-auto">
            <h1 className="text-2xl font-medium">Welcome Mr.X</h1>
            {/* admin data cards container */}
            <div className="grid grid-cols-4 gap-5 py-5">
                {/* data card */}
                <div className="flex items-center justify-between p-5 bg-[#fff] rounded-md">
                    <div>
                        <p className="">Students</p>
                        <p className="text-xl font-medium">8200+</p>
                    </div>
                    <div>
                        <PiStudentBold className="text-[2.5rem]"/>
                    </div>
                </div>
                <div className="flex items-center justify-between p-5 bg-[#fff] rounded-md">
                    <div>
                        <p className="">Teachers</p>
                        <p className="text-xl font-medium">115</p>
                    </div>
                    <div>
                        <FaChalkboardTeacher className="text-[2.5rem]"/>
                    </div>
                </div>
                <div className="flex items-center justify-between p-5 bg-[#fff] rounded-md">
                    <div>
                        <p className="">Department</p>
                        <p className="text-xl font-medium">13+</p>
                    </div>
                    <div>
                        <FaRegBuilding className="text-[2.5rem]"/>
                    </div>
                </div>
                <div className="flex items-center justify-between p-5 bg-[#fff] rounded-md">
                    <div>
                        <p className="">Revenue</p>
                        <p className="text-xl font-medium">$78340</p>
                    </div>
                    <div>
                        <FaMoneyBillTrendUp className="text-[2.5rem]"/>
                    </div>
                </div>
                
                
            </div>
        
            {/* Charts for analysis of school */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <LineChart/>    
                <BarChart options={options} data={data}/>
                <div className="bg-[#fff] rounded-xl p-5">
                    <h3 className="font-medium text-lg py-2">Top Students</h3>
                    <DataTable columns={columns} data={TopStudents} />
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard;