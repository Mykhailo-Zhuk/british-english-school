'use client';

import React from 'react';
import { InputForm } from '../index';
import icons from '@/public/icons';
import { Button } from '../../ui/button';
import Image from 'next/image';

const content = {
  email: 'info@cambridge.ua',
  messengers: [
    { title: 'Viber', icon: icons.viber },
    { title: 'Telegram', icon: icons.telegram },
    { title: 'Messenger', icon: icons.messenger },
  ],
  phoneNumbers: [
    '+380 (44) 580 33 00',
    '+380 (44) 580 33 00',
    '+380 (44) 580 33 00',
    '+380 (44) 580 33 00',
  ],
};

const Contacts = () => {
  const { email, messengers, phoneNumbers } = content;
  return (
    <section className="w-full contacts-gradient" id="contacts">
      <div className="py-10 md:py-20 px-5 max-w-[1320px] mx-auto flex flex-col space-y-6 lg:flex-row lg:space-x-6">
        <div className="w-full lg:w-1/2 flex flex-col items-center space-y-8">
          <h1 className="text-2xl md:text-3xl text-center md:text-left">Як з нами зв'язатися?</h1>
          <div className="flex flex-col md:flex-row space-y-6 md:space-x-20">
            <div className="w-full md:w-1/2 space-y-8">
              <div className="flex flex-col text-xl items-center md:items-start">
                <h3 className="pb-2">Email</h3>
                <Button variant="link" className="text-xl w-max px-0">
                  {email}
                </Button>
              </div>
              <div className="text-xl flex flex-col space-y-2 items-center md:items-start">
                <h3 className="pb-3">Телефони</h3>
                {phoneNumbers.map((item, index) => {
                  return (
                    <p key={index}>
                      <Button variant="link" className="text-xl w-max px-0">
                        {item}
                      </Button>
                    </p>
                  );
                })}
              </div>
            </div>
            <div className="w-full md:w-1/2 text-xl flex flex-col items-center md:items-start space-y-2">
              <h3 className="pb-5">Месенджери</h3>
              {messengers.map((item, index) => {
                return (
                  <p key={index} className="inline-flex items-center">
                    <span>
                      <Image src={item.icon} alt={item.title} width={20} height={20} />
                    </span>
                    <Button variant="link" className="text-xl">
                      {item.title}
                    </Button>
                  </p>
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center lg:w-1/2">
          <InputForm />
        </div>
      </div>
    </section>
  );
};

export default Contacts;
