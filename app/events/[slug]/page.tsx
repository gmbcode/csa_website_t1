import { SingleEvent } from "../../../cosmic/blocks/events/SingleEvent";

export default async function SingleEventPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{
    status?: "draft" | "published" | "any";
  }>;
}) {
  const { slug } = await params;
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  
  return (
    <SingleEvent
      query={{ slug: slug, type: "events" }}
      status={resolvedSearchParams?.status}
    />
  );
}