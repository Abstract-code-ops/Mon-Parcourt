'use client'
import Link from "next/link";
import Layout from "@/components/layout/Layout"
import ExamCalendar from '@/components/elements/ExamCalendar';
import dynamic from 'next/dynamic';
const TestCenterMap = dynamic(() => import('@/components/elements/TestCenterMap'), { ssr: false });

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import ContactExp from "@/components/elements/contactExp";


export default function Home() {

    const { t } = useTranslation('coaching')
    const [activeIndex, setActiveIndex] = useState(1)

    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle={t('detailsToefl.breadcrumbTitle')} bgImage="url(assets/images/background/coaching-breadcrumb.jpg)">
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
                                    <li><Link href="coaching-details-3" className="current">{t('details.sidebar.categories.toefl')}</Link></li>
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
                                    examType="TOEFL"
                                    referenceLink="https://www.ets.org/toefl/test-takers/ibt/register/"
                                    referenceText="TOEFL Official Registration"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8 col-md-12 col-sm-12 content-side">
                    <div class="coaching-details-content">
                        <div class="upper-box mb_40">
                            <h2>{t('detailsToefl.header.title')}</h2>
                            <div class="text-box mb_40">
                                <p>{t('detailsToefl.header.intro1')}</p>
                                <ul className="clearfix">
                                    <li><Link href="javascript:void(0)" style={{cursor: 'default'}}><span>1</span>{t('details.header.list.immigrate')}</Link></li>
                                    <li><Link href="javascript:void(0)" style={{cursor: 'default'}}><span>2</span>{t('details.header.list.work')}</Link></li>
                                    <li><Link href="javascript:void(0)" style={{cursor: 'default'}}><span>3</span>{t('details.header.list.study')}</Link></li>
                                    <li><Link href="javascript:void(0)" style={{cursor: 'default'}}><span>4</span>{t('details.header.list.citizenship')}</Link></li>
                                </ul>
                            </div>
                            <figure class="image-box"><img src="assets/images/resource/coaching-17.jpg" alt="Students preparing for the TOEFL exam" /></figure>
                        </div>
                        <div class="tabs-box">
                            <div class="tab-btn-box mb_40">
                                <ul class="tab-btns tab-buttons clearfix" role="tablist">
                                    <li class="nav-link" onClick={() => handleOnClick(1)}>
                                        <a class={activeIndex == 1 ? "nav-link active" : "nav-link"}><span>{t('details.tabs.education')}</span></a>
                                    </li>
                                    <li class="nav-item" onClick={() => handleOnClick(2)}>
                                        <a class={activeIndex == 2 ? "nav-link active" : "nav-link"}><span>{t('details.tabs.immigration')}</span></a>
                                    </li>
                                    <li class="nav-item" onClick={() => handleOnClick(3)}>
                                        <a class={activeIndex == 3 ? "nav-link active" : "nav-link"}><span>{t('details.tabs.scoring')}</span></a>
                                    </li>
                                </ul>
                            </div>
                            <div class="tab-content wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                <div class={activeIndex == 1 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                                    <div class="content-box">
                                        <div class="content-one mb_40">
                                            <div class="row align-items-center">
                                                <div class="col-lg-7 col-md-6 col-sm-12 text-column">
                                                    <div class="text">
                                                        <h3>{t('detailsToefl.tab1.heading')}</h3>
                                                        <p>{t('detailsToefl.tab1.p1')}</p>
                                                        <p>{t('detailsToefl.tab1.p2')}</p>
                                                    </div>
                                                </div>
                                                <div class="col-lg-5 col-md-6 col-sm-12 image-column">
                                                    <figure class="image-box"><img src="assets/images/resource/coaching-12.jpg" alt="University campus" /></figure>
                                                </div>
                                            </div>
                                            <div class="text mt_20">
                                                <p>{t('detailsToefl.tab1.p3')}</p>
                                            </div>
                                        </div>
                                        <div class="content-two pb_30">
                                            <div class="row clearfix">
                                                <div class="col-lg-6 col-md-6 col-sm-12 single-column">
                                                    <div class="single-item">
                                                        <figure class="image-box"><img src="assets/images/resource/coaching-13.jpg" alt="Student listening with headphones" /></figure>
                                                        <div class="lower-content">
                                                            <div class="title-box">
                                                                <div class="icon-box"><i class="icon-51"></i></div>
                                                                <h3>{t('detailsToefl.tab1.card1.title')}</h3>
                                                                <p>{t('detailsToefl.tab1.card1.subtitle')}</p>
                                                            </div>
                                                            <ul class="feature-list mb_40 clearfix">
                                                                <li>
                                                                    <h5>{t('detailsToefl.tab1.card1.feature.reading')}</h5>
                                                                    <span>{t('detailsToefl.tab1.card1.feature.reading.desc')}</span>
                                                                </li>
                                                                <li>
                                                                    <h5>{t('detailsToefl.tab1.card1.feature.listening')}</h5>
                                                                    <span>{t('detailsToefl.tab1.card1.feature.listening.desc')}</span>
                                                                </li>
                                                                <li>
                                                                    <h5>{t('detailsToefl.tab1.card1.feature.academicFocus')}</h5>
                                                                    <span>{t('detailsToefl.tab1.card1.feature.academicFocus.desc')}</span>
                                                                </li>
                                                            </ul>
                                                            <div class="btn-box">
                                                                <Link href="https://www.ets.org/toefl/test-takers/ibt/prepare.html" target="_blank"><span class="price">{t('detailsToefl.tab1.card1.button.practice')}</span><span class="text">{t('detailsToefl.tab1.card1.button.freeMaterials')}</span></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6 col-md-6 col-sm-12 single-column">
                                                    <div class="single-item">
                                                        <figure class="image-box"><img src="assets/images/resource/coaching-14.jpg" alt="Student writing an essay" /></figure>
                                                        <div class="lower-content">
                                                            <div class="title-box">
                                                                <div class="icon-box"><i class="icon-51"></i></div>
                                                                <h3>{t('detailsToefl.tab1.card2.title')}</h3>
                                                                <p>{t('detailsToefl.tab1.card2.subtitle')}</p>
                                                            </div>
                                                            <ul class="feature-list mb_40 clearfix">
                                                                <li>
                                                                    <h5>{t('detailsToefl.tab1.card2.feature.speaking')}</h5>
                                                                    <span>{t('detailsToefl.tab1.card2.feature.speaking.desc')}</span>
                                                                </li>
                                                                <li>
                                                                    <h5>{t('detailsToefl.tab1.card2.feature.writing')}</h5>
                                                                    <span>{t('detailsToefl.tab1.card2.feature.writing.desc')}</span>
                                                                </li>
                                                                <li>
                                                                    <h5>{t('detailsToefl.tab1.card2.feature.integratedSkills')}</h5>
                                                                    <span>{t('detailsToefl.tab1.card2.feature.integratedSkills.desc')}</span>
                                                                </li>
                                                            </ul>
                                                            <div class="btn-box">
                                                                <Link href="https://www.ets.org/toefl/test-takers/ibt/prepare/practice-tests.html" target="_blank"><span class="price">{t('detailsToefl.tab1.card2.button.practice')}</span><span class="text">{t('detailsToefl.tab1.card2.button.officialTests')}</span></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class={activeIndex == 2 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                                    <div class="content-box">
                                        <div class="content-one mb_40">
                                            <div class="row align-items-center">
                                                <div class="col-lg-7 col-md-6 col-sm-12 text-column">
                                                    <div class="text">
                                                        <h3>{t('detailsToefl.tab2.heading')}</h3>
                                                        <p>{t('detailsToefl.tab2.p1')}</p>
                                                        <p>{t('detailsToefl.tab2.p2')}</p>
                                                    </div>
                                                </div>
                                                <div class="col-lg-5 col-md-6 col-sm-12 image-column">
                                                    <figure class="image-box"><img src="assets/images/resource/coaching-12.jpg" alt="Cityscape of a major English-speaking city" /></figure>
                                                </div>
                                            </div>
                                            <div class="text mt_20">
                                                <p>{t('detailsToefl.tab2.p3')}</p>
                                            </div>
                                        </div>
                                        <div class="content-two pb_30">
                                            <div class="row clearfix">
                                                <div class="col-lg-6 col-md-6 col-sm-12 single-column">
                                                    <div class="single-item">
                                                        <figure class="image-box"><img src="assets/images/resource/coaching-13.jpg" alt="Professional working on a computer" /></figure>
                                                        <div class="lower-content">
                                                            <div class="title-box">
                                                                <div class="icon-box"><i class="icon-51"></i></div>
                                                                <h3>{t('detailsToefl.tab2.card1.title')}</h3>
                                                                <p>{t('detailsToefl.tab2.card1.subtitle')}</p>
                                                            </div>
                                                            <ul class="feature-list mb_40 clearfix">
                                                                <li>
                                                                    <h5>{t('detailsToefl.tab2.card1.feature.oneTest')}</h5>
                                                                    <span>{t('detailsToefl.tab2.card1.feature.oneTest.desc')}</span>
                                                                </li>
                                                                <li>
                                                                    <h5>{t('detailsToefl.tab2.card1.feature.authenticMaterials')}</h5>
                                                                    <span>{t('detailsToefl.tab2.card1.feature.authenticMaterials.desc')}</span>
                                                                </li>
                                                                <li>
                                                                    <h5>{t('detailsToefl.tab2.card1.feature.integratedAssessment')}</h5>
                                                                    <span>{t('detailsToefl.tab2.card1.feature.integratedAssessment.desc')}</span>
                                                                </li>
                                                            </ul>
                                                            <div class="btn-box">
                                                                <Link href="https://www.ets.org/toefl/test-takers/ibt/scores/understand-scores.html" target="_blank"><span class="price">{t('detailsToefl.tab2.card1.button.learn')}</span><span class="text">{t('detailsToefl.tab2.card1.button.accepts')}</span></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6 col-md-6 col-sm-12 single-column">
                                                    <div class="single-item">
                                                        <figure class="image-box"><img src="assets/images/resource/coaching-14.jpg" alt="Person taking a test at home on their computer" /></figure>
                                                        <div class="lower-content">
                                                            <div class="title-box">
                                                                <div class="icon-box"><i class="icon-51"></i></div>
                                                                <h3>{t('detailsToefl.tab2.card2.title')}</h3>
                                                                <p>{t('detailsToefl.tab2.card2.subtitle')}</p>
                                                            </div>
                                                            <ul class="feature-list mb_40 clearfix">
                                                                <li>
                                                                    <h5>{t('detailsToefl.tab2.card2.feature.testCenter')}</h5>
                                                                    <span>{t('detailsToefl.tab2.card2.feature.testCenter.desc')}</span>
                                                                </li>
                                                                <li>
                                                                    <h5>{t('detailsToefl.tab2.card2.feature.homeEdition')}</h5>
                                                                    <span>{t('detailsToefl.tab2.card2.feature.homeEdition.desc')}</span>
                                                                </li>
                                                                <li>
                                                                    <h5>{t('detailsToefl.tab2.card2.feature.identicalTest')}</h5>
                                                                    <span>{t('detailsToefl.tab2.card2.feature.identicalTest.desc')}</span>
                                                                </li>
                                                            </ul>
                                                            <div class="btn-box">
                                                                <Link href="https://www.ets.org/toefl.html" target="_blank"><span class="price">{t('detailsToefl.tab2.card2.button.register')}</span><span class="text">{t('detailsToefl.tab2.card2.button.bookTest')}</span></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class={activeIndex == 3 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                                    <div class="content-box">
                                        <div class="content-one mb_40">
                                            <div class="row align-items-center">
                                                <div class="col-lg-7 col-md-6 col-sm-12 text-column">
                                                    <div class="text">
                                                        <h3>{t('detailsToefl.tab3.heading')}</h3>
                                                        <p>{t('detailsToefl.tab3.p1')}</p>
                                                        <p>{t('detailsToefl.tab3.p2')}</p>
                                                    </div>
                                                </div>
                                                <div class="col-lg-5 col-md-6 col-sm-12 image-column">
                                                    <figure class="image-box"><img src="assets/images/resource/coaching-12.jpg" alt="TOEFL Test Report Form sample" /></figure>
                                                </div>
                                            </div>
                                            <div class="text mt_20">
                                                <p>{t('detailsToefl.tab3.p3')}</p>
                                            </div>
                                        </div>
                                        <div class="content-two pb_30">
                                            <div class="row clearfix">
                                                <div class="col-lg-6 col-md-6 col-sm-12 single-column">
                                                    <div class="single-item">
                                                        <figure class="image-box"><img src="assets/images/resource/coaching-13.jpg" alt="A person receiving their test results online." /></figure>
                                                        <div class="lower-content">
                                                            <div class="title-box">
                                                                <div class="icon-box"><i class="icon-51"></i></div>
                                                                <h3>{t('detailsToefl.tab3.card1.title')}</h3>
                                                                <p>{t('detailsToefl.tab3.card1.subtitle')}</p>
                                                            </div>
                                                            <ul class="feature-list mb_40 clearfix">
                                                                <li>
                                                                    <h5>{t('detailsToefl.tab3.card1.feature.onlineAccess')}</h5>
                                                                    <span>{t('detailsToefl.tab3.card1.feature.onlineAccess.desc')}</span>
                                                                </li>
                                                                <li>
                                                                    <h5>{t('detailsToefl.tab3.card1.feature.sendingScores')}</h5>
                                                                    <span>{t('detailsToefl.tab3.card1.feature.sendingScores.desc')}</span>
                                                                </li>
                                                                <li>
                                                                    <h5>{t('detailsToefl.tab3.card1.feature.secureVerification')}</h5>
                                                                    <span>{t('detailsToefl.tab3.card1.feature.secureVerification.desc')}</span>
                                                                </li>
                                                            </ul>
                                                            <div class="btn-box">
                                                                <Link href="https://www.ets.org/toefl/test-takers/ibt/scores/get-scores.html" target="_blank"><span class="price">{t('detailsToefl.tab3.card1.button.details')}</span><span class="text">{t('detailsToefl.tab3.card1.button.scoresExplained')}</span></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6 col-md-6 col-sm-12 single-column">
                                                    <div class="single-item">
                                                        <figure class="image-box"><img src="assets/images/resource/coaching-14.jpg" alt="A chart showing score progression" /></figure>
                                                        <div class="lower-content">
                                                            <div class="title-box">
                                                                <div class="icon-box"><i class="icon-51"></i></div>
                                                                <h3>{t('detailsToefl.tab3.card2.title')}</h3>
                                                                <p>{t('detailsToefl.tab3.card2.subtitle')}</p>
                                                            </div>
                                                            <ul class="feature-list mb_40 clearfix">
                                                                <li>
                                                                    <h5>{t('detailsToefl.tab3.card2.feature.utilizeResources')}</h5>
                                                                    <span>{t('detailsToefl.tab3.card2.feature.utilizeResources.desc')}</span>
                                                                </li>
                                                                <li>
                                                                    <h5>{t('detailsToefl.tab3.card2.feature.focusSkills')}</h5>
                                                                    <span>{t('detailsToefl.tab3.card2.feature.focusSkills.desc')}</span>
                                                                </li>
                                                                <li>
                                                                    <h5>{t('detailsToefl.tab3.card2.feature.retake')}</h5>
                                                                    <span>{t('detailsToefl.tab3.card2.feature.retake.desc')}</span>
                                                                </li>
                                                            </ul>
                                                            <div class="btn-box">
                                                                <Link href="https://www.ets.org/toefl.html" target="_blank"><span class="price">{t('detailsToefl.tab3.card2.button.register')}</span><span class="text">{t('detailsToefl.tab3.card2.button.bookTest')}</span></Link>
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
                        <TestCenterMap/>
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


