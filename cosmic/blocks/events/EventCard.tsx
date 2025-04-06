import Link from "next/link"
import { cn, getFormattedDateFromString } from "../../../cosmic/utils"
import { Calendar, Clock, Pin } from "lucide-react"

export type EventCardType = {
  id: string
  title: string
  slug: string
  metadata: {
    description: string
    location: string
    start_date: string
    start_time: string
    end_date: string
    end_time: string
    event_image: {
      imgix_url?: string
      url?: string
    }
  }
}

export function EventCard({
  event,
  className,
}: {
  event: EventCardType
  className?: string
}) {
  const imageUrl = event.metadata.event_image?.imgix_url || event.metadata.event_image?.url

  return (
    <div
      className={cn(
        "relative w-full h-96 rounded-lg shadow-md overflow-hidden mb-6",
        className
      )}
      data-cosmic-object={event.id}
    >
      <Link href={`/events/${event.slug}`} className="block w-full h-full group">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60 transition-opacity group-hover:bg-opacity-50" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
          <h1 className="absolute top-12 left-12 text-5xl font-bold">{event.title}</h1>
          <div
            className="pt-2 text-sm opacity-90"
            dangerouslySetInnerHTML={{ __html: event.metadata.description }}
          />
          <div className="mt-3 space-y-1 text-sm font-medium">
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" aria-label="Event date" />
              <span>{getFormattedDateFromString(event.metadata.start_date)}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4 mr-1" aria-label="Event time" />
              {event.metadata.start_date !== event.metadata.end_date && (
                <span>{getFormattedDateFromString(event.metadata.end_date)}</span>
              )}
            </div>
            <div className="flex items-center space-x-2">
              <Pin className="h-4 w-4" aria-label="Event location" />
              <span>{event.metadata.location}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
