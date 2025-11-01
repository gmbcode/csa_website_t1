// cosmic/blocks/events/SingleEvent.tsx
import { notFound } from 'next/navigation';
import { cosmic } from '../../../cosmic/client';
import { Button } from '../../../cosmic/elements/Button';
import { getFormattedDateFromString } from '../../../cosmic/utils';
import { marked } from 'marked';

// Configure marked options for better rendering
marked.setOptions({
  breaks: true, // Convert \n to <br>
  gfm: true, // GitHub Flavored Markdown
});

export async function SingleEvent({
  query,
  className,
  status,
}: {
  query: any;
  className?: string;
  status?: 'draft' | 'published' | 'any';
}) {
  const { object: event } = await cosmic.objects
    .findOne(query)
    .props('id,slug,title,metadata')
    .depth(1)
    .status(status ? status : 'published');

  // Convert markdown to HTML using marked
  const descriptionHtml = marked(event.metadata.description || '') as string;
  const locationHtml = marked(event.metadata.location || '') as string;

  return (
    <section
      className={`m-auto mt-8 max-w-[900px] px-4 pb-8 md:container ${className}`}
    >
      <div
        className="relative m-auto max-w-[950px]"
        data-cosmic-object={event.id}
      >
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol role="list" className="flex space-x-2">
            <li>
              <div className="flex items-center">
                <a
                  href="/events"
                  className="mr-2 text-sm font-medium text-zinc-900 dark:text-white"
                >
                  Events
                </a>
                <svg
                  width="16"
                  height="20"
                  viewBox="0 0 16 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-4 text-gray-300"
                >
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>
            <li className="text-sm font-medium text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 hover:dark:text-zinc-300">
              {event.title}
            </li>
          </ol>
        </nav>
        <div className="grid md:grid-cols-2 md:gap-x-8">
          <div className="w-full h-full">
            <img
              className="border-solid border-2 border-zinc-200 p-1 dark:border-zinc-800"
              src={`${event.metadata.event_image.imgix_url}?w=2000&h=2000&auto=format,compression`}
              alt={event.title}
            />
          </div>
          <div>
            <h1 className="mb-2 mt-6 text-3xl font-extrabold leading-tight tracking-tight text-zinc-900 dark:text-zinc-50 md:mb-4 md:mt-0 md:text-4xl">
              {event.title}
            </h1>
            <h3 className="mb-2 text-lg font-medium text-gray-900 dark:text-white">
              Date and Time
            </h3>
            <div className="flex items-center space-x-1 text-sm text-zinc-900 dark:text-gray-300">
              <span>
                {getFormattedDateFromString(event.metadata.start_date)}
              </span>
              <span>from</span>
              <span>{event.metadata.start_time}</span>
              <span>until</span>
              {event.metadata.start_date !== event.metadata.end_date && (
                <span>
                  {getFormattedDateFromString(event.metadata.end_date)}
                </span>
              )}
              <span>{event.metadata.end_time}</span>
            </div>
            <h3 className="mb-2 mt-6 text-lg font-medium text-gray-900 dark:text-white">
              Details
            </h3>
            <div
              dangerouslySetInnerHTML={{
                __html: descriptionHtml,
              }}
              className="mb-6 text-sm text-gray-700 dark:text-gray-300 prose prose-sm dark:prose-invert max-w-none prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-a:text-blue-500 prose-strong:text-gray-900 dark:prose-strong:text-white"
            />
            <div>
              <h3 className="mb-2 text-lg font-medium text-gray-900 dark:text-white">
                Location
              </h3>
              <div
                dangerouslySetInnerHTML={{
                  __html: locationHtml,
                }}
                className="mb-6 text-sm text-gray-700 dark:text-gray-300 prose prose-sm dark:prose-invert max-w-none prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-a:text-blue-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
