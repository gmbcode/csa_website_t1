import React, { Suspense } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { getAllPosts } from "../lib/cosmic";
import { cosmic } from "../cosmic/client";
import { Post } from "../lib/types";
import HomeLogo from "../components/HomeLogo";

export default async function LandingPage() {
  let posts: Post[] = [];
  try {
    posts = await getAllPosts();
  } catch (e) {
    console.error("Failed to fetch posts", e);
  }
  const recentPosts = posts.slice(0, 3);

  let eventsData: any[] = [];
  try {
    const res = await cosmic.objects
      .find({ type: "events" })
      .props("id,title,slug,metadata")
      .depth(1)
      .sort("-metadata.start_date")
      .limit(2)
      .status("published");
    eventsData = res.objects || [];
  } catch (e) {
    console.error("Failed to fetch events", e);
  }

  return (
    <main className="relative z-10 min-h-screen">
      <section
        id="hero"
        className="flex flex-col items-center justify-center gap-4 px-6 pb-8 pt-0 text-center md:pt-2 md:pb-12"
      >
        <div className="mb-4 flex justify-center items-center">
          <HomeLogo />
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white sm:text-5xl md:text-6xl -mt-6">
          Welcome to <span className="text-teal-600 dark:text-teal-400">CSA</span>
        </h1>

        <p className="max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-lg mt-2">
          The Computer Science Association at BITS Pilani, Hyderabad Campus.
          Engineers, creators, and innovators building the future of tech.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
          <Link
            href="/events"
            id="explore-events-btn"
            className="rounded-full bg-gray-900 dark:bg-white px-7 py-2.5 text-sm font-semibold uppercase tracking-wider text-white dark:text-black transition-all duration-200 hover:bg-gray-700 dark:hover:bg-gray-200"
          >
            Explore Events
          </Link>
          <Link
            href="/resources"
            id="resources-btn"
            className="rounded-full border border-gray-400 dark:border-zinc-600 px-7 py-2.5 text-sm font-semibold uppercase tracking-wider text-gray-700 dark:text-zinc-300 transition-all duration-200 hover:border-gray-700 dark:hover:border-zinc-400 hover:text-black dark:hover:text-white"
          >
            Resources
          </Link>
        </div>


      </section>

      <section
        id="upcoming-events"
        className="mx-auto max-w-6xl px-6 py-8 md:py-10"
      >
        <div className="mb-6">
          <h2 className="mb-1 text-3xl font-bold tracking-tight text-black dark:text-white">
            Upcoming Events
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {eventsData.length > 0 ? (
            eventsData.map((e) => (
              <div
                key={e.title}
                className="group flex flex-col justify-between rounded-2xl border border-gray-200 dark:border-zinc-800 bg-[#eeeeee] dark:bg-[#1f2937] p-6 transition-all duration-300 hover:scale-[102%] md:p-8 backdrop-blur-sm"
              >
                <div>
                  <div className="mb-5 flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-black dark:bg-white px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-white dark:text-black">
                      EVENT
                    </span>
                    <span className="text-xs tracking-wide text-gray-400 dark:text-zinc-500">
                      {new Date(e.metadata.start_date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
                    </span>
                  </div>
                  <h3 className="mb-3 text-2xl font-bold tracking-tight text-black dark:text-white">
                    {e.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-500 dark:text-zinc-400">
                    Join us at {e.metadata.location}. Mark your calendars for an exciting event!
                  </p>
                </div>
                <Link
                  href={`/events/${e.slug}`}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-teal-600 dark:text-teal-400 transition-colors duration-200 hover:text-teal-500 dark:hover:text-teal-300"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-400 dark:text-zinc-500">
              No upcoming events found.
            </p>
          )}
        </div>
      </section>

      <section
        id="technical-blog"
        className="mx-auto max-w-6xl px-6 py-8 md:py-10"
      >
        <div className="grid items-start gap-8 md:grid-cols-2 md:gap-10">
          <div>
            <h2 className="mb-1 text-3xl font-bold tracking-tight text-black dark:text-white">
              Blog
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-500 dark:text-zinc-400">
              Deep-dives, tutorials, and opinion pieces written by CSA members.
              We cover systems, AI/ML, web technologies, competitive
              programming, and everything in-between.
            </p>
            <Link
              href="/blog"
              id="view-archive-link"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400 transition-colors duration-200 hover:text-teal-500 dark:hover:text-teal-300"
            >
              View Archive
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            {recentPosts.length > 0 ? (
              recentPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/posts/${post.slug}`}
                  className="p-5 rounded-3xl bg-[#eeeeee] dark:bg-[#1f2937] transition-transform duration-100 ease-out hover:scale-[105%] backdrop-blur-xl opacity-85 group flex flex-col"
                >
                  <div className="mb-2 flex flex-wrap items-center justify-between">
                    <span className="text-xs tracking-wide text-gray-500 dark:text-gray-400">
                      {new Date(post.metadata.published_date).toLocaleDateString(
                        "en-US",
                        { year: "numeric", month: "short", day: "numeric" }
                      )}
                    </span>
                    <ArrowUpRight className="h-4 w-4 flex-shrink-0 text-gray-400 dark:text-gray-500 transition-all duration-200 group-hover:text-teal-600 dark:group-hover:text-teal-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                  <h4 className="text-base sm:text-lg font-semibold leading-snug text-black dark:text-white transition-colors duration-200">
                    {post.title}
                  </h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {post.metadata.categories?.map((cat) => (
                      <span
                        key={cat.title}
                        className="rounded-full bg-black dark:bg-white px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-white dark:text-black">
                        {cat.title}
                      </span>
                    ))}
                  </div>
                </Link>
              ))
            ) : (
              <p className="text-sm text-gray-400 dark:text-zinc-500">
                No posts found.
              </p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export const revalidate = 60;
