import { SingleEvent } from "../../../cosmic/blocks/events/SingleEvent";


export default async function SingleEventPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams?: {
    status: "draft" | "published" | "any";
  };
}) {
  const param = await params;
  return (
    <SingleEvent
      query={{ slug: param.slug, type: "events" }}
      status={searchParams?.status}
    />
  );
}