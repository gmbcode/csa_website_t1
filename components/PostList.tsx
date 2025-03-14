import PostCard from '../components/PostCard';
import { getAllPosts, getAuthor, getAuthorPosts } from '../lib/cosmic';

export async function PostList({ authorSlug }: { authorSlug?: string }) {
  let posts = await getAllPosts();
  let author;
  if (authorSlug) {
    author = await getAuthor(authorSlug);
    posts = await getAuthorPosts(author.id);
  }
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      {author && (
        <h1 className="mb-8 text-3xl font-bold leading-tight tracking-tight text-zinc-300">
          Posts by {author.title}
        </h1>
      )}

      {!posts || posts.length === 0 ? (
        <p className="text-center py-8 text-zinc-500">No posts available</p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-zinc-800 rounded-xl overflow-hidden shadow-md border border-zinc-700 transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px]"
            >
              <PostCard post={post} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
