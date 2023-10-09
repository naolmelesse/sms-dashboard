
import { FiSearch } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { BiBell } from "react-icons/bi";
import UserProfile from "./user-profile";
import StudentQuickTabs from "./student-quick-tabs";


const Nav = () => {

    return(
        <div className=" bg-slate-300">
        <nav className="flex items-center py-2 px-20 justify-between">
            <h2>SWIFT University</h2>

            <div className="flex items-center gap-10 text-slate-700">
                {/* <div className="flex items-center gap-5">
                    <FiSearch className="text-[1.5rem] text-slate-400"/>
                    <input type="text" placeholder="Search..." className="py-1 outline-none bg-transparent" />
                </div> */}
            <FiMail className="text-2xl"/>
            <BiBell className="text-2xl"/>
            <UserProfile/>
            </div>
        </nav>
        <StudentQuickTabs/>
        </div>
    )
}

export default Nav;