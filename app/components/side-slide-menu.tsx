'use client'
import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { GrClose } from 'react-icons/gr';
import Link from "next/link";

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
      <div className="md:hidden">
        <div className={`fixed inset-0 bg-gray-800 bg-opacity-50 z-50 ${isOpen ? 'visible' : 'hidden'}`}>
        <div className="fixed inset-y-0 right-0 w-1/2 bg-gray-800 z-50 transform translate-x-0 transition-transform ease-in-out duration-300">
            {/* Your menu content goes here */}
            <div className="p-4 flex justify-between items-center text-[#fefefe]">
                <p>Menu Content</p>
                <GrClose className="text-2xl" onClick={() => setIsOpen(false)}/>
            </div>
            <div className="flex flex-col">
            <Link className="hover:bg-[#005B41] py-2 px-3 transition duration-300" href="/">Dashboard</Link>
            <Link className="hover:bg-[#005B41] py-2 px-3 transition duration-300" href="">Academic</Link>
            <Link className="hover:bg-[#005B41] py-2 px-3 transition duration-300" href="">Notices</Link>
            <ul>
                <li className="relative group">
                    <Link className="hover:bg-[#005B41] py-2 px-3 transition duration-300" href="">Exam</Link>
                    <ul className="hidden top-full left-0 bg-gray-800 w-max group-hover:block">
                        <li>
                            <Link href="/upcoming-exam" className="hover:bg-[#005B41] transition duration-300 py-2 px-4 block">Up-coming Exam</Link>
                        </li>
                        <li>
                            <Link href="/results" className="hover:bg-[#005B41] transition duration-300 py-2 px-4 block">Results</Link>
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
                        <Link href="/time-table" className="hover:bg-[#005B41] transition duration-300 py-2 px-4 block">Current Week Time-Table</Link>
                    </li>
                    <li>
                        <Link href="" className="hover:bg-[#005B41] transition duration-300 py-2 px-4 block">Date-wise Time-Table</Link>
                    </li>
                </ul>
                </li>
            </ul>
            <Link className="hover:bg-[#005B41] py-2 px-3 transition duration-300" href="/e-content">E-content</Link>
            <Link className="hover:bg-[#005B41] py-2 px-3 transition duration-300" href="">Fees</Link>
            <ul>
                <li className="relative group">
                    <Link className="hover:bg-[#005B41] py-2 px-3 transition duration-300" href="">Placements</Link>
                    <ul className="hidden absolute top-full left-0 bg-gray-800 w-max group-hover:block">
                        <li>
                            <Link href="" className="hover:bg-[#005B41] transition duration-300 py-2 px-4 block">Students Placement</Link>
                        </li>
                        <li>
                            <Link href="" className="hover:bg-[#005B41] transition duration-300 py-2 px-4 block">Job Preference</Link>
                        </li>
                        <li>
                            <Link href="" className="hover:bg-[#005B41] transition duration-300 py-2 px-4 block">Apply For Placement</Link>
                        </li>
                        <li>
                            <Link href="" className="hover:bg-[#005B41] transition duration-300 py-2 px-4 block">Interview Questions</Link>
                        </li>
                    </ul>
                </li>
            </ul>
            <Link className="bg-[#005B41] py-2 px-4 transition duration-300 rounded" href="">More +</Link>
            </div>
        </div>
        </div>
        <button
            className="fixed right-0 top-0 p-4 text-2xl text-[#fff]"
            onClick={toggleMenu}
        >
            {isOpen ? <GrClose/> : <FiMenu/>}
        </button>
      </div>
  );
};

export default SideMenu;
