import React from 'react';
import { InputForm } from '../index';
import { AspectRatio } from '../ui/aspect-ratio';

const GroupForm = () => {
  return (
    <section className="bg-[#F8F8FA] w-full">
      <div className="h-max p-14 max-w-[1320px] w-full mx-auto flex">
        <div className="w-1/2">
          <div className="w-[525px] h-max p-12 bg-white flex-shrink-0 flex flex-col items-center">
            <h1 className="text-2xl text-center mb-6">Давайте підберемо для вас групу!</h1>
            <InputForm />
          </div>
        </div>
        <div className="w-1/2">
          <AspectRatio ratio={16 / 13} className="bg-indigo-100 rounded-lg">
            Photo
          </AspectRatio>
        </div>
      </div>
    </section>
  );
};

export default GroupForm;
