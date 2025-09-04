'use client'
import Link from "next/link";
import TestmonialSlider from '@/components/slider/TestmonialSlider';
import Layout from "@/components/layout/Layout"
import { useTranslation } from 'react-i18next'


export default function Home() {
    const { t } = useTranslation('coaching');

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle={t('breadcrumbTitle')} bgImage="url(assets/images/background/coaching-breadcrumb.jpg)">
                {/* dream-section */}
                <section className="dream-style-three p_relative">
                <div className="auto-container">
                    <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div className="content_block_two">
                        <div className="content-box p_relative d_block">
                            <div className="sec-title mb_20">
                            <span className="sub-title">{t('dream.sectionSubtitle')}</span>
                            <h2>{t('dream.sectionTitle')}</h2>
                            </div>
                            <div className="text mb_25">
                            <p>{t('dream.paragraph')}</p>
                            </div>
                            {/* <ul className="list-item p_relative mb_40 clearfix">
                            <li><Link href="#" style={{cursor: "default"}}>{t('dream.list.1')} <i className="icon-9"></i></Link></li>
                            <li><Link href="#" style={{cursor: "default"}}>{t('dream.list.2')} <i className="icon-9"></i></Link></li>
                            <li><Link href="#" style={{cursor: "default"}}>{t('dream.list.3')} <i className="icon-9"></i></Link></li>
                            </ul> */}
                            <div className="btn-box">
                            <Link href="coaching" className="theme-btn"><span>{t('dream.moreDetails')}</span></Link>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                        <div className="image-box pl_3">
                        <figure className="image"><img src="assets/images/resource/dream-1.jpg" alt="" /></figure>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
                {/* dream-section end */}
                {/* coaching-section */}
                <section className="coaching-section pb_150">
                    <div className="auto-container">
                        <div className="title-box mb_70">
                        <div className="sec-title">
                            <span className="sub-title">{t('coaching.howWeHelp')}</span>
                            <h2>{t('coaching.mainTitle')}</h2>
                        </div>
                        <div className="text">
                            <p>{t('coaching.mainText')}</p>
                        </div>
                        </div>
                        <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 coaching-block">
                            <div className="coaching-block-one">
                            <div className="inner-box">
                                <div className="image-box clearfix">
                                <figure className="image"><img src="assets/images/resource/coaching-1.jpg" alt="" /></figure>
                                <figure className="image"><img src="assets/images/resource/coaching-2.jpg" alt="" /></figure>
                                </div>
                                <div className="lower-content">
                                <h3><Link href="coaching-details-3">{t('cards.tofel.title')}</Link></h3>
                                <p>{t('cards.tofel.descShort').slice(0,110) + ' ...'}</p>
                                <div className="link-box">
                                    <Link href="coaching-details-3"><span>Read More</span></Link>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 coaching-block">
                            <div className="coaching-block-one">
                            <div className="inner-box">
                                <div className="image-box clearfix">
                                <figure className="image"><img src="assets/images/resource/coaching-3.jpg" alt="" /></figure>
                                <figure className="image"><img src="assets/images/resource/coaching-4.jpg" alt="" /></figure>
                                </div>
                                <div className="lower-content">
                                <h3><Link href="coaching-details-2">{t('cards.pte.title')}</Link></h3>
                                <p>{t('cards.pte.descShort').slice(0, 110) + ' ...'}</p>
                                <div className="link-box">
                                    <Link href="coaching-details-2"><span>Read More</span></Link>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 coaching-block">
                            <div className="coaching-block-one">
                            <div className="inner-box">
                                <div className="image-box clearfix">
                                <figure className="image"><img src="assets/images/resource/coaching-5.jpg" alt="" /></figure>
                                <figure className="image"><img src="assets/images/resource/coaching-6.jpg" alt="" /></figure>
                                </div>
                                <div className="lower-content">
                                <h3><Link href="coaching-details-4">{t('cards.daf.title')}</Link></h3>
                                <p>{t('cards.daf.descShort').slice(0, 110) + ' ...'}</p>
                                <div className="link-box">
                                    <Link href="coaching-details"><span>Read More</span></Link>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>
                    {/* coaching-section end */}
                {/* coaching-y*/}
                <section className="coaching-style-three">
                <div className="outer-container clearfix">
                    <div className="coaching-block-three">
                    <div className="inner-box">
                        <div className="static-content">
                        <figure className="image-box"><img src="assets/images/resource/coaching-7.jpg" alt="" /></figure>
                        <div className="content-box">
                            <div className="icon-box"><i className="icon-38"></i></div>
                            <h3><Link href="coaching-details">{t('grid.toefl.title')}</Link></h3>
                            <p>{t('grid.toefl.static')}</p>
                        </div>
                        </div>
                        <div className="overlay-content">
                        <figure className="image-box"><img src="assets/images/resource/coaching-7.jpg" alt="" /></figure>
                        <div className="content-box">
                            <div className="icon-box"><i className="icon-38"></i></div>
                            <h3><Link href="coaching-details">{t('grid.toefl.title')}</Link></h3>
                            <p>{t('grid.toefl.overlay')}</p>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="coaching-block-three">
                    <div className="inner-box">
                        <div className="static-content">
                        <figure className="image-box"><img src="assets/images/resource/coaching-8.jpg" alt="" /></figure>
                        <div className="content-box">
                            <div className="icon-box"><i className="icon-39"></i></div>
                            <h3><Link href="coaching-details-4">{t('grid.daf.title')}</Link></h3>
                            <p>{t('grid.daf.static')}</p>
                        </div>
                        </div>
                        <div className="overlay-content">
                        <figure className="image-box"><img src="assets/images/resource/coaching-8.jpg" alt="" /></figure>
                        <div className="content-box">
                            <div className="icon-box"><i className="icon-39"></i></div>
                            <h3><Link href="coaching-details-4">{t('grid.daf.title')}</Link></h3>
                            <p>{t('grid.daf.overlay')}</p>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="coaching-block-three">
                    <div className="inner-box">
                        <div className="static-content">
                        <figure className="image-box"><img src="assets/images/resource/coaching-10.jpg" alt="" /></figure>
                        <div className="content-box">
                            <div className="icon-box"><i className="icon-40"></i></div>
                            <h3><Link href="coaching-details-6">{t('grid.scholastic.title')}</Link></h3>
                            <p>{t('grid.scholastic.static')}</p>
                        </div>
                        </div>
                        <div className="overlay-content">
                        <figure className="image-box"><img src="assets/images/resource/coaching-10.jpg" alt="" /></figure>
                        <div className="content-box">
                            <div className="icon-box"><i className="icon-40"></i></div>
                            <h3><Link href="coaching-details-6">{t('grid.scholastic.title')}</Link></h3>
                            <p>{t('grid.scholastic.overlay')}</p>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="coaching-block-three">
                    <div className="inner-box">
                        <div className="static-content">
                        <figure className="image-box"><img src="assets/images/resource/coaching-9.jpg" alt="" /></figure>
                        <div className="content-box">
                            <div className="icon-box"><i className="icon-41"></i></div>
                            <h3><Link href="coaching-details-5">{t('grid.tcf.title')}</Link></h3>
                            <p>{t('grid.tcf.static')}</p>
                        </div>
                        </div>
                        <div className="overlay-content">
                        <figure className="image-box"><img src="assets/images/resource/coaching-9.jpg" alt="" /></figure>
                        <div className="content-box">
                            <div className="icon-box"><i className="icon-41"></i></div>
                            <h3><Link href="coaching-details-5">{t('grid.tcf.title')}</Link></h3>
                            <p>{t('grid.tcf.overlay')}</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
                            {/* coaching-y end */}
                    {/* testmonial*/}
                    <section className="testimonial-section p_relative centred">
    <div className="pattern-layer">
      <div className="pattern-1" style={{ backgroundImage: "url(assets/images/shape/shape-35.png)" }}></div>
      <div className="pattern-2" style={{ backgroundImage: "url(assets/images/shape/shape-36.png)" }}></div>
    </div>
    <div className="thumb-box">
      <div className="thumb thumb-1"><img src="assets/images/resource/thumb-1.png" alt="" /></div>
      <div className="thumb thumb-2"><img src="assets/images/resource/thumb-2.png" alt="" /></div>
      <div className="thumb thumb-3"><img src="assets/images/resource/thumb-3.png" alt="" /></div>
      <div className="thumb thumb-4"><img src="assets/images/resource/thumb-4.png" alt="" /></div>
    </div>
    <div className="auto-container">
                    <div className="content-box">
                        {/*Theme Carousel*/}
                        <TestmonialSlider />                        
                    </div>
            </div>
            </section>
                    {/*testmonial end*/}
                 

            </Layout>
        </>
    )
}


