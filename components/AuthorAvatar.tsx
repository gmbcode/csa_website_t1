import Link from 'next/link';
import { Post } from '../lib/types';

export default function AuthorAvatar({ post }: { post: Post }): JSX.Element {
  const author = post.metadata.author;
  // Safely access the image URL with optional chaining
  const imgUrl = author?.metadata?.image?.imgix_url;

  // Render the avatar link only if we have a slug and an image
  if (author?.slug && imgUrl) {
    return (
      <Link href={`/author/${author.slug}`}>
        <img
          className="h-8 w-8 rounded-full"
          src={`${imgUrl}?w=100&auto=format,compression`}
          alt={author.title || post.title}
        />
      </Link>
    );
  }

  // Fallback to placeholder if author or image is missing
  return (
    <img
      className="h-8 w-8 rounded-full"
      src="/images/person_placeholder.png"
      alt={post.title}
    />
  );
}
