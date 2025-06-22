import React from 'react';
import { choose } from '../constants';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
const Values = () => {
  return (
    <div className="py-10 px-4 sm:px-8 md:px-16 bg-black">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {choose.map((c, index) => {
          const { write, head, icon } = c;
          return (
            <div
              key={write}
              className="flex flex-col gap-3 items-start p-6 bg-gray-950 rounded-lg shadow-lg transition-transform transform hover:-translate-y-2 hover:shadow-primary/50 hover:shadow-xl"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <span className="text-4xl text-primary"><ArrowDropDownCircleIcon/></span>
              <h3 className="text-white text-xl font-bold">{head}</h3>
              <p className="text-gray-200 text-sm leading-relaxed">{write}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Values;
