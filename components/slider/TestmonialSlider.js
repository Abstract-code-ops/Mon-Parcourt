'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
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
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
    }
}
export default function TestmonialSlider() {
    return (
        <>
            <Swiper {...swiperOptions} className="single-item-carousel owl-carousel owl-theme owl-dots-none nav-style-one">
               
                <SwiperSlide className="slide-item">
                    <div className="testimonial-content">
                        <div className="icon-box"><img src="assets/images/icons/quote-1.png" alt="" /></div>
                        <figure className="thumb-box"><img src="assets/images/resource/testimonial-coach-1.png" alt="" /></figure>
                        <ul className="rating clearfix">
                            <li><i className="icon-15"></i></li>
                            <li><i className="icon-15"></i></li>
                            <li><i className="icon-15"></i></li>
                            <li><i className="icon-15"></i></li>
                            <li><i className="icon-15"></i></li>
                        </ul>
                        <h2>Coaching efficace...</h2>
                        <p>"J'ai eu une excellente expérience avec ce service de coaching IELTS. Les instructeurs sont très compétents et fournissent des conseils clairs et efficaces. Les cours sont bien structurés et couvrent toutes les sections importantes de l'examen, avec des conseils pratiques et un retour personnalisé. Leur soutien m'a permis de gagner en confiance et d'améliorer considérablement mes compétences. Je recommande vivement ce programme à tous ceux qui se préparent à l'examen IELTS !"</p>
                        <h5>Jerome Ococha / <span>ILETS</span></h5>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                    <div className="testimonial-content">
                        <div className="icon-box"><img src="assets/images/icons/quote-1.png" alt="" /></div>
                        <figure className="thumb-box"><img src="assets/images/resource/testimonial-coach-2.png" alt="" /></figure>
                        <ul className="rating clearfix">
                            <li><i className="icon-15"></i></li>
                            <li><i className="icon-15"></i></li>
                            <li><i className="icon-15"></i></li>
                            <li><i className="icon-15"></i></li>
                            <li><i className="icon-15"></i></li>
                        </ul>
                        <h2>Thank you for immigr...</h2>
                        <p>"I had a fantastic experience with this PTE coaching service. The trainers are extremely knowledgeable and offer targeted instruction for every section of the test. Lessons are organized, interactive, and full of useful strategies tailored to individual needs. Thanks to their expert support and encouragement, I felt well-prepared and confident on exam day. I highly recommend this coaching center to anyone looking to succeed in the PTE exam!"</p>
                        <h5>Jemmy Catter / <span>PTE</span></h5>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="testimonial-content">
                        <div className="icon-box"><img src="assets/images/icons/quote-1.png" alt="" /></div>
                        <figure className="thumb-box"><img src="assets/images/resource/testimonial-3.png" alt="" /></figure>
                        <ul className="rating clearfix">
                            <li><i className="icon-15"></i></li>
                            <li><i className="icon-15"></i></li>
                            <li><i className="icon-15"></i></li>
                            <li><i className="icon-15"></i></li>
                            <li><i className="icon-15"></i></li>
                        </ul>
                        <h2>Top notch, outstanding DaF...</h2>
                        <p>"The coaching program was exceptionally well-structured and comprehensive. The instructors were knowledgeable, supportive, and focused on helping me improve every aspect of my German language skills. Thanks to their personalized guidance and practical teaching methods, I felt confident and well-prepared for the exam. I highly recommend this coaching service to anyone aiming to excel in their DaF German exam."</p>
                        <h5>Marwa Al Bani / <span>DAF</span></h5>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="testimonial-content">
                        <div className="icon-box"><img src="assets/images/icons/quote-1.png" alt="" /></div>
                        <figure className="thumb-box"><img src="assets/images/resource/testimonial-coach-4.png" alt="" /></figure>
                        <ul className="rating clearfix">
                            <li><i className="icon-15"></i></li>
                            <li><i className="icon-15"></i></li>
                            <li><i className="icon-15"></i></li>
                            <li><i className="icon-15"></i></li>
                            <li><i className="icon-15"></i></li>
                        </ul>
                        <h2>J'ai eu du mal à terminer mon TCF...</h2>
                        <p>"Le coaching TCF a dépassé mes attentes grâce à un programme complet et à des formateurs experts. Chaque séance était captivante et offrait une préparation ciblée à toutes les sections de l'examen. Les coachs m'ont offert un soutien constant et un feedback personnalisé qui a renforcé ma confiance et mes compétences. Je me suis senti extrêmement bien préparé et j'ai obtenu d'excellents résultats grâce à cette équipe. Je recommande vivement ce service de coaching à toute personne se préparant au TCF."</p>
                        <h5>Monique Harris / <span>TCF</span></h5>

                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
