import React from 'react';

const TeacherSkill = ({ label, description }) => {
  return (
    <div className="relative w-full h-max min-h-[96px] flex-shrink-0 teachers-skills-border rounded-lg p-5 z-10">
      <h3 className="text-xl py-1 text-black">{label}</h3>
      <p className="text-base py-1 text-black">{description}</p>
      <div className="absolute inset-1 bg-white rounded-lg -z-10" />
    </div>
  );
};

export default TeacherSkill;
