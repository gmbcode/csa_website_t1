import React from 'react';
import { getAuthor } from '../../../lib/cosmic';
import { PostList } from '../../../components/PostList';
import { Loader } from '../../../components/Loader';
import { Suspense } from 'react';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const author = await getAuthor(slug);
  return {
    title: `${author.title} posts | Simple Next.js Blog`,
  };
}

export default async function AuthorPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  
  return (
    <main className="mx-auto w-full max-w-3xl flex-col px-4 lg:px-0">
      <Suspense fallback={<Loader />}>
        <PostList authorSlug={slug} />
      </Suspense>
    </main>
  );
}

export const revalidate = 60;