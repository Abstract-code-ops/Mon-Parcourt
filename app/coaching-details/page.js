'use client'
import Link from "next/link";
import Layout from "@/components/layout/Layout"
import ExamCalendar from '@/components/elements/ExamCalendar';
import TestCenterMap from '@/components/elements/TestCenterMap';

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import ContactExp from "@/components/elements/contactExp";


export default function Home() {
    
    const { t } = useTranslation('coaching');
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle={t('details.breadcrumbTitle')} bgImage="url(/assets/images/background/coaching-breadcrumb.jpg)">
                {/* coaching details section */}
                <section className="coaching-details p_relative">
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side mb_50">
                        <div className="coaching-sidebar default-sidebar">
                            <div className="sidebar-widget category-widget">
                                <ul className="category-list clearfix">
                                    <li><Link href="coaching-details" className="current">{t('details.sidebar.categories.ielts')}</Link></li>
                                    <li><Link href="coaching-details-2">{t('details.sidebar.categories.pte')}</Link></li>
                                    <li><Link href="coaching-details-3">{t('details.sidebar.categories.toefl')}</Link></li>
                                    <li><Link href="coaching-details-4">{t('details.sidebar.categories.daf')}</Link></li>
                                    <li><Link href="coaching-details-5">{t('details.sidebar.categories.tcf')}</Link></li>
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
                                    month={9}
                                    year={2024}
                                    highlightDates={[2, 11]}
                                    examType="IELTS"
                                    referenceLink="https://takeielts.britishcouncil.org/take-ielts/book"
                                    referenceText="IELTS Official Test Dates"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                        <div className="coaching-details-content">
                            <div className="upper-box mb_40">
                                <h2>{t('details.header.title')}</h2>
                                <div className="text-box mb_40">
                                    <p>{t('details.header.intro')}</p>
                                    <ul className="clearfix">
                                        <li><Link href="javascript:void(0)" style={{cursor: 'default'}}><span>1</span>{t('details.header.list.immigrate')}</Link></li>
                                        <li><Link href="javascript:void(0)" style={{cursor: 'default'}}><span>2</span>{t('details.header.list.work')}</Link></li>
                                        <li><Link href="javascript:void(0)" style={{cursor: 'default'}}><span>3</span>{t('details.header.list.study')}</Link></li>
                                        <li><Link href="javascript:void(0)" style={{cursor: 'default'}}><span>4</span>{t('details.header.list.citizenship')}</Link></li>
                                    </ul>
                                </div>
                                <figure className="image-box"><img src="assets/images/resource/coaching-11.jpg" alt="Students preparing for the IELTS exam" /></figure>
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
                                                            <h3>{t('details.tab1.academic.heading')}</h3>
                                                            <p>{t('details.tab1.academic.p1')}</p>
                                                            <p>{t('details.tab1.academic.p2')}</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-5 col-md-6 col-sm-12 image-column">
                                                        <figure className="image-box"><img src="assets/images/resource/coaching-12.jpg" alt="University campus" /></figure>
                                                    </div>
                                                </div>
                                                <div className="text mt_20">
                                                    <p>{t('details.tab1.academic.p3')}</p>
                                                </div>
                                            </div>
                                            <div className="content-two pb_30">
                                                <div className="row clearfix">
                                                    <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                        <div className="single-item">
                                                            <figure className="image-box"><img src="assets/images/resource/coaching-13.jpg" alt="Student listening with headphones" /></figure>
                                                            <div className="lower-content">
                                                                <div className="title-box">
                                                                    <div className="icon-box"><i className="icon-51"></i></div>
                                                                    <h3>{t('details.tab1.card1.title')}</h3>
                                                                    <p>{t('details.tab1.card1.subtitle')}</p>
                                                                </div>
                                                                <ul className="feature-list mb_40 clearfix">
                                                                    <li style={{"cursor": "default"}}>
                                                                        <h5>{t('details.tab1.card1.feature.listening')}</h5>
                                                                        <span>{t('details.tab1.card1.feature.listening.desc')}</span>
                                                                    </li>
                                                                    <li style={{"cursor": "default"}}>
                                                                        <h5>{t('details.tab1.card1.feature.reading')}</h5>
                                                                        <span>{t('details.tab1.card1.feature.reading.desc')}</span>
                                                                    </li>
                                                                    <li style={{"cursor": "default"}}>
                                                                        <h5>{t('details.tab1.card1.feature.questionTypes')}</h5>
                                                                        <span>{t('details.tab1.card1.feature.questionTypes.desc')}</span>
                                                                    </li>
                                                                </ul>
                                                                <div className="btn-box">
                                                                    <Link href="coaching-details"><span className="price">{t('details.tab1.card1.button.practice')}</span><span className="text">{t('details.tab1.card1.button.freeMaterials')}</span></Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                        <div className="single-item">
                                                            <figure className="image-box"><img src="assets/images/resource/coaching-14.jpg" alt="Student writing an essay" /></figure>
                                                            <div className="lower-content">
                                                                <div className="title-box">
                                                                    <div className="icon-box"><i className="icon-51"></i></div>
                                                                    <h3>{t('details.tab1.card2.title')}</h3>
                                                                    <p>{t('details.tab1.card2.subtitle')}</p>
                                                                </div>
                                                                <ul className="feature-list mb_40 clearfix">
                                                                    <li>
                                                                        <h5>{t('details.tab1.card2.feature.writing')}</h5>
                                                                        <span>{t('details.tab1.card2.feature.writing.desc')}</span>
                                                                    </li>
                                                                    <li>
                                                                        <h5>{t('details.tab1.card2.feature.speaking')}</h5>
                                                                        <span>{t('details.tab1.card2.feature.speaking.desc')}</span>
                                                                    </li>
                                                                    <li>
                                                                        <h5>{t('details.tab1.card2.feature.assessment')}</h5>
                                                                        <span>{t('details.tab1.card2.feature.assessment.desc')}</span>
                                                                    </li>
                                                                </ul>
                                                                <div className="btn-box">
                                                                    <Link href="https://ielts.org/take-a-test/test-types/ielts-academic-test"><span className="price">{t('details.tab1.card2.button.practice')}</span><span className="text">{t('details.tab1.card2.button.appointment')}</span></Link>
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
                                                            <h3>{t('details.tab2.general.heading')}</h3>
                                                            <p>{t('details.tab2.general.p1')}</p>
                                                            <p>{t('details.tab2.general.p2')}</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-5 col-md-6 col-sm-12 image-column">
                                                        <figure className="image-box"><img src="assets/images/resource/coaching-12.jpg" alt="Cityscape of a major English-speaking city" /></figure>
                                                    </div>
                                                </div>
                                                <div className="text mt_20">
                                                    <p>{t('details.tab2.general.p3')}</p>
                                                </div>
                                            </div>
                                            <div className="content-two pb_30">
                                                <div className="row clearfix">
                                                    <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                        <div className="single-item">
                                                            <figure className="image-box"><img src="assets/images/resource/coaching-13.jpg" alt="Person reading a newspaper" /></figure>
                                                            <div className="lower-content">
                                                                <div className="title-box">
                                                                    <div className="icon-box"><i className="icon-51"></i></div>
                                                                    <h3>{t('details.tab2.card1.title')}</h3>
                                                                    <p>{t('details.tab2.card1.subtitle')}</p>
                                                                </div>
                                                                <ul className="feature-list mb_40 clearfix">
                                                                    <li>
                                                                        <h5>{t('details.tab1.card1.feature.listening')}</h5>
                                                                        <span>{t('details.tab2.card1.feature.listening.desc')}</span>
                                                                    </li>
                                                                    <li>
                                                                        <h5>{t('details.tab2.card1.feature.reading')}</h5>
                                                                        <span>{t('details.tab2.card1.feature.reading.desc')}</span>
                                                                    </li>
                                                                    <li>
                                                                        <h5>{t('details.tab2.card1.feature.sourceMaterials')}</h5>
                                                                        <span>{t('details.tab2.card1.feature.sourceMaterials.desc')}</span>
                                                                    </li>
                                                                </ul>
                                                                <div className="btn-box">
                                                                    <Link href="coaching-details"><span className="price">{t('details.tab2.card1.button.practice')}</span><span className="text">{t('details.tab2.card1.button.appointment')}</span></Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                        <div className="single-item">
                                                            <figure className="image-box"><img src="assets/images/resource/coaching-14.jpg" alt="Person writing a letter" /></figure>
                                                            <div className="lower-content">
                                                                <div className="title-box">
                                                                    <div className="icon-box"><i className="icon-51"></i></div>
                                                                    <h3>{t('details.tab2.card2.title')}</h3>
                                                                    <p>{t('details.tab2.card2.subtitle')}</p>
                                                                </div>
                                                                <ul className="feature-list mb_40 clearfix">
                                                                    <li>
                                                                        <h5>{t('details.tab1.card2.feature.writing')}</h5>
                                                                        <span>{t('details.tab2.card2.feature.writing.desc')}</span>
                                                                    </li>
                                                                    <li>
                                                                        <h5>{t('details.tab1.card2.feature.speaking')}</h5>
                                                                        <span>{t('details.tab2.card2.feature.speaking.desc')}</span>
                                                                    </li>
                                                                    <li>
                                                                        <h5>{t('details.tab1.card2.feature.assessment')}</h5>
                                                                        <span>{t('details.tab2.card2.feature.assessment.desc')}</span>
                                                                    </li>
                                                                </ul>
                                                                <div className="btn-box">
                                                                    <Link href="coaching-details"><span className="price">{t('details.tab2.card2.button.practice')}</span><span className="text">{t('details.tab2.card2.button.appointment')}</span></Link>
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
                                                            <h3>{t('details.tab3.scores.heading')}</h3>
                                                            <p>{t('details.tab3.scores.p1')}</p>
                                                            <p>{t('details.tab3.scores.p2')}</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-5 col-md-6 col-sm-12 image-column">
                                                        <figure className="image-box"><img src="assets/images/resource/coaching-12.jpg" alt="IELTS Test Report Form sample" /></figure>
                                                    </div>
                                                </div>
                                                <div className="text mt_20">
                                                    <p>{t('details.tab3.scores.p3')}</p>
                                                </div>
                                            </div>
                                            <div className="content-two pb_30">
                                                <div className="row clearfix">
                                                    <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                        <div className="single-item">
                                                            <figure className="image-box"><img src="assets/images/resource/coaching-13.jpg" alt="A person receiving their test results online." /></figure>
                                                            <div className="lower-content">
                                                                <div className="title-box">
                                                                    <div className="icon-box"><i className="icon-51"></i></div>
                                                                    <h3>{t('details.tab3.card1.title')}</h3>
                                                                    <p>{t('details.tab3.card1.subtitle')}</p>
                                                                </div>
                                                                <ul className="feature-list mb_40 clearfix">
                                                                    <li>
                                                                        <h5>{t('details.tab3.card1.feature.receiving')}</h5>
                                                                        <span>{t('details.tab3.card1.feature.receiving.desc')}</span>
                                                                    </li>
                                                                    <li>
                                                                        <h5>{t('details.tab3.card1.feature.content')}</h5>
                                                                        <span>{t('details.tab3.card1.feature.content.desc')}</span>
                                                                    </li>
                                                                    <li>
                                                                        <h5>{t('details.tab3.card1.feature.sending')}</h5>
                                                                        <span>{t('details.tab3.card1.feature.sending.desc')}</span>
                                                                    </li>
                                                                </ul>
                                                                <div className="btn-box">
                                                                    <Link href="https://ielts.org/organisations/ielts-for-organisations/verifying-ielts-results" target="_blank"><span className="price">{t('details.tab3.card1.button.verify')}</span><span className="text">{t('details.tab3.card1.button.checkResult')}</span></Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                        <div className="single-item">
                                                            <figure className="image-box"><img src="assets/images/resource/coaching-14.jpg" alt="A chart showing score progression" /></figure>
                                                            <div className="lower-content">
                                                                <div className="title-box">
                                                                    <div className="icon-box"><i className="icon-51"></i></div>
                                                                    <h3>{t('details.tab3.card2.title')}</h3>
                                                                    <p>{t('details.tab3.card2.subtitle')}</p>
                                                                </div>
                                                                <ul className="feature-list mb_40 clearfix">
                                                                    <li>
                                                                        <h5>{t('details.tab3.card2.feature.identify')}</h5>
                                                                        <span>{t('details.tab3.card2.feature.identify.desc')}</span>
                                                                    </li>
                                                                    <li>
                                                                        <h5>{t('details.tab3.card2.feature.develop')}</h5>
                                                                        <span>{t('details.tab3.card2.feature.develop.desc')}</span>
                                                                    </li>
                                                                    <li>
                                                                        <h5>{t('details.tab3.card2.feature.retake')}</h5>
                                                                        <span>{t('details.tab3.card2.feature.retake.desc')}</span>
                                                                    </li>
                                                                </ul>
                                                                <div className="btn-box">
                                                                    <Link href="https://www.britishcouncil.com.cy/exam/ielts/book-test?gad_source=1&gad_campaignid=20269864011&gbraid=0AAAAADhlDTN6mgMV3lk0lqiD3ZdRQI56h&gclid=CjwKCAjwqKzEBhANEiwAeQaPVcq_1_-NcWZ8vnn2PW7yZfhlmKH-fPQ2PaZKoQzwvkkZtCOXwosmQBoCID8QAvD_BwE" target="_blank"><span className="price">{t('details.tab3.card2.button.register')}</span><span className="text">{t('details.tab3.card2.button.bookTest')}</span></Link>
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
            </div>
        </section>
                                    {/*coaching details end*/}
                                

                            </Layout>
        </>
    )
}


