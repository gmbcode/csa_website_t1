import React from 'react';
import Link from 'next/link';
import ArrowRight from './icons/ArrowRight';
import Tag from './Tag';
import { Post } from '../lib/types';
import AuthorAttribution from './AuthorAttribution';
import AuthorAvatar from './AuthorAvatar';
import { sanitize } from 'isomorphic-dompurify';

export default function PostCard({ post }: { post: Post }) {
  return (
    <div className="flex flex-col h-full">
      {post.metadata.hero?.imgix_url && (
        <Link href={`/posts/${post.slug}`}>
          <img
            className="w-full h-48 object-cover object-center"
            src={`${post.metadata.hero?.imgix_url}?w=1400&auto=compression,format`}
            alt={post.title}
          />
        </Link>
      )}
      <div className="flex flex-col flex-grow p-5 space-y-4">
        <h2 className="text-xl font-semibold tracking-tight text-zinc-200">
          <Link href={`/posts/${post.slug}`}>{post.title}</Link>
        </h2>

        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0 mt-1">
            <AuthorAvatar post={post} />
          </div>
          <div className="flex flex-col text-zinc-400 text-sm">
            <span>
              by{' '}
              <span className="text-green-300">
                {post.metadata.author?.title || 'gmbcode'}
              </span>
            </span>
          </div>
        </div>

        <div className="mt-auto pt-2 flex items-center justify-between">
          <Link href={`/posts/${post.slug}`}>
            <div className="flex items-center space-x-2 text-green-300 hover:text-green-200 transition-colors">
              <span className="font-medium">Read article</span>
              <ArrowRight className="h-4 w-4" />
            </div>
          </Link>
          <br />
        </div>
        <div className="mt-auto pt-2 flex items-center justify-between">
          {post.metadata.categories && post.metadata.categories.length > 0 && (
            <div className="flex space-x-2">
              <Tag>{post.metadata.categories[0].title}</Tag>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
