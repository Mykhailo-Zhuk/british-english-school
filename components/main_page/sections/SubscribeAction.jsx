import React from 'react';
import { SubscribeInput } from '../index';

const SubscribeAction = () => {
  return (
    <section className="w-full">
      <div className="mt-20 py-12 px-28 max-w-[1320px] mx-auto h-[200px] space-x-7 flex flex-shrink-0 subscribe-action rounded-xl">
        <div className="w-2/5 space-y-4 text-white flex flex-col justify-center">
          <h1 className="text-3xl">Підписка на розсилку</h1>
          <p className="text-sm">Підбірки слів, поради та статті щодо вивчення англійської</p>
        </div>
        <div className="w-3/5 flex items-center">
          <SubscribeInput />
        </div>
      </div>
    </section>
  );
};

export default SubscribeAction;
