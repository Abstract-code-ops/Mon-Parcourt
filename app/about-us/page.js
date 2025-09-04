'use client'
import Link from "next/link";
import Layout from "@/components/layout/Layout"
import PartnersSlider from "@/components/slider/partnersSlider";
// Import slick-carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ContactExp from "@/components/elements/contactExp";

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SuspensePreloader from "@/components/elements/SuspensePreloader";

export default function Home() {

  const { t } = useTranslation('about');

      const ProgressBar = ({ label, percent }) => (
      <div className="progress-box">
        <p>{label}</p>
        <div className="bar">
          <div className="bar-inner count-bar" style={{ width: `${percent}%` }}></div>
          <div className="count-text">{`${percent}%`}</div>
        </div>
      </div>
    );
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle={t('breadcrumbTitle')} bgImage="url(assets/images/background/page-title-4.jpg)">
                {/* about-section */}
              <section className="about-style-four p_relative mt_150">
                  <div className="pattern-layer">
                    <div className="pattern-1" style={{ backgroundImage: 'url(assets/images/shape/shape-59.png)' }}></div>
                    <div className="pattern-2" style={{ backgroundImage: 'url(assets/images/shape/shape-60.png)' }}></div>
                  </div>
                  <div className="auto-container">
                    <div className="row clearfix">
                      <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                        <div className="image_block_two">
                          <div className="image-box">
                            <div className="image-shape"></div>
                            <figure className="image image-1"><img src="assets/images/resource/about-6.jpg" alt="" /></figure>
                            <figure className="image image-2"><img src="assets/images/resource/about-7.jpg" alt="" /></figure>
                            <div className="text-box">
                              <h2>3 <span>+</span></h2>
                              <h3>{t('yearsExperience')}</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div className="content_block_seven">
                          <div className="content-box">
                            <div className="sec-title mb_30">
                              <span className="sub-title">{t('whoWeAre')}</span>
                              <h2>{t('leadingFirm')}</h2>
                            </div>
                            <div className="text mb_45">
                              <p>{t('aboutParagraph')}</p>
                            </div>
                            <div className="inner-box mb_45">
                              <div className="row clearfix">
                                <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                  <div className="single-item">
                                    <div className="icon-box"><img src="assets/images/icons/icon-13.png" alt="" /></div>
                                    <h5>{t('bullet.overseasEducation')}</h5>
                                  </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                  <div className="single-item">
                                    <div className="icon-box"><img src="assets/images/icons/icon-14.png" alt="" /></div>
                                    <h5>{t('bullet.topUniversities')}</h5>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="btn-box">
                              <Link href="visa" className="theme-btn btn-two"><span>{t('moreDetails')}</span></Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {/* about-section end */}
                {/* feature -section */}
                <section className="feature-section about-page alternat-3">
                  <div className="auto-container">
                    <div className="inner-container">
                      <div className="shape-2" style={{ backgroundImage: 'url(assets/images/shape/shape-41.png)' }}></div>
                      <div className="row clearfix">
                        <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                          <div className="feature-block-one">
                            <div className="inner-box">
                              <div className="icon-box"><i className="icon-17"></i></div>
                              <h3><Link href="visa">{t('feature.visaTitle')}</Link></h3>
                              <p>{t('feature.visaDesc')}</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                          <div className="feature-block-one">
                            <div className="inner-box">
                              <div className="icon-box"><i className="icon-18"></i></div>
                              <h3><Link href="coaching">{t('feature.coachingTitle')}</Link></h3>
                              <p>{t('feature.coachingDesc')}</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                          <div className="feature-block-one">
                            <div className="inner-box">
                              <div className="icon-box"><i className="icon-19"></i></div>
                              <h3><Link href="javascript:void(0)">{t('feature.immigrationTitle')}</Link></h3>
                              <p>{t('feature.immigrationDesc')}</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                          <div className="feature-block-one">
                            <div className="inner-box">
                              <div className="icon-box"><i className="icon-20"></i></div>
                              <h3><Link href="coaching-details">{t('feature.englishTrainingTitle')}</Link></h3>
                              <p>{t('feature.englishTrainingDesc')}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                    {/* feature-section end */}
                {/* country*/}
                  <section className="skills-style-two sec-pad">
                      <div className="auto-container">
                          <div className="sec-title centred mb_60">
                            <span className="sub-title">{t('countriesWeOffer')}</span>
                            <h2>{t('comprehensiveImmigration')} <br />{t('categories')}</h2>
                          </div>
                          <div className="tabs-box">
                              <div className="tab-content wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                  <div className={"tab-pane fadeInUp animated show active"}>
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-md-12 col-sm-12 image-block">
                                          <div className="image-box pl_120">
                                              <figure className="image">
                                                  <img src="assets/images/resource/skills-1.jpg" alt="" />
                                              </figure>
                                              <div
                                                  className="shape"
                                                  style={{ backgroundImage: 'url(assets/images/shape/shape-21.png)' }}
                                              >
                                              </div>
                                          </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                            <div className="content_block_five">
                                                <div className="content-box pr_120">
                                                    <div className="sec-title mb_30">
                                                        <span className="sub-title">{t('visaConsultation')}</span>
                                                        <h2>{t('competitivePrices')}</h2>
                                                    </div>
                                                    <div className="text mb_30">
                                                        <p>{t('percentagesNote')}</p>
                                                    </div>
                                                    <div className="progress-inner mb_65">
                                                        <div className="progress-box mb_25">
                                                          <ProgressBar label={t('progress.studentVisa')} percent={90} />
                                                        </div>
                                                      <div className="progress-box mb_25">
                                                          <ProgressBar label={t('progress.businessVisa')} percent={70} />
                                                      </div>
                                                    <div className="progress-box mb_25">
                                                    <ProgressBar label={t('progress.workingVisa')} percent={80} />
                                                    </div>
                                                    <div className="progress-box mb_25">
                                                    <ProgressBar label={t('progress.touristVisa')} percent={85} />
                                                    </div>
                                                    </div>
                                                    <div className="btn-box">
                                                        <Link href="visa" className="theme-btn btn-two"><span>{t('moreDetails')}</span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                      </div>
                                </div>
                              </div>
                          </div>
                      </div>
                  </section>
                {/* country end */}
                    {/* Country 1*/}
                    <section className="dream-style-two sec-pad p_relative mb_0">
                      <div className="outer-container clearfix">
                        <div className="bg-layer" style={{ backgroundImage: 'url(assets/images/background/dream-bg-3.jpg)' }}></div>
                        <div className="content-column">
                          <div className="pattern-layer">
                            <div className="pattern-1" style={{ backgroundImage: 'url(assets/images/shape/shape-51.png)' }}></div>
                            <div className="pattern-2" style={{ backgroundImage: 'url(assets/images/shape/shape-52.png)' }}></div>
                          </div>
                          <div className="content_block_two" style={{ position: 'relative' }}>
                            {/* top-left and top-right logos */}
                            <img src="assets/images/logo.png" alt="logo" style={{ position: 'absolute', top: '-70px', left: '10px', width: '80px', height: 'auto', zIndex: 5 }} />
                            <img src="assets/images/KFFP.png" alt="KFFP" style={{ position: 'absolute', top: '-50px', left: '100px', width: '80px', height: 'auto', zIndex: 5 }} />
                            <div className="content-box p_relative d_block">
                              <div className="sec-title light mb_20">
                                <span className="sub-title">{t('meetFounder')}</span>
                                <h2>{t('founderName')}</h2>
                              </div>
                              <div className="text mb_25">
                                <p>{t('founderParagraph1')}</p>
                              </div>
                              <div className="text mb_25">
                                <p>{t('founderParagraph2')}</p>
                              </div>
                              <div className="btn-box">
                                <a href="about-us" className="theme-btn"><span>{t('moreDetails')}</span></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    {/* country 1 end*/}
                    {/* clients-section */}
                    <section className="clients-section p_relative">
                          <div className="auto-container">
                            <div className="inner-box p_relative pt_90">
                              <div className="sec-title centred mb_50">
                                <span className="sub-title">{t('ourPartners')}</span>
                                <h2>{t('partnersHeadline')}</h2>
                              </div>
                              <PartnersSlider/>
                              <motion.div
                                className="sliding-arrow"
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 20, opacity: [0, 1, 0] }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: "linear",
                                  times: [0, 0.5, 1]
                                }}
                                aria-hidden="true"
                              >
                                <i className="fas fa-arrow-right"></i>
                              </motion.div>
                            </div>
                          </div>
                        </section>
                         {/* clients-section */}
                     {/* chooseus-section */}
                    <ContactExp map={true}/>
                {/* chooseus-section */}
                {/* team-section */}
                {/* team-section */}

            </Layout>
        </>
    )
}
