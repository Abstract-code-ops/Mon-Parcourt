"use client"
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import PopupContext from "@/components/layout/PopupContext";

import BackToTop from '../elements/BackToTop';
import DataBg from "../elements/DataBg";
import Breadcrumb from './Breadcrumb';
import AppointmentPopup from "./AppointmentPopup";
import Footer1 from './footer/Footer1';
import Header1 from "./header/Header1";


export default function Layout({ headerStyle, footerStyle, headTitle, breadcrumbTitle, children, wrapperCls, bgImage }) {
    const [scroll, setScroll] = useState(0);
    const [isMobileMenu, setMobileMenu] = useState(false);
    
    const handleMobileMenu = () => {
        setMobileMenu(!isMobileMenu);
        document.body.classList.toggle("mobile-menu-visible", !isMobileMenu);
    };
    const [isPopup, setPopup] = useState(false);
    const handlePopup = () => setPopup(!isPopup);
    const [isSidebar, setSidebar] = useState(false);
    const handleSidebar = () => setSidebar(!isSidebar);
    const [isAppointmentPopup, setAppointmentPopup] = useState(false);
    const handleAppointmentPopup = () => setAppointmentPopup(!isAppointmentPopup);
    // translation for the breadcrumb "Home" label
    const { t, i18n } = useTranslation();
    const [homeText, setHomeText] = useState(() => t('breadcrumb.home'));

    useEffect(() => {
        // keep homeText in sync when language changes
        const handleLangChange = () => setHomeText(t('breadcrumb.home'));
        // initialize (in case t changed)
        handleLangChange();
        if (i18n && i18n.on) {
            i18n.on('languageChanged', handleLangChange);
        }
        return () => {
            if (i18n && i18n.off) {
                i18n.off('languageChanged', handleLangChange);
            }
        };
    }, [i18n, t]);

    useEffect(() => {
        const WOW = require('wowjs')
        window.wow = new WOW.WOW({
            live: false
        })
        window.wow.init()

        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })

        // Remove server-rendered suspense preloader after hydration
        // But preserve page-specific and custom loading components
        try {
            const rootPreloader = document.getElementById('suspense-preloader')
            const pageLoader = document.getElementById('page-loading')
            const homeLoader = document.getElementById('home-preloader')
            
            // Only remove the root layout preloader if no specific page loaders are active
            if (rootPreloader && !pageLoader && !homeLoader) {
                rootPreloader.style.transition = 'opacity 300ms ease-out'
                rootPreloader.style.opacity = '0'
                setTimeout(() => rootPreloader.remove(), 350)
            }
        } catch (e) {
            // ignore in non-browser environments
        }
    }, [scroll]) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            <PopupContext.Provider value={{ handleAppointmentPopup }}>
                <DataBg />
                <div className={`boxed_wrapper home_one ${wrapperCls ? wrapperCls : ""}`} id="#top">
                        <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handlePopup={handlePopup} isSidebar={isSidebar} handleSidebar={handleSidebar} />

                    <AppointmentPopup isPopup={isAppointmentPopup} handlePopup={handleAppointmentPopup} />

                    {bgImage && breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} bgImage={bgImage} homeText={homeText} />}
                            
                        {children}

                    <Footer1 />
                </div>
                <BackToTop scroll={scroll} />
            </PopupContext.Provider>
        </>
    );
}
