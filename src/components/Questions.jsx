import React, { useState } from 'react';
import { questions } from '../constants';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const Questions = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleQuestion = (id) => {
    setActiveId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="max-w-3xl max-md:px-5 mb-10 w-full mx-auto mt-10 px-4 sm:px-6 lg:px-8">
      {questions.map(({ id, title, ans }) => (
        <div
          key={id}
          data-aos='flip-left'
          className="bg-gray-900 border border-gray-700 rounded-lg mb-4 transition-shadow hover:shadow-lg"
        >
          <div
            className="flex justify-between items-center p-4 sm:p-6 cursor-pointer bg-gray-800 rounded-t-lg"
            onClick={() => toggleQuestion(id)}
          >
            <h2 className="text-base sm:text-lg font-medium text-white">{title}</h2>
            <button className="text-gray-100 hover:text-white transition-colors duration-200">
              {activeId === id ? <RemoveCircleOutlineIcon /> : <AddCircleOutlineIcon />}
            </button>
          </div>

          <div
            className={`px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out bg-gray-900 text-gray-300 ${
              activeId === id ? 'max-h-96 py-4' : 'max-h-0'
            }`}
          >
            <p className="text-sm sm:text-base text-gray-100">{ans}</p>
          </div>
        </div>
      ))}
      
    </div>
  );
};

export default Questions;
