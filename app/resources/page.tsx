import React from "react";

const resources = [
  { title: "Acad Drive #1", description: "Acad Drive by Rupesh (23)", link: "https://drive.google.com/drive/folders/1IFOauYi1sac4eStmPAY2wmgLjsbmz2lx" },
  { title: "Acad Drive #2", description: "Acad Drive by Umaang (22)", link: "https://drive.google.com/drive/folders/1SpJjsevyTKRjHCx_BWC_3LNcW005nOmJ" },
  { title: "Acad Drive #3", description: "Acad Hub by Arnav (23 + 24) ", link: "https://drive.google.com/drive/folders/1YaAKJbJfEqx6ganFsnRNiylYtTzy15OA" },
  { title: "Acad Drive #4", description: "CS Drive (Onedrive) ", link: "https://hyderabadbitspilaniacin0-my.sharepoint.com/:f:/g/personal/f20210075_hyderabad_bits-pilani_ac_in/EunGAZ-G5K1ErIlgk-n2-8YBc0nDlzhtjdHTmprPgNGrzg?e=ImbC9q" },
];

export default function ResourcesPage() {
  return (
    <div className="p-6 text-center">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-6 mt-4 text-white">Resources</h1>
      
      {/* Resource Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {resources.map((resource, index) => (
          <a key={index} href={resource.link} target="_blank" rel="noopener noreferrer" className="no-underline">
            <div className="p-4 text-center bg-gray-800 text-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer w-full aspect-square flex flex-col justify-center items-center">
              <h2 className="text-xl font-semibold mb-2">{resource.title}</h2>
              <p className="text-sm text-gray-400">{resource.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
