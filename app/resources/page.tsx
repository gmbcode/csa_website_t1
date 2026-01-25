'use client';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const resources = [
  { title: "Acad Drive 2022", description: "Acad Drive by Umaang (22)", link: "https://drive.google.com/drive/folders/1SpJjsevyTKRjHCx_BWC_3LNcW005nOmJ", visi:true },
  { title: "Acad Drive 2023", description: "Acad Drive by Rupesh (23)", link: "https://drive.google.com/drive/folders/1IFOauYi1sac4eStmPAY2wmgLjsbmz2lx" , visi:true},
  { title: "Acad Drive 2023-24", description: "Acad Hub by Arnav (23 + 24) ", link: "https://drive.google.com/drive/folders/1YaAKJbJfEqx6ganFsnRNiylYtTzy15OA" , visi:true  },
  { title: "CSE Drive 2-1", description: "Acad Hub for CSE 2-1 ", link: "https://drive.google.com/drive/folders/1Gl8fivW9ZAK8ICTWwLCSkJ9aHZwychIv", visi:false },
  { title: "CSE Drive 2-2", description: "Acad Hub for CSE 2-2) ", link: "https://drive.google.com/drive/folders/1qcwe_JnhILqb2fVMrw8IO5lfoM8YE-7f", visi:false},
  { title: "CSE Drive 3-1", description: "Acad Hub for CSE 3-1 ", link: "https://drive.google.com/drive/folders/1MHwN_Arps7WLYhkzWi0NLsIVk6yEIrKB", visi:false },
  { title: "CSE Drive 3-2", description: "Acad Hub for CSE 3-2 ", link: "https://drive.google.com/drive/folders/17JT8M_itpgcffVhF0rfMhxlKCF8onpls", visi:false },
  { title: "CSE Drive DELs", description: "Acad Hub for CSE DELs ", link: "https://drive.google.com/drive/folders/1h4WfnfYkcGE-MLdzKbkVfKknS-vwIrUB", visi:false }
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
            <div className="p-4 text-center bg-[#eeeeee] dark:bg-[#1f2937] text-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer w-full lg:aspect-square md:aspect-square flex flex-col justify-center items-center cursor-pointer transition hover:scale-105  ">
              <h2 className="text-xl font-semibold mb-2">{resource.title}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">{resource.description}</p>
            </div>
          </a>
        ))}
      

      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setShowHidden(!showHidden)}
        className="col-span-full w-[97%] mx-auto mt-6 mb-6  p-4 text-center bg-[#eeeeee] dark:bg-[#1f2937] text-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer w-full flex flex-col justify-center items-center cursor-pointer transition hover:scale-105"
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
      className={`no-underline transition-all duration-100 ease-in-out
        ${showHidden
          ? "p-4 text-center bg-[#eeeeee] dark:bg-[#1f2937] rounded-2xl shadow-lg hover:shadow-xl cursor-pointer w-full lg:aspect-square md:aspect-square flex flex-col justify-center items-center opacity-100 translate-y-0 pointer-events-auto cursor-pointor transition hover:scale-105 duration-100"
          : "opacity-0 translate-y-4 scale-95 pointer-events-none h-0" }
      `}
    >
      <div className="" >
        <h2 className="text-xl font-semibold mb-2 text-black dark:text-white">{resource.title}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">{resource.description}</p>
      </div>
    </a>
  ))}
      </div>

      
      

    </div>
  );
}
