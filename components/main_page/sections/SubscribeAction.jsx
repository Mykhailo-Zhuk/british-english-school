import React from 'react';
import { SubscribeInput } from '../index';

const SubscribeAction = () => {
  return (
    <section className="w-full">
      <div className="mt-10 md:mt-20 lg:mt-0 py-5 md:py-12 px-5 md:px-10 lg:px-12 max-w-[1320px] mx-auto h-max md:h-[200px] md:space-x-7 flex flex-col md:flex-row flex-shrink-0 subscribe-action rounded-xl">
        <div className="w-full md:w-2/5 space-y-4 text-white flex flex-col justify-center">
          <h1 className="text-2xl lg:text-3xl text-center sm:text-left">Підписка на розсилку</h1>
          <p className="text-sm">Підбірки слів, поради та статті щодо вивчення англійської</p>
        </div>
        <div className="w-full md:w-3/5 flex items-center">
          <SubscribeInput />
        </div>
      </div>
    </section>
  );
};

export default SubscribeAction;
