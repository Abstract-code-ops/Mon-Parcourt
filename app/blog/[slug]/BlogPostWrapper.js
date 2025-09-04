'use client'

import { useState, useEffect } from 'react';
import { getPost } from "/sanity/lib/queries";
import { useTranslation } from 'react-i18next';
import BlogDetailClient from "./BlogDetailClient";

export default function BlogPostWrapper({ initialPost, slug, isEvent, initialLanguage }) {
    const { i18n } = useTranslation('blog');
    const [post, setPost] = useState(initialPost);
    const [loading, setLoading] = useState(false);
    const [lastFetchedLanguage, setLastFetchedLanguage] = useState(initialLanguage);
    const currentLanguage = i18n.language || initialLanguage;
    
    useEffect(() => {
        async function updatePostForLanguage() {
            // Always refetch if the current language differs from the last fetched language
            if (currentLanguage === lastFetchedLanguage) {
                return; // Skip refetch if language hasn't changed since last fetch
            }
            
            setLoading(true);
            try {
                const updatedPost = await getPost(slug, currentLanguage);
                if (updatedPost) {
                    setPost(updatedPost);
                    setLastFetchedLanguage(currentLanguage); // Update last fetched language
                }
            } catch (error) {
                console.error("Error fetching post in new language:", error);
            } finally {
                setLoading(false);
            }
        }
        
        updatePostForLanguage();
    }, [currentLanguage, lastFetchedLanguage, slug]);
    
    return (
        <BlogDetailClient 
            post={post} 
            isEvent={isEvent} 
            loading={loading}
        />
    );
}
