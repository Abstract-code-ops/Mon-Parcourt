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
            slidesPerView: 3,
            // spaceBetween: 30,
        },
    }
}
export default function VisaSlider1() {
    return (
        <>
            <Swiper {...swiperOptions} className="three-item-carousel owl-carousel owl-theme owl-nav-none">
                <SwiperSlide className="slide-item">
                <div className="visa-block-two">
            <div className="inner-box">
              <div className="static-content">
                <div className="content-box">
                  <div className="icon-box"><img src="assets/images/icons/icon-5.png" alt="" /></div>
                  <h3><Link href="visa-details-4">Student Visa</Link></h3>
                  <p>Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet magna suscipit, fermentum.</p>
                  <div className="link-box">
                    <Link href="visa-details-4">Read More</Link>
                  </div>
                </div>
                <figure className="image-box"><img src="assets/images/resource/visa-4.jpg" alt="" /></figure>
              </div>
              <div className="overlay-content">
                <div className="content-box">
                  <div className="icon-box"><img src="assets/images/icons/icon-5.png" alt="" /></div>
                  <h3><Link href="visa-details-4">Student Visa</Link></h3>
                  <div className="link-box">
                    <Link href="visa-details-4">Read More</Link>
                  </div>
                </div>
                <figure className="image-box"><img src="assets/images/resource/visa-8.jpg" alt="" /></figure>
              </div>
            </div>
            </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="visa-block-two">
                        <div className="inner-box">
                            <div className="static-content">
                                <div className="content-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-6.png" alt="" /></div>
                                    <h3><Link href="visa-details-3">Residence Visa</Link></h3>
                                    <p>Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet magna suscipit, fermentum.</p>
                                    <div className="link-box">
                                        <Link href="visa-details-3">Read More</Link>
                                    </div>
                                </div>
                                <figure className="image-box"><img src="assets/images/resource/visa-5.jpg" alt="" /></figure>
                            </div>
                            <div className="overlay-content">
                                <div className="content-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-6.png" alt="" /></div>
                                    <h3><Link href="visa-details-3">Residence Visa</Link></h3>
                                    <div className="link-box">
                                        <Link href="visa-details-3">Read More</Link>
                                    </div>
                                </div>
                                <figure className="image-box"><img src="assets/images/resource/visa-9.jpg" alt="" /></figure>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="visa-block-two">
                        <div className="inner-box">
                            <div className="static-content">
                                <div className="content-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-7.png" alt="" /></div>
                                    <h3><Link href="visa-details">Business Visa</Link></h3>
                                    <p>Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet magna suscipit, fermentum.</p>
                                    <div className="link-box">
                                        <Link href="visa-details">Read More</Link>
                                    </div>
                                </div>
                                <figure className="image-box"><img src="assets/images/resource/visa-6.jpg" alt="" /></figure>
                            </div>
                            <div className="overlay-content">
                                <div className="content-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-7.png" alt="" /></div>
                                    <h3><Link href="visa-details">Business Visa</Link></h3>
                                    <div className="link-box">
                                        <Link href="visa-details">Read More</Link>
                                    </div>
                                </div>
                                <figure className="image-box"><img src="assets/images/resource/visa-10.jpg" alt="" /></figure>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="visa-block-two">
                        <div className="inner-box">
                            <div className="static-content">
                                <div className="content-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-8.png" alt="" /></div>
                                    <h3><Link href="visa-details-6">Tourist Visa</Link></h3>
                                    <p>Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet magna suscipit, fermentum.</p>
                                    <div className="link-box">
                                        <Link href="visa-details-6">Read More</Link>
                                    </div>
                                </div>
                                <figure className="image-box"><img src="assets/images/resource/visa-7.jpg" alt="" /></figure>
                            </div>
                            <div className="overlay-content">
                                <div className="content-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-8.png" alt="" /></div>
                                    <h3><Link href="visa-details-6">Tourist Visa</Link></h3>
                                    <div className="link-box">
                                        <Link href="visa-details-6">Read More</Link>
                                    </div>
                                </div>
                                <figure className="image-box"><img src="assets/images/resource/visa-11.jpg" alt="" /></figure>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="visa-block-two">
            <div className="inner-box">
              <div className="static-content">
                <div className="content-box">
                  <div className="icon-box"><img src="assets/images/icons/icon-5.png" alt="" /></div>
                  <h3><Link href="visa-details-4">Student Visa</Link></h3>
                  <p>Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet magna suscipit, fermentum.</p>
                  <div className="link-box">
                    <Link href="visa-details-4">Read More</Link>
                  </div>
                </div>
                <figure className="image-box"><img src="assets/images/resource/visa-4.jpg" alt="" /></figure>
              </div>
              <div className="overlay-content">
                <div className="content-box">
                  <div className="icon-box"><img src="assets/images/icons/icon-5.png" alt="" /></div>
                  <h3><Link href="visa-details-4">Student Visa</Link></h3>
                  <div className="link-box">
                    <Link href="visa-details-4">Read More</Link>
                  </div>
                </div>
                <figure className="image-box"><img src="assets/images/resource/visa-8.jpg" alt="" /></figure>
              </div>
            </div>
            </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="visa-block-two">
                        <div className="inner-box">
                            <div className="static-content">
                                <div className="content-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-6.png" alt="" /></div>
                                    <h3><Link href="visa-details-3">Residence Visa</Link></h3>
                                    <p>Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet magna suscipit, fermentum.</p>
                                    <div className="link-box">
                                        <Link href="visa-details-3">Read More</Link>
                                    </div>
                                </div>
                                <figure className="image-box"><img src="assets/images/resource/visa-5.jpg" alt="" /></figure>
                            </div>
                            <div className="overlay-content">
                                <div className="content-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-6.png" alt="" /></div>
                                    <h3><Link href="visa-details-3">Residence Visa</Link></h3>
                                    <div className="link-box">
                                        <Link href="visa-details-3">Read More</Link>
                                    </div>
                                </div>
                                <figure className="image-box"><img src="assets/images/resource/visa-9.jpg" alt="" /></figure>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="visa-block-two">
                        <div className="inner-box">
                            <div className="static-content">
                                <div className="content-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-7.png" alt="" /></div>
                                    <h3><Link href="visa-details">Business Visa</Link></h3>
                                    <p>Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet magna suscipit, fermentum.</p>
                                    <div className="link-box">
                                        <Link href="visa-details">Read More</Link>
                                    </div>
                                </div>
                                <figure className="image-box"><img src="assets/images/resource/visa-6.jpg" alt="" /></figure>
                            </div>
                            <div className="overlay-content">
                                <div className="content-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-7.png" alt="" /></div>
                                    <h3><Link href="visa-details">Business Visa</Link></h3>
                                    <div className="link-box">
                                        <Link href="visa-details">Read More</Link>
                                    </div>
                                </div>
                                <figure className="image-box"><img src="assets/images/resource/visa-10.jpg" alt="" /></figure>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="visa-block-two">
                        <div className="inner-box">
                            <div className="static-content">
                                <div className="content-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-8.png" alt="" /></div>
                                    <h3><Link href="visa-details-6">Tourist Visa</Link></h3>
                                    <p>Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet magna suscipit, fermentum.</p>
                                    <div className="link-box">
                                        <Link href="visa-details-6">Read More</Link>
                                    </div>
                                </div>
                                <figure className="image-box"><img src="assets/images/resource/visa-7.jpg" alt="" /></figure>
                            </div>
                            <div className="overlay-content">
                                <div className="content-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-8.png" alt="" /></div>
                                    <h3><Link href="visa-details-6">Tourist Visa</Link></h3>
                                    <div className="link-box">
                                        <Link href="visa-details-6">Read More</Link>
                                    </div>
                                </div>
                                <figure className="image-box"><img src="assets/images/resource/visa-11.jpg" alt="" /></figure>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="visa-block-two">
            <div className="inner-box">
              <div className="static-content">
                <div className="content-box">
                  <div className="icon-box"><img src="assets/images/icons/icon-5.png" alt="" /></div>
                  <h3><Link href="visa-details-4">Student Visa</Link></h3>
                  <p>Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet magna suscipit, fermentum.</p>
                  <div className="link-box">
                    <Link href="visa-details-4">Read More</Link>
                  </div>
                </div>
                <figure className="image-box"><img src="assets/images/resource/visa-4.jpg" alt="" /></figure>
              </div>
              <div className="overlay-content">
                <div className="content-box">
                  <div className="icon-box"><img src="assets/images/icons/icon-5.png" alt="" /></div>
                  <h3><Link href="visa-details-4">Student Visa</Link></h3>
                  <div className="link-box">
                    <Link href="visa-details-4">Read More</Link>
                  </div>
                </div>
                <figure className="image-box"><img src="assets/images/resource/visa-8.jpg" alt="" /></figure>
              </div>
            </div>
            </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="visa-block-two">
                        <div className="inner-box">
                            <div className="static-content">
                                <div className="content-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-6.png" alt="" /></div>
                                    <h3><Link href="visa-details-3">Residence Visa</Link></h3>
                                    <p>Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet magna suscipit, fermentum.</p>
                                    <div className="link-box">
                                        <Link href="visa-details-3">Read More</Link>
                                    </div>
                                </div>
                                <figure className="image-box"><img src="assets/images/resource/visa-5.jpg" alt="" /></figure>
                            </div>
                            <div className="overlay-content">
                                <div className="content-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-6.png" alt="" /></div>
                                    <h3><Link href="visa-details-3">Residence Visa</Link></h3>
                                    <div className="link-box">
                                        <Link href="visa-details-3">Read More</Link>
                                    </div>
                                </div>
                                <figure className="image-box"><img src="assets/images/resource/visa-9.jpg" alt="" /></figure>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="visa-block-two">
                        <div className="inner-box">
                            <div className="static-content">
                                <div className="content-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-7.png" alt="" /></div>
                                    <h3><Link href="visa-details">Business Visa</Link></h3>
                                    <p>Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet magna suscipit, fermentum.</p>
                                    <div className="link-box">
                                        <Link href="visa-details">Read More</Link>
                                    </div>
                                </div>
                                <figure className="image-box"><img src="assets/images/resource/visa-6.jpg" alt="" /></figure>
                            </div>
                            <div className="overlay-content">
                                <div className="content-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-7.png" alt="" /></div>
                                    <h3><Link href="visa-details">Business Visa</Link></h3>
                                    <div className="link-box">
                                        <Link href="visa-details">Read More</Link>
                                    </div>
                                </div>
                                <figure className="image-box"><img src="assets/images/resource/visa-10.jpg" alt="" /></figure>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="visa-block-two">
                        <div className="inner-box">
                            <div className="static-content">
                                <div className="content-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-8.png" alt="" /></div>
                                    <h3><Link href="visa-details-6">Tourist Visa</Link></h3>
                                    <p>Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet magna suscipit, fermentum.</p>
                                    <div className="link-box">
                                        <Link href="visa-details-6">Read More</Link>
                                    </div>
                                </div>
                                <figure className="image-box"><img src="assets/images/resource/visa-7.jpg" alt="" /></figure>
                            </div>
                            <div className="overlay-content">
                                <div className="content-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-8.png" alt="" /></div>
                                    <h3><Link href="visa-details-6">Tourist Visa</Link></h3>
                                    <div className="link-box">
                                        <Link href="visa-details-6">Read More</Link>
                                    </div>
                                </div>
                                <figure className="image-box"><img src="assets/images/resource/visa-11.jpg" alt="" /></figure>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
