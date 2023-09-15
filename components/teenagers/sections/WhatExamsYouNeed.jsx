import React from 'react';

const WhatExamsYouNeed = () => {
  return (
    <section className="w-full">
      <div className="py-20 max-w-[1320px] h-max mx-auto flex flex-col space-y-6">
        <h1 className="text-4xl">Які іспити потрібно складати та коли?</h1>
        <div className="flex space-x-20">
          <div className="relative w-3/5 flex flex-col max-h-[588px] flex-wrap odd:space-y-10 odd:space-x-4">
            <div className="w-[360px] h-[170px] border bg-white rounded-lg px-10 py-5">
              <p className="text-xl">Загальноосвітні школи</p>
              <p className="inline-flex items-center justify-between w-full mt-3">
                <span>9 клас</span>
                <span>A2 Key (KET)</span>
              </p>
              <p className="inline-flex items-center justify-between w-full mt-3">
                <span>11 клас</span>
                <span>B1 Preliminary (PET)</span>
              </p>
            </div>
            <div className="w-[365px] h-[170px] border bg-accent rounded-lg px-10 py-5"></div>
            <div className="w-[210px] h-[260px] border bg-accent rounded-lg px-10 py-5"></div>
            <div className="relative w-[360px] h-[170px] border bg-white rounded-lg px-10 py-5 right-40">
              <p className="text-xl">Школи з поглибленим вивченням мови</p>
              <p className="inline-flex items-center justify-between w-full mt-3">
                <span>9 клас</span>
                <span>B1 Preliminary (PET)</span>
              </p>
              <p className="inline-flex items-center justify-between w-full mt-3">
                <span>11 клас</span>
                <span>B2 First (FCE)</span>
              </p>
            </div>
          </div>
          <div className="w-2/5 flex items-center justify-left">
            <p className="text-xl max-w-md pl-5 border-l-4 border-l-[#A14669]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque optio adipisci,
              impedit, asperiores eius incidunt magni, ea quasi itaque aliquid iusto debitis
              suscipit voluptate eligendi cum exercitationem excepturi consectetur dolor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatExamsYouNeed;
