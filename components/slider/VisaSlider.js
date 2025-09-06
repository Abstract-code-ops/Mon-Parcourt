'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react"
import Image from "next/image"
import { useTranslation } from 'react-i18next';

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 25,
    autoplay: {
        delay: 2500,
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

    breakpoints: {
        320: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        575: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
    }
}
export default function VisaSlider() {
    const { t } = useTranslation('home');
    return (
        <>
            <Swiper {...swiperOptions} className="three-item-carousel owl-carousel owl-theme owl-dots-none nav-style-one">
                <SwiperSlide className="slide-item">
                    <div className="visa-block-one">
                        <div className="inner-box">
                            <figure className="image-box"><Image src="/assets/images/resource/visa-1.jpg" alt={t('visaSlider.student.alt')} width={453} height={330} /></figure>
                            <div className="lower-content">
                                <div className="icon-box"><i className="icon-12"></i></div>
                                <h3><Link href="visa-details-4">{t('visaSlider.student.title')}</Link></h3>
                                <p>{t('visaSlider.student.description')}</p>
                                <ul className="list-style-one clearfix">
                                    <li>{t('visaSlider.student.items.0')}</li>
                                    <li>{t('visaSlider.student.items.1')}</li>
                                    <li>{t('visaSlider.student.items.2')}</li>
                                </ul>
                                <div className="link-btn">
                                    <Link href="visa-details-4"><span>{t('news.readMore')}</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                    <div className="visa-block-one">
                        <div className="inner-box">
                            <figure className="image-box"><Image src="/assets/images/resource/visa-2.jpg" alt={t('visaSlider.residence.alt')} width={453} height={330} /></figure>
                            <div className="lower-content">
                                <div className="icon-box"><i className="icon-13"></i></div>
                                <h3><Link href="visa-details-3">{t('visaSlider.residence.title')}</Link></h3>
                                <p>{t('visaSlider.residence.description')}</p>
                                <ul className="list-style-one clearfix">
                                    <li>{t('visaSlider.residence.items.0')}</li>
                                    <li>{t('visaSlider.residence.items.1')}</li>
                                    <li>{t('visaSlider.residence.items.2')}</li>
                                </ul>
                                <div className="link-btn">
                                    <Link href="visa-details-3"><span>{t('news.readMore')}</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                    <div className="visa-block-one">
                        <div className="inner-box">
                            <figure className="image-box"><Image src="/assets/images/resource/visa-3.jpg" alt={t('visaSlider.business.alt')} width={453} height={330} /></figure>
                            <div className="lower-content">
                                <div className="icon-box"><i className="icon-14"></i></div>
                                <h3><Link href="visa-details">{t('visaSlider.business.title')}</Link></h3>
                                <p>{t('visaSlider.business.description')}</p>
                                <ul className="list-style-one clearfix">
                                    <li>{t('visaSlider.business.items.0')}</li>
                                    <li>{t('visaSlider.business.items.1')}</li>
                                    <li>{t('visaSlider.business.items.2')}</li>
                                </ul>
                                <div className="link-btn">
                                    <Link href="visa-details"><span>{t('news.readMore')}</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                    <div className="visa-block-one">
                        <div className="inner-box">
                            <figure className="image-box"><Image src="/assets/images/resource/visa-custom.jpg" alt={t('visaSlider.tourist.alt')} width={453} height={330} /></figure>
                            <div className="lower-content">
                                <div className="icon-box"><i className="icon-14"></i></div>
                                <h3><Link href="visa-details">{t('visaSlider.tourist.title')}</Link></h3>
                                <p>{t('visaSlider.tourist.description')}</p>
                                <ul className="list-style-one clearfix">
                                    <li>{t('visaSlider.tourist.items.0')}</li>
                                    <li>{t('visaSlider.tourist.items.1')}</li>
                                    <li>{t('visaSlider.tourist.items.2')}</li>
                                </ul>
                                <div className="link-btn">
                                    <Link href="visa-details"><span>{t('news.readMore')}</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                    <div className="visa-block-one">
                        <div className="inner-box">
                            <figure className="image-box">
                                <Image src="/assets/images/resource/visa-custom-2.jpg" alt={t('visaSlider.working.alt')} width={453} height={330} />
                            </figure>
                            <div className="lower-content">
                                <div className="icon-box"><i className="icon-14"></i></div>
                                <h3><Link href="visa-details">{t('visaSlider.working.title')}</Link></h3>
                                <p>{t('visaSlider.working.description')}</p>
                                <ul className="list-style-one clearfix">
                                    <li>{t('visaSlider.working.items.0')}</li>
                                    <li>{t('visaSlider.working.items.1')}</li>
                                    <li>{t('visaSlider.working.items.2')}</li>
                                </ul>
                                <div className="link-btn">
                                    <Link href="visa-details-2"><span>{t('news.readMore')}</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                    <div className="visa-block-one">
                        <div className="inner-box">
                            <figure className="image-box"><Image src="/assets/images/resource/visa-custom-3.jpg" alt={t('visaSlider.family.alt')} width={453} height={330} /></figure>
                            <div className="lower-content">
                                <div className="icon-box"><i className="icon-14"></i></div>
                                <h3><Link href="visa-details">{t('visaSlider.family.title')}</Link></h3>
                                <p>{t('visaSlider.family.description')}</p>
                                <ul className="list-style-one clearfix">
                                    <li>{t('visaSlider.family.items.0')}</li>
                                    <li>{t('visaSlider.family.items.1')}</li>
                                    <li>{t('visaSlider.family.items.2')}</li>
                                </ul>
                                <div className="link-btn">
                                    <Link href="visa-details-5"><span>{t('news.readMore')}</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
