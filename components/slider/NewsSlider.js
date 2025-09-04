'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
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
                <div className="news-block-two">
            <div className="inner-box clearfix">
              <div className="image-box"><Link href="blog-details"><img src="assets/images/news/news-4.jpg" alt="" /></Link></div>
              <div className="content-box">
                <ul className="post-info clearfix">
                  <li><i className="icon-27"></i><Link href="blog-details">By author</Link></li>
                  <li><i className="icon-28"></i>Feb 6, 2022 </li>
                </ul>
                <h3><Link href="blog-details">Unsatiable Entreaties May Collecting Power.</Link></h3>
                <p>Where did this incorrect belief that everyone dislikes praising happiness come from?</p>
                <div className="link-btn">
                  <Link href="blog-details"><span>Read More</span></Link>
                </div>
              </div>
            </div>
          </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="news-block-two">
                        <div className="inner-box clearfix">
                            <div className="image-box"><Link href="blog-details"><img src="assets/images/news/news-5.jpg" alt="" /></Link></div>
                            <div className="content-box">
                                <ul className="post-info clearfix">
                                    <li><i className="icon-27"></i><Link href="blog-details">By author</Link></li>
                                    <li><i className="icon-28"></i>Feb 7, 2022 </li>
                                </ul>
                                <h3><Link href="blog-details">Why You Should Plan Your 2022 Trip Abroad</Link></h3>
                                <p>Where did this incorrect belief that everyone dislikes praising happiness come from?</p>
                                <div className="link-btn">
                                    <Link href="blog-details"><span>Read More</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="news-block-two">
                        <div className="inner-box clearfix">
                            <div className="image-box"><Link href="blog-details"><img src="assets/images/news/news-6.jpg" alt="" /></Link></div>
                            <div className="content-box">
                                <ul className="post-info clearfix">
                                    <li><i className="icon-27"></i><Link href="blog-details">By author</Link></li>
                                    <li><i className="icon-28"></i>Feb 8, 2022 </li>
                                </ul>
                                <h3><Link href="blog-details">Going Digital Key to Small Business Success</Link></h3>
                                <p>Where did this incorrect belief that everyone dislikes praising happiness come from?</p>
                                <div className="link-btn">
                                    <Link href="blog-details"><span>Read More</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="news-block-two">
            <div className="inner-box clearfix">
              <div className="image-box"><Link href="blog-details"><img src="assets/images/news/news-4.jpg" alt="" /></Link></div>
              <div className="content-box">
                <ul className="post-info clearfix">
                  <li><i className="icon-27"></i><Link href="blog-details">By author</Link></li>
                  <li><i className="icon-28"></i>Feb 6, 2022 </li>
                </ul>
                <h3><Link href="blog-details">Unsatiable Entreaties May Collecting Power.</Link></h3>
                <p>Where did this incorrect belief that everyone dislikes praising happiness come from?</p>
                <div className="link-btn">
                  <Link href="blog-details"><span>Read More</span></Link>
                </div>
              </div>
            </div>
          </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="news-block-two">
                        <div className="inner-box clearfix">
                            <div className="image-box"><Link href="blog-details"><img src="assets/images/news/news-5.jpg" alt="" /></Link></div>
                            <div className="content-box">
                                <ul className="post-info clearfix">
                                    <li><i className="icon-27"></i><Link href="blog-details">By author</Link></li>
                                    <li><i className="icon-28"></i>Feb 7, 2022 </li>
                                </ul>
                                <h3><Link href="blog-details">Why You Should Plan Your 2022 Trip Abroad</Link></h3>
                                <p>Where did this incorrect belief that everyone dislikes praising happiness come from?</p>
                                <div className="link-btn">
                                    <Link href="blog-details"><span>Read More</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="news-block-two">
                        <div className="inner-box clearfix">
                            <div className="image-box"><Link href="blog-details"><img src="assets/images/news/news-6.jpg" alt="" /></Link></div>
                            <div className="content-box">
                                <ul className="post-info clearfix">
                                    <li><i className="icon-27"></i><Link href="blog-details">By author</Link></li>
                                    <li><i className="icon-28"></i>Feb 8, 2022 </li>
                                </ul>
                                <h3><Link href="blog-details">Going Digital Key to Small Business Success</Link></h3>
                                <p>Where did this incorrect belief that everyone dislikes praising happiness come from?</p>
                                <div className="link-btn">
                                    <Link href="blog-details"><span>Read More</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
