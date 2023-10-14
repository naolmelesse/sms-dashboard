'use client'
import { useState } from 'react';
import { econtent_subjects, EContent_Category } from '@/lib/dummy-data';

const EContentTabs: React.FC = () => {
  const [activeSubject, setActiveSubject] = useState(econtent_subjects[0].id);
  const [activeCategory, setActiveCategory] = useState(EContent_Category[0]);

  return (
    <div className="container py-10">
      <h1 className="py-5 lg:text-3xl ">E-content (Download)</h1>
      <div className="flex gap-5 py-5">
        {econtent_subjects.map((subject) => (
          <div
            key={subject.id}
            className={`cursor-pointer p-2 ${
              activeSubject === subject.id ? 'border-b-4 border-[#005B41]' : ''
            }`}
            onClick={() => setActiveSubject(subject.id)}
          >
            {subject.name}
          </div>
        ))}
      </div>
        <div className="flex gap-2">
        {/* Econtent Categories tab */}
        {EContent_Category.map((category, index) => (
                <button key={index} className={`py-3 px-4 ${activeCategory === category ? 'bg-[#232D3F] text-[#fff]' : 'bg-gray-300'}`}
                onClick={() => setActiveCategory(category)}
                >{category}</button>
        ))}
        </div>

        {/* Econtent Category content*/}
        {EContent_Category.map((category, index) => (
                <p key={index} className={`py-2 ${activeCategory === category ? '' : 'hidden'}`}>Download Uploaded {category}</p>
        ))}
    </div>
  );
};

export default EContentTabs;
