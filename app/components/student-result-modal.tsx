'use client'
import { useState } from "react";
import Modal from "./modal";

type Grade = {
    subject: string,
    subject_code: string,
    marks: number,
    is_absent: boolean,
    before_assesment: null | number,
    reassesment: null | number
}
type StudentResultModalProps = {
    grades: {
        subject: string,
        subject_code: string,
        marks: number,
        is_absent: boolean,
        before_assesment: null | number,
        reassesment: null | number
    }[],
    total_marks: number
}

const StudentResultModal: React.FC<StudentResultModalProps> = ({ grades, total_marks }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <div>
            <button onClick={openModal} className="px-2 text-sm py-1 rounded-[0.3rem] hover:bg-[#008170] transition duration-300 bg-[#005B41] text-[#fff]">Show Grades</button>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <h2 className="text-xl font-semibold">Results</h2>
                <table className="table-auto text-sm w-full border my-2">
                    <tbody className="divide-y divide-slate-100">
                        <tr className="text-left py-2 bg-[#232D3F] text-[#fff]">
                            <th className="p-4">Subject</th>
                            <th className="p-4">Subject Code</th>
                            <th className="p-4">Total Marks</th>
                            <th className="p-4">Marks/Grade</th>
                            <th className="p-4">Before Assesment</th>
                            <th className="p-4">Absent</th>
                            <th className="p-4">Reassesment</th>
                        </tr>

                        {grades.map((grade: Grade) =>
                            <tr className="hover:bg-slate-100 transition duration-300" key={grade.subject_code}>
                                <td className="p-4">{grade.subject}</td>
                                <td className="p-4">{grade.subject_code}</td>
                                <td className="p-4">{total_marks}</td>
                                <td className="p-4">{grade.marks}</td>
                                <td className="p-4">{grade.before_assesment}</td>
                                <td className="p-4">{grade.is_absent ? 'Yes' : 'No'}</td>
                                <td className="p-4">{grade.reassesment}</td>
                            </tr>
                        )}

                    </tbody>
                </table>
            </Modal>
        </div>

    )
}

export default StudentResultModal;