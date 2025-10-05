'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react"

const clientsData = [
    {
        id: 1,
        src: 'assets/images/custom_images/ekta.png',
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

const innerBox = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}

export default function PartnersSlider() {

    const hasEnoughSlides = clientsData.length > 3;

    const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnMaven_Proaction: false,
    },
    loop: hasEnoughSlides,

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
    return (
        <>
            <Swiper {...swiperOptions} className="four-item-carousel owl-carousel owl-theme owl-dots-none nav-style-one">
                {
                    clientsData.map((client) => {
                        return (
                            <SwiperSlide className="slide-item" key={client.id}>
                                <div className="">
                                    <div className="inner-box" style={innerBox}>
                                        <div className="mt_30"><img src={client.src} alt={client.alt} style={{ maxHeight: '100%', maxWidth: '100%' }} /></div>
                                    </div>
                                        <h3 className="mt_20 centred"><Link href={client.url} style={{color: 'var(--title-color)'}} target="_blank">{client.name}</Link></h3>
                                    
                                </div>
                            </SwiperSlide>
                        );
                    })
                }
            </Swiper>
        </>
    )
}
