'use client'
import Link from "next/link";
import Layout from "@/components/layout/Layout"

import { useTranslation, Trans } from 'react-i18next'
import ContactExp from "@/components/elements/contactExp";

export default function Home() {
    const { t } = useTranslation('visa')

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle={t('breadcrumb.workingVisas')} bgImage="url(assets/images/background/visa-breadcrumb.jpg)">
                {/* visa details section */}
                <section className="visa-details p_relative">
                <div className="auto-container">
                    <div className="row clearfix">
                    <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                        <div className="visa-sidebar default-sidebar">
                        <div className="sidebar-widget category-widget">
                            <ul className="category-list clearfix">
                            <li><Link href="visa-details" >{t('breadcrumb.businessVisa')}</Link></li>
                            <li><Link href="visa-details-2" className="current">{t('breadcrumb.workingVisas')}</Link></li>
                            <li><Link href="visa-details-3">{t('breadcrumb.residenceVisas')}</Link></li>
                            <li><Link href="visa-details-4">{t('breadcrumb.studentVisas')}</Link></li>
                            <li><Link href="visa-details-5">{t('breadcrumb.spouseFamilyVisas')}</Link></li>
                            <li><Link href="visa-details-6">{t('breadcrumb.touristVisas')}</Link></li>
                            </ul>
                        </div>
                        <div className="sidebar-widget travel-widget">
                            <div className="widget-content p_relative">
                            <figure className="image-box"><img src="assets/images/resource/travel-1.jpg" alt="" /></figure>
                            <div className="content-box">
                                <h3>{t('sidebar.travelPass')}</h3>
                                <ul className="list-item clearfix">
                                <li>{t('sidebar.applicationForm')}</li>
                                <li>{t('sidebar.checklist')}</li>
                                <li>{t('sidebar.guidelines')}</li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div className="sidebar-widget download-widget">
                            <div className="widget-content">
                            <div className="icon-shape"><img src="assets/images/icons/icon-15.png" alt="" /></div>
                            <h3><Trans i18nKey="sidebar.eligibilityTitle" ns="visa" components={{ br: <br /> }} /></h3>
                            <ul className="download-list clearfix">
                                <li>
                                <Link href="https://www.visahq.com/fr/" target="_blank" rel="noopener noreferrer">
                                    <i className="icon-18"></i>
                                    <p>{t('sidebar.eligibility')}</p>
                                    <span>{t('sidebar.externalLink')}</span>
                                </Link>
                                </li>
                                <li>
                                <Link href="https://visa.vfsglobal.com/cmr/en/can/book-an-appointment" target="_blank" rel="noopener noreferrer">
                                    <i className="icon-18"></i>
                                    <p>{t('sidebar.onlineAppointment')}</p>
                                    <span>{t('sidebar.externalLink')}</span>
                                </Link>
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                        <div className="visa-details-content">
                        <div className="content-one mb_60">
                            <div className="text mb_45">
                            <h2>{t('pages.working.title')}</h2>
                            <p>{t('pages.working.intro')}</p>
                            </div>
                            <figure className="image-box"><img src="assets/images/resource/visa-16.jpg" alt="" /></figure>
                            <div className="lower-text">
                            <p>{t('pages.working.lower')}</p>
                            </div>
                        </div>
                        <div className="content-two mb_35">
                            <div className="row clearfix">
                            <div className="col-lg-6 col-md-6 col-sm-12 left-column">
                                <div className="left-content">
                                <h3>{t('pages.working.leftTitle')}</h3>
                                <p>{t('pages.working.leftP1')}</p>
                                <p><Trans i18nKey="pages.working.leftP2" ns="visa" /></p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 right-column">
                                <div className="right-content">
                                <h3>{t('pages.working.rightTitle')}</h3>
                                <ul className="list-item clearfix">
                                    <li><Link href="javascript:void(0)" style={{"cursor": "default"}}>{t('pages.working.r1')}</Link></li>
                                    <li><Link href="javascript:void(0)" style={{"cursor": "default"}}>{t('pages.working.r2')}</Link></li>
                                    <li><Link href="javascript:void(0)" style={{"cursor": "default"}}>{t('pages.working.r3')}</Link></li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="content-three">
                            <div className="row clearfix">
                            <ContactExp/>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
                                    {/*visa details end*/}
                                

                            </Layout>
        </>
    )
}


