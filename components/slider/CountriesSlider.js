'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
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
export default function CountriesSlider() {
  const { t } = useTranslation('countriesGeneral');
    return (
        <>
            <Swiper {...swiperOptions} className="four-item-carousel owl-carousel owl-theme owl-dots-none nav-style-one">
                <SwiperSlide className="slide-item">
                <div className="countries-block-four">
                  <div className="inner-box">
                    <div className="flag"><img src="assets/images/icons/flag-19.png" alt="" /></div>
          <h3><Link href="countries-details">{t('slider.usa.name')}</Link></h3>
          <p>{t('slider.usa.description')}</p>
          <div className="text">{t('slider.visaType')}</div>
          <span className="designation">{t('slider.usa.visas')}</span>
                  </div>
                </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="countries-block-four">
            <div className="inner-box">
              <div className="flag"><img src="assets/images/icons/flag-14.png" alt="" /></div>
        <h3><Link href="countries-details-2">{t('slider.luxembourg.name')}</Link></h3>
        <p>{t('slider.luxembourg.description')}</p>
        <div className="text">{t('slider.visaType')}</div>
        <span className="designation">{t('slider.luxembourg.visas')}</span>
            </div>
          </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="countries-block-four">
            <div className="inner-box">
              <div className="flag"><img src="assets/images/icons/flag-15.png" alt="" /></div>
        <h3><Link href="countries-details-3">{t('slider.canada.name')}</Link></h3>
        <p>{t('slider.canada.description')}</p>
        <div className="text">{t('slider.visaType')}</div>
        <span className="designation">{t('slider.canada.visas')}</span>
            </div>
          </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="countries-block-four">
            <div className="inner-box">
              <div className="flag"><img src="assets/images/icons/flag-20.png" alt="" /></div>
        <h3><Link href="countries-details-5">{t('slider.germany.name')}</Link></h3>
        <p>{t('slider.germany.description')}</p>
        <div className="text">{t('slider.visaType')}</div>
        <span className="designation">{t('slider.germany.visas')}</span>
            </div>
            </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="countries-block-four">
            <div className="inner-box">
              <div className="flag"><img src="assets/images/icons/flag-23.png" alt="" /></div>
        <h3><Link href="countries-details-7">{t('slider.spain.name')}</Link></h3>
        <p>{t('slider.spain.description')}</p>
        <div className="text">{t('slider.visaType')}</div>
        <span className="designation">{t('slider.spain.visas')}</span>
            </div>
          </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="countries-block-four">
            <div className="inner-box">
              <div className="flag"><img src="assets/images/icons/flag-25.png" alt="" /></div>
        <h3><Link href="countries-details-8">{t('slider.turkey.name')}</Link></h3>
        <p>{t('slider.turkey.description')}</p>
        <div className="text">{t('slider.visaType')}</div>
        <span className="designation">{t('slider.turkey.visas')}</span>
            </div>
          </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="countries-block-four">
            <div className="inner-box">
              <div className="flag"><img src="assets/images/icons/flag-22.png" alt="" /></div>
        <h3><Link href="countries-details-6">{t('slider.australia.name')}</Link></h3>
        <p>{t('slider.australia.description')}</p>
        <div className="text">{t('slider.visaType')}</div>
        <span className="designation">{t('slider.australia.visas')}</span>
            </div>
          </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="countries-block-four">
            <div className="inner-box">
              <div className="flag"><img src="assets/images/icons/flag-21.png" alt="" /></div>
        <h3><Link href="countries-details-4">{t('slider.china.name')}</Link></h3>
        <p>{t('slider.china.description')}</p>
        <div className="text">{t('slider.visaType')}</div>
        <span className="designation">{t('slider.china.visas')}</span>
            </div>
          </div>
                </SwiperSlide>
                <div className="owl-nav">
                        <button type="button" className="owl-prev h1p">
                        <span className="icon-10"></span>
                        </button>
                        <button type="button" className="owl-next h1n">
                        <span className="icon-11"></span>
                        </button>
                    </div>
            </Swiper>
        </>
    )
}
