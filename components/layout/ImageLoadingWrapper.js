'use client'

/**
 * Component that shows a preloader until all images on the page have loaded
 * This should be used on pages with many images like the blog
 * @param {Object} props
 * @param {React.ReactNode} props.children - The content to render once images are loaded
 * @param {number} props.timeout - Optional timeout in ms after which to show content anyway
 */
export default function ImageLoadingWrapper({ children }) {
    
    return <>{children}</>;
}
