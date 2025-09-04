'use client'
import CountriesSlider from '@/components/slider/CountriesSlider'
import Link from "next/link";
import { useTranslation } from 'react-i18next';
import Layout from "@/components/layout/Layout"
import Countries from '@/components/sections/home2/Countries';


export default function Home() {

    const { t } = useTranslation('countriesGeneral');
    
    return (
        <>
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle={t('page.breadcrumbTitle')} bgImage="url(assets/images/background/countries-breadcrumb.jpg)">
                {/* countries section */}
                <section className="countries-style-four sec-pad">
                <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/shape/shape-48.png)' }}></div>
                <div className="auto-container">
                    <div className="sec-title centred mb_60">
            <span className="sub-title">{t('page.section1.subtitle')}</span>
            <h2 dangerouslySetInnerHTML={{ __html: t('page.section1.title_html') }} />
                    </div>
                    <div className="content-box">
                        {/*Theme Carousel*/}
                        <CountriesSlider />                        
                    </div>
                </div>
                </section>
                {/*countries details end*/}
                {/* countries section */}
                <section className="countries-style-three sec-pad">
                    <div className="pattern-layer">
                        <div className="pattern-1" style={{ backgroundImage: ' url(assets/images/shape/shape-33.png)' }}></div>
                        <div className="pattern-2" style={{ backgroundImage: ' url(assets/images/shape/shape-34.png)' }}></div>
                        <div className="pattern-3" style={{ backgroundImage: ' url(assets/images/shape/shape-35.png)' }}></div>
                    </div>  
                    <div className="auto-container">
                        <div className="title-inner mb_50">
                            <div className="sec-title">
                                <span className="sub-title">{t('page.section2.subtitle')}</span>
                                <h2>{t('page.section2.title')}</h2>
                            </div>
                            <div className="text">
                                <p>{t('page.section2.paragraph')} <a href='contact'>{t('page.section2.contactLinkText')}</a>.</p>
                            </div>
                        </div>
                        <div className="tabs-box">
                            <div className="tab-btn-box mb_50">
                                
                            </div>
                            <div className="tab-content wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                <div className="tab-pane fadeInUp animated show active">
                                    <div className="row clearfix">
                                        <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                                            <div className="countries-block-three">
                                                <div className="inner-box">
                                                    <div className="content-box">
                                                        <div className="title-box">
                                                            <div className="flag"><img src="assets/images/icons/flag-18.png" alt="" /></div>
                                                            <Link href="countries-details">{t('page.countries.usa.name')}</Link>
                                                        </div>
                                                        <p>{t('page.countries.usa.description')}</p>
                                                    </div>
                                                    <figure className="image-box"><img src="assets/images/resource/countries-1.png" alt="" /></figure>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                                            <div className="countries-block-three">
                                                <div className="inner-box">
                                                    <div className="content-box">
                                                        <div className="title-box">
                                                            <div className="flag"><img src="assets/images/icons/flag-6.png" alt="" /></div>
                                                            <Link href="countries-details-2">{t('page.countries.luxembourg.name')}</Link>
                                                        </div>
                                                        <p>{t('page.countries.luxembourg.description')}</p>
                                                    </div>
                                                    <figure className="image-box"><img src="assets/images/resource/countries-2.png" alt="" /></figure>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                                            <div className="countries-block-three">
                                                <div className="inner-box">
                                                    <div className="content-box">
                                                        <div className="title-box">
                                                            <div className="flag"><img src="assets/images/icons/flag-7.png" alt="" /></div>
                                                            <Link href="countries-details-3">{t('page.countries.canada.name')}</Link>
                                                        </div>
                                                        <p>{t('page.countries.canada.description')}</p>
                                                    </div>
                                                    <figure className="image-box"><img src="assets/images/resource/countries-3.png" alt="" /></figure>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                                            <div className="countries-block-three">
                                                <div className="inner-box">
                                                    <div className="content-box">
                                                        <div className="title-box">
                                                            <div className="flag"><img src="assets/images/icons/flag-8.png" alt="" /></div>
                                                            <Link href="countries-details-9">{t('page.countries.lithuania.name')}</Link>
                                                        </div>
                                                        <p>{t('page.countries.lithuania.description')}</p>
                                                    </div>
                                                    <figure className="image-box"><img src="assets/images/resource/countries-4.png" alt="" /></figure>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                                            <div className="countries-block-three">
                                                <div className="inner-box">
                                                    <div className="content-box">
                                                        <div className="title-box">
                                                            <div className="flag"><img src="assets/images/icons/flag-9.png" alt="" /></div>
                                                            <Link href="countries-details-5">{t('page.countries.germany.name')}</Link>
                                                        </div>
                                                        <p>{t('page.countries.germany.description')}</p>
                                                    </div>
                                                    <figure className="image-box"><img src="assets/images/resource/countries-5.png" alt="" /></figure>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                                            <div className="countries-block-three">
                                                <div className="inner-box">
                                                    <div className="content-box">
                                                        <div className="title-box">
                                                            <div className="flag"><img src="assets/images/icons/flag-10.png" alt="" /></div>
                                                            <Link href="countries-details-4">{t('page.countries.china.name')}</Link>
                                                        </div>
                                                        <p>{t('page.countries.china.description')}</p>
                                                    </div>
                                                    <figure className="image-box"><img src="assets/images/resource/countries-6.png" alt="" /></figure>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                                            <div className="countries-block-three">
                                                <div className="inner-box">
                                                    <div className="content-box">
                                                        <div className="title-box">
                                                            <div className="flag"><img src="assets/images/icons/flag-11.png" alt="" /></div>
                                                            <Link href="countries-details-6">{t('page.countries.australia.name')}</Link>
                                                        </div>
                                                        <p>{t('page.countries.australia.description')}</p>
                                                    </div>
                                                    <figure className="image-box"><img src="assets/images/resource/countries-7.png" alt="" /></figure>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                                            <div className="countries-block-three">
                                                <div className="inner-box">
                                                    <div className="content-box">
                                                        <div className="title-box">
                                                            <div className="flag"><img src="assets/images/icons/flag-12.png" alt="" /></div>
                                                            <Link href="countries-details-7">{t('page.countries.spain.name')}</Link>
                                                        </div>
                                                        <p>{t('page.countries.spain.description')}</p>
                                                    </div>
                                                    <figure className="image-box"><img src="assets/images/resource/countries-8.png" alt="" /></figure>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                                            <div className="countries-block-three">
                                                <div className="inner-box">
                                                    <div className="content-box">
                                                        <div className="title-box">
                                                            <div className="flag"><img src="assets/images/icons/flag-24.png" alt="" /></div>
                                                            <Link href="countries-details-8">{t('page.countries.turkey.name')}</Link>
                                                        </div>
                                                        <p>{t('page.countries.turkey.description')}</p>
                                                    </div>
                                                    <figure className="image-box"><img src="assets/images/resource/countries-9.png" alt="" /></figure>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                                            <div className="countries-block-three">
                                                <div className="inner-box">
                                                    <div className="content-box">
                                                        <div className="title-box">
                                                            <div className="flag"><img src="assets/images/icons/flag-28.jpg" alt="" /></div>
                                                            <Link href="countries-details-12">{t('page.countries.trnc.name')}</Link>
                                                        </div>
                                                        <p>{t('page.countries.trnc.description')}</p>
                                                    </div>
                                                    <figure className="image-box"><img src="assets/images/resource/trnc-potrait.jpg" alt="" /></figure>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                                            <div className="countries-block-three">
                                                <div className="inner-box">
                                                    <div className="content-box">
                                                        <div className="title-box">
                                                            <div className="flag"><img src="assets/images/icons/flag-26.png" alt="" /></div>
                                                            <Link href="countries-details-10">{t('page.countries.france.name')}</Link>
                                                        </div>
                                                        <p>{t('page.countries.france.description')}</p>
                                                    </div>
                                                    <figure className="image-box"><img src="assets/images/resource/countries-10.png" alt="" /></figure>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                                            <div className="countries-block-three">
                                                <div className="inner-box">
                                                    <div className="content-box">
                                                        <div className="title-box">
                                                            <div className="flag"><img src="assets/images/icons/flag-29.png" alt="" /></div>
                                                            <Link href="countries-details-11">{t('page.countries.uae.name')}</Link>
                                                        </div>
                                                        <p>{t('page.countries.uae.description')}</p>
                                                    </div>
                                                    <figure className="image-box"><img src="assets/images/resource/uae-potrait.jpg" alt="" /></figure>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                 </section>
                 {/*countries details end*/}
                {/* countries section */}
                <Countries title="COURSES WE OFFER SUPPORT" sec_title="Check our Courses out" />
                 {/*countries details end*/}
            </Layout>
        </>
    )
}


