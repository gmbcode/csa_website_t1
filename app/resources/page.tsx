'use client';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const resources = [
  { title: "Acad Drive 2022", description: "Acad Drive by Umaang (22)", link: "https://drive.google.com/drive/folders/1SpJjsevyTKRjHCx_BWC_3LNcW005nOmJ", visi:false },
  { title: "Acad Drive 2023", description: "Acad Drive by Rupesh (23)", link: "https://drive.google.com/drive/folders/1IFOauYi1sac4eStmPAY2wmgLjsbmz2lx" , visi:false},
  { title: "Acad Drive 2023-24", description: "Acad Hub by Arnav (23 + 24) ", link: "https://drive.google.com/drive/folders/1YaAKJbJfEqx6ganFsnRNiylYtTzy15OA" , visi:false  },
  { title: "CSE Drive 2-1", description: "Acad Hub for CSE 2-1 ", link: "https://drive.google.com/drive/folders/1Gl8fivW9ZAK8ICTWwLCSkJ9aHZwychIv", visi: true},
  { title: "CSE Drive 2-2", description: "Acad Hub for CSE 2-2 ", link: "https://drive.google.com/drive/folders/1qcwe_JnhILqb2fVMrw8IO5lfoM8YE-7f", visi:true},
  { title: "CSE Drive 3-1", description: "Acad Hub for CSE 3-1 ", link: "https://drive.google.com/drive/folders/1MHwN_Arps7WLYhkzWi0NLsIVk6yEIrKB", visi:true },
  { title: "CSE Drive 3-2", description: "Acad Hub for CSE 3-2 ", link: "https://drive.google.com/drive/folders/17JT8M_itpgcffVhF0rfMhxlKCF8onpls", visi:true },
  { title: "CSE Drive DELs", description: "Acad Hub for CSE DELs ", link: "https://drive.google.com/drive/folders/1h4WfnfYkcGE-MLdzKbkVfKknS-vwIrUB", visi:true }
];

export default function ResourcesPage() {
  const [showHidden, setShowHidden] = useState(false);
  const visible = resources.filter(r => r.visi);
  const hidden = resources.filter(r => !r.visi);

  return (
    <div className="p-6 text-center">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-6 mt-4 text-black dark:text-white">Resources</h1>
      
      {/* Resource Cards which are always visible*/}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {visible.map((resource, index) => (
          <a key={index} href={resource.link} target="_blank" rel="noopener noreferrer" className="no-underline">
            <div className="p-4 text-center bg-[#eeeeee] dark:bg-[#1f2937] text-white rounded-2xl shadow-lg hover:shadow-xl w-full lg:aspect-square md:aspect-square flex flex-col justify-center items-center hover:scale-105  ">
              <h2 className="text-xl font-semibold mb-2">{resource.title}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">{resource.description}</p>
                <svg
                    height="2.5rem"
                    width="auto"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 220 220"
                    className="group-hover:scale-110 transition-all"
                  >
                    <g xmlns="http://www.w3.org/2000/svg" clip-path="url(#clip0_1:142)" transform="translate(55, 70)">
                  <path d="M8.46154 85.7051L13.3974 94.2308C14.4231 96.0256 15.8974 97.4359 17.6282 98.4615L35.2564 67.9487H0C0 69.9359 0.512821 71.9231 1.53846 73.7179L8.46154 85.7051Z" fill="#0066DA"/>
                  <path d="M55.9615 32.0513L38.3333 1.53846C36.6026 2.5641 35.1282 3.97436 34.1026 5.76923L1.53846 62.1795C0.531683 63.9357 0.00134047 65.9244 0 67.9487H35.2564L55.9615 32.0513Z" fill="#00AC47"/>
                  <path d="M94.2949 98.4615C96.0256 97.4359 97.5 96.0256 98.5256 94.2308L100.577 90.7051L110.385 73.7179C111.41 71.9231 111.923 69.9359 111.923 67.9487H76.6641L84.1667 82.6923L94.2949 98.4615Z" fill="#EA4335"/>
                  <path d="M55.9615 32.0513L73.5898 1.53846C71.859 0.512821 69.8718 0 67.8205 0H44.1026C42.0513 0 40.0641 0.576923 38.3333 1.53846L55.9615 32.0513Z" fill="#00832D"/>
                  <path d="M76.6667 67.9487H35.2564L17.6282 98.4615C19.359 99.4872 21.3462 100 23.3974 100H88.5256C90.5769 100 92.5641 99.4231 94.2949 98.4615L76.6667 67.9487Z" fill="#2684FC"/>
                  <path d="M94.1026 33.9744L77.8205 5.76923C76.7949 3.97436 75.3205 2.5641 73.5897 1.53846L55.9615 32.0513L76.6667 67.9487H111.859C111.859 65.9615 111.346 63.9744 110.321 62.1795L94.1026 33.9744Z" fill="#FFBA00"/>
                  </g>
                  </svg>{/* Try adding Logo
            <img src="https://cloud.gmelius.com/public/logos/google/Google_Drive_Logo.svg" width={18} ></img>*/}
            </div>
          </a>
        ))}
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setShowHidden(!showHidden)}
        className="col-span-full w-[97%] mx-auto mt-6 mb-6  p-4 text-center bg-[#eeeeee] dark:bg-[#1f2937] text-white rounded-2xl shadow-lg hover:shadow-xl -shadow cursor-pointer flex flex-col justify-center items-center cursor-pointer  hover:scale-105"
      >
        {showHidden ? "Hide additional drives" : "Show additional drives for CSE"}
      </button>
      

      {/*Resource cards which are toggle visible*/}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {hidden.map((resource, index) => (
    <a
      key={`h-${index}`}
      href={resource.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`no-underline -all duration-100 ease-in-out
        ${showHidden
          ? "p-4 text-center bg-[#eeeeee] dark:bg-[#1f2937] rounded-2xl shadow-lg hover:shadow-xl cursor-pointer w-full lg:aspect-square md:aspect-square flex flex-col justify-center items-center opacity-100 translate-y-0 pointer-events-auto  hover:scale-105 duration-100"
          : "opacity-0 translate-y-4 scale-95 pointer-events-none h-0" }
      `}
    >
      <div className="" >
        <h2 className="text-xl font-semibold mb-2 text-black dark:text-white">{resource.title}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">{resource.description}</p>
        <svg
                    height="2.5rem"
                    width="auto"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 220 220"
                    className="group-hover:scale-110 transition-all"
                  >
                    <g xmlns="http://www.w3.org/2000/svg" clip-path="url(#clip0_1:142)" transform="translate(55, 70)">
                  <path d="M8.46154 85.7051L13.3974 94.2308C14.4231 96.0256 15.8974 97.4359 17.6282 98.4615L35.2564 67.9487H0C0 69.9359 0.512821 71.9231 1.53846 73.7179L8.46154 85.7051Z" fill="#0066DA"/>
                  <path d="M55.9615 32.0513L38.3333 1.53846C36.6026 2.5641 35.1282 3.97436 34.1026 5.76923L1.53846 62.1795C0.531683 63.9357 0.00134047 65.9244 0 67.9487H35.2564L55.9615 32.0513Z" fill="#00AC47"/>
                  <path d="M94.2949 98.4615C96.0256 97.4359 97.5 96.0256 98.5256 94.2308L100.577 90.7051L110.385 73.7179C111.41 71.9231 111.923 69.9359 111.923 67.9487H76.6641L84.1667 82.6923L94.2949 98.4615Z" fill="#EA4335"/>
                  <path d="M55.9615 32.0513L73.5898 1.53846C71.859 0.512821 69.8718 0 67.8205 0H44.1026C42.0513 0 40.0641 0.576923 38.3333 1.53846L55.9615 32.0513Z" fill="#00832D"/>
                  <path d="M76.6667 67.9487H35.2564L17.6282 98.4615C19.359 99.4872 21.3462 100 23.3974 100H88.5256C90.5769 100 92.5641 99.4231 94.2949 98.4615L76.6667 67.9487Z" fill="#2684FC"/>
                  <path d="M94.1026 33.9744L77.8205 5.76923C76.7949 3.97436 75.3205 2.5641 73.5897 1.53846L55.9615 32.0513L76.6667 67.9487H111.859C111.859 65.9615 111.346 63.9744 110.321 62.1795L94.1026 33.9744Z" fill="#FFBA00"/>
                  </g>
                  </svg>
        </div>
    </a>
  ))}
      </div>
    </div>
  );
}
