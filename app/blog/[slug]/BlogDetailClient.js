'use client'

import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { PortableText } from '@portabletext/react';
import { optimizedBlogDetailImage } from "/sanity/lib/queries";
import PortableTextComponents from "@/components/portableText/blogDetailsPortableComponenets";
import CalendarWidget from "@/components/layout/CalendarWidget";
import WeatherWidget from "@/components/layout/WeatherWidget";
// Dynamically load heavy EventsComponent (antd + form logic) only when needed
import dynamic from 'next/dynamic';
const EventsComponent = dynamic(() => import('@/components/sections/events/EventsComponent'), {
    ssr: false,
    loading: () => null,
});
import { useTranslation } from 'react-i18next';
import ImageLoadingWrapper from "@/components/layout/ImageLoadingWrapper";

const clientsData = [
    {
        id: 1,
        src: '/assets/images/custom_images/Ekta.png',
        alt: '',
        name: 'EKTA',
        url: 'https://tp.media/click?shmarker=676005&promo_id=7358&source_type=link&type=click&campaign_id=225&trs=462962'
    },
    {
        id: 2,
        src: '/assets/images/custom_images/kiwi.png',
        alt: '',
        name: 'Kiwi.com',
        url: 'https://tp.media/click?shmarker=676005&promo_id=8912&source_type=link&type=click&campaign_id=111&trs=462962'
    },
    {
        id: 3,
        src: '/assets/images/custom_images/airalo.png',
        alt: '',
        name: 'Airalo',
        url: 'https://tp.media/click?shmarker=676005&promo_id=8405&source_type=link&type=click&campaign_id=541&trs=462962'
    },
    {
        id: 4,
        src: '/assets/images/custom_images/airhelp.png',
        alt: '',
        name: 'Airhelp',
        url: 'https://airhelp.tpx.lt/hnWUPwCS'
    },
    {
        id: 5,
        src: '/assets/images/custom_images/compensair.png',
        alt: '',
        name: 'Compensair',
        url: 'https://compensair.tpx.lt/YvnqmSxu'
    },
    {
        id: 6,
        src: '/assets/images/custom_images/saily.png',
        alt: '',
        name: 'Saily',
        url: 'https://tp.media/click?shmarker=676005&promo_id=8978&source_type=link&type=click&campaign_id=629&trs=462962'
    }
]

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
                                <EventsComponent sheetID={post.sheetID} /> :""}
                                <div className="post-share-option mb_65">
                                    <ul className="post-tags clearfix">
                                        <li><h5>{t('post.tags')}</h5></li>
                                        <li><Link href="blog-details">#Agent</Link>,</li>
                                        <li><Link href="blog-details">#Business</Link>,</li>
                                        <li><Link href="blog-details">#Career</Link></li>
                                    </ul>
                                    <ul className="share-links clearfix">
                                        <li><Link href="https://www.facebook.com/share/1FLBsHSkKJ/" target="_blank"><i className="icon-4"></i></Link></li>
                                        <li><Link href="https://www.instagram.com/_monparcourt_" target="_blank"><i className="icon-5"></i></Link></li>
                                        <li><Link href="http://tiktok.com/@monparcourt.1er" target="_blank"><i className="icon-6"></i></Link></li>
                                        <li><Link href="https://www.youtube.com/channel/UCKwdTvulmAw2DKGOo8wM65Q" target="_blank"><i className="icon-7"></i></Link></li>
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
                                                    {/* Partners Slider */}
                                                    {clientsData.map((client) => (
                                                        <div className="post" key={client.id}>
                                                            <figure className="post-thumb"><Link href="blog-details"><img src={client.src} alt={client.alt} /></Link></figure>
                                                            <h5><Link href={client.url}>{client.name}</Link></h5>
                                                            <span className="post-date">{t('affiliates.sponsor')}</span>
                                                        </div>
                                                    ))}
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
