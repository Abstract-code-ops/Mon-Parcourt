'use client'
import Link from "next/link";
import Layout from "@/components/layout/Layout"
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import ContactExp from "@/components/elements/contactExp";

export default function Home() {
    const { t } = useTranslation('countries')
    const common = 'details.common'
    const pageKey = 'details.pages.germany'
  const [activeIndex, setActiveIndex] = useState(1)
  const handleOnClick = (index) => {
      setActiveIndex(index)
  }

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle={t(`${pageKey}.breadcrumbTitle`)} bgImage="url(assets/images/background/countries-breadcrumb.jpg)">
                {/* countries section */}
                <section className="countries-details p_relative">
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                        <div className="countries-sidebar default-sidebar">
                            <div className="sidebar-widget category-widget">
                                <ul className="category-list clearfix">
                                    <li><Link href="countries-details">{t(`${common}.sidebar.unitedStates`)}</Link></li>
                                    <li><Link href="countries-details-2">{t(`${common}.sidebar.luxembourg`)}</Link></li>
                                    <li><Link href="countries-details-3">{t(`${common}.sidebar.canada`)}</Link></li>
                                    <li><Link href="countries-details-4">{t(`${common}.sidebar.china`)}</Link></li>
                                    <li><Link href="countries-details-5" className="current">{t(`${common}.sidebar.germany`)}</Link></li>
                                    <li><Link href="countries-details-6">{t(`${common}.sidebar.australia`)}</Link></li>
                                    <li><Link href="countries-details-7">{t(`${common}.sidebar.spain`)}</Link></li>
                                    <li><Link href="countries-details-8">{t(`${common}.sidebar.turkey`)}</Link></li>
                                    <li><Link href="countries-details-12">{t(`${common}.sidebar.northCyprus`)}</Link></li>
                                    <li><Link href="countries-details-9">{t(`${common}.sidebar.lithuania`)}</Link></li>
                                    <li><Link href="countries-details-10">{t(`${common}.sidebar.france`)}</Link></li>
                                    <li><Link href="countries-details-11">{t(`${common}.sidebar.uae`)}</Link></li>
                                </ul>
                            </div>
                            <div className="sidebar-widget travel-widget">
                                <div className="widget-content p_relative">
                                    <figure className="image-box"><img src="assets/images/resource/travel-1.jpg" alt="" /></figure>
                                    <div className="content-box">
                                        <h3>{t(`${common}.widgets.travelPass.title`)}</h3>
                                        <ul className="list-item clearfix">
                                            {Array.isArray(t(`${common}.widgets.travelPass.list`, { returnObjects: true })) ? (
                                                t(`${common}.widgets.travelPass.list`, { returnObjects: true }).map((item, idx) => (
                                                    <li key={idx}>{item}</li>
                                                ))
                                            ) : <h2>NOT AVAILABLE</h2>}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="sidebar-widget download-widget">
                                <div className="widget-content">
                                    <div className="icon-shape"><img src="assets/images/icons/icon-15.png" alt="" /></div>
                                    <h3>{t(`${common}.widgets.download.title`)}</h3>
                                    <ul className="download-list clearfix">
                                        <li>
                                            <Link href="https://videx.diplo.de/" target="_blank">
                                                <i className="icon-50"></i>
                                                <p>{t(`${pageKey}.downloads.link1.label`)}</p>
                                                <span>{t(`${pageKey}.downloads.link1.meta`)}</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://videx.diplo.de/" target="_blank">
                                                <i className="icon-50"></i>
                                                <p>{t(`${pageKey}.downloads.link2.label`)}</p>
                                                <span>{t(`${pageKey}.downloads.link2.meta`)}</span>
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
                                            <a className={activeIndex == 1 ? "nav-link active" : "nav-link"}><h5><i className="icon-52"></i>{t(`${common}.tabs.working`)}</h5></a>
                                        </li>
                                        <li className="nav-item" onClick={() => handleOnClick(2)}>
                                            <a className={activeIndex == 2 ? "nav-link active" : "nav-link"}><h5><i className="icon-53"></i>{t(`${common}.tabs.business`)}</h5></a>
                                        </li>
                                        <li className="nav-item" onClick={() => handleOnClick(3)}>
                                            <a className={activeIndex == 3 ? "nav-link active" : "nav-link"}><h5><i className="icon-54"></i>{t(`${common}.tabs.education`)}</h5></a>
                                        </li>
                                        <li className="nav-item" onClick={() => handleOnClick(4)}>
                                            <a className={activeIndex == 4 ? "nav-link active" : "nav-link"}><h5><i className="icon-55"></i>{t(`${common}.tabs.tourist`)}</h5></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="tab-content wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">

                                    <div className={activeIndex == 1 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                                        <div className="content-box">
                                            <div className="content-one mb_30">
                                                <div className="upper-text mb_30">
                                                    <h2>{t(`${pageKey}.working.title`)}</h2>
                                                    <p>{t(`${pageKey}.working.p1`)}</p>
                                                </div>
                                                <div className="two-column mb_30">
                                                    <div className="row clearfix">
                                                        <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                                            <figure className="image-box"><img src="assets/images/resource/countries-15.jpg" alt="" /></figure>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-sm-12 text-column">
                                                            <div className="text">
                                                                    <h3>{t(`${pageKey}.working.overviewTitle`)}</h3>
                                                                    <p>{t(`${pageKey}.working.p2`)}</p>
                                                                </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text">
                                                    <h5><br/><strong>{t(`${pageKey}.working.preChecklist`)}</strong></h5>
                                                </div>
                                            </div>
                                            <div className="content-three mt_50">
                                                <div className="row clearfix">
                                                    <div className="col-lg-5 col-md-6 col-sm-12 list-column">
                                                        <ul className="list-item clearfix mr_40">
                                                            {Array.isArray(t(`${pageKey}.working.checklist`, { returnObjects: true })) ? (
                                                                t(`${pageKey}.working.checklist`, { returnObjects: true }).map((item, idx) => (
                                                                    <li key={idx}><h5>{item}</h5></li>
                                                                ))
                                                            ) : <h2>NOT AVAILABLE</h2>}
                                                        </ul>
                                                    </div>
                                                    <div className="col-lg-7 col-md-6 col-sm-12 inner-column">
                                                        <div className="inner-box">
                                                            <h3>{t(`${common}.consultation.title`)}</h3>
                                                            <p>{t(`${common}.consultation.text`)}</p>
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
                                                    <h2>{t(`${pageKey}.business.title`)}</h2>
                                                    <p>{t(`${pageKey}.business.p1`)}</p>
                                                </div>
                                                <div className="two-column mb_30">
                                                    <div className="row clearfix">
                                                        <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                                            <figure className="image-box"><img src="assets/images/resource/countries-15.jpg" alt="" /></figure>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-sm-12 text-column">
                                                            <div className="text">
                                                                <h3>{t(`${pageKey}.business.overviewTitle`)}</h3>
                                                                <p>{t(`${pageKey}.business.p2`)}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text">
                                                    <h5><br/><strong>{t(`${pageKey}.business.preChecklist`)}</strong></h5>
                                                </div>
                                            </div>
                                            <div className="content-three">
                                                <div className="row clearfix">
                                                    <div className="col-lg-5 col-md-6 col-sm-12 list-column">
                                                        <ul className="list-item clearfix mr_40">
                                                            {Array.isArray(t(`${pageKey}.business.checklist`, { returnObjects: true })) ? (
                                                                t(`${pageKey}.business.checklist`, { returnObjects: true }).map((item, idx) => (
                                                                    <li key={idx}><h5>{item}</h5></li>
                                                                ))
                                                            ) : <h2>NOT AVAILABLE</h2>}
                                                        </ul>
                                                    </div>
                                                    <div className="col-lg-7 col-md-6 col-sm-12 inner-column">
                                                        <div className="inner-box">
                                                            <h3>{t(`${common}.consultation.title`)}</h3>
                                                            <p>{t(`${common}.consultation.text`)}</p>
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
                                                    <h2>{t(`${pageKey}.education.title`)}</h2>
                                                    <p>{t(`${pageKey}.education.p1`)}</p>
                                                </div>
                                                <div className="two-column mb_30">
                                                    <div className="row clearfix">
                                                        <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                                            <figure className="image-box"><img src="assets/images/resource/countries-15.jpg" alt="" /></figure>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-sm-12 text-column">
                                                            <div className="text">
                                                                <h3>{t(`${pageKey}.education.overviewTitle`)}</h3>
                                                                <p>{t(`${pageKey}.education.p2`)}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text">
                                                    <h5><br/><strong>{t(`${pageKey}.education.preChecklist`)}</strong></h5>
                                                </div>
                                            </div>
                                            <div className="content-three">
                                                <div className="row clearfix">
                                                    <div className="col-lg-5 col-md-6 col-sm-12 list-column">
                                                        <ul className="list-item clearfix mr_40">
                                                            {Array.isArray(t(`${pageKey}.education.checklist`, { returnObjects: true })) ? (
                                                                t(`${pageKey}.education.checklist`, { returnObjects: true }).map((item, idx) => (
                                                                    <li key={idx}><h5>{item}</h5></li>
                                                                ))
                                                            ) : <h2>NOT AVAILABLE</h2>}
                                                        </ul>
                                                    </div>
                                                    <div className="col-lg-7 col-md-6 col-sm-12 inner-column">
                                                        <div className="inner-box">
                                                            <h3>{t(`${common}.consultation.title`)}</h3>
                                                            <p>{t(`${common}.consultation.text`)}</p>
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
                                                    <h2>{t(`${pageKey}.tourist.title`)}</h2>
                                                    <p>{t(`${pageKey}.tourist.p1`)}</p>
                                                </div>
                                                <div className="two-column mb_30">
                                                    <div className="row clearfix">
                                                        <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                                            <figure className="image-box"><img src="assets/images/resource/countries-15.jpg" alt="" /></figure>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-sm-12 text-column">
                                                            <div className="text">
                                                                <h3>{t(`${pageKey}.tourist.overviewTitle`)}</h3>
                                                                <p>{t(`${pageKey}.tourist.p2`)}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text">
                                                    <h5><br/><strong>{t(`${pageKey}.tourist.preChecklist`)}</strong></h5>
                                                </div>
                                            </div>
                                            <div className="content-three">
                                                <div className="row clearfix">
                                                    <div className="col-lg-5 col-md-6 col-sm-12 list-column">
                                                        <ul className="list-item clearfix mr_40">
                                                            {Array.isArray(t(`${pageKey}.tourist.checklist`, { returnObjects: true })) ? (
                                                                t(`${pageKey}.tourist.checklist`, { returnObjects: true }).map((item, idx) => (
                                                                    <li key={idx}><h5>{item}</h5></li>
                                                                ))
                                                            ) : <h2>NOT AVAILABLE</h2>}
                                                        </ul>
                                                    </div>
                                                    <div className="col-lg-7 col-md-6 col-sm-12 inner-column">
                                                        <div className="inner-box">
                                                            <h3>{t(`${common}.consultation.title`)}</h3>
                                                            <p>{t(`${common}.consultation.text`)}</p>
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
