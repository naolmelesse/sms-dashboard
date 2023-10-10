import { FiSearch, FiMail } from "react-icons/fi";
import { BiBell } from "react-icons/bi";
import UserProfile from "./user-profile";
import Link from "next/link";

const Nav = () => {
    return(
        <nav className=" flex items-start py-10 bg-[url('/university.jpg')] bg-cover px-2 lg:px-20 text-[#fff] justify-between h-[30vh] lg:h-[50vh]">
            <Link href="/" className="text-2xl">SWIFT University</Link>


                <div className="flex-col lg:flex-row flex items-end lg:items-center gap-2 lg:gap-10">
                    {/* <div className="flex items-center gap-5 border border-[#fff]">
                        <FiSearch className="text-[1.5rem]"/>
                        <input type="text" placeholder="Search..." className="py-1 outline-none bg-transparent placeholder:text-[#fff]" />
                    </div> */}
                    <FiMail className="hidden lg:inline text-2xl hover:text-[#005B41] cursor-pointer transition duration-300"/>
                    <BiBell className="hidden lg:inline text-2xl hover:text-[#005B41] cursor-pointer transition duration-300"/>
                    <UserProfile/>
                </div>
        </nav>
    )
}

export default Nav;