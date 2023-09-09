import React from 'react';
import { FilterForm } from '../index';

const CoursesList = () => {
  return (
    <section className="w-full">
      <div className="py-20 max-w-[1320px] mx-auto grid grid-cols-[350px_auto]">
        {/* Filter */}
        <div className="w-full">
          <FilterForm />
        </div>
      </div>
    </section>
  );
};

export default CoursesList;
