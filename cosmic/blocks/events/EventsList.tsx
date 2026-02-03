import { cosmic } from '../../../cosmic/client';
import { EventCard, EventCardType } from './EventCard';
import { getDataFromStringDate } from '../../utils';
import React from 'react';

function Events({ events }: { events: EventCardType[] }) {
  const yearMap = new Map<number, EventCardType[]>();
  const modifiedEvents: EventCardType[] = [
    {
      metadata: {
        start_date: `${new Date(Date.now()).getFullYear() + 1}/12/12`,
      },
    } as EventCardType,
  ];

  const breakIndices: number[] = [0];
  let upcoming = 0;

  for (const event of events) {
    const data: Date = getDataFromStringDate(event.metadata.start_date);

    if (data.valueOf() - Date.now() > 0) {
      modifiedEvents.push(event);
      upcoming++;
      continue;
    }

    if (!yearMap.has(data.getFullYear())) yearMap.set(data.getFullYear(), []);
    yearMap.get(data.getFullYear())!.push(event);
  }

  const sortedKeys = Array.from(yearMap.keys()).sort().reverse();

  for (let i = 0; i < sortedKeys.length; i++) {
    breakIndices.push(modifiedEvents.length);
    modifiedEvents.push({
      metadata: {
        start_date: `${sortedKeys[i]}/1/1`,
      },
    } as EventCardType);
    modifiedEvents.push(...yearMap.get(sortedKeys[i])!);
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {modifiedEvents?.map((event: EventCardType, i) => {
        if (breakIndices.indexOf(i) !== -1) {
          if (i == 0 && !upcoming) return;
          return (
            <h3
              key={i}
              className="text-4xl text-center mt-[50px] font-bold mb-6 col-span-1 lg:col-span-2 relative before:bg-gray-700 before:w-1/3 before:h-1 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:translate-x-1/4 before:rounded-full after:bg-gray-700 after:w-1/3 after:h-1 after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:-translate-x-1/4 after:rounded-full"
            >
              {i == 0
                ? 'Upcoming Events'
                : `${getDataFromStringDate(
                    event.metadata.start_date
                  ).getFullYear()}-${(getDataFromStringDate(
                    event.metadata.start_date
                  ).getFullYear() + 1) % 100}`}
            </h3>
          );
        } else {
          return (
            <div key={i} className="border border-[#3a3a3a] col-span-1">
              <EventCard event={event} key={event.slug} />
            </div>
          );
        }
      })}
    </div>
  );
}

export async function EventsList({
  query,
  sort,
  limit,
  skip,
  className,
  status,
  noWrap = false,
}: {
  query: any;
  sort?: string;
  limit?: number;
  skip?: number;
  className?: string;
  status?: 'draft' | 'published' | 'any';
  noWrap?: boolean;
}) {
  const { objects: events } = await cosmic.objects
    .find(query)
    .props('id,title,slug,metadata')
    .depth(1)
    .sort(sort ? sort : '-order')
    .limit(limit ? limit : 100)
    .skip(skip ? skip : 0)
    .status(status ? status : 'published');

  if (noWrap) return <Events events={events} />;

  return (
    <div className={`w-full flex flex-col px-4 gap-8 ${className}`}>
      <Events events={events} />
    </div>
  );
}
