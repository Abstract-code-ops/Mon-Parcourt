import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import { apiVersion, dataset, projectId, useCdn, token } from '../env'
import { getLocalizedField } from './localization'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token,
})

// Helper for generating image URLs with only the asset reference data in your documents
export const urlFor = (source) => imageUrlBuilder(client).image(source)

// Helper for optimizing blog list images with consistent sizing
export const optimizedBlogListImage = (source, width = 800, height = 500) => {
  if (!source) return null;
  return urlFor(source)
    .width(width)
    .height(height)
    .fit('crop')
    .quality(80)
    .url();
}

// Helper for optimizing blog detail images with higher quality
export const optimizedBlogDetailImage = (source, width = 1200) => {
  if (!source) return null;
  return urlFor(source)
    .width(width)
    .auto('format')
    .quality(85)
    .url();
}

// Helper to get all posts with pagination and filtering options
export async function getPosts(options = {}) {
  const { 
    limit = 100, 
    offset = 0, 
    category = null,
    featured = false,
    searchTerm = null,
    excerptChars = 200, // excerpt length in characters
    includeBody = false, // Whether to include full body or not
    language = 'en' // Default language
  } = options;
  
  let query = `*[_type == "post"`;
  
  // Add category filter if provided
  if (category && category !== "all") {
    query += ` && $category in categories[]->title`;
  }
  
  // Add search term filter if provided
  if (searchTerm) {
    query += ` && (title[$language] match $searchTerm || pt::text(body[$language]) match $searchTerm)`;
  }
  
  // Add featured filter if requested
  if (featured) {
    query += ` && featured == true`;
  }
  
  query += `] | order(publishedAt desc)`;
  
  // Add pagination
  if (limit !== -1) { // -1 means get all posts
    query += `[$offset...$endOffset]`;
  }
  
  // Define projection
  query += ` {
    _id,
    title,
    "slug": slug.current,
    mainImage,
    url,
    type,
    publishedAt,
    "categories": categories[]->title,
    "authorName": author->name,
    "authorImage": author->image,
    body,
  "excerpt": pt::text(body[$language])
  ${includeBody ? ', body' : ''}
  }`;
  
  const params = { 
    offset,
    endOffset: offset + limit - 1,
    category,
    language,
    searchTerm: searchTerm ? `*${searchTerm}*` : undefined
  };

  let posts = await client.fetch(query, params);

  // Helper to trim excerpt to desired number of characters
  const trimExcerpt = (text, maxChars) => {
    if (!text) return null;
    if (text.length <= maxChars) return text;
    const truncated = text.slice(0, maxChars).trim();
    // try to avoid cutting the last word in half
    const lastSpace = truncated.lastIndexOf(' ');
    if (lastSpace > Math.floor(maxChars * 0.5)) {
      return truncated.slice(0, lastSpace) + '...';
    }
    return truncated + '...';
  };

  // Process localized fields and trim excerpts to characters
  return posts.map(post => ({
    ...post,
    title: post.title && getLocalizedField(post.title, language),
    excerpt: trimExcerpt(post.excerpt, excerptChars)
  }));
}

// Helper to get a single post by slug
export async function getPost(slug, language = 'en') {
  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      mainImage,
      url,
      type,
      publishedAt,
      "categories": categories[]->title,
      "sheetID": sheetID,
      "authorName": author->name,
      "authorImage": author->image,
      body
    }`,
    { slug }
  );

  if (!post) return null;

  // Process localized fields
  return {
    ...post,
    title: post.title && getLocalizedField(post.title, language),
    body: post.body && getLocalizedField(post.body, language)
  };
}

// Helper to get related posts based on categories, excluding the current post
export async function getRelatedPosts(slug, categories, limit = 3, language = 'en') {
  if (!categories || categories.length === 0) {
    return [];
  }
  
  const posts = await client.fetch(
    `*[_type == "post" && slug.current != $slug && count((categories[]->title)[@ in $categories]) > 0]
    | order(publishedAt desc)[0...$limit] {
      _id,
      title,
      "slug": slug.current,
      mainImage,
      url,
      type,
      publishedAt,
      "categories": categories[]->title,
      "authorName": author->name,
      "excerpt": pt::text(body[$language])
    }`,
    { slug, categories, limit, language }
  );
  
  // Process localized fields
  // Trim excerpts to 100 chars by default
  const trimExcerpt = (text, maxChars = 100) => {
    if (!text) return null;
    if (text.length <= maxChars) return text;
    const truncated = text.slice(0, maxChars).trim();
    const lastSpace = truncated.lastIndexOf(' ');
    if (lastSpace > Math.floor(maxChars * 0.5)) {
      return truncated.slice(0, lastSpace) + '...';
    }
    return truncated + '...';
  };

  return posts.map(post => ({
    ...post,
    title: post.title && getLocalizedField(post.title, language),
    excerpt: trimExcerpt(post.excerpt, 100)
  }));
}

// Helper to get featured or latest posts for homepage or sidebars
export async function getFeaturedPosts(limit = 3, excludeSlug = null, language = 'en') {
  let query = `*[_type == "post"`;
  
  if (excludeSlug) {
    query += ` && slug.current != $excludeSlug`;
  }
  
  query += `] | order(publishedAt desc)[0...$limit] {
    _id,
    title,
    "slug": slug.current,
    mainImage,
    url,
    type,
    publishedAt,
    "categories": categories[]->title,
    "authorName": author->name,
    "excerpt": pt::text(body[$language][0..1])
  }`;

  const posts = await client.fetch(query, { limit, excludeSlug, language });

  const trimExcerpt = (text, maxChars = 100) => {
    if (!text) return null;
    if (text.length <= maxChars) return text;
    const truncated = text.slice(0, maxChars).trim();
    const lastSpace = truncated.lastIndexOf(' ');
    if (lastSpace > Math.floor(maxChars * 0.5)) {
      return truncated.slice(0, lastSpace) + '...';
    }
    return truncated + '...';
  };

  // Process localized fields
  return posts.map(post => ({
    ...post,
    title: post.title && getLocalizedField(post.title, language),
    excerpt: trimExcerpt(post.excerpt, 100)
  }));
}

// Helper to get category-specific posts
export async function getCategoryPosts(category, limit = 6, offset = 0, language = 'en') {
  const posts = await client.fetch(
    `*[_type == "post" && $category in categories[]->title]
    | order(publishedAt desc)[$offset...$endOffset] {
      _id,
      title,
      "slug": slug.current,
      mainImage,
      url,
      type,
      publishedAt,
      "categories": categories[]->title,
      "authorName": author->name,
      "excerpt": pt::text(body[$language])
    }`,
    { category, offset, endOffset: offset + limit - 1, language }
  );
  
  // Process localized fields
  const trimExcerpt = (text, maxChars = 100) => {
    if (!text) return null;
    if (text.length <= maxChars) return text;
    const truncated = text.slice(0, maxChars).trim();
    const lastSpace = truncated.lastIndexOf(' ');
    if (lastSpace > Math.floor(maxChars * 0.5)) {
      return truncated.slice(0, lastSpace) + '...';
    }
    return truncated + '...';
  };

  return posts.map(post => ({
    ...post,
    title: post.title && getLocalizedField(post.title, language),
    excerpt: trimExcerpt(post.excerpt, 100)
  }));
}

// Helper to get all events
export async function getEvents() {
  return await client.fetch(
    `*[_type == "event"] | order(date desc) {
      _id,
      title,
      slug,
      mainImage,
      date,
      location,
      sheetID,
      "categories": categories[]->title,
      description,
      body
    }`
  )
}

// Helper to get a single event by slug
export async function getEvent(slug) {
  return await client.fetch(
    `*[_type == "event" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      mainImage,
      date,
      location,
      sheetID,
      "categories": categories[]->title,
      description,
      body
    }`,
    { slug }
  )
}

// Get all categories
export async function getCategories() {
  return await client.fetch(`*[_type == "category"] {
    _id,
    title,
    description
  }`)
}
