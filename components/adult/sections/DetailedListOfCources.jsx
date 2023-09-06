import useHttp from '@/hooks/useHttp';
import React, { useEffect, useState } from 'react';

const DetailedListOfCources = () => {
  const [courses, setCourses] = useState([]);
  const { sendRequest, error, isLoading } = useHttp();

  useEffect(() => {
    sendRequest({ url: 'courses/adult/detail' }, setCourses.bind(null));
  }, []);
  return (
    <section className="w-full how-we-learn">
      <div className="py-20 max-w-[1320px] h-max mx-auto flex flex-col space-y-6">
        <h1 className="text-4xl">Які курси ми пропонуємо?</h1>
        <div className="flex flex-col space-y-6">
          <h1 className="text-3xl">Курси англійської для дорослих</h1>
          <div className="flex flex-wrap"></div>
        </div>
        <div className="flex flex-col space-y-6">
          <h1 className="text-3xl">Програми для вашого професійного розвитку</h1>
          <div className="flex flex-wrap"></div>
        </div>
        <div className="flex flex-col space-y-6">
          <h1 className="text-3xl">Курси з підготовки до міжнародних іспитів</h1>
          <div className="flex flex-wrap"></div>
        </div>
      </div>
    </section>
  );
};

export default DetailedListOfCources;
