import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import icons from '@/public/icons/adult';
import { Button } from '../ui/button';
import { useTranslations } from 'next-intl';

const Condition = ({ condition }) => {
  const { label, value } = condition;
  return (
    <div className="flex space-x-3 text-sm">
      <p>{label}</p>
      {Array.isArray(value) ? (
        value?.map((v, i) => (
          <Fragment key={i}>
            <p className="inline-flex w-max mx-2 items-center">
              <span className={`${v?.color} mx-1 mb-1`}>{v?.circle}</span>
              {v.title}
            </p>
          </Fragment>
        ))
      ) : (
        <p className="ml-3">{value}</p>
      )}
    </div>
  );
};

const AdultDetailedCard = ({ course }) => {
  const { title, status, conditions, description, include } = course;
  const t = useTranslations('detailed_list_of_courses');

  return (
    <div className="w-full p-5 space-y-4 h-max text-sm bg-white dark:bg-slate-700 rounded-lg">
      <div className="flex items-center flex-wrap space-x-4">
        <h2 className="text-xl">{title}</h2>
        <p className={`${status?.bgColor} ${status?.textColor} text-sm px-2 py-2 rounded-full`}>
          {status?.title}
        </p>
      </div>
      {conditions?.map((item, index) => {
        return <Condition key={index} condition={item} />;
      })}
      {description?.map((d, i) => {
        return <p key={i}>{d}</p>;
      })}
      <ul className="text-sm space-y-1">
        {include?.map((item, index) => {
          return (
            <Fragment key={index}>
              {typeof item === 'object' ? (
                <div className="flex flex-col space-y-2">
                  <p>{item?.title}</p>
                  <ul className="text-sm space-y-1">
                    {item?.list?.map((item, index) => {
                      return (
                        <li key={index} className="relative py-1 pl-5 flex space-x-2">
                          <span className="absolute left-0 top-1/2 transform -translate-y-1/2">
                            <Image
                              src={icons.blueSquare}
                              width={10}
                              height={10}
                              alt="blue square"
                            />
                          </span>
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ) : (
                <li className="relative py-1 pl-5 flex space-x-2">
                  <span className="absolute left-0 top-1/2 transform -translate-y-1/2">
                    <Image src={icons.blueSquare} width={10} height={10} alt="blue square" />
                  </span>
                  {item}
                </li>
              )}
            </Fragment>
          );
        })}
      </ul>

      <Button
        size="lg"
        className="bg-[#A14669] text-base float-left text-slate-400 dark:bg-slate-500">
        {t('details')} &#707;
      </Button>
    </div>
  );
};

AdultDetailedCard.propTypes = {
  title: PropTypes.string,
  status: PropTypes.object,
  conditions: PropTypes.arrayOf(PropTypes.object),
  description: PropTypes.arrayOf(PropTypes.string),
  include: PropTypes.arrayOf(PropTypes.string),
};

export default AdultDetailedCard;
