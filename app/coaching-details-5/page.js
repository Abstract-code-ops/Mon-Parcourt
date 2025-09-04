'use client'
import Link from "next/link";
import Layout from "@/components/layout/Layout"
import ExamCalendar from '@/components/elements/ExamCalendar';
import TestCenterMap from '@/components/elements/TestCenterMap';

import { useState } from 'react'
import { useTranslation } from 'react-i18next';
import ContactExp from "@/components/elements/contactExp";


export default function Home() {
    const { t } = useTranslation('coaching');
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }


    return (
        <>
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle={t('detailsTcf.breadcrumbTitle')} bgImage="url(/assets/images/background/coaching-breadcrumb.jpg)">
                {/* coaching details section */}
                <section className="coaching-details p_relative">
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                        <div className="coaching-sidebar default-sidebar">
                            <div className="sidebar-widget category-widget">
                                <ul className="category-list clearfix">
                    <li><Link href="coaching-details">{t('details.sidebar.categories.ielts')}</Link></li>
                    <li><Link href="coaching-details-2">{t('details.sidebar.categories.pte')}</Link></li>
                    <li><Link href="coaching-details-3">{t('details.sidebar.categories.toefl')}</Link></li>
                    <li><Link href="coaching-details-4">{t('details.sidebar.categories.daf')}</Link></li>
                    <li><Link href="coaching-details-5" className="current">{t('details.sidebar.categories.tcf')}</Link></li>
                    <li><Link href="coaching-details-6">{t('details.sidebar.categories.sat')}</Link></li>
                                </ul>
                            </div>
                            <div className="sidebar-widget travel-widget">
                                <div className="widget-content p_relative">
                                    <figure className="image-box"><img src="assets/images/resource/travel-1.jpg" alt="" /></figure>
                                    <div className="content-box">
                    <h3>{t('details.sidebar.travelPass.title')}</h3>
                                        <ul className="list-item clearfix">
                        <li>{t('details.sidebar.travelPass.items.applicationForm')}</li>
                        <li>{t('details.sidebar.travelPass.items.checklist')}</li>
                        <li>{t('details.sidebar.travelPass.items.guidelines')}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="sidebar-widget contact-widget">
                                <div className="widget-content">
                                    <ContactExp />
                                </div>
                            </div>
                            <div className="sidebar-widget calendar-widget">
                                <ExamCalendar
                                    month={10}
                                    year={2024}
                                    highlightDates={[4, 9]}
                                    examType="TCF"
                                    referenceLink="https://www.cavilam.com/en/tcf/"
                                    referenceText="TCF Official Information"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                        <div className="coaching-details-content">
                            <div className="upper-box mb_40">
                                <h2>{t('detailsTcf.header.title')}</h2>
                                <div className="text-box mb_40">
                                    <p>{t('detailsTcf.header.intro1')}</p>
                                    <ul className="clearfix">
                                        <li><Link href="javascript:void(0)" style={{cursor: 'default'}}><span>1</span>{t('details.header.list.immigrate')}</Link></li>
                                        <li><Link href="javascript:void(0)" style={{cursor: 'default'}}><span>2</span>{t('details.header.list.work')}</Link></li>
                                        <li><Link href="javascript:void(0)" style={{cursor: 'default'}}><span>3</span>{t('details.header.list.study')}</Link></li>
                                        <li><Link href="javascript:void(0)" style={{cursor: 'default'}}><span>4</span>{t('details.header.list.citizenship')}</Link></li>
                                    </ul>
                                </div>
                                <figure className="image-box"><img src="assets/images/resource/coaching-19.jpg" alt={t('detailsTcf.header.imageAlt')} /></figure>
                            </div>
                            <div className="tabs-box">
                                <div className="tab-btn-box mb_40">
                                    <ul className="tab-btns tab-buttons clearfix" role="tablist">
                                        <li className="nav-link" onClick={() => handleOnClick(1)}>
                                            <a className={activeIndex == 1 ? "nav-link active" : "nav-link"}><span>{t('details.tabs.education')}</span></a>
                                        </li>
                                        <li className="nav-item" onClick={() => handleOnClick(2)}>
                                            <a className={activeIndex == 2 ? "nav-link active" : "nav-link"}><span>{t('details.tabs.immigration')}</span></a>
                                        </li>
                                        <li className="nav-item" onClick={() => handleOnClick(3)}>
                                            <a className={activeIndex == 3 ? "nav-link active" : "nav-link"}><span>{t('details.tabs.scoring')}</span></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="tab-content wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div className={activeIndex == 1 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                                        <div className="content-box">
                                            <div className="content-one mb_40">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-7 col-md-6 col-sm-12 text-column">
                                                        <div className="text">
                                                            <h3>{t('detailsTcf.tab1.heading')}</h3>
                                                            <p>{t('detailsTcf.tab1.p1')}</p>
                                                            <p>{t('detailsTcf.tab1.p2')}</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-5 col-md-6 col-sm-12 image-column">
                                                        <figure className="image-box"><img src="assets/images/resource/coaching-12.jpg" alt="Students in front of the Sorbonne University in Paris" /></figure>
                                                    </div>
                                                </div>
                                                <div className="text mt_20">
                                                    <p>{t('detailsTcf.tab1.p3')}</p>
                                                </div>
                                            </div>
                                            <div className="content-two pb_30">
                                                <div className="row clearfix">
                                                    <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                        <div className="single-item">
                                                            <figure className="image-box"><img src="assets/images/resource/coaching-13.jpg" alt="A student listening to a French audio track with headphones" /></figure>
                                                            <div className="lower-content">
                                                                <div className="title-box">
                                                                    <div className="icon-box"><i className="icon-51"></i></div>
                                                                    <h3>{t('detailsTcf.tab1.card1.title')}</h3>
                                                                    <p>{t('detailsTcf.tab1.card1.subtitle')}</p>
                                                                </div>
                                                                <ul className="feature-list mb_40 clearfix">
                                                                    <li>
                                                                        <h5>{t('detailsTcf.tab1.card1.feature.listeningComprehension')}</h5>
                                                                        <span>{t('detailsTcf.tab1.card1.feature.listeningComprehension.desc')}</span>
                                                                    </li>
                                                                    <li>
                                                                        <h5>{t('detailsTcf.tab1.card1.feature.languageStructures')}</h5>
                                                                        <span>{t('detailsTcf.tab1.card1.feature.languageStructures.desc')}</span>
                                                                    </li>
                                                                    <li>
                                                                        <h5>{t('detailsTcf.tab1.card1.feature.readingComprehension')}</h5>
                                                                        <span>{t('detailsTcf.tab1.card1.feature.readingComprehension.desc')}</span>
                                                                    </li>
                                                                </ul>
                                                                <div className="btn-box">
                                                                    <Link href="https://www.france-education-international.fr/test/tcf-tout-public" target="_blank"><span className="price">{t('detailsTcf.tab1.card1.button.learnMore')}</span><span className="text">{t('detailsTcf.tab1.card1.button.tcfToutPublic')}</span></Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                        <div className="single-item">
                                                            <figure className="image-box"><img src="assets/images/resource/coaching-14.jpg" alt="A one-on-one French speaking test with an examiner" /></figure>
                                                            <div className="lower-content">
                                                                <div className="title-box">
                                                                    <div className="icon-box"><i className="icon-51"></i></div>
                                                                    <h3>{t('detailsTcf.tab1.card2.title')}</h3>
                                                                    <p>{t('detailsTcf.tab1.card2.subtitle')}</p>
                                                                </div>
                                                                <ul className="feature-list mb_40 clearfix">
                                                                    <li>
                                                                        <h5>{t('detailsTcf.tab1.card2.feature.writtenExpression')}</h5>
                                                                        <span>{t('detailsTcf.tab1.card2.feature.writtenExpression.desc')}</span>
                                                                    </li>
                                                                    <li>
                                                                        <h5>{t('detailsTcf.tab1.card2.feature.oralExpression')}</h5>
                                                                        <span>{t('detailsTcf.tab1.card2.feature.oralExpression.desc')}</span>
                                                                    </li>
                                                                    <li>
                                                                        <h5>{t('detailsTcf.tab1.card2.feature.requiredPrograms')}</h5>
                                                                        <span>{t('detailsTcf.tab1.card2.feature.requiredPrograms.desc')}</span>
                                                                    </li>
                                                                </ul>
                                                                <div className="btn-box">
                                                                    <Link href="https://www.france-education-international.fr/en/test/tcf-tout-public" target="_blank"><span className="price">{t('detailsTcf.tab1.card2.button.learnMore')}</span><span className="text">{t('detailsTcf.tab1.card2.button.tcfAdmission')}</span></Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={activeIndex == 2 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                                        <div className="content-box">
                                            <div className="content-one mb_40">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-7 col-md-6 col-sm-12 text-column">
                                                        <div className="text">
                                                            <h3>{t('detailsTcf.tab2.heading')}</h3>
                                                            <p>{t('detailsTcf.tab2.p1')}</p>
                                                            <p>{t('detailsTcf.tab2.p2')}</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-5 col-md-6 col-sm-12 image-column">
                                                        <figure className="image-box"><img src="assets/images/resource/coaching-12.jpg" alt="A collage of the Canadian and French flags" /></figure>
                                                    </div>
                                                </div>
                                                <div className="text mt_20">
                                                    <p>{t('detailsTcf.tab2.p3')}</p>
                                                </div>
                                            </div>
                                            <div className="content-two pb_30">
                                                <div className="row clearfix">
                                                    <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                        <div className="single-item">
                                                            <figure className="image-box"><img src="assets/images/resource/coaching-13.jpg" alt="A map of Canada highlighting the province of Quebec" /></figure>
                                                            <div className="lower-content">
                                                                <div className="title-box">
                                                                    <div className="icon-box"><i className="icon-51"></i></div>
                                                                    <h3>{t('detailsTcf.tab2.card1.title')}</h3>
                                                                    <p>{t('detailsTcf.tab2.card1.subtitle')}</p>
                                                                </div>
                                                                <ul className="feature-list mb_40 clearfix">
                                                                    <li>
                                                                        <h5>{t('detailsTcf.tab2.card1.feature.tcfCanada')}</h5>
                                                                        <span>{t('detailsTcf.tab2.card1.feature.tcfCanada.desc')}</span>
                                                                    </li>
                                                                    <li>
                                                                        <h5>{t('detailsTcf.tab2.card1.feature.tcfQuebec')}</h5>
                                                                        <span>{t('detailsTcf.tab2.card1.feature.tcfQuebec.desc')}</span>
                                                                    </li>
                                                                    <li>
                                                                        <h5>{t('detailsTcf.tab2.card1.feature.fourSkills')}</h5>
                                                                        <span>{t('detailsTcf.tab2.card1.feature.fourSkills.desc')}</span>
                                                                    </li>
                                                                </ul>
                                                                <div className="btn-box">
                                                                    <Link href="https://www.france-education-international.fr/test/tcf-canada" target="_blank"><span className="price">{t('detailsTcf.tab2.card1.button.explore')}</span><span className="text">{t('detailsTcf.tab2.card1.button.tcfCanada')}</span></Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                        <div className="single-item">
                                                            <figure className="image-box"><img src="assets/images/resource/coaching-14.jpg" alt="A French passport and citizenship document" /></figure>
                                                            <div className="lower-content">
                                                                <div className="title-box">
                                                                    <div className="icon-box"><i className="icon-51"></i></div>
                                                                    <h3>{t('detailsTcf.tab2.card2.title')}</h3>
                                                                    <p>{t('detailsTcf.tab2.card2.subtitle')}</p>
                                                                </div>
                                                                <ul className="feature-list mb_40 clearfix">
                                                                    <li>
                                                                        <h5>{t('detailsTcf.tab2.card2.feature.tcfAnf')}</h5>
                                                                        <span>{t('detailsTcf.tab2.card2.feature.tcfAnf.desc')}</span>
                                                                    </li>
                                                                    <li>
                                                                        <h5>{t('detailsTcf.tab2.card2.feature.requiredLevelB1')}</h5>
                                                                        <span>{t('detailsTcf.tab2.card2.feature.requiredLevelB1.desc')}</span>
                                                                    </li>
                                                                    <h5>{t('detailsTcf.tab2.card2.feature.skillsTested')}</h5>
                                                                        <span>{t('detailsTcf.tab2.card2.feature.skillsTested.desc')}</span>
                                                                    <li>
                                                                    </li>
                                                                </ul>
                                                                <div className="btn-box">
                                                                    <Link href="https://www.france-education-international.fr/en/test/tcf-irn" target="_blank"><span className="price">{t('detailsTcf.tab2.card2.button.explore')}</span><span className="text">{t('detailsTcf.tab2.card2.button.tcfAnf')}</span></Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={activeIndex == 3 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                                        <div className="content-box">
                                            <div className="content-one mb_40">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-7 col-md-6 col-sm-12 text-column">
                                                        <div className="text">
                                                            <h3>{t('detailsTcf.tab3.heading')}</h3>
                                                            <p>{t('detailsTcf.tab3.p1')}</p>
                                                            <p>{t('detailsTcf.tab3.p2')}</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-5 col-md-6 col-sm-12 image-column">
                                                        <figure className="image-box"><img src="assets/images/resource/coaching-12.jpg" alt="A sample TCF certificate of results (attestation)" /></figure>
                                                    </div>
                                                </div>
                                                <div className="text mt_20">
                                                    <p>{t('detailsTcf.tab3.p3')}</p>
                                                </div>
                                            </div>
                                            <div className="content-two pb_30">
                                                <div className="row clearfix">
                                                    <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                        <div className="single-item">
                                                            <figure className="image-box"><img src="assets/images/resource/coaching-13.jpg" alt="A student receiving their official TCF attestation document" /></figure>
                                                            <div className="lower-content">
                                                                <div className="title-box">
                                                                    <div className="icon-box"><i className="icon-51"></i></div>
                                                                    <h3>{t('detailsTcf.tab3.card1.title')}</h3>
                                                                    <p>{t('detailsTcf.tab3.card1.subtitle')}</p>
                                                                </div>
                                                                <ul className="feature-list mb_40 clearfix">
                                                                    <li>
                                                                        <h5>{t('detailsTcf.tab3.card1.feature.officialCertificate')}</h5>
                                                                        <span>{t('detailsTcf.tab3.card1.feature.officialCertificate.desc')}</span>
                                                                    </li>
                                                                    <li>
                                                                        <h5>{t('detailsTcf.tab3.card1.feature.deliveryTime')}</h5>
                                                                        <span>{t('detailsTcf.tab3.card1.feature.deliveryTime.desc')}</span>
                                                                    </li>
                                                                    <li>
                                                                        <h5>{t('detailsTcf.tab3.card1.feature.twoYearValidity')}</h5>
                                                                        <span>{t('detailsTcf.tab3.card1.feature.twoYearValidity.desc')}</span>
                                                                    </li>
                                                                </ul>
                                                                <div className="btn-box">
                                                                    <Link href="https://tcf-info.fr/en/disponibilite-resultats-tcf/" target="_blank"><span className="price">{t('detailsTcf.tab3.card1.button.details')}</span><span className="text">{t('detailsTcf.tab3.card1.button.candidateHandbook')}</span></Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                        <div className="single-item">
                                                            <figure className="image-box"><img src="assets/images/resource/coaching-14.jpg" alt="A student studying with official TCF preparation materials online" /></figure>
                                                            <div className="lower-content">
                                                                <div className="title-box">
                                                                    <div className="icon-box"><i className="icon-51"></i></div>
                                                                    <h3>{t('detailsTcf.tab3.card2.title')}</h3>
                                                                    <p>{t('detailsTcf.tab3.card2.subtitle')}</p>
                                                                </div>
                                                                <ul className="feature-list mb_40 clearfix">
                                                                    <li>
                                                                        <h5>{t('detailsTcf.tab3.card2.feature.officialPrepResources')}</h5>
                                                                        <span>{t('detailsTcf.tab3.card2.feature.officialPrepResources.desc')}</span>
                                                                    </li>
                                                                    <li>
                                                                        <h5>{t('detailsTcf.tab3.card2.feature.familiarizeYourself')}</h5>
                                                                        <span>{t('detailsTcf.tab3.card2.feature.familiarizeYourself.desc')}</span>
                                                                    </li>
                                                                    <li>
                                                                        <h5>{t('detailsTcf.tab3.card2.feature.retakeTest')}</h5>
                                                                        <span>{t('detailsTcf.tab3.card2.feature.retakeTest.desc')}</span>
                                                                    </li>
                                                                </ul>
                                                                <div className="btn-box">
                                                                    <Link href="https://www.france-education-international.fr/en/test/tcf-tout-public" target="_blank"><span className="price">{t('detailsTcf.tab3.card2.button.register')}</span><span className="text">{t('detailsTcf.tab3.card2.button.bookTest')}</span></Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <TestCenterMap/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
                                    {/*coaching details end*/}
                                

                            </Layout>
        </>
    )
}


