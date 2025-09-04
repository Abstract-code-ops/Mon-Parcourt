'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnMaven_Proaction: false,
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
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        575: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        767: {
            slidesPerView: 3,
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

const flag = {
    width: '70%',
    paddingTop: '1rem'
}

export default function UniversitiesSlider() {
    return (
        <>
            <Swiper {...swiperOptions} className="four-item-carousel owl-carousel owl-theme owl-dots-none nav-style-one mb_30">
                <SwiperSlide className="slide-item">
                <div className="custom-universities">
                    <div className="flag" style={flag}><img style={{borderRadius: '50%'}} src="assets/images/custom_images/universities-4.png" alt="" /></div>
                    <h4 className="mt_10 ml_5">Galatasary</h4>
                </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="custom-universities">
                    <div className="flag" style={flag}><img style={{borderRadius: '50%'}} src="assets/images/custom_images/universities-2.png" alt="" /></div>
                    <h4 className="mt_10 ml_5">Havard</h4>
                </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="custom-universities">
                    <div className="flag" style={flag}><img style={{borderRadius: '50%'}} src="assets/images/custom_images/universities-7.png" alt="" /></div>
                    <h4 className="mt_10 ml_5">Murdoch</h4>
                </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="custom-universities">
                    <div className="flag" style={flag}><img style={{borderRadius: '50%'}} src="assets/images/custom_images/universities-9.png" alt="" /></div>
                    <h4 className="mt_10 ml_25">NEU</h4>
                </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="custom-universities">
                    <div className="flag" style={flag}><img style={{borderRadius: '50%'}} src="assets/images/custom_images/universities-8.png" alt="" /></div>
                    <h4 className="mt_10 ml_5">CUHK</h4>
                </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="custom-universities">
                    <div className="flag" style={flag}><img style={{borderRadius: '50%'}} src="assets/images/custom_images/universities-6.png" alt="" /></div>
                    <h4 className="mt_10 ml_5">Heidelberg</h4>
                </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
