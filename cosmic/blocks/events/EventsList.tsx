import { reverse } from 'dns';
import { cosmic } from '../../../cosmic/client';
import { EventCard, EventCardType } from './EventCard';

function Events({ events }: { events: EventCardType[] }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {events?.map((event: EventCardType, i) => {
        return (
          <div key={i} className="border border-[#3a3a3a]">
            <EventCard event={event} key={event.slug} />
          </div>
        );
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
