import Link from "next/link";

export default function StudentQuickTabs(){
    return(
        <div className=" mx-auto px-2 py-2 lg:px-20 flex items-center text-[#fff] flex-wrap gap-5 lg:py-5">
            <Link className="hover:bg-[#005B41] py-2 px-3 transition duration-300" href="">Dashboard</Link>
            <Link className="hover:bg-[#005B41] py-2 px-3 transition duration-300" href="">Academic</Link>
            <Link className="hover:bg-[#005B41] py-2 px-3 transition duration-300" href="">Notices</Link>
            <ul>
                <li className="relative group">
                    <Link className="hover:bg-[#005B41] py-2 px-3 transition duration-300" href="">Exam</Link>
                    <ul className="hidden absolute top-full left-0 bg-gray-800 w-max group-hover:block">
                        <li>
                            <Link href="" className="hover:bg-[#005B41] transition duration-300 py-2 px-4 block">Up-coming Exam</Link>
                        </li>
                        <li>
                            <Link href="" className="hover:bg-[#005B41] transition duration-300 py-2 px-4 block">Results</Link>
                        </li>
                        <li>
                            <Link href="" className="hover:bg-[#005B41] transition duration-300 py-2 px-4 block">Examination Rules</Link>
                        </li>
                        <li>
                            <Link href="" className="hover:bg-[#005B41] transition duration-300 py-2 px-4 block">Question Bank</Link>
                        </li>
                    </ul>
                </li>
            </ul>
            <ul>
                <li className="relative group">
                <Link className="hover:bg-[#005B41] py-2 px-3 transition duration-300" href="">Time Table</Link>
                <ul className="hidden absolute top-full left-0 bg-gray-800 w-max group-hover:block">
                    <li>
                        <Link href="" className="hover:bg-[#005B41] transition duration-300 py-2 px-4 block">Current Week Time-Table</Link>
                    </li>
                    <li>
                        <Link href="" className="hover:bg-[#005B41] transition duration-300 py-2 px-4 block">Date-wise Time-Table</Link>
                    </li>
                </ul>
                </li>
            </ul>
            <Link className="hover:bg-[#005B41] py-2 px-3 transition duration-300" href="">E-content</Link>
            <Link className="hover:bg-[#005B41] py-2 px-3 transition duration-300" href="">Fees</Link>
            <Link className="bg-[#005B41] p-2 transition duration-300" href="">More +</Link>
        </div>
    )
}