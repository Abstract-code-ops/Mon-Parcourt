import { getPost, getFeaturedPosts } from "/sanity/lib/queries";
import BlogPostWrapper from "./BlogPostWrapper";

// Enable incremental static regeneration with a 60-second revalidation period
export const revalidate = 60; 

// This function generates the static paths for each post at build time
export async function generateStaticParams() {
  // Fetch just the slugs needed for generating static paths
  const posts = await getFeaturedPosts(-1); // Get all posts, but only fetch minimal data
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

import { cookies } from 'next/headers';

export default async function home({ params }) {
    // Get the current language preference from cookies
    const cookieStore = cookies();
    const langCookie = cookieStore.get('i18next');
    const language = langCookie?.value || 'en';
    
    const post = await getPost(params.slug, language);

    if (!post) {
        return <div>Post not found</div>;
    }

    const isEvent = post.categories && post.categories.includes("event");

    return (
        <BlogPostWrapper 
            initialPost={post} 
            slug={params.slug}
            isEvent={isEvent} 
            initialLanguage={language} 
        />
    );
}
