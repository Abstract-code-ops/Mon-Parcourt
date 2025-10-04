'use client'
import Link from "next/link";
import dynamic from 'next/dynamic'
import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout"
import { getPosts, getCategoryPosts, optimizedBlogListImage } from "/sanity/lib/queries";
import WeatherWidget from "@/components/layout/WeatherWidget";
import PinnedEvents from "@/components/sections/events/PinnedEvents";;
import Fuse from 'fuse.js';
import { useTranslation } from 'react-i18next';
import ImageLoadingWrapper from "@/components/layout/ImageLoadingWrapper";

const CalendarWidget = dynamic(() => import('@/components/layout/CalendarWidget'), {
  ssr: false,
});

const clientsData = [
    {
        id: 1,
        src: 'assets/images/custom_images/Ekta.png',
        alt: '',
        name: 'EKTA',
        url: 'https://tp.media/click?shmarker=676005&promo_id=7358&source_type=link&type=click&campaign_id=225&trs=462962'
    },
    {
        id: 2,
        src: 'assets/images/custom_images/kiwi.png',
        alt: '',
        name: 'Kiwi.com',
        url: 'https://tp.media/click?shmarker=676005&promo_id=8912&source_type=link&type=click&campaign_id=111&trs=462962'
    },
    {
        id: 3,
        src: 'assets/images/custom_images/airalo.png',
        alt: '',
        name: 'Airalo',
        url: 'https://tp.media/click?shmarker=676005&promo_id=8405&source_type=link&type=click&campaign_id=541&trs=462962'
    },
    {
        id: 4,
        src: 'assets/images/custom_images/airhelp.png',
        alt: '',
        name: 'Airhelp',
        url: 'https://airhelp.tpx.lt/hnWUPwCS'
    },
    {
        id: 5,
        src: 'assets/images/custom_images/compensair.png',
        alt: '',
        name: 'Compensair',
        url: 'https://compensair.tpx.lt/YvnqmSxu'
    },
    {
        id: 6,
        src: 'assets/images/custom_images/saily.png',
        alt: '',
        name: 'Saily',
        url: 'https://tp.media/click?shmarker=676005&promo_id=8978&source_type=link&type=click&campaign_id=629&trs=462962'
    }
]

export default function Home() {

  const { t, i18n } = useTranslation('blog');
  // Track the current language to trigger refetches
  const currentLanguage = i18n.language;
  
  const [posts, setPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3; // Change as needed
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  
  useEffect(() => {
    async function fetchPosts() {
      // Get current language directly from i18n
      const language = i18n.language || 'en';
      
      // Use the enhanced getPosts function with options
      const fetchedPosts = await getPosts({
        limit: 100, // Fetch enough to handle client-side pagination
        excerptLength: 2, // Get slightly longer excerpts
        searchTerm: searchTerm || null,
        category: selectedCategory !== 'all' ? selectedCategory : null,
        language: language // Pass the current language
      });
      setPosts(fetchedPosts);
    }
    
    // Add a small debounce for search to prevent excessive API calls
    const timer = setTimeout(() => {
      fetchPosts();
    }, searchTerm ? 300 : 0);
    
    return () => clearTimeout(timer);
  }, [selectedCategory, searchTerm, currentLanguage, i18n.language]);

  const fuseOptions = {
  keys: ['title', 'excerpt'],
  threshold: 0.4, // Lower = stricter, higher = fuzzier
};

  const fuse = new Fuse(posts, fuseOptions);
  
  const filteredPosts = selectedCategory === "all"
    ? (searchTerm
      ? fuse.search(searchTerm).map(result => result.item)
      : posts)
      : (searchTerm
        ? fuse.search(searchTerm).map(result => result.item).filter(post => post.categories && post.categories.includes(selectedCategory))
        : posts.filter(post => post.categories && post.categories.includes(selectedCategory)));  

  const sortedFilteredPosts = [...filteredPosts].sort(
    (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
  );

  const currentPosts = sortedFilteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Declare state for event posts to avoid filtering on every render
  const [eventPosts, setEventPosts] = useState([]);
  
  // Fetch event posts separately to improve performance
  useEffect(() => {
    async function fetchEventPosts() {
      const language = i18n.language || 'en';
      const events = await getCategoryPosts("event", 3, 0, language);
      setEventPosts(events);
    }
    fetchEventPosts();
  }, [currentLanguage, i18n.language]);

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle={t('breadcrumb.blogList')} bgImage="url(assets/images/background/blog-breadcrumb.jpg)">
                <ImageLoadingWrapper>
                <div>
                    {/*sidebar */}
                    <section className="sidebar-page-container blog-standard p_relative">
                      <div className="auto-container">
                        <div className="row clearfix">
                          <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                            <div className="blog-standard-content" id="blog-standard-content">
                              {/* Repeat for each blog post */}
                              {/* START CODE */}
                              { currentPosts.map((post) => (
                                <div className="news-block-one" key={post.slug}>
                                  <div className="inner-box">
                                    <figure className="image-box">
                                      <Link href={post.type === "external" ? `${post.url}}`:`/blog/${post.slug}`} target={post.type === "external" ? "_blank" : "_self"}>
                                        {post.mainImage && (
                                            <img src={optimizedBlogListImage(post.mainImage, 800, 500)} alt={post.mainImage.alt || post.title} loading="lazy" />
                                        )}
                                      </Link>
                                    </figure>
                                    <div className="lower-content">
                                      <ul className="post-info clearfix">
                                          <li><i className="icon-27"></i><Link href={post.type === "external" ? `${post.url}}`:`/blog/${post.slug}`} target={post.type === "external" ? "_blank" : "_self"}>{post.authorName || t('post.author')}</Link></li>
                                          <li><i className="icon-56"></i>{new Date(post.publishedAt).toDateString()}</li>
                                          {post.type && (<li><i className="icon-23"></i>{post.type} {t('post.externalLink')}</li>)}
                                      </ul>
                                      <h3><Link href={post.type === "external" ? `${post.url}}`:`/blog/${post.slug}`} target={post.type === "external" ? "_blank" : "_self"}>
                                        {typeof post.title === 'object' ? (post.title.en || '') : post.title}
                                      </Link></h3>
                                      <p>{post.excerpt}</p>
                                      <div className="link-btn">
                                          <Link href={post.type === "external" ? `${post.url}}`:`/blog/${post.slug}`} target={post.type === "external" ? "_blank" : "_self"}><span>{t('post.readMore')}</span></Link>
                                      </div>
                                    </div>
                                  </div>
                               </div>
                              )) }
                              {/* END CODE */}
                             
                              <div className="pagination-wrapper pt_40" id="pagination-wrapper">
                                <ul className="pagination">
                                  <li>
                                    <Link href="#pagination-wrapper" disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>{t('pagination.prev')}</Link>
                                  </li>
                                  {[...Array(totalPages)].map((_, i) => (
                                    <li key={i}>
                                      <Link href="#pagination-wrapper" className={currentPage === i + 1 ? "current" : ""} onClick={() => setCurrentPage(i + 1)}>
                                        {i + 1}
                                      </Link>
                                    </li>
                                  ))}
                                  <li>
                                    {currentPage === totalPages ? "": <Link href="#pagination-wrapper" disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>{t('pagination.next')}</Link>}
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                            <div className="default-sidebar blog-sidebar ml_10">
                            <div className="sidebar-widget search-widget">
                                                <div className="widget-title">
                                                    <h3>{t('search.title')}</h3>
                                                </div>
                                                <div className="search-form">
                                                    <form onSubmit={(e) => e.preventDefault()}>
                                                        <div className="form-group">
                                                            <input
                                                              type="search" 
                                                              name="search-field" 
                                                              placeholder={t('search.placeholder')} 
                                                              required value={searchTerm} 
                                                              onChange={(e) => setSearchTerm(e.target.value)} 
                                                            />
                                                            <button type="submit"><i className="icon-8"></i></button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="sidebar-widget category-widget">
                                                <div className="widget-title">
                                                    <h3>{t('categories.title')}</h3>
                                                    { selectedCategory == "all" ? "": (<p className="custom-clear" onClick={() => setSelectedCategory("all")}><a href="#blog-standard-content">{t('categories.clear')}</a></p>)}
                                                </div>
                                                <div className="widget-content">
                                                    <ul className="category-list-two clearfix">
                                                        <li className={selectedCategory == "blog" ? "active" : ""} ><Link href="" onClick={(e) => {
                                                          e.preventDefault();
                                                          selectedCategory == "blog" ? setSelectedCategory("all") : setSelectedCategory("blog")}
                                                          }>{t('categories.blog')}</Link></li>
                                                        <li className={selectedCategory == "announcement" ? "active" : ""}><Link href="" onClick={(e) => {
                                                          e.preventDefault();
                                                            selectedCategory == "announcement" ? setSelectedCategory("all") :setSelectedCategory("announcement")}
                                                          }>{t('categories.announcement')}</Link></li>
                                                        <li className={selectedCategory == "event" ? "active" : ""}>
                                                          <Link href="" onClick={(e) => {
                                                            e.preventDefault();
                                                            selectedCategory == "event" ? setSelectedCategory("all") :setSelectedCategory("event")}}>
                                                            {t('categories.event')}
                                                          </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="sidebar-widget post-widget">
                                                <div className="widget-title">
                                                    <h3>{t('affiliates.title')}</h3>
                                                </div>
                                                <div className="post-inner">
                                                    {clientsData.map((client) => (
                                                        <div className="post" key={client.id}>
                                                            <figure className="post-thumb"><Link href="blog-details"><img src={client.src} alt={client.alt} /></Link></figure>
                                                            <h5><Link href={client.url}>{client.name}</Link></h5>
                                                            <span className="post-date">{t('affiliates.sponsor')}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <PinnedEvents events={eventPosts} />
                                            <WeatherWidget />
                                            <CalendarWidget />
                                        </div>
                          </div>
                        </div>
                      </div>
                    </section>
            {/* sidebar end */}
            </div>
                </ImageLoadingWrapper>
            </Layout>
        </>
    )
}