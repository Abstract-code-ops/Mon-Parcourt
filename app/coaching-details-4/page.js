"use client";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import ExamCalendar from '@/components/elements/ExamCalendar';
import dynamic from 'next/dynamic';
const TestCenterMap = dynamic(() => import('@/components/elements/TestCenterMap'), { ssr: false });

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ContactExp from "@/components/elements/contactExp";

export default function Home() {
    
    const { t } = useTranslation('coaching');
    const [activeIndex, setActiveIndex] = useState(1);

    const handleOnClick = (index) => setActiveIndex(index);

    return (
        <>
            <Layout
                headerStyle={1}
                footerStyle={1}
                breadcrumbTitle={t('detailsDaf.breadcrumbTitle')}
                bgImage="url(/assets/images/background/coaching-breadcrumb.jpg)"
            >
                {/* coaching details section */}
                <section className="coaching-details p_relative">
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                                <div className="coaching-sidebar default-sidebar">
                                    <div className="sidebar-widget category-widget">
                                        <ul className="category-list clearfix">
                                            <li>
                                                <Link href="coaching-details">{t('details.sidebar.categories.ielts')}</Link>
                                            </li>
                                            <li>
                                                <Link href="coaching-details-2">{t('details.sidebar.categories.pte')}</Link>
                                            </li>
                                            <li>
                                                <Link href="coaching-details-3">{t('details.sidebar.categories.toefl')}</Link>
                                            </li>
                                            <li>
                                                <Link href="coaching-details-4" className="current">{t('details.sidebar.categories.daf')}</Link>
                                            </li>
                                            <li>
                                                <Link href="coaching-details-5">{t('details.sidebar.categories.tcf')}</Link>
                                            </li>
                                            <li>
                                                <Link href="coaching-details-6">{t('details.sidebar.categories.sat')}</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="sidebar-widget travel-widget">
                                        <div className="widget-content p_relative">
                                            <figure className="image-box">
                                                <img src="/assets/images/resource/travel-1.jpg" alt="" />
                                            </figure>
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
                                            month={11}
                                            year={2024}
                                            highlightDates={[12, 20]}
                                            examType="DAF"
                                            referenceLink="https://www.uni-regensburg.de/center-language-communication/german-as-a-foreign-language/exams/testdaf/index.html"
                                            referenceText="DAF Official Test Centers"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                                <div className="coaching-details-content">
                                    <div className="upper-box mb_40">
                                        <h2>{t('detailsDaf.header.title')}</h2>
                                        <div className="text-box mb_40">
                                            <p>{t('detailsDaf.header.intro1')}</p>
                                            <ul className="clearfix">
                                                <li><Link href="javascript:void(0)" style={{cursor: 'default'}}><span>1</span>{t('details.header.list.immigrate')}</Link></li>
                                                <li><Link href="javascript:void(0)" style={{cursor: 'default'}}><span>2</span>{t('details.header.list.work')}</Link></li>
                                                <li><Link href="javascript:void(0)" style={{cursor: 'default'}}><span>3</span>{t('details.header.list.study')}</Link></li>
                                                <li><Link href="javascript:void(0)" style={{cursor: 'default'}}><span>4</span>{t('details.header.list.citizenship')}</Link></li>
                                            </ul>
                                            {/* <ul className="clearfix" style={{"padding": "0 1em"}}>
                                                <li>
                                                    <Link href="#" style={{"cursor": "default"}}>
                                                        <span>1</span>
                                                        {t('detailsDaf.header.list.universityAdmission')}
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#" style={{"cursor": "default"}}>
                                                        <span>2</span>
                                                        {t('detailsDaf.header.list.academicProof')}
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#" style={{"cursor": "default"}}>
                                                        <span>3</span>
                                                        {t('detailsDaf.header.list.studyGermany')}
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#" style={{"cursor": "default"}}>
                                                        <span>4</span>
                                                        {t('detailsDaf.header.list.languageProficiency')}
                                                    </Link>
                                                </li>
                                            </ul> */}
                                        </div>
                                        <figure className="image-box">
                                            <img
                                                src="/assets/images/resource/coaching-18.jpg"
                                                alt={t('detailsDaf.header.imageAlt')}
                                            />
                                        </figure>
                                    </div>
                                    <div className="tabs-box">
                                        <div className="tab-btn-box mb_40">
                                            <ul className="tab-btns tab-buttons clearfix" role="tablist">
                                                <li className="nav-link" onClick={() => handleOnClick(1)}>
                                                    <a className={activeIndex == 1 ? 'nav-link active' : 'nav-link'}>
                                                        <span>{t('details.tabs.education')}</span>
                                                    </a>
                                                </li>
                                                <li className="nav-item" onClick={() => handleOnClick(2)}>
                                                    <a className={activeIndex == 2 ? 'nav-link active' : 'nav-link'}>
                                                        <span>{t('details.tabs.immigration')}</span>
                                                    </a>
                                                </li>
                                                <li className="nav-item" onClick={() => handleOnClick(3)}>
                                                    <a className={activeIndex == 3 ? 'nav-link active' : 'nav-link'}>
                                                        <span>{t('details.tabs.scoring')}</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div
                                            className="tab-content wow fadeInUp"
                                            data-wow-delay="200ms"
                                            data-wow-duration="1200ms"
                                        >
                                            {/* Tab 1 */}
                                            <div
                                                className={
                                                    activeIndex == 1
                                                        ? 'tab-pane fadeInUp animated show active'
                                                        : 'tab-pane fadeInUp animated'
                                                }
                                            >
                                                <div className="content-box">
                                                    <div className="content-one mb_40">
                                                        <div className="row align-items-center">
                                                            <div className="col-lg-7 col-md-6 col-sm-12 text-column">
                                                                <div className="text">
                                                                    <h3>{t('detailsDaf.tab1.heading')}</h3>
                                                                    <p>{t('detailsDaf.tab1.p1')}</p>
                                                                    <p>{t('detailsDaf.tab1.p2')}</p>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-5 col-md-6 col-sm-12 image-column">
                                                                <figure className="image-box">
                                                                    <img
                                                                        src="/assets/images/resource/coaching-12.jpg"
                                                                        alt={t('detailsDaf.header.imageAlt')}
                                                                    />
                                                                </figure>
                                                            </div>
                                                        </div>
                                                        <div className="text mt_20">
                                                            <p>{t('detailsDaf.tab1.p3')}</p>
                                                        </div>
                                                    </div>
                                                    <div className="content-two pb_30">
                                                        <div className="row clearfix">
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <figure className="image-box">
                                                                        <img
                                                                            src="/assets/images/resource/coaching-13.jpg"
                                                                            alt={t('detailsDaf.tab1.card1.title')}
                                                                        />
                                                                    </figure>
                                                                    <div className="lower-content">
                                                                        <div className="title-box">
                                                                            <div className="icon-box">
                                                                                <i className="icon-51"></i>
                                                                            </div>
                                                                            <h3>{t('detailsDaf.tab1.card1.title')}</h3>
                                                                            <p>{t('detailsDaf.tab1.card1.subtitle')}</p>
                                                                        </div>
                                                                        <ul className="feature-list mb_40 clearfix">
                                                                            <li>
                                                                                <h5>{t('detailsDaf.tab1.card1.feature.readingComprehension')}</h5>
                                                                                <span>
                                                                                    {t('detailsDaf.tab1.card1.feature.readingComprehension.desc')}
                                                                                </span>
                                                                            </li>
                                                                            <li>
                                                                                <h5>{t('detailsDaf.tab1.card1.feature.listeningComprehension')}</h5>
                                                                                <span>
                                                                                    {t('detailsDaf.tab1.card1.feature.listeningComprehension.desc')}
                                                                                </span>
                                                                            </li>
                                                                            <li>
                                                                                <h5>{t('detailsDaf.tab1.card1.feature.contextFocus')}</h5>
                                                                                <span>
                                                                                    {t('detailsDaf.tab1.card1.feature.contextFocus.desc')}
                                                                                </span>
                                                                            </li>
                                                                        </ul>
                                                                        <div className="btn-box">
                                                                            <a
                                                                                href="https://www.testdaf.de/de/teilnehmende/der-papierbasierte-testdaf/vorbereitung-auf-den-papierbasierten-testdaf/"
                                                                                target="_blank"
                                                                            >
                                                                                <span className="price">
                                                                                    {t('detailsDaf.tab1.card1.button.practice')}
                                                                                </span>
                                                                                <span className="text">
                                                                                    {t('detailsDaf.tab1.card1.button.freeMaterials')}
                                                                                </span>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <figure className="image-box">
                                                                        <img
                                                                            src="/assets/images/resource/coaching-14.jpg"
                                                                            alt={t('detailsDaf.tab1.card2.title')}
                                                                        />
                                                                    </figure>
                                                                    <div className="lower-content">
                                                                        <div className="title-box">
                                                                            <div className="icon-box">
                                                                                <i className="icon-51"></i>
                                                                            </div>
                                                                            <h3>{t('detailsDaf.tab1.card2.title')}</h3>
                                                                            <p>{t('detailsDaf.tab1.card2.subtitle')}</p>
                                                                        </div>
                                                                        <ul className="feature-list mb_40 clearfix">
                                                                            <li>
                                                                                <h5>{t('detailsDaf.tab1.card2.feature.writtenProduction')}</h5>
                                                                                <span>
                                                                                    {t('detailsDaf.tab1.card2.feature.writtenProduction.desc')}
                                                                                </span>
                                                                            </li>
                                                                            <li>
                                                                                <h5>{t('detailsDaf.tab1.card2.feature.oralProduction')}</h5>
                                                                                <span>
                                                                                    {t('detailsDaf.tab1.card2.feature.oralProduction.desc')}
                                                                                </span>
                                                                            </li>
                                                                            <li>
                                                                                <h5>{t('detailsDaf.tab1.card2.feature.computerBasedSpeaking')}</h5>
                                                                                <span>
                                                                                    {t('detailsDaf.tab1.card2.feature.computerBasedSpeaking.desc')}
                                                                                </span>
                                                                            </li>
                                                                        </ul>
                                                                        <div className="btn-box">
                                                                            <a href="https://www.testdaf.de/de/" target="_blank">
                                                                                <span className="price">
                                                                                    {t('detailsDaf.tab1.card2.button.learnMore')}
                                                                                </span>
                                                                                <span className="text">
                                                                                    {t('detailsDaf.tab1.card2.button.aboutExam')}
                                                                                </span>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Tab 2 */}
                                            <div
                                                className={
                                                    activeIndex == 2
                                                        ? 'tab-pane fadeInUp animated show active'
                                                        : 'tab-pane fadeInUp animated'
                                                }
                                            >
                                                <div className="content-box">
                                                    <div className="content-one mb_40">
                                                        <div className="row align-items-center">
                                                            <div className="col-lg-7 col-md-6 col-sm-12 text-column">
                                                                <div className="text">
                                                                    <h3>{t('detailsDaf.tab2.heading')}</h3>
                                                                    <p>{t('detailsDaf.tab2.p1')}</p>
                                                                    <p>{t('detailsDaf.tab2.p2')}</p>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-5 col-md-6 col-sm-12 image-column">
                                                                <figure className="image-box">
                                                                    <img
                                                                        src="/assets/images/resource/coaching-12.jpg"
                                                                        alt={t('detailsDaf.header.imageAlt')}
                                                                    />
                                                                </figure>
                                                            </div>
                                                        </div>
                                                        <div className="text mt_20">
                                                            <p>{t('detailsDaf.tab2.p3')}</p>
                                                        </div>
                                                    </div>
                                                    <div className="content-two pb_30">
                                                        <div className="row clearfix">
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <figure className="image-box">
                                                                        <img
                                                                            src="/assets/images/resource/coaching-13.jpg"
                                                                            alt={t('detailsDaf.tab2.card1.title')}
                                                                        />
                                                                    </figure>
                                                                    <div className="lower-content">
                                                                        <div className="title-box">
                                                                            <div className="icon-box">
                                                                                <i className="icon-51"></i>
                                                                            </div>
                                                                            <h3>{t('detailsDaf.tab2.card1.title')}</h3>
                                                                            <p>{t('detailsDaf.tab2.card1.subtitle')}</p>
                                                                        </div>
                                                                        <ul className="feature-list mb_40 clearfix">
                                                                            <li>
                                                                                <h5>{t('detailsDaf.tab2.card1.feature.goldStandard')}</h5>
                                                                                <span>
                                                                                    {t('detailsDaf.tab2.card1.feature.goldStandard.desc')}
                                                                                </span>
                                                                            </li>
                                                                            <li>
                                                                                <h5>{t('detailsDaf.tab2.card1.feature.unlocksAdmission')}</h5>
                                                                                <span>
                                                                                    {t('detailsDaf.tab2.card1.feature.unlocksAdmission.desc')}
                                                                                </span>
                                                                            </li>
                                                                            <li>
                                                                                <h5>{t('detailsDaf.tab2.card1.feature.clearRequirements')}</h5>
                                                                                <span>
                                                                                    {t('detailsDaf.tab2.card1.feature.clearRequirements.desc')}
                                                                                </span>
                                                                            </li>
                                                                        </ul>
                                                                        <div className="btn-box">
                                                                            <a href="https://www.daad.de/en/the-daad/" target="_blank">
                                                                                <span className="price">
                                                                                    {t('detailsDaf.tab2.card1.button.explore')}
                                                                                </span>
                                                                                <span className="text">
                                                                                    {t('detailsDaf.tab2.card1.button.daadRequirements')}
                                                                                </span>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <figure className="image-box">
                                                                        <img
                                                                            src="/assets/images/resource/coaching-14.jpg"
                                                                            alt={t('detailsDaf.tab2.card2.title')}
                                                                        />
                                                                    </figure>
                                                                    <div className="lower-content">
                                                                        <div className="title-box">
                                                                            <div className="icon-box">
                                                                                <i className="icon-51"></i>
                                                                            </div>
                                                                            <h3>{t('detailsDaf.tab2.card2.title')}</h3>
                                                                            <p>{t('detailsDaf.tab2.card2.subtitle')}</p>
                                                                        </div>
                                                                        <ul className="feature-list mb_40 clearfix">
                                                                            <li>
                                                                                <h5>{t('detailsDaf.tab2.card2.feature.admissionPrerequisite')}</h5>
                                                                                <span>
                                                                                    {t('detailsDaf.tab2.card2.feature.admissionPrerequisite.desc')}
                                                                                </span>
                                                                            </li>
                                                                            <li>
                                                                                <h5>{t('detailsDaf.tab2.card2.feature.coreVisaDocument')}</h5>
                                                                                <span>
                                                                                    {t('detailsDaf.tab2.card2.feature.coreVisaDocument.desc')}
                                                                                </span>
                                                                            </li>
                                                                            <li>
                                                                                <h5>{t('detailsDaf.tab2.card2.feature.provesLanguageAbility')}</h5>
                                                                                <span>
                                                                                    {t('detailsDaf.tab2.card2.feature.provesLanguageAbility.desc')}
                                                                                </span>
                                                                            </li>
                                                                        </ul>
                                                                        <div className="btn-box">
                                                                            <a
                                                                                href="https://www.testdaf.de/de/teilnehmende/mein-testdaf/testdaf-termine-und-anmeldung/"
                                                                                target="_blank"
                                                                            >
                                                                                <span className="price">
                                                                                    {t('detailsDaf.tab2.card2.button.register')}
                                                                                </span>
                                                                                <span className="text">
                                                                                    {t('detailsDaf.tab2.card2.button.appointment')}
                                                                                </span>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Tab 3 */}
                                            <div
                                                className={
                                                    activeIndex == 3
                                                        ? 'tab-pane fadeInUp animated show active'
                                                        : 'tab-pane fadeInUp animated'
                                                }
                                            >
                                                <div className="content-box">
                                                    <div className="content-one mb_40">
                                                        <div className="row align-items-center">
                                                            <div className="col-lg-7 col-md-6 col-sm-12 text-column">
                                                                <div className="text">
                                                                    <h3>{t('detailsDaf.tab3.heading')}</h3>
                                                                    <p>{t('detailsDaf.tab3.p1')}</p>
                                                                    <p>{t('detailsDaf.tab3.p2')}</p>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-5 col-md-6 col-sm-12 image-column">
                                                                <figure className="image-box">
                                                                    <img
                                                                        src="/assets/images/resource/coaching-12.jpg"
                                                                        alt={t('detailsDaf.tab3.card1.title')}
                                                                    />
                                                                </figure>
                                                            </div>
                                                        </div>
                                                        <div className="text mt_20">
                                                            <p>{t('detailsDaf.tab3.p3')}</p>
                                                        </div>
                                                    </div>
                                                    <div className="content-two pb_30">
                                                        <div className="row clearfix">
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <figure className="image-box">
                                                                        <img
                                                                            src="/assets/images/resource/coaching-13.jpg"
                                                                            alt={t('detailsDaf.tab3.card1.title')}
                                                                        />
                                                                    </figure>
                                                                    <div className="lower-content">
                                                                        <div className="title-box">
                                                                            <div className="icon-box">
                                                                                <i className="icon-51"></i>
                                                                            </div>
                                                                            <h3>{t('detailsDaf.tab3.card1.title')}</h3>
                                                                            <p>{t('detailsDaf.tab3.card1.subtitle')}</p>
                                                                        </div>
                                                                        <ul className="feature-list mb_40 clearfix">
                                                                            <li>
                                                                                <h5>{t('detailsDaf.tab3.card1.feature.onlinePortal')}</h5>
                                                                                <span>
                                                                                    {t('detailsDaf.tab3.card1.feature.onlinePortal.desc')}
                                                                                </span>
                                                                            </li>
                                                                            <li>
                                                                                <h5>{t('detailsDaf.tab3.card1.feature.officialCertificate')}</h5>
                                                                                <span>
                                                                                    {t('detailsDaf.tab3.card1.feature.officialCertificate.desc')}
                                                                                </span>
                                                                            </li>
                                                                            <li>
                                                                                <h5>{t('detailsDaf.tab3.card1.feature.unlimitedValidity')}</h5>
                                                                                <span>
                                                                                    {t('detailsDaf.tab3.card1.feature.unlimitedValidity.desc')}
                                                                                </span>
                                                                            </li>
                                                                        </ul>
                                                                        <div className="btn-box">
                                                                            <a
                                                                                href="https://www.testdaf.de/de/teilnehmende/der-digitale-testdaf-ueberblick/"
                                                                                target="_blank"
                                                                            >
                                                                                <span className="price">
                                                                                    {t('detailsDaf.tab3.card1.button.details')}
                                                                                </span>
                                                                                <span className="text">
                                                                                    {t('detailsDaf.tab3.card1.button.resultsExplained')}
                                                                                </span>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <figure className="image-box">
                                                                        <img
                                                                            src="/assets/images/resource/coaching-14.jpg"
                                                                            alt={t('detailsDaf.tab3.card2.title')}
                                                                        />
                                                                    </figure>
                                                                    <div className="lower-content">
                                                                        <div className="title-box">
                                                                            <div className="icon-box">
                                                                                <i className="icon-51"></i>
                                                                            </div>
                                                                            <h3>{t('detailsDaf.tab3.card2.title')}</h3>
                                                                            <p>{t('detailsDaf.tab3.card2.subtitle')}</p>
                                                                        </div>
                                                                        <ul className="feature-list mb_40 clearfix">
                                                                            <li>
                                                                                <h5>{t('detailsDaf.tab3.card2.feature.practiceMaterials')}</h5>
                                                                                <span>
                                                                                    {t('detailsDaf.tab3.card2.feature.practiceMaterials.desc')}
                                                                                </span>
                                                                            </li>
                                                                            <li>
                                                                                <h5>{t('detailsDaf.tab3.card2.feature.focusAllSkills')}</h5>
                                                                                <span>
                                                                                    {t('detailsDaf.tab3.card2.feature.focusAllSkills.desc')}
                                                                                </span>
                                                                            </li>
                                                                            <li>
                                                                                <h5>{t('detailsDaf.tab3.card2.feature.retakeWholeTest')}</h5>
                                                                                <span>
                                                                                    {t('detailsDaf.tab3.card2.feature.retakeWholeTest.desc')}
                                                                                </span>
                                                                            </li>
                                                                        </ul>
                                                                        <div className="btn-box">
                                                                            <a
                                                                                href="https://www.testdaf.de/de/teilnehmende/der-digitale-testdaf-ueberblick/"
                                                                                target="_blank"
                                                                            >
                                                                                <span className="price">
                                                                                    {t('detailsDaf.tab3.card2.button.register')}
                                                                                </span>
                                                                                <span className="text">
                                                                                    {t('detailsDaf.tab3.card2.button.bookTest')}
                                                                                </span>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <TestCenterMap />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* coaching details end */}
            </Layout>
        </>
    );
}


