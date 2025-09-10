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

    const { t } = useTranslation('coaching');
    const [activeIndex, setActiveIndex] = useState(1)

    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle={t('detailsPte.breadcrumbTitle')} bgImage="url(/assets/images/background/coaching-breadcrumb.jpg)">
                {/* coaching details section */}
                <section className="coaching-details p_relative">
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                        <div className="coaching-sidebar default-sidebar">
                            <div className="sidebar-widget category-widget">
                                <ul className="category-list clearfix">
                    <li><Link href="coaching-details">{t('details.sidebar.categories.ielts')}</Link></li>
                    <li><Link href="coaching-details-2" className="current">{t('details.sidebar.categories.pte')}</Link></li>
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
                                    highlightDates={[5, 3]}
                                    examType="PTE"
                                    referenceLink="https://www.pearsonpte.com/book-now"
                                    referenceText="PTE Official Test Booking"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                        <div className="coaching-details-content">
                            <div className="upper-box mb_40">
                                <h2>{t('detailsPte.header.title')}</h2>
                                <div className="text-box mb_40">
                                    <p>{t('detailsPte.header.intro1')}</p>
                                    <ul className="clearfix">
                                        <li><Link href="javascript:void(0)" style={{cursor: 'default'}}><span>1</span>{t('details.header.list.immigrate')}</Link></li>
                                        <li><Link href="javascript:void(0)" style={{cursor: 'default'}}><span>2</span>{t('details.header.list.work')}</Link></li>
                                        <li><Link href="javascript:void(0)" style={{cursor: 'default'}}><span>3</span>{t('details.header.list.study')}</Link></li>
                                        <li><Link href="javascript:void(0)" style={{cursor: 'default'}}><span>4</span>{t('details.header.list.citizenship')}</Link></li>
                                    </ul>
                                </div>
                                <figure className="image-box"><img src="assets/images/resource/coaching-16.jpg" alt={t('detailsPte.header.imageAlt')} /></figure>
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
                                                        <h3>{t('detailsPte.tab1.heading')}</h3>
                                                            <p>{t('detailsPte.tab1.p1')}</p>
                                                            <p>{t('detailsPte.tab1.p2')}</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-5 col-md-6 col-sm-12 image-column">
                                                        <figure className="image-box"><img src="assets/images/resource/coaching-12.jpg" alt="University campus" /></figure>
                                                    </div>
                                                </div>
                                                <div className="text mt_20">
                                                    <p>{t('detailsPte.tab1.p3')}</p>
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
                                                                        <h3>{t('detailsPte.tab1.card1.title')}</h3>
                                                                    <p>{t('detailsPte.tab1.card1.subtitle')}</p>
                                                                 </div>
                                                                 <ul className="feature-list mb_40 clearfix">
                                                                    <li>
                                                                        <h5>{t('detailsPte.tab1.card1.feature.section')}</h5>
                                                                        <span>{t('detailsPte.tab1.card1.feature.section.desc')}</span>
                                                                    </li>
                                                                    <li>
                                                                        <h5>{t('detailsPte.tab1.card1.feature.skillsAssessed')}</h5>
                                                                        <span>{t('detailsPte.tab1.card1.feature.skillsAssessed.desc')}</span>
                                                                    </li>
                                                                    <li>
                                                                        <h5>{t('detailsPte.tab1.card1.feature.computerBased')}</h5>
                                                                        <span>{t('detailsPte.tab1.card1.feature.computerBased.desc')}</span>
                                                                    </li>
                                                                 </ul>
                                                                <div className="btn-box">
                                                                    <Link href="https://pearsonpte.com/preparation/" target="_blank"><span className="price">{t('detailsPte.tab1.card1.button.practice')}</span><span className="text">{t('detailsPte.tab1.card1.button.freeMaterials')}</span></Link>
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
                                                                    <h3>{t('detailsPte.tab1.card2.title')}</h3>
                                                                    <p>{t('detailsPte.tab1.card2.subtitle')}</p>
                                                                </div>
                                                                <ul className="feature-list mb_40 clearfix">
                                                                    <li>
                                                                        <h5>{t('detailsPte.tab1.card2.feature.academicWriting')}</h5>
                                                                        <span>{t('detailsPte.tab1.card2.feature.academicWriting.desc')}</span>
                                                                    </li>
                                                                    <li>
                                                                        <h5>{t('detailsPte.tab1.card2.feature.speaking')}</h5>
                                                                        <span>{t('detailsPte.tab1.card2.feature.speaking.desc')}</span>
                                                                    </li>
                                                                    <li>
                                                                        <h5>{t('detailsPte.tab1.card2.feature.assessment')}</h5>
                                                                        <span>{t('detailsPte.tab1.card2.feature.assessment.desc')}</span>
                                                                    </li>
                                                                </ul>
                                                                <div className="btn-box">
                                                                    <Link href="https://pearsonpte.com/preparation/" target="_blank"><span className="price">{t('detailsPte.tab1.card2.button.practice')}</span><span className="text">{t('detailsPte.tab1.card2.button.appointment')}</span></Link>
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
                                                            <h3>{t('detailsPte.tab2.heading')}</h3>
                                                            <p>{t('detailsPte.tab2.p1')}</p>
                                                            <p>{t('detailsPte.tab2.p2')}</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-5 col-md-6 col-sm-12 image-column">
                                                        <figure className="image-box"><img src="assets/images/resource/coaching-12.jpg" alt="Cityscape of a major English-speaking city" /></figure>
                                                    </div>
                                                </div>
                                                <div className="text mt_20">
                                                    <p>{t('detailsPte.tab2.p3')}</p>
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
                                                                        <h3>{t('detailsPte.tab2.card1.title')}</h3>
                                                                        <p>{t('detailsPte.tab2.card1.subtitle')}</p>
                                                                </div>
                                                                <ul className="feature-list mb_40 clearfix">
                                                                    <li>
                                                                        <h5>{t('detailsPte.tab2.card1.feature.singleTest')}</h5>
                                                                        <span>{t('detailsPte.tab2.card1.feature.singleTest.desc')}</span>
                                                                    </li>
                                                                    <li>
                                                                        <h5>{t('detailsPte.tab2.card1.feature.authenticMaterials')}</h5>
                                                                        <span>{t('detailsPte.tab2.card1.feature.authenticMaterials.desc')}</span>
                                                                    </li>
                                                                    <li>
                                                                        <h5>{t('detailsPte.tab2.card1.feature.integratedSkills')}</h5>
                                                                        <span>{t('detailsPte.tab2.card1.feature.integratedSkills.desc')}</span>
                                                                    </li>
                                                                </ul>
                                                                <div className="btn-box">
                                                                    <Link href="https://www.pearsonpte.com/selt-tests" target="_blank"><span className="price">{t('detailsPte.tab2.card1.button.practice')}</span><span className="text">{t('detailsPte.tab2.card1.button.appointment')}</span></Link>
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
                                                                    <h3>{t('detailsPte.tab2.card2.title')}</h3>
                                                                    <p>{t('detailsPte.tab2.card2.subtitle')}</p>
                                                                </div>
                                                                <ul className="feature-list mb_40 clearfix">
                                                                    <li>
                                                                        <h5>{t('detailsPte.tab2.card2.feature.generalWriting')}</h5>
                                                                        <span>{t('detailsPte.tab2.card2.feature.generalWriting.desc')}</span>
                                                                    </li>
                                                                    <li>
                                                                        <h5>{t('detailsPte.tab2.card2.feature.speaking')}</h5>
                                                                        <span>{t('detailsPte.tab2.card2.feature.speaking.desc')}</span>
                                                                    </li>
                                                                    <li>
                                                                        <h5>{t('detailsPte.tab2.card2.feature.assessment')}</h5>
                                                                        <span>{t('detailsPte.tab2.card2.feature.assessment.desc')}</span>
                                                                    </li>
                                                                </ul>
                                                                <div className="btn-box">
                                                                    <Link href="https://www.pearsonpte.com/selt-tests" target="_blank"><span className="price">{t('detailsPte.tab2.card2.button.practice')}</span><span className="text">{t('detailsPte.tab2.card2.button.appointment')}</span></Link>
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
                                <h3>{t('detailsPte.tab3.heading')}</h3>
                                <p>{t('detailsPte.tab3.p1')}</p>
                                <p>{t('detailsPte.tab3.p2')}</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-5 col-md-6 col-sm-12 image-column">
                                                        <figure className="image-box"><img src="assets/images/resource/coaching-12.jpg" alt="IELTS Test Report Form sample" /></figure>
                                                    </div>
                                                </div>
                                                <div className="text mt_20">
                            <p>{t('detailsPte.tab3.p3')}</p>
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
                                                                    <h3>{t('detailsPte.tab3.card1.title')}</h3>
                                                                    <p>{t('detailsPte.tab3.card1.subtitle')}</p>
                                                                </div>
                                                                <ul className="feature-list mb_40 clearfix">
                                                                    <li>
                                                                        <h5>{t('detailsPte.tab3.card1.feature.onlineAccess')}</h5>
                                                                        <span>{t('detailsPte.tab3.card1.feature.onlineAccess.desc')}</span>
                                                                    </li>
                                                                    <li>
                                                                        <h5>{t('detailsPte.tab3.card1.feature.sendingScores')}</h5>
                                                                        <span>{t('detailsPte.tab3.card1.feature.sendingScores.desc')}</span>
                                                                    </li>
                                                                    <li>
                                                                        <h5>{t('detailsPte.tab3.card1.feature.validation')}</h5>
                                                                        <span>{t('detailsPte.tab3.card1.feature.validation.desc')}</span>
                                                                    </li>
                                                                </ul>
                                                                <div className="btn-box">
                                                                    <Link href="https://pearsonpte.com/pte-academic/results/" target="_blank"><span className="price">{t('detailsPte.tab3.card1.button.details')}</span><span className="text">{t('detailsPte.tab3.card1.button.resultsExplained')}</span></Link>
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
                                                                    <h3>{t('detailsPte.tab3.card2.title')}</h3>
                                                                    <p>{t('detailsPte.tab3.card2.subtitle')}</p>
                                                                </div>
                                                                <ul className="feature-list mb_40 clearfix">
                                                                    <li>
                                                                        <h5>{t('detailsPte.tab3.card2.feature.utilizeResources')}</h5>
                                                                        <span>{t('detailsPte.tab3.card2.feature.utilizeResources.desc')}</span>
                                                                    </li>
                                                                    <li>
                                                                        <h5>{t('detailsPte.tab3.card2.feature.utilizeResources2')}</h5>
                                                                        <span>{t('detailsPte.tab3.card2.feature.utilizeResources2.desc')}</span>
                                                                    </li>
                                                                    <li>
                                                                        <h5>{t('detailsPte.tab3.card2.feature.retake')}</h5>
                                                                        <span>{t('detailsPte.tab3.card2.feature.retake.desc')}</span>
                                                                    </li>
                                                                </ul>
                                                                <div className="btn-box">
                                                                    <Link href="https://pearsonpte.com/book-now/" target="_blank"><span className="price">{t('detailsPte.tab3.card2.button.register')}</span><span className="text">{t('detailsPte.tab3.card2.button.bookTest')}</span></Link>
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


