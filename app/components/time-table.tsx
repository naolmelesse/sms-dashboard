import React from 'react';
import { timeTableTimings, timetableData } from '@/lib/dummy-data';

const Timetable: React.FC = () => {
  return (
    <div className="container mx-auto p-4 mb-10">
      <h1 className="text-3xl font-semibold">Weekly Timetable</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mt-4">
        <div className="p-4">
          <h2 className="text-xl text-center bg-[#232D3F] text-[#fff] font-semibold py-2">Timing</h2>
          <div className="flex flex-col justify-evenly h-full bg-slate-100 px-2">
            {timeTableTimings.map((subject, index) => (
                <p key={index} className="py-2">
                <strong>{subject}</strong>
                </p>
            ))}
          </div>
        </div>
        {timetableData.map((day, index) => (
          <div key={index} className="p-4">
            <h2 className="text-xl text-center bg-[#232D3F] text-[#fff] font-semibold py-2">{day.day}</h2>
            <div className="flex flex-col justify-evenly h-full bg-slate-100 px-2">
            {day.subjects.map((subject, subjectIndex) => (
              <div key={subjectIndex} className="py-2">
                {subject.code ?  <p>{subject.subject} - {subject.code} - {subject.location}</p> : <p className="text-center">{subject.subject}</p>}
                {/* {subject.location && <p>{subject.location}</p>} */}
              </div>
            ))}
            </div>
          </div>
        ))}
      </div>
      {/* <div>
          <table>
              <tbody>
                  {timetableData.map((day, dayindex) => {
                      <tr>
                          <td>{timeTableTimings[dayindex]</td>
                            {day.subjects.map((sub) => {
                                <td>{sub.subject} -{sub.subject} - {sub.location}</td>
                            })}
                      </tr>
                  })}
              </tbody>
          </table>
      </div> */}
    </div>
  );
};

export default Timetable;
