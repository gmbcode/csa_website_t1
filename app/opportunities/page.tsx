'use client';
import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import Link from '../../components/icons/Link';
import Hourglass from '../../components/icons/Hourglass';

interface Opportunity {
  title: string;
  apply: string;
  duration: string;
}

const Opportunities = () => {
  const [opportunities, setOpportunities]: [
    Opportunity[],
    Dispatch<SetStateAction<Opportunity[]>>
  ] = useState([{} as Opportunity]);

  useEffect(() => {
    fetch('/database/opportunities.json')
      .then((res) => res.json())
      .then(setOpportunities)
      .catch(console.error);
  }, []);

  return (
    <>
      <div className="mx-auto p-5 pt-24">
        <h1 className="mb-8 text-center text-3xl font-bold text-black dark:text-white">
          Opportunities
        </h1>

        <div className="flex flex-col gap-y-8">
          {opportunities.map((opportunity, idx) => (
            <div
              key={idx}
              className="mx-auto flex w-full justify-between rounded-xl border border-solid border-black px-8 py-8 sm:w-2/3 xl:w-1/2 dark:border-white dark:text-white"
            >
              <div className="flex flex-col gap-y-1">
                <span className='text-2xl font-semibold'>{opportunity.title}</span>
                <span className="flex items-center text-neutral-400">
                  <Hourglass className="scale-75 fill-neutral-400" />{' '}
                  {opportunity.duration}
                </span>
              </div>
              <a href={opportunity.apply} target="_blank">
                <Link className="cursor-pointer fill-white transition-all duration-75 ease-linear hover:scale-110 hover:fill-blue-300" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Opportunities;
