'use client'
import { useState } from "react";
import { SemesterResult } from "@/lib/types";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import StudentResultModal from "./student-result-modal";

const ResultsAccordion: React.FC<SemesterResult> = ({ semester, results }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border shadow my-4">
      <div
        className="p-4 cursor-pointer flex justify-between items-center"
        onClick={toggleAccordion}
      >
        <h2 className="text-xl font-semibold">{semester}</h2>
        <button className="focus:outline-none">
          {isOpen ? <IoIosArrowUp/> : <IoIosArrowDown/>}
        </button>
      </div>
      {isOpen && (
        <div className="p-4 bg-white">
          <div>
            <div className="flex justify-between px-5 py-2 my-1 bg-[#232D3F] text-[#fff]">
                <p>Exam Type</p>
                <p>Action</p>
            </div>
            <div className="flex justify-between px-5 py-2 my-1 bg-slate-100 hover:bg-slate-200 transition duration-300">
                <p>{results.mid1.exam_type}</p>
                <StudentResultModal grades={results.mid1.grades} total_marks={results.mid1.total_marks}/>
            </div>
            <div className="flex justify-between px-5 py-2 my-1 bg-slate-100 hover:bg-slate-200 transition duration-300">
                <p>{results.mid2.exam_type}</p>
                <StudentResultModal grades={results.mid2.grades} total_marks={results.mid2.total_marks}/>
            </div>
            <div className="flex justify-between px-5 py-2 my-1 bg-slate-100 hover:bg-slate-200 transition duration-300">
                <p>{results.final.exam_type}</p>
                <StudentResultModal grades={results.final.grades} total_marks={results.final.total_marks}/>            
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultsAccordion;
