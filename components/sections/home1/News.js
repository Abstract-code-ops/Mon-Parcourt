'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { useEffect, useState } from "react"
import { getFeaturedPosts, optimizedBlogListImage } from "/sanity/lib/queries";
import { useTranslation } from 'react-i18next'

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        disableOnMaven_Proaction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
}


export default function News() {
    const { t } = useTranslation('home')
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchPosts() {
            // Use the improved helper function to get featured posts
            const fetchedPosts = await getFeaturedPosts(3);
            setPosts(fetchedPosts || []);
        }
        fetchPosts();
    }, []);

    const safeLink = (post) => {
        if (!post) return '#';
        return post.type === 'external' && post.url ? post.url : `/blog/${post.slug}`;
    }

    return (
        <>
           <section className="news-section sec-pad">
              <div className="pattern-layer">
                <div className="pattern-1" style={{ backgroundImage: "url(assets/images/shape/shape-23.png)" }}></div>
                <div className="pattern-2" style={{ backgroundImage: "url(assets/images/shape/shape-24.png)" }}></div>
              </div>
              <div className="auto-container">
                <div className="sec-title centred mb_50">
                  <span className="sub-title">{t('news.subtitle')}</span>
                  <h2>{t('news.title')}</h2>
                </div>
                <div className="news-carousel">
                    <Swiper {...swiperOptions}>
                        {posts.map((post) => (
                            <SwiperSlide key={post.slug || Math.random()}>
                                <div className="news-block-one">
                                    <div className="inner-box">
                                        <figure className="image-box">
                                            <Link href={safeLink(post)} target={post.type === "external" ? "_blank" : "_self"}>
                                                <img 
                                                    src={post.mainImage ? optimizedBlogListImage(post.mainImage, 453, 300) : 'assets/images/resource/default-453x300.png'} 
                                                    alt={(post.mainImage && post.mainImage.alt) || post.title} 
                                                    width="453"
                                                    height="300"
                                                    loading="lazy"
                                                />
                                            </Link>
                                        </figure>
                                        <div className="lower-content">
                                            <ul className="post-info clearfix">
                                                <li><i className="icon-27"></i><Link href="#">{post.authorName || t('news.admin')}</Link></li>
                                                <li><i className="icon-28"></i>{post.publishedAt ? new Date(post.publishedAt).toDateString() : ''}</li>
                                            </ul>
                                            <h3>
                                                <Link href={safeLink(post)} target={post.type === "external" ? "_blank" : "_self"}>{post.title}</Link>
                                            </h3>
                                            <p>{post.excerpt ? `${post.excerpt.slice(0, 120)}...` : ''}</p>
                                            <div className="link-btn">
                                                <Link href={safeLink(post)} target={post.type === "external" ? "_blank" : "_self"}>
                                                    <span>{t('news.readMore')}</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                          </div>
              </div>
            </section>
        </>
    )
}
