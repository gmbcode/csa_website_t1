import React, { useState } from 'react';
import 'leaflet/dist/leaflet.css';

import ArrowLeft from './icons/ArrowLeft';
import ArrowRight from './icons/ArrowRight';

export const AlumniCarousel = ({ people }: { people: any[] }) => {
  const [index, setIndex] = useState(0);
  const currentPerson = people[index];

  return (
    <div className="relative flex flex-col justify-center items-center bg-white">
      <div className='absolute top-0 left-0 w-full h-16 text-transparent bg-indigo-900'></div>

      <img
        src={currentPerson.picture}
        alt={currentPerson.name}
        width="50"
        className="w-16 aspect-square mx-auto mt-8 bg-white z-10 rounded-full border-4 border-solid border-gray-300 mb-6"
      />

      <div className="flex flex-col items-center w-56 mb-6">
        {currentPerson.name && (
          <span className="min-w-max text-lg font-semibold">{currentPerson.name}</span>
        )}

        {currentPerson.batch && <span className='bg-blue-100 text-blue-600 py-1 px-2 rounded-lg'>{currentPerson.batch}</span>}
      </div>

      <div className="flex justify-center items-center gap-x-2 mb-2">
        {currentPerson.linkedin && (
          <a
            className="justify-center items-center group"
            href={currentPerson.linkedin}
            target="_blank"
          >
            <svg
              height="16px"
              width="16px"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 382 382"
              className="group-hover:scale-110 transition-all ease-in"
            >
              <path
                className="fill-[#0B67C2]"
                d="
                    M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889
                    C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056
                    H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806
                    c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1
                    s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73
                    c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079
                    c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426
                    c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472
                    L341.91,330.654L341.91,330.654z
                  "
              />
            </svg>
          </a>
        )}

        {currentPerson.github && (
          <a
            className="justify-center items-center group"
            href={currentPerson.github}
            target="_blank"
          >
            <svg
              width="18px"
              height="18px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 128"
              className="group-hover:scale-110 transition-all ease-in"
            >
              <path
                className="fill-black"
                d="
                  M56.7937 84.9688C44.4187 83.4688 35.7 74.5625 35.7 63.0313C35.7 58.3438 37.3875 53.2813 40.2 49.9063C38.9812 46.8125 39.1687 40.25
                  40.575 37.5313C44.325 37.0625 49.3875 39.0313 52.3875 41.75C55.95 40.625 59.7 40.0625 64.2937 40.0625C68.8875 40.0625 72.6375 40.625 76.0125
                  41.6563C78.9187 39.0313 84.075 37.0625 87.825 37.5313C89.1375 40.0625 89.325 46.625 88.1062 49.8125C91.1062 53.375 92.7 58.1563 92.7 63.0313C92.7
                  74.5625 83.9812 83.2813 71.4187 84.875C74.6062 86.9375 76.7625 91.4375 76.7625 96.5938L76.7625 106.344C76.7625 109.156 79.1062 110.75 81.9187 109.625C98.8875
                  103.156 112.2 86.1875 112.2 65.1875C112.2 38.6563 90.6375 17 64.1062 17C37.575 17 16.2 38.6562 16.2 65.1875C16.2 86 29.4187 103.25 47.2312 109.719C49.7625
                  110.656 52.2 108.969 52.2 106.438L52.2 98.9375C50.8875 99.5 49.2 99.875 47.7 99.875C41.5125 99.875 37.8562 96.5 35.2312 90.2188C34.2 87.6875 33.075
                  86.1875 30.9187 85.9063C29.7937 85.8125 29.4187 85.3438 29.4187 84.7813C29.4187 83.6563 31.2937 82.8125 33.1687 82.8125C35.8875 82.8125 38.2312
                  84.5 40.6687 87.9688C42.5437 90.6875 44.5125 91.9063 46.8562 91.9063C49.2 91.9063 50.7 91.0625 52.8562 88.9063C54.45 87.3125 55.6687 85.9063 56.7937 84.9688Z
                "
              />
            </svg>
          </a>
        )}
      </div>

      {people.length > 1 && (
        <div className="w-56 grid grid-rows-1 grid-cols-12 justify-between gap-x-1 p-1">
          <button
            className="bg-blue-900 text-white px-2 py-1 rounded-lg col-span-2"
            onClick={() =>
              setIndex((index - 1 + people.length) % people.length)
            }
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <div className="bg-blue-900 text-white flex justify-center items-center text-center flex-grow rounded-sm col-span-4">
            {index + 1}
          </div>
          <div className="bg-blue-900 text-white flex justify-center items-center text-center flex-grow rounded-sm col-span-4">
            of {people.length}
          </div>
          <button
            className="bg-blue-900 text-white px-2 py-1 rounded-lg col-span-2"
            onClick={() => setIndex((index + 1) % people.length)}
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
};
