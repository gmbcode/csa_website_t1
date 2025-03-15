import React from 'react';

interface PersonCardProps {
  imageUrl: string;
  name: string;
  title: string;
}

export default function PersonCard({ imageUrl, name, title }: PersonCardProps) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white dark:bg-zinc-800">
      <img className="w-full h-48 object-cover" src={imageUrl} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-900 dark:text-gray-100">
          {name}
        </div>
        <p className="text-gray-700 dark:text-gray-300 text-base">{title}</p>
      </div>
    </div>
  );
}
