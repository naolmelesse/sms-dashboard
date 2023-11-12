import React from 'react';
import { timeTableTimings, timetableData } from '@/lib/dummy-data';
import { SCHEDULE, DAYS } from '@/lib/dummy-schedule';
import { checkScheduleDay, shortenCourseName } from '@/lib/helper-functions';

const Timetable: React.FC = () => {

  return (
    <div className="container mx-auto p-4 mb-10">
      <h1 className="text-3xl font-semibold">Weekly Timetable</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mt-4">
        <div className="p-4">
          <h2 className="text-xl text-center bg-[#232D3F] text-[#fff] font-semibold py-2">Timing</h2>
          <div className="flex flex-col justify-evenly h-full bg-slate-100 px-2">
            {
                SCHEDULE.data.filter((subject) => {
                  return checkScheduleDay(1, subject.schedule_date);
                }).map((s) => (
                  <p key={s.name} className="py-2">
                    <strong>{s.from_time} to {s.to_time}</strong>
                  </p>
                ))
              }
          </div>
        </div>
        {/* {timetableData.map((day, index) => (
          <div key={index} className="p-4">
            <h2 className="text-xl text-center bg-[#232D3F] text-[#fff] font-semibold py-2">{day.day}</h2>
            <div className="flex flex-col justify-evenly h-full bg-slate-100 px-2">
            {day.subjects.map((subject, subjectIndex) => (
              <div key={subjectIndex} className="py-2">
                {subject.code ?  <p>{subject.subject} - {subject.code} - {subject.location}</p> : <p className="text-center">{subject.subject}</p>}
                {subject.location && <p>{subject.location}</p>}
              </div>
          ))} */}
        
        {DAYS.map((day, index) => (
          <div key={index} className="p-4">
            <h2 className="text-xl text-center bg-[#232D3F] text-[#fff] font-semibold py-2">{day}</h2>
            <div className="flex flex-col justify-evenly h-full bg-slate-100 px-2">
              {
                SCHEDULE.data.filter((subject) => {
                  return checkScheduleDay(index, subject.schedule_date);
                }).map((s) => (
                  <div key={s.idx} className="py-2">
                  <p>{shortenCourseName(s.course)}</p>
                  <p>{s.room}</p>
                </div>
                ))
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timetable;
