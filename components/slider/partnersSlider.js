'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
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
            slidesPerView: 4,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 4,
            // spaceBetween: 30,
        },
    }
}

const clientsData = [
    {
        id: 1,
        src: 'assets/images/custom_images/turkish-airlines.png',
        alt: '',
        name: 'Turkish Airlines',
        url: 'https://www.turkishairlines.com/'
    },
    {
        id: 2,
        src: 'assets/images/custom_images/airbnb.png',
        alt: '',
        name: 'Airbnb',
        url: 'https://www.airbnb.com/'
    },
    {
        id: 3,
        src: 'assets/images/custom_images/skyscanner.png',
        alt: '',
        name: 'Skyscanner',
        url: 'https://www.skyscanner.com/'
    },
    {
        id: 4,
        src: 'assets/images/custom_images/idp-education.png',
        alt: '',
        name: 'Idp Education',
        url: 'https://www.idp-education.com/'
    },
    {
        id: 6,
        src: 'assets/images/custom_images/booking-com.png',
        alt: '',
        name: 'Booking.com',
        url: 'https://www.booking.com/'
    },
    {
        id: 7,
        src: 'assets/images/custom_images/british-council.png',
        alt: '',
        name: 'British Council',
        url: 'https://www.britishcouncil.org/'
    },
    {
        id: 8,
        src: 'assets/images/custom_images/applyboard.png',
        alt: '',
        name: 'Applyboard',
        url: 'https://www.applyboard.com/'
    },
    {
        id: 9,
        src: 'assets/images/custom_images/wise-transferwise.png',
        alt: '',
        name: 'Wise',
        url: 'https://www.wise.com/'
    },
    {
        id: 10,
        src: 'assets/images/custom_images/turing.png',
        alt: '',
        name: 'Turing',
        url: 'https://www.turing.com/jobs'
    },
    {
        id: 11,
        src: 'assets/images/custom_images/trip-advisor.png',
        alt: '',
        name: 'Trip Advisor',
        url: 'https://www.tripadvisor.com/'
    }
]

const innerBox = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}

export default function PartnersSlider() {
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
