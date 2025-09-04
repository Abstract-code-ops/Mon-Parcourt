'use client'
import Link from "next/link";
import Layout from "@/components/layout/Layout"

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import ContactExp from "@/components/elements/contactExp";


export default function Home() {
    const { t } = useTranslation('countries')
  const [activeIndex, setActiveIndex] = useState(1)
  const handleOnClick = (index) => {
      setActiveIndex(index)
  }
    
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle={t('details.pages.turkey.breadcrumbTitle')} bgImage="url(assets/images/background/countries-breadcrumb.jpg)">
                {/* countries section */}
                <section className="countries-details p_relative">
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                        <div className="countries-sidebar default-sidebar">
                            <div className="sidebar-widget category-widget">
                                <ul className="category-list clearfix">
                                    <li><Link href="countries-details">{t('details.common.sidebar.unitedStates')}</Link></li>
                                    <li><Link href="countries-details-2">{t('details.common.sidebar.luxembourg')}</Link></li>
                                    <li><Link href="countries-details-3">{t('details.common.sidebar.canada')}</Link></li>
                                    <li><Link href="countries-details-4">{t('details.common.sidebar.china')}</Link></li>
                                    <li><Link href="countries-details-5">{t('details.common.sidebar.germany')}</Link></li>
                                    <li><Link href="countries-details-6">{t('details.common.sidebar.australia')}</Link></li>
                                    <li><Link href="countries-details-7">{t('details.common.sidebar.spain')}</Link></li>
                                    <li><Link href="countries-details-8" className="current">{t('details.common.sidebar.turkey')}</Link></li>
                                    <li><Link href="countries-details-12">{t('details.common.sidebar.northCyprus')}</Link></li>
                                    <li><Link href="countries-details-9">{t('details.common.sidebar.lithuania')}</Link></li>
                                    <li><Link href="countries-details-10">{t('details.common.sidebar.france')}</Link></li>
                                    <li><Link href="countries-details-11">{t('details.common.sidebar.uae')}</Link></li>
                                </ul>
                            </div>
                            <div className="sidebar-widget travel-widget">
                                <div className="widget-content p_relative">
                                    <figure className="image-box"><img src="assets/images/resource/travel-1.jpg" alt="" /></figure>
                                    <div className="content-box">
                                        <h3>{t('details.common.widgets.travelPass.title')}</h3>
                                        <ul className="list-item clearfix">
                                            <li>{t('details.common.widgets.travelPass.list.0')}</li>
                                            <li>{t('details.common.widgets.travelPass.list.1')}</li>
                                            <li>{t('details.common.widgets.travelPass.list.2')}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="sidebar-widget download-widget">
                                <div className="widget-content">
                                    <div className="icon-shape"><img src="assets/images/icons/icon-15.png" alt="" /></div>
                                    <h3>{t('details.common.widgets.download.title')}</h3>
                                    <ul className="download-list clearfix">
                                        <li>
                                            <Link href="https://www.konsolosluk.gov.tr/Visa" target="_blank">
                                                <i className="icon-50"></i>
                                                <p>{t('details.pages.turkey.downloads.link1.label')}</p>
                                                <span>{t('details.pages.turkey.downloads.link1.meta')}</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://www.evisa.gov.tr/en/" target="_blank">
                                                <i className="icon-50"></i>
                                                <p>{t('details.pages.turkey.downloads.link2.label')}</p>
                                                <span>{t('details.pages.turkey.downloads.link2.meta')}</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                        <div className="countries-details-content">
                            <div className="tabs-box">
                                <div className="tab-btn-box pb_60">
                                    <ul className="tab-btns tab-buttons clearfix" role="tablist">
                                        <li className="nav-link" onClick={() => handleOnClick(1)}>
                                            <a className={activeIndex == 1 ? "nav-link active" : "nav-link"}><h5><i className="icon-52"></i>{t('details.common.tabs.working')}</h5></a>
                                        </li>
                                        <li className="nav-item" onClick={() => handleOnClick(2)}>
                                            <a className={activeIndex == 2 ? "nav-link active" : "nav-link"}><h5><i className="icon-53"></i>{t('details.common.tabs.business')}</h5></a>
                                        </li>
                                        <li className="nav-item" onClick={() => handleOnClick(3)}>
                                            <a className={activeIndex == 3 ? "nav-link active" : "nav-link"}><h5><i className="icon-54"></i>{t('details.common.tabs.education')}</h5></a>
                                        </li>
                                        <li className="nav-item" onClick={() => handleOnClick(4)}>
                                            <a className={activeIndex == 4 ? "nav-link active" : "nav-link"}><h5><i className="icon-55"></i>{t('details.common.tabs.tourist')}</h5></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="tab-content wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">

                                    <div className={activeIndex == 1 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                                        <div className="content-box">
                                            <div className="content-one mb_30">
                                                <div className="upper-text mb_30">
                                                    <h2>{t('details.pages.turkey.working.title')}</h2>
                                                    <p>{t('details.pages.turkey.working.p1')}</p>
                                                </div>
                                                <div className="two-column mb_30">
                                                    <div className="row clearfix">
                                                        <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                                            <figure className="image-box"><img src="assets/images/resource/turkey-custom.jpg" alt="" /></figure>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-sm-12 text-column">
                                                            <div className="text">
                                                                    <h3>{t('details.pages.turkey.working.overviewTitle')}</h3>
                                                                    <p>{t('details.pages.turkey.working.p2')}</p>
                                                                </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text">
                                                    <h5><br/><strong>{t('details.pages.turkey.working.preChecklist')}</strong></h5>
                                                </div>
                                            </div>
                                            <div className="content-three mt_50">
                                                <div className="row clearfix">
                                                    <div className="col-lg-5 col-md-6 col-sm-12 list-column">
                                                        <ul className="list-item clearfix mr_40">
                                                            {Array.isArray(t('details.pages.turkey.working.checklist', { returnObjects: true })) ? (
                                                                t('details.pages.turkey.working.checklist', { returnObjects: true }).map((item, idx) => (
                                                                    <li key={`work-item-${idx}`}><h5>{item}</h5></li>
                                                                ))
                                                            ) : <h2>NOT AVAILABLE</h2>}
                                                        </ul>
                                                    </div>
                                                    <div className="col-lg-7 col-md-6 col-sm-12 inner-column">
                                                        <div className="inner-box">
                                                            <h3>{t('details.common.consultation.title')}</h3>
                                                            <p>{t('details.common.consultation.text')}</p>
                                                            <figure className="image-box"><img src="assets/images/resource/custom-consultation.jpg" alt="" /></figure>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="content-three mt_100">
                                                    <div className="row clearfix">
                                                        <ContactExp/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={activeIndex == 2 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                                        <div className="content-box">
                                            <div className="content-one mb_30">
                                                <div className="upper-text mb_30">
                                                    <h2>{t('details.pages.turkey.business.title')}</h2>
                                                    <p>{t('details.pages.turkey.business.p1')}</p>
                                                </div>
                                                <div className="two-column mb_30">
                                                    <div className="row clearfix">
                                                        <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                                            <figure className="image-box"><img src="assets/images/resource/turkey-custom.jpg" alt="" /></figure>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-sm-12 text-column">
                                                            <div className="text">
                                                                <h3>{t('details.pages.turkey.business.overviewTitle')}</h3>
                                                                <p>{t('details.pages.turkey.business.p2')}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text">
                                                    <h5><br/><strong>{t('details.pages.turkey.business.preChecklist')}</strong></h5>
                                                </div>
                                            </div>
                                            <div className="content-three">
                                                <div className="row clearfix">
                                                    <div className="col-lg-5 col-md-6 col-sm-12 list-column">
                                                        <ul className="list-item clearfix mr_40">
                                                            {Array.isArray(t('details.pages.turkey.business.checklist', { returnObjects: true })) ? (
                                                                t('details.pages.turkey.business.checklist', { returnObjects: true }).map((item, idx) => (
                                                                    <li key={`business-item-${idx}`}><h5>{item}</h5></li>
                                                                ))
                                                            ) : <h2>NOT AVAILABLE</h2>}
                                                        </ul>
                                                    </div>
                                                    <div className="col-lg-7 col-md-6 col-sm-12 inner-column">
                                                        <div className="inner-box">
                                                            <h3>{t('details.common.consultation.title')}</h3>
                                                            <p>{t('details.common.consultation.text')}</p>
                                                            <figure className="image-box"><img src="assets/images/resource/custom-consultation.jpg" alt="" /></figure>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="content-three mt_100">
                                                    <div className="row clearfix">
                                                        <ContactExp/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={activeIndex == 3 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                                        <div className="content-box">
                                            <div className="content-one mb_30">
                                                <div className="upper-text mb_30">
                                                    <h2>{t('details.pages.turkey.education.title')}</h2>
                                                    <p>{t('details.pages.turkey.education.p1')}</p>
                                                </div>
                                                <div className="two-column mb_30">
                                                    <div className="row clearfix">
                                                        <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                                            <figure className="image-box"><img src="assets/images/resource/turkey-custom.jpg" alt="" /></figure>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-sm-12 text-column">
                                                            <div className="text">
                                                                <h3>{t('details.pages.turkey.education.overviewTitle')}</h3>
                                                                <p>{t('details.pages.turkey.education.p2')}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text">
                                                    <h5><br/><strong>{t('details.pages.turkey.education.preChecklist')}</strong></h5>
                                                </div>
                                            </div>
                                            <div className="content-three">
                                                <div className="row clearfix">
                                                    <div className="col-lg-5 col-md-6 col-sm-12 list-column">
                                                        <ul className="list-item clearfix mr_40">
                                                            {Array.isArray(t('details.pages.turkey.education.checklist', { returnObjects: true })) ? (
                                                                t('details.pages.turkey.education.checklist', { returnObjects: true }).map((item, idx) => (
                                                                    <li key={`edu-item-${idx}`}><h5>{item}</h5></li>
                                                                ))
                                                            ) : <h2>NOT AVAILABLE</h2>}
                                                        </ul>
                                                    </div>
                                                    <div className="col-lg-7 col-md-6 col-sm-12 inner-column">
                                                        <div className="inner-box">
                                                            <h3>{t('details.common.consultation.title')}</h3>
                                                            <p>{t('details.common.consultation.text')}</p>
                                                            <figure className="image-box"><img src="assets/images/resource/custom-consultation.jpg" alt="" /></figure>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="content-three mt_100">
                                                    <div className="row clearfix">
                                                        <ContactExp/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={activeIndex == 4 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                                        <div className="content-box">
                                            <div className="content-one mb_30">
                                                <div className="upper-text mb_30">
                                                    <h2>{t('details.pages.turkey.tourist.title')}</h2>
                                                    <p>{t('details.pages.turkey.tourist.p1')}</p>
                                                </div>
                                                <div className="two-column mb_30">
                                                    <div className="row clearfix">
                                                        <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                                            <figure className="image-box"><img src="assets/images/resource/turkey-custom.jpg" alt="" /></figure>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-sm-12 text-column">
                                                            <div className="text">
                                                                <h3>{t('details.pages.turkey.tourist.overviewTitle')}</h3>
                                                                <p>{t('details.pages.turkey.tourist.p2')}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text">
                                                    <h5><br/><strong>{t('details.pages.turkey.tourist.preChecklist')}</strong></h5>
                                                </div>
                                            </div>
                                            <div className="content-three">
                                                <div className="row clearfix">
                                                    <div className="col-lg-5 col-md-6 col-sm-12 list-column">
                                                        <ul className="list-item clearfix mr_40">
                                                            {Array.isArray(t('details.pages.turkey.tourist.checklist', { returnObjects: true })) ? (
                                                                t('details.pages.turkey.tourist.checklist', { returnObjects: true }).map((item, idx) => (
                                                                    <li key={`tourist-item-${idx}`}><h5>{item}</h5></li>
                                                                ))
                                                            ) : <h2>NOT AVAILABLE</h2>}
                                                        </ul>
                                                    </div>
                                                    <div className="col-lg-7 col-md-6 col-sm-12 inner-column">
                                                        <div className="inner-box">
                                                            <h3>{t('details.common.consultation.title')}</h3>
                                                            <p>{t('details.common.consultation.text')}</p>
                                                            <figure className="image-box"><img src="assets/images/resource/custom-consultation.jpg" alt="" /></figure>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="content-three mt_100">
                                                    <div className="row clearfix">
                                                        <ContactExp />
                                                    </div>
                                                </div>
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
                 {/*countries details end*/}
                                

                            </Layout>
        </>
    )
}
