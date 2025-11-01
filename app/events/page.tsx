import { EventsList } from '../../cosmic/blocks/events/EventsList';
export default async function EventListPage() {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white p-6">
      <h1 className="text-5xl text-center pt-[50px] font-bold mb-6">
        Upcoming Events
      </h1>
      <EventsList query={{ type: 'events' }} />
    </div>
  );
}
