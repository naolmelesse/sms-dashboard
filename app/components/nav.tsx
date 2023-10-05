import { FiSearch } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { BiBell } from "react-icons/bi";
import UserProfile from "./user-profile";



const Nav = () => {

    return(
        <nav className="flex items-center py-5 px-10 justify-between">
            <div className="flex items-center gap-5">
                <FiSearch className="text-[1.5rem] text-slate-400"/>
                <input type="text" placeholder="Search..." className="py-1 outline-none" />
            </div>
            <div className="flex items-center gap-10 text-slate-700">
            <FiMail className="text-2xl"/>
            <BiBell className="text-2xl"/>
            <UserProfile/>
            </div>
        </nav>
    )
}

export default Nav;