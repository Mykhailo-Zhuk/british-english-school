import React from 'react';
import { InputForm } from '../index';
import { AspectRatio } from '../../ui/aspect-ratio';

const GroupForm = () => {
  return (
    <section className="bg-[#F8F8FA] w-full">
      <div className="h-max p-2 md:p-14 max-w-[1320px] w-full mx-auto flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <AspectRatio ratio={16 / 16} className="bg-accent rounded-lg">
            Photo
          </AspectRatio>
        </div>
        <div className="w-full md:w-1/2">
          <div className="w-full md:w-[525px] h-max p-2 md:p-12 bg-white flex-shrink-0 flex flex-col items-center">
            <h1 className="text-lg md:text-2xl text-center mb-6">
              Давайте підберемо для вас групу!
            </h1>
            <InputForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroupForm;
