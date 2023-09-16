import React from 'react';

const RangeOfAges = () => {
  return (
    <section className="w-full">
      <div className="py-20 max-w-[1320px] h-max mx-auto grid grid-cols-3">
        <div className="flex flex-col mr-5 space-y-5">
          <h1 className="text-4xl">Вікові категорії</h1>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quod ducimus vero
            nesciunt, corrupti laboriosam? Eveniet voluptatibus nesciunt provident? Itaque.
          </p>
          <p className="text-xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo vero commodi aut veniam
            libero, quam corrupti ad qui provident eveniet!
          </p>
        </div>
        <div className="bg-white mr-5 flex flex-col">
          <div className="flex">
            <div className="bg-accent w-2/5 p-5">Photo</div>
            <div className="flex flex-col w-3/5 p-5">
              <h1 className="text-4xl">6-10 років</h1>
              <p className="text-xl">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="bg-[#E9EDFC] rounded-md space-y-3 p-5">
            <p className="text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nihil accusamus
              ipsa, reiciendis eveniet delectus.
            </p>
            <p className="text-base">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam repellendus
              cupiditate quia exercitationem ipsam error.
            </p>
          </div>
        </div>
        <div className="bg-white flex flex-col">
          <div className="flex">
            <div className="bg-accent w-2/5 p-5">Photo</div>
            <div className="flex flex-col w-3/5 p-5">
              <h1 className="text-4xl">11-12 років</h1>
              <p className="text-xl">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="bg-[#E9EDFC] rounded-md space-y-3 p-5">
            <p className="text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nihil accusamus
              ipsa, reiciendis eveniet delectus.
            </p>
            <p className="text-base">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam repellendus
              cupiditate quia exercitationem ipsam error.
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default RangeOfAges;
