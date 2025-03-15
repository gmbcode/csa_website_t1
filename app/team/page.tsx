import React from 'react';
import PersonCard from '../../components/PersonCard';

interface Leader {
  id: number;
  name: string;
  title: string;
  imageUrl: string;
}

export default async function TeamPage() {
  const baseURL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const res = await fetch(`${baseURL}/database/clubLeaders.json`, {
    cache: 'no-store',
  });
  const leaders: Leader[] = await res.json();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Club Leaders</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {leaders.map((leader) => (
          <PersonCard
            key={leader.id}
            imageUrl={leader.imageUrl}
            name={leader.name}
            title={leader.title}
          />
        ))}
      </div>
    </div>
  );
}
