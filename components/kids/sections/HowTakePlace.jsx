import React from 'react';
const content = [
  {
    title: 'Гнучкі програми',
    decription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam accusantium aperiam corporis laborum, esse inventore!',
  },
  {
    title: 'Інтерактивний підхід',
    decription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam accusantium aperiam corporis laborum, esse inventore!',
  },
  {
    title: 'Навчальні матеріали',
    decription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam accusantium aperiam corporis laborum, esse inventore!',
  },
  {
    title: 'Підтримка та реалізація',
    decription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam accusantium aperiam corporis laborum, esse inventore!',
  },
];

const HowTakePlace = () => {
  return (
    <section className="w-full">
      <div className="py-20 max-w-[1320px] h-max mx-auto flex flex-col space-y-14">
        <h1 className="text-4xl">Як буде займатися ваша дитина?</h1>

        <div className="grid grid-cols-[minmax(0,_1fr),_minmax(0,_2fr)] space-x-10">
          <div className="bg-white rounded-lg w-full p-6 space-y-3 text-base h-max">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam accusantium.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, porro!</p>
            <div className="bg-accent h-32 w-32 mx-auto">Photo</div>
          </div>
          <div className="flex flex-wrap p-6">
            {content.map((item, index) => {
              return (
                <div key={index} className="flex flex-col space-y-6 w-2/5 mr-5 mb-10">
                  <h2 className="text-xl">{item.title}</h2>
                  <p className="text-base">{item.decription}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowTakePlace;
