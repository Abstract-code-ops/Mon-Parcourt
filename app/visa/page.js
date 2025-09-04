'use client'
import Link from "next/link";
import Layout from "@/components/layout/Layout"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import TestmonialSlider1 from "@/components/slider/TestmonialSlider1";
import { useTranslation, Trans } from 'react-i18next';

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    // default view
    slidesPerView: 3,
    spaceBetween: 0,
    // responsive breakpoints (media breaks)
    // keys are viewport widths in pixels
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        // when window width is >= 1024px
        1024: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
        // when window width is >= 1500px
        1500: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
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



}
export default function Home() {
    const { t } = useTranslation('visa');

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle={t('breadcrumb.visaOverview')} bgImage="url(assets/images/background/visa-breadcrumb.jpg)">
                {/* about section */}
                <section className="about-style-five p_relative">
                    <div className="auto-container">
                        <div className="row clearfix">
                        <div className="col-lg-7 col-md-12 col-sm-12 image-column">
                            <figure className="image-box"><img src="assets/images/resource/about-8.jpg" alt="" /></figure>
                        </div>
                        <div className="col-lg-5 col-md-12 col-sm-12 content-column">
                            <div className="content-box">
                                <h3>{t('about.title')}</h3>
                                <p>{t('about.p1')}</p>
                                <p>{t('about.p2')}</p>
                                <p>
                                    {t('about.p3_prefix')}
                                    <strong>
                                        <Link href="countries" style={{color: '#032B66'}}>{t('about.p3_link')}</Link>
                                    </strong>
                                    {t('about.p3_suffix')}
                                </p>
                                <p>{t('about.p4')}</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>
                 {/*about details end*/}
                {/* coaching section */}
                <section className="coaching-style-two visa-page p_relative pt_140 pb_140 centred">
                    <div className="auto-container">
                        <div className="sec-title centred mb_50">
                        <span className="sub-title">{t('coaching.subtitle')}</span>
                        <h2><Trans i18nKey="coaching.title" ns="visa" components={{ br: <br /> }} /></h2>
                        </div>
                        <div className="row clearfix">
                        <div className="col-lg-3 col-md-6 col-sm-12 coaching-block">
                            <div className="coaching-block-two wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="icon-box">
                                <div className="icon"><img src="assets/images/icons/icon-9.png" alt="" /></div>
                                <span className="count-text">01</span>
                                </div>
                                <h3><Link href="coaching-details-3">{t('coaching.items.toefl.title')}</Link></h3>
                                <p>{t('coaching.items.toefl.desc')}</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 coaching-block">
                            <div className="coaching-block-two wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="icon-box">
                                <div className="icon"><img src="assets/images/icons/icon-10.png" alt="" /></div>
                                <span className="count-text">02</span>
                                </div>
                                <h3><Link href="coaching-details-4">{t('coaching.items.german.title')}</Link></h3>
                                <p>{t('coaching.items.german.desc')}</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 coaching-block">
                            <div className="coaching-block-two wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="icon-box">
                                <div className="icon"><img src="assets/images/icons/icon-11.png" alt="" /></div>
                                <span className="count-text">03</span>
                                </div>
                                <h3><Link href="coaching-details-6">{t('coaching.items.sat.title')}</Link></h3>
                                <p>{t('coaching.items.sat.desc')}</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 coaching-block">
                            <div className="coaching-block-two wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="icon-box">
                                <div className="icon"><img src="assets/images/icons/icon-12.png" alt="" /></div>
                                <span className="count-text">04</span>
                                </div>
                                <h3><Link href="coaching-details-5">{t('coaching.items.tcf.title')}</Link></h3>
                                <p>{t('coaching.items.tcf.desc')} </p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>
                 {/*coaching details end*/}
                {/* visa section */}
                <section className="visa-style-two pb_130">
                    <div className="auto-container">
                        <div className="sec-title centred mb_50">
                        <span className="sub-title">{t('visa.subtitle')}</span>
                        <h2><Trans i18nKey="visa.title" ns="visa" components={{ br: <br /> }} /></h2>
                        </div>
                        <Swiper {...swiperOptions} className="three-item-carousel owl-carousel owl-theme owl-nav-none">
                            <SwiperSlide className="slide-item p_relative">
                            <div className="visa-block-two">
                                <div className="inner-box">
                                <div className="static-content">
                                    <div className="content-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-5.png" alt="" /></div>
                                    <h3><Link href="visa-details-4">{t('visa.items.student.title')}</Link></h3>
                                    <p>{t('visa.items.student.desc')}</p>
                                    <div className="link-box">
                                        <Link href="visa-details-4">{t('visa.items.student.readMore')}</Link>
                                    </div>
                                    </div>
                                    <figure className="image-box"><img src="assets/images/resource/visa-4.jpg" alt="" /></figure>
                                </div>
                                <div className="overlay-content">
                                    <div className="content-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-5.png" alt="" /></div>
                                    <h3><Link href="visa-details-4">{t('visa.items.student.title')}</Link></h3>
                                    <div className="link-box">
                                        <Link href="visa-details-4">{t('visa.items.student.readMore')}</Link>
                                    </div>
                                    </div>
                                    <figure className="image-box"><img src="assets/images/resource/visa-8.jpg" alt="" /></figure>
                                </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide className="slide-item p_relative">
                                <div className="visa-block-two">
                                    <div className="inner-box">
                                        <div className="static-content">
                                            <div className="content-box">
                                                <div className="icon-box"><img src="assets/images/icons/icon-7.png" alt="" /></div>
                                                <h3><Link href="visa-details">{t('visa.items.business.title')}</Link></h3>
                                                <p>{t('visa.items.business.desc')}</p>
                                                <div className="link-box">
                                                    <Link href="visa-details">{t('visa.items.business.readMore')}</Link>
                                                </div>
                                            </div>
                                            <figure className="image-box"><img src="assets/images/resource/visa-6.jpg" alt="" /></figure>
                                        </div>
                                        <div className="overlay-content">
                                            <div className="content-box">
                                                <div className="icon-box"><img src="assets/images/icons/icon-7.png" alt="" /></div>
                                                <h3><Link href="visa-details">{t('visa.items.business.title')}</Link></h3>
                                                <div className="link-box">
                                                    <Link href="visa-details">{t('visa.items.business.readMore')}</Link>
                                                </div>
                                            </div>
                                            <figure className="image-box"><img src="assets/images/resource/visa-10.jpg" alt="" /></figure>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="slide-item p_relative">
                            <div className="visa-block-two">
                                <div className="inner-box">
                                    <div className="static-content">
                                        <div className="content-box">
                                            <div className="icon-box"><img src="assets/images/icons/icon-8.png" alt="" /></div>
                                            <h3><Link href="visa-details-6">{t('visa.items.tourist.title')}</Link></h3>
                                            <p>{t('visa.items.tourist.desc')}</p>
                                            <div className="link-box">
                                                <Link href="visa-details-6">{t('visa.items.tourist.readMore')}</Link>
                                            </div>
                                        </div>
                                        <figure className="image-box"><img src="assets/images/resource/visa-7.jpg" alt="" /></figure>
                                    </div>
                                    <div className="overlay-content">
                                        <div className="content-box">
                                            <div className="icon-box"><img src="assets/images/icons/icon-8.png" alt="" /></div>
                                            <h3><Link href="visa-details-6">{t('visa.items.tourist.title')}</Link></h3>
                                            <div className="link-box">
                                                <Link href="visa-details-6">{t('visa.items.tourist.readMore')}</Link>
                                            </div>
                                        </div>
                                        <figure className="image-box"><img src="assets/images/resource/visa-11.jpg" alt="" /></figure>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide className="slide-item p_relative">
                                <div className="visa-block-two">
                                    <div className="inner-box">
                                        <div className="static-content">
                                            <div className="content-box">
                                                <div className="icon-box"><img src="assets/images/icons/icon-8.png" alt="" /></div>
                                                <h3><Link href="visa-details-2">{t('visa.items.working.title')}</Link></h3>
                                                <p>{t('visa.items.working.desc')}</p>
                                                <div className="link-box">
                                                    <Link href="visa-details-2">{t('visa.items.working.readMore')}</Link>
                                                </div>
                                            </div>
                                            <figure className="image-box"><img src="assets/images/resource/visa-7-custom.jpg" alt="" /></figure>
                                        </div>
                                        <div className="overlay-content">
                                            <div className="content-box">
                                                <div className="icon-box"><img src="assets/images/icons/icon-8.png" alt="" /></div>
                                                <h3><Link href="visa-details-2">{t('visa.items.working.title')}</Link></h3>
                                                <div className="link-box">
                                                    <Link href="visa-details-2">{t('visa.items.working.readMore')}</Link>
                                                </div>
                                            </div>
                                            <figure className="image-box"><img src="assets/images/resource/visa-11-custom.jpg" alt="" /></figure>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="slide-item p_relative">
                                <div className="visa-block-two">
                                    <div className="inner-box">
                                        <div className="static-content">
                                            <div className="content-box">
                                                <div className="icon-box"><img src="assets/images/icons/icon-8.png" alt="" /></div>
                                                <h3><Link href="visa-details-2">{t('visa.items.residence.title')}</Link></h3>
                                                <p>{t('visa.items.residence.desc')}</p>
                                                <div className="link-box">
                                                    <Link href="visa-details-2">{t('visa.items.residence.readMore')}</Link>
                                                </div>
                                            </div>
                                            <figure className="image-box"><img src="assets/images/resource/visa-14.jpg" alt="" /></figure>
                                        </div>
                                        <div className="overlay-content">
                                            <div className="content-box">
                                                <div className="icon-box"><img src="assets/images/icons/icon-8.png" alt="" /></div>
                                                <h3><Link href="visa-details-2">{t('visa.items.residence.title')}</Link></h3>
                                                <div className="link-box">
                                                    <Link href="visa-details-2">{t('visa.items.residence.readMore')}</Link>
                                                </div>
                                            </div>
                                            <figure className="image-box"><img src="assets/images/resource/visa-13.jpg" alt="" /></figure>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="slide-item p_relative">
                                <div className="visa-block-two">
                                    <div className="inner-box">
                                        <div className="static-content">
                                            <div className="content-box">
                                                <div className="icon-box"><img src="assets/images/icons/icon-8.png" alt="" /></div>
                                                <h3><Link href="visa-details-2">{t('visa.items.visit.title')}</Link></h3>
                                                <p>{t('visa.items.visit.desc')}</p>
                                                <div className="link-box">
                                                    <Link href="visa-details-2">{t('visa.items.visit.readMore')}</Link>
                                                </div>
                                            </div>
                                            <figure className="image-box"><img src="assets/images/resource/visa-15.jpg" alt="" /></figure>
                                        </div>
                                        <div className="overlay-content">
                                            <div className="content-box">
                                                <div className="icon-box"><img src="assets/images/icons/icon-8.png" alt="" /></div>
                                                <h3><Link href="visa-details-2">{t('visa.items.visit.title')}</Link></h3>
                                                <div className="link-box">
                                                    <Link href="visa-details-2">{t('visa.items.visit.readMore')}</Link>
                                                </div>
                                            </div>
                                            <figure className="image-box"><img src="assets/images/resource/visa-21.jpg" alt="" /></figure>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        </div>
                    </section>
                 {/*visa   end*/}
                 <section className="testimonial-style-two pb_150">
                    <div className="auto-container">
                        <div className="sec-title centred mb_60">
                        <span className="sub-title">{t('testimonial.subtitle')}</span>
                        <h2><Trans i18nKey="testimonial.title" ns="visa" components={{ br: <br /> }} /></h2>
                        </div>
                        <div className="content-box">
                        {/*Theme Carousel*/}
                        <TestmonialSlider1 />                        
                    </div>
                        </div>
                    </section>
                                                

                            </Layout>
        </>
    )
}


