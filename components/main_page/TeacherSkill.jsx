import React from 'react';

const TeacherSkill = ({ label, description }) => {
  return (
    <div className="relative w-full h-max min-h-[96px] flex-shrink-0 bg-gradient-to-r from-[#dfeafd] to-[#fbebef] rounded-lg p-5 z-10">
      <h3 className="text-xl py-1 text-black dark:text-slate-400">{label}</h3>
      <p className="text-base py-1 text-black dark:text-slate-400">{description}</p>
      <div className="absolute inset-1 bg-white dark:bg-slate-700 rounded-lg -z-10" />
    </div>
  );
};

export default TeacherSkill;
