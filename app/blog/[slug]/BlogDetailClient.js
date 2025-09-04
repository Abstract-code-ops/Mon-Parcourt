'use client'

import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { PortableText } from '@portabletext/react';
import { optimizedBlogDetailImage } from "/sanity/lib/queries";
import PortableTextComponents from "@/components/portableText/blogDetailsPortableComponenets";
import CalendarWidget from "@/components/layout/CalendarWidget";
import WeatherWidget from "@/components/layout/WeatherWidget";
import EventsComponent from "@/components/sections/events/EventsComponent";
import { useTranslation } from 'react-i18next';
import ImageLoadingWrapper from "@/components/layout/ImageLoadingWrapper";
import '@/public/assets/css/blog-loading.css';

export default function BlogDetailClient({ post, isEvent, loading=false }) {
    const { t } = useTranslation('blog');
    
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle={t('breadcrumb.blogDetail')} bgImage="url(/assets/images/background/blog-breadcrumb.jpg)">
                <ImageLoadingWrapper>
                {/* sidebar-page-container */}
                <section className="sidebar-page-container blog-standard p_relative">
                    <div className="auto-container">
                        <div className="row clearfix">
                        <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                            <div className="blog-details-content">
                                <div className="content-one mb_40">
                                    {loading && (
                                        <div className="loading-overlay">
                                            <div className="loader"></div>
                                        </div>
                                    )}
                                    
                                    <figure className="image-box">
                                        {post.mainImage && (
                                            <img 
                                                src={optimizedBlogDetailImage(post.mainImage, 1200)} 
                                                alt={post.mainImage.alt || post.title}
                                                width="1200"
                                                height="675"
                                                priority="true" 
                                            />
                                        )}
                                    </figure>
                                    <ul className="post-info clearfix">
                                        <li><i className="icon-27"></i><Link href="#">{post.authorName || t('post.author')}</Link></li>
                                        <li><i className="icon-56"></i>{new Date(post.publishedAt).toDateString()}</li>
                                        {/* <li><i className="icon-57"></i><Link href="blog-details">03 Comments</Link></li> */}
                                    </ul>
                                    <h1 className="title">
                                      {typeof post.title === 'object' ? (post.title.en || '') : post.title}
                                    </h1>
                                    <div className="text blog-post">
                                        <PortableText
                                            value={post.body}
                                            components={PortableTextComponents}/>
                                    </div>
                                </div>
                                {isEvent ? 
                                <EventsComponent /> :""}
                                <div className="post-share-option mb_65">
                                    <ul className="post-tags clearfix">
                                        <li><h5>{t('post.tags')}</h5></li>
                                        <li><Link href="blog-details">#Agent</Link>,</li>
                                        <li><Link href="blog-details">#Business</Link>,</li>
                                        <li><Link href="blog-details">#Career</Link></li>
                                    </ul>
                                    <ul className="share-links clearfix">
                                        <li><Link href="https://www.facebook.com/profile.php?id=61550292352529"><i className="icon-4"></i></Link></li>
                                        <li><Link href="https://www.instagram.com/_monparcourt_"><i className="icon-5"></i></Link></li>
                                        <li><Link href="https://www.tiktok.com/@alexandris70?_t=ZM-8zGMc0C8ht7&_r=1"><i className="icon-6"></i></Link></li>
                                        <li><Link href="https://www.youtube.com/@monparcourt2813"><i className="icon-7"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                            <div className="default-sidebar blog-sidebar ml_10">
                                            <div className="sidebar-widget post-widget">
                                                <div className="widget-title">
                                                    <h3>{t('affiliates.title')}</h3>
                                                </div>
                                                <div className="post-inner">
                                                    <div className="post">
                                                        <figure className="post-thumb"><Link href="https://www.tripadvisor.com/"><img src="/assets/images/custom_images/tripAdvisor.png" alt="" /></Link></figure>
                                                        <h5><Link href="https://www.tripadvisor.com/">Trip Advisor</Link></h5>
                                                        <span className="post-date">{t('affiliates.partner')}</span>
                                                    </div>
                                                    <div className="post">
                                                        <figure className="post-thumb"><Link href="blog-details"><img src="/assets/images/custom_images/kayak.png" alt="" /></Link></figure>
                                                        <h5><Link href="https://www.kayak.com/">Kayak</Link></h5>
                                                        <span className="post-date">{t('affiliates.sponsor')}</span>
                                                    </div>
                                                    <div className="post">
                                                        <figure className="post-thumb"><Link href="blog-details"><img src="/assets/images/custom_images/booking.png" alt="" /></Link></figure>
                                                        <h5><Link href="https://www.booking.com/">Booking.com</Link></h5>
                                                        <span className="post-date">{t('affiliates.partner')}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <WeatherWidget />
                                            <CalendarWidget />
                                        </div>
                                    </div>
                                </div>
                            </div>
                </section>
                {/* sidebar-page-container end */}
                </ImageLoadingWrapper>
            </Layout>
        </>
    );
}
