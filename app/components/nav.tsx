import { FiSearch } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { BiBell } from "react-icons/bi";
import UserProfile from "./user-profile";
import Image from "next/image";


const Nav = () => {

    return(
        <div className="fixed w-full bg-[#fff] ">
        <nav className="flex items-center py-2 px-10 justify-between">
            <div className="flex w-1/3 justify-between">
                <Image
                    src="/logo.png"
                    width={48}
                    height={48}
                    alt="zion logo"
                />
                <div className="flex items-center gap-5">
                    <FiSearch className="text-[1.5rem] text-slate-400"/>
                    <input type="text" placeholder="Search..." className="py-1 outline-none" />
                </div>
            </div>

            <div className="flex items-center gap-10 text-slate-700">
            <FiMail className="text-2xl"/>
            <BiBell className="text-2xl"/>
            <UserProfile/>
            </div>
        </nav>
        </div>
    )
}

export default Nav;