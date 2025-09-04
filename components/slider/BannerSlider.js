'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
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
            slidesPerView: 3,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
    }
}
export default function VisaSlider() {
    return (
        <>
           <Swiper {...swiperOptions} className="banner-carousel owl-theme owl-carousel owl-dots-none">                    
                    <SwiperSlide className="slide-item p_relative">
                    <figure className="image-layer"><img src="assets/images/banner/banner-img-1.png" alt="" /></figure>
                  <div className="auto-container">
                    <div className="content-box">
                    <div className="experience-inner">
                                <figure className="logo-imgag"><img src="assets/images/icons/logo-1.png" alt="" /></figure>
                                <div className="text">30 Years</div>
                                <span>Experience</span>
                            </div>
                            <h2>Study In <span>Recognized</span> Universities!...</h2>
                            <p>MCS has been recruiting and prepping talented professionals for over twenty years. We provide a unique value proposition to both.</p>
                            <div className="btn-box">
                                <Link href="/" className="theme-btn btn-one"><span>More Details</span></Link>
                            </div>
                    </div>
                  </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item p_relative">
                    <figure className="image-layer"><img src="assets/images/banner/banner-img-1.png" alt="" /></figure>
                    <div className="auto-container">
                        <div className="content-box">
                            <div className="experience-inner">
                                <figure className="logo-imgag"><img src="assets/images/icons/logo-1.png" alt="" /></figure>
                                <div className="text">30 Years</div>
                                <span>Experience</span>
                            </div>
                            <h2>Study In <span>Recognized</span> Universities!...</h2>
                            <p>MCS has been recruiting and prepping talented professionals for over twenty years. We provide a unique value proposition to both.</p>
                            <div className="btn-box">
                                <Link href="/" className="theme-btn btn-one"><span>More Details</span></Link>
                            </div>
                        </div> 
                    </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item p_relative">
                    <figure className="image-layer"><img src="assets/images/banner/banner-img-1.png" alt="" /></figure>
                    <div className="auto-container">
                        <div className="content-box">
                            <div className="experience-inner">
                                <figure className="logo-imgag"><img src="assets/images/icons/logo-1.png" alt="" /></figure>
                                <div className="text">30 Years</div>
                                <span>Experience</span>
                            </div>
                            <h2>Study In <span>Recognized</span> Universities!...</h2>
                            <p>MCS has been recruiting and prepping talented professionals for over twenty years. We provide a unique value proposition to both.</p>
                            <div className="btn-box">
                                <Link href="/" className="theme-btn btn-one"><span>More Details</span></Link>
                            </div>
                        </div> 
                    </div>
                    </SwiperSlide>
                </Swiper>
               

        </>
    )
}
