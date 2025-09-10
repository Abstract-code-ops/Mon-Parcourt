'use client'
import Link from "next/link"
import Image from "next/image"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { useTranslation, Trans } from 'react-i18next'

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
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

const slideMeta = [
    { link: "/visa-details-4", number: "one" },
    { link: "/visa", number: "two" },
    { link: "/blog", number: "three" },
    { link: "/coaching", number: "four" }
]

export default function Banner() {
    const { t } = useTranslation('home')

    // Read raw translation. i18next may return the key string when missing which is not iterable.
    const rawSlides = t('banner.slides', { returnObjects: true })
    // Ensure we have an array to map over. If translation is missing or malformed, fall back to using
    // slideMeta length and read individual title/description keys with t(). This prevents `slides.map is not a function`.
    const slideCount = Array.isArray(rawSlides) ? rawSlides.length : slideMeta.length
    const slides = Array.from({ length: slideCount }).map((_, i) => {
        if (Array.isArray(rawSlides)) return rawSlides[i]
        return {
            title: t(`banner.slides.${i}.title`),
            description: t(`banner.slides.${i}.description`),
        }
    })
    
    return (
        <>
           <section className="banner-section p_relative">
                <div className="pattern-layer">
                    <div className="pattern-custom" style={{ backgroundImage: "url(/assets/images/banner/object1.png)" }}></div>
                </div>
                <Swiper {...swiperOptions} className="banner-carousel owl-theme owl-carousel owl-dots-none">
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index} className={`slide-item p_relative ${slideMeta[index]?.number || ''}`}>
                            {/* Dark overlay */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                                zIndex: 1
                            }} />
                            <div className="auto-container" style={{ position: 'relative', zIndex: 2 }}>
                                <div className="content-box">
                                    <div className="experience-inner">
                                        <figure className="logo-imgag">
                                            <Image src="/assets/images/icons/logo-1.png" alt="Experience Logo" width={150} height={150} priority unoptimized />
                                        </figure>
                                        <div className="text">{t('banner.experience.years')}</div>
                                        <span>{t('banner.experience.label')}</span>
                                    </div>
                                    <h2>
                                        <Trans i18nKey={`banner.slides.${index}.title`} ns="home" components={{ 0: <span /> }} />
                                    </h2>
                                    <p style={{ fontSize: "1.2rem"}}>{t(`banner.slides.${index}.description`)}</p>
                                    <div className="btn-box">
                                        <Link href={slideMeta[index]?.link || '#'} className="theme-btn btn-one"><span>{t('banner.cta')}</span></Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                    <div className="owl-nav">
                        <button type="button" className="owl-prev h1p">
                        <span className="icon-10"></span>
                        </button>
                        <button type="button" className="owl-next h1n">
                        <span className="icon-11"></span>
                        </button>
                    </div>
                  
            </section>
        </>
    )
}
