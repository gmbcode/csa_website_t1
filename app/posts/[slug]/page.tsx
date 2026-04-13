import { SinglePost } from '../../../components/SinglePost';
import { getPost } from '../../../lib/cosmic';
import { Suspense } from 'react';
import { Loader } from '../../../components/Loader';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  return {
    title: `${post.title} | Simple Next.js Blog`,
  };
}

export default async function PostPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  
  return (
    <Suspense fallback={<Loader />}>
      <SinglePost slug={slug} />
    </Suspense>
  );
}

export const revalidate = 60;