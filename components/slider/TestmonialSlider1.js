'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 2,
    spaceBetween: 0,
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
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        767: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        991: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
    }
}
export default function TestmonialSlider1() {
    return (
            <>
                <Swiper {...swiperOptions} className="two-item-carousel owl-carousel owl-theme owl-dots-none nav-style-one">
                    <SwiperSlide className="slide-item p_relative">
                        <div className="testimonial-block-one">
                            <div className="inner-box">
                                <figure className="image-box"><img src="assets/images/resource/testimonial-2.jpg" alt="" /></figure>
                                <div className="content-box">
                                    <ul className="rating mb_15 clearfix">
                                    <li><i className="icon-15"></i></li>
                                    <li><i className="icon-15"></i></li>
                                    <li><i className="icon-15"></i></li>
                                    <li><i className="icon-15"></i></li>
                                    <li><i className="icon-15"></i></li>
                                    </ul>
                                    <h3>Expérience de visa touristique transparente pour la Belgique!</h3>
                                    <p>J'étais honnêtement nerveux à l'idée de demander mon visa touristique pour la Belgique, mais l'équipe de services de visa de MonParcourt m'a guidé à chaque étape, m'a aidé à rassembler les bons documents et a même révisé...</p>
                                    <h5>Jemmy Catter / <span>PDG Fondateur</span></h5>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item p_relative">
                        <div className="testimonial-block-one">
                            <div className="inner-box">
                                <figure className="image-box"><img src="assets/images/resource/testimonial-4.jpg" alt="" /></figure>
                                <div className="content-box">
                                    <ul className="rating mb_15 clearfix">
                                        <li><i className="icon-15"></i></li>
                                        <li><i className="icon-15"></i></li>
                                        <li><i className="icon-15"></i></li>
                                        <li><i className="icon-15"></i></li>
                                        <li><i className="icon-15"></i></li>
                                    </ul>
                                    <h3>Smooth and Supportive Process for My China Student Visa</h3>
                                    <p>Getting a student visa for China can feel overwhelming, but thanks to this service, I felt completely guided from day one. They helped me organize my admission letter, financial statements, and all...</p>
                                    <h5>Carel William / <span>Student</span></h5>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item p_relative">
                        <div className="testimonial-block-one">
                            <div className="inner-box">
                                <figure className="image-box"><img src="assets/images/resource/testimonial-5.jpg" alt="" /></figure>
                                <div className="content-box">
                                    <ul className="rating mb_15 clearfix">
                                    <li><i className="icon-15"></i></li>
                                    <li><i className="icon-15"></i></li>
                                    <li><i className="icon-15"></i></li>
                                    <li><i className="icon-15"></i></li>
                                    <li><i className="icon-15"></i></li>
                                    </ul>
                                    <h3>Quick & Reliable Dubai Business Visa Help</h3>
                                    <p>Got my Dubai business visa fast! The team handled all paperwork smoothly. Great support, zero stress—perfect for my tight schedule.</p>
                                    <h5>Beom seok / <span>Regional Manager</span></h5>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item p_relative">
                        <div className="testimonial-block-one">
                            <div className="inner-box">
                                <figure className="image-box"><img src="assets/images/resource/testimonial-6.jpg" alt="" /></figure>
                                <div className="content-box">
                                    <ul className="rating mb_15 clearfix">
                                        <li><i className="icon-15"></i></li>
                                        <li><i className="icon-15"></i></li>
                                        <li><i className="icon-15"></i></li>
                                        <li><i className="icon-15"></i></li>
                                        <li><i className="icon-15"></i></li>
                                    </ul>
                                    <h3>Visa touristique sans tracas pour la France</h3>
                                    <p>Processus super fluide ! Ils m'ont guidé à chaque étape, et mon visa touristique pour la France a été approuvé rapidement. Excellent service et grande communication tout au long.</p>
                                    <h5>Harold Adebayo / <span>Exploreur</span></h5>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>   
            </>
    )
}
