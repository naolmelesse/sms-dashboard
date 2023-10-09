
import Link from "next/link";

export default function StudentQuickTabs(){
    return(
        <div className=" mx-auto px-5 py-2 lg:px-20 flex text-[#fff] flex-wrap gap-5 lg:py-5">
            <Link className="hover:bg-[#005B41] py-2 px-3 transition duration-300" href="">Dashboard</Link>
            <Link className="hover:bg-[#005B41] py-2 px-3 transition duration-300" href="">Academic</Link>
            <Link className="hover:bg-[#005B41] py-2 px-3 transition duration-300" href="">Notices</Link>
            <Link className="hover:bg-[#005B41] py-2 px-3 transition duration-300" href="">Exam</Link>
            <Link className="hover:bg-[#005B41] py-2 px-3 transition duration-300" href="">Time Table</Link>
            <Link className="hover:bg-[#005B41] py-2 px-3 transition duration-300" href="">E-content</Link>
            <Link className="hover:bg-[#005B41] py-2 px-3 transition duration-300" href="">Fees</Link>
            <Link className="bg-[#005B41] p-2 transition duration-300" href="">More +</Link>
        </div>
    )
}