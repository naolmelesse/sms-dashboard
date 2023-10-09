import { FiSearch } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { BiBell } from "react-icons/bi";
import UserProfile from "./user-profile";
import StudentQuickTabs from "./student-quick-tabs";
import Link from "next/link";

const Nav = () => {

    return(
        <div className="bg-[#232D3F] h-[60vh] select-none">
        <nav className="flex items-start py-10 bg-[url('/university.jpg')] bg-cover px-20 text-[#fff] justify-between h-4/5">
            <Link href="/" className="text-2xl">SWIFT University</Link>


            <div className="flex items-center gap-10">
                {/* <div className="flex items-center gap-5 border border-[#fff]">
                    <FiSearch className="text-[1.5rem]"/>
                    <input type="text" placeholder="Search..." className="py-1 outline-none bg-transparent placeholder:text-[#fff]" />
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