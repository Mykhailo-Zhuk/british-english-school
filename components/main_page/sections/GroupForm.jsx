import React from 'react';
import { InputForm } from '../index';
import { AspectRatio } from '../../ui/aspect-ratio';

const GroupForm = () => {
  return (
    <section className="bg-[#F8F8FA] w-full">
      <div className="h-max py-10 lg:py-20 px-5 max-w-[1320px] space-y-6 w-full mx-auto flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 flex max-w-[525px] mx-auto">
          <AspectRatio ratio={16 / 16} className="bg-accent rounded-lg ">
            Photo
          </AspectRatio>
        </div>
        <div className="w-full flex justify-center lg:w-1/2">
          <div className="w-full md:w-[525px] h-max p-2 lg:p-12 bg-white flex-shrink-0 flex flex-col items-center rounded-lg">
            <h1 className="text-lg lg:text-2xl text-center mb-6">
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
