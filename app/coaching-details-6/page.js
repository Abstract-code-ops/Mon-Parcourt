'use client'
import Link from "next/link";
import Layout from "@/components/layout/Layout"
import ExamCalendar from '@/components/elements/ExamCalendar';
import dynamic from 'next/dynamic';
const TestCenterMap = dynamic(() => import('@/components/elements/TestCenterMap'), { ssr: false });

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
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle={t('detailsSat.breadcrumbTitle')} bgImage="url(assets/images/background/coaching-breadcrumb.jpg)">
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
                    <li><Link href="coaching-details-5">{t('details.sidebar.categories.tcf')}</Link></li>
                    <li><Link href="coaching-details-6" className="current">{t('details.sidebar.categories.sat')}</Link></li>
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
                                    highlightDates={[4, 24]}
                                    examType="SAT"
                                    referenceLink="https://satsuite.collegeboard.org/sat/registration"
                                    referenceText="SAT Official Registration"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                        <div className="coaching-details-content">
                            <div className="upper-box mb_40">
                                <h2>{t('detailsSat.header.title')}</h2>
                                <div className="text-box mb_40">
                                    <p>{t('detailsSat.header.intro1')}</p>
                                    <ul className="clearfix">
                                        <li><Link href="javascript:void(0)" style={{cursor: 'default'}}><span>1</span>{t('details.header.list.immigrate')}</Link></li>
                                        <li><Link href="javascript:void(0)" style={{cursor: 'default'}}><span>2</span>{t('details.header.list.work')}</Link></li>
                                        <li><Link href="javascript:void(0)" style={{cursor: 'default'}}><span>3</span>{t('details.header.list.study')}</Link></li>
                                        <li><Link href="javascript:void(0)" style={{cursor: 'default'}}><span>4</span>{t('details.header.list.citizenship')}</Link></li>
                                    </ul>
                                </div>
                                <figure className="image-box"><img src="assets/images/resource/coaching-20.jpg" alt={t('detailsSat.header.imageAlt')} /></figure>
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
                                                            <h3>{t('detailsSat.tab1.heading')}</h3>
                                                            <p>{t('detailsSat.tab1.p1')}</p>
                                                            <p>{t('detailsSat.tab1.p2')}</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-5 col-md-6 col-sm-12 image-column">
                                                        <figure className="image-box"><img src="assets/images/resource/coaching-12.jpg" alt="Student taking the Digital SAT on a tablet or laptop" /></figure>
                                                    </div>
                                                </div>
                                                <div className="text mt_20">
                                                    <p>{t('detailsSat.tab1.p3')}</p>
                                                </div>
                                            </div>
                                            <div className="content-two pb_30">
                                                <div className="row clearfix">
                                                    <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                        <div className="single-item">
                                                            <figure className="image-box"><img src="assets/images/resource/coaching-13.jpg" alt="A student working on a Reading and Writing question on a device" /></figure>
                                                            <div className="lower-content">
                                                                <div className="title-box">
                                                                    <div className="icon-box"><i className="icon-51"></i></div>
                                                                    <h3>{t('detailsSat.tab1.card1.title')}</h3>
                                                                    <p>{t('detailsSat.tab1.card1.subtitle')}</p>
                                                                </div>
                                                                <ul className="feature-list mb_40 clearfix">
                                                                    <li>
                                                                        <h5>{t('detailsSat.tab1.card1.feature.readingWritingSection')}</h5>
                                                                        <span>{t('detailsSat.tab1.card1.feature.readingWritingSection.desc')}</span>
                                                                    </li>
                                                                    <li>
                                                                        <h5>{t('detailsSat.tab1.card1.feature.skillsAssessed')}</h5>
                                                                        <span>{t('detailsSat.tab1.card1.feature.skillsAssessed.desc')}</span>
                                                                    </li>
                                                                    <li>
                                                                        <h5>{t('detailsSat.tab1.card1.feature.adaptiveTesting')}</h5>
                                                                        <span>{t('detailsSat.tab1.card1.feature.adaptiveTesting.desc')}</span>
                                                                    </li>
                                                                </ul>
                                                                <div className="btn-box">
                                                                    <a href="https://satsuite.collegeboard.org/practice" target="_blank"><span className="price">{t('detailsSat.tab1.card1.button.practice')}</span><span className="text">{t('detailsSat.tab1.card1.button.freeMaterials')}</span></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                        <div className="single-item">
                                                            <figure className="image-box"><img src="assets/images/resource/coaching-14.jpg" alt="Student using the built-in graphing calculator on the Digital SAT" /></figure>
                                                            <div className="lower-content">
                                                                <div className="title-box">
                                                                    <div className="icon-box"><i className="icon-51"></i></div>
                                                                    <h3>{t('detailsSat.tab1.card2.title')}</h3>
                                                                    <p>{t('detailsSat.tab1.card2.subtitle')}</p>
                                                                </div>
                                                                <ul className="feature-list mb_40 clearfix">
                                                                    <li>
                                                                        <h5>{t('detailsSat.tab1.card2.feature.mathSection')}</h5>
                                                                        <span>{t('detailsSat.tab1.card2.feature.mathSection.desc')}</span>
                                                                    </li>
                                                                    <li>
                                                                        <h5>{t('detailsSat.tab1.card2.feature.skillsAssessed')}</h5>
                                                                        <span>{t('detailsSat.tab1.card2.feature.skillsAssessed.desc')}</span>
                                                                    </li>
                                                                    <li>
                                                                        <h5>{t('detailsSat.tab1.card2.feature.calculatorUse')}</h5>
                                                                        <span>{t('detailsSat.tab1.card2.feature.calculatorUse.desc')}</span>
                                                                    </li>
                                                                </ul>
                                                                <div className="btn-box">
                                                                    <a href="https://satsuite.collegeboard.org/digital" target="_blank"><span className="price">{t('detailsSat.tab1.card2.button.learnMore')}</span><span className="text">{t('detailsSat.tab1.card2.button.aboutExam')}</span></a>
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
                                                            <h3>{t('detailsSat.tab2.heading')}</h3>
                                                            <p>{t('detailsSat.tab2.p1')}</p>
                                                            <p>{t('detailsSat.tab2.p2')}</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-5 col-md-6 col-sm-12 image-column">
                                                        <figure className="image-box"><img src="assets/images/resource/coaching-12.jpg" alt="A group of international students on a U.S. university campus" /></figure>
                                                    </div>
                                                </div>
                                                <div className="text mt_20">
                                                    <p>{t('detailsSat.tab2.p3')}</p>
                                                </div>
                                            </div>
                                            <div className="content-two pb_30">
                                                <div className="row clearfix">
                                                    <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                        <div className="single-item">
                                                            <figure className="image-box"><img src="assets/images/resource/coaching-13.jpg" alt="A U.S. university acceptance letter and an I-20 form" /></figure>
                                                            <div className="lower-content">
                                                                <div className="title-box">
                                                                    <div className="icon-box"><i className="icon-51"></i></div>
                                                                    <h3>{t('detailsSat.tab2.card1.title')}</h3>
                                                                    <p>{t('detailsSat.tab2.card1.subtitle')}</p>
                                                                </div>
                                                                <ul className="feature-list mb_40 clearfix">
                                                                    <li>
                                                                        <h5>{t('detailsSat.tab2.card1.feature.wideAcceptance')}</h5>
                                                                        <span>{t('detailsSat.tab2.card1.feature.wideAcceptance.desc')}</span>
                                                                    </li>
                                                                    <li>
                                                                        <h5>{t('detailsSat.tab2.card1.feature.demonstratesAbility')}</h5>
                                                                        <span>{t('detailsSat.tab2.card1.feature.demonstratesAbility.desc')}</span>
                                                                    </li>
                                                                    <li>
                                                                        <h5>{t('detailsSat.tab2.card1.feature.scholarshipOpportunities')}</h5>
                                                                        <span>{t('detailsSat.tab2.card1.feature.scholarshipOpportunities.desc')}</span>
                                                                    </li>
                                                                </ul>
                                                                <div className="btn-box">
                                                                    <a href="https://satsuite.collegeboard.org/sat/registration/international-testing" target="_blank"><span className="price">{t('detailsSat.tab2.card1.button.explore')}</span><span className="text">{t('detailsSat.tab2.card1.button.internationalInfo')}</span></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                        <div className="single-item">
                                                            <figure className="image-box"><img src="assets/images/resource/coaching-14.jpg" alt="A passport with a U.S. F-1 student visa" /></figure>
                                                            <div className="lower-content">
                                                                <div className="title-box">
                                                                    <div className="icon-box"><i className="icon-51"></i></div>
                                                                    <h3>{t('detailsSat.tab2.card2.title')}</h3>
                                                                    <p>{t('detailsSat.tab2.card2.subtitle')}</p>
                                                                </div>
                                                                <ul className="feature-list mb_40 clearfix">
                                                                    <li>
                                                                        <h5>{t('detailsSat.tab2.card2.feature.admissionFirst')}</h5>
                                                                        <span>{t('detailsSat.tab2.card2.feature.admissionFirst.desc')}</span>
                                                                    </li>
                                                                    <li>
                                                                        <h5>{t('detailsSat.tab2.card2.feature.i20Form')}</h5>
                                                                        <span>{t('detailsSat.tab2.card2.feature.i20Form.desc')}</span>
                                                                    </li>
                                                                    <li>
                                                                        <h5>{t('detailsSat.tab2.card2.feature.provesAcademicIntent')}</h5>
                                                                        <span>{t('detailsSat.tab2.card2.feature.provesAcademicIntent.desc')}</span>
                                                                    </li>
                                                                </ul>
                                                                <div className="btn-box">
                                                                    <a href="https://satsuite.collegeboard.org/sat/registration" target="_blank"><span className="price">{t('detailsSat.tab2.card2.button.register')}</span><span className="text">{t('detailsSat.tab2.card2.button.appointment')}</span></a>
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
                                                            <h3>{t('detailsSat.tab3.heading')}</h3>
                                                            <p>{t('detailsSat.tab3.p1')}</p>
                                                            <p>{t('detailsSat.tab3.p2')}</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-5 col-md-6 col-sm-12 image-column">
                                                        <figure className="image-box"><img src="assets/images/resource/coaching-12.jpg" alt="A Digital SAT score report displayed on a laptop screen" /></figure>
                                                    </div>
                                                </div>
                                                <div className="text mt_20">
                                                    <p>{t('detailsSat.tab3.p3')}</p>
                                                </div>
                                            </div>
                                            <div className="content-two pb_30">
                                                <div className="row clearfix">
                                                    <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                        <div className="single-item">
                                                            <figure className="image-box"><img src="assets/images/resource/coaching-13.jpg" alt="A student sending SAT scores to colleges online" /></figure>
                                                            <div className="lower-content">
                                                                <div className="title-box">
                                                                    <div className="icon-box"><i className="icon-51"></i></div>
                                                                    <h3>{t('detailsSat.tab3.card1.title')}</h3>
                                                                    <p>{t('detailsSat.tab3.card1.subtitle')}</p>
                                                                </div>
                                                                <ul className="feature-list mb_40 clearfix">
                                                                    <li>
                                                                        <h5>{t('detailsSat.tab3.card1.feature.fasterScoreReports')}</h5>
                                                                        <span>{t('detailsSat.tab3.card1.feature.fasterScoreReports.desc')}</span>
                                                                    </li>
                                                                    <li>
                                                                        <h5>{t('detailsSat.tab3.card1.feature.sendScores')}</h5>
                                                                        <span>{t('detailsSat.tab3.card1.feature.sendScores.desc')}</span>
                                                                    </li>
                                                                    <li>
                                                                        <h5>{t('detailsSat.tab3.card1.feature.scoreChoice')}</h5>
                                                                        <span>{t('detailsSat.tab3.card1.feature.scoreChoice.desc')}</span>
                                                                    </li>
                                                                </ul>
                                                                <div className="btn-box">
                                                                    <a href="https://satsuite.collegeboard.org/sat/scores" target="_blank"><span className="price">{t('detailsSat.tab3.card1.button.details')}</span><span className="text">{t('detailsSat.tab3.card1.button.satScoresExplained')}</span></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                        <div className="single-item">
                                                            <figure className="image-box"><img src="assets/images/resource/coaching-14.jpg" alt="A student using official SAT practice on Khan Academy" /></figure>
                                                            <div className="lower-content">
                                                                <div className="title-box">
                                                                    <div className="icon-box"><i className="icon-51"></i></div>
                                                                    <h3>{t('detailsSat.tab3.card2.title')}</h3>
                                                                    <p>{t('detailsSat.tab3.card2.subtitle')}</p>
                                                                </div>
                                                                <ul className="feature-list mb_40 clearfix">
                                                                    <li>
                                                                        <h5>{t('detailsSat.tab3.card2.feature.officialDigitalSatPrep')}</h5>
                                                                        <span>{t('detailsSat.tab3.card2.feature.officialDigitalSatPrep.desc')}</span>
                                                                    </li>
                                                                    <li>
                                                                        <h5>{t('detailsSat.tab3.card2.feature.superscoring')}</h5>
                                                                        <span>{t('detailsSat.tab3.card2.feature.superscoring.desc')}</span>
                                                                    </li>
                                                                    <li>
                                                                        <h5>{t('detailsSat.tab3.card2.feature.retakeTest')}</h5>
                                                                        <span>{t('detailsSat.tab3.card2.feature.retakeTest.desc')}</span>
                                                                    </li>
                                                                </ul>
                                                                <div className="btn-box">
                                                                    <a href="https://satsuite.collegeboard.org/sat/registration" target="_blank"><span className="price">{t('detailsSat.tab3.card2.button.register')}</span><span className="text">{t('detailsSat.tab3.card2.button.bookTest')}</span></a>
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


