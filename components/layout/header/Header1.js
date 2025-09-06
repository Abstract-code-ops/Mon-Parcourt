'use client'
import Link from "next/link";
import Image from "next/image";
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"
import { usePopup } from "@/components/layout/PopupContext";
import { useTranslation } from "react-i18next";

export default function Header1({ scroll, handleMobileMenu }) {
    const { handleAppointmentPopup } = usePopup();
  const { t, i18n } = useTranslation('common');
    return (
        <>
            <header className={`main-header ${scroll ? "fixed-header" : ""}`}>
                {/* Header Top */}
                <div className="header-top">
                  <div className="outer-container">
                    <div className="top-inner">
                      <div className="top-left">
                      </div>
                      <div className="top-right">
                        <ul className="social-links clearfix">
                          <li><Link href="https://www.facebook.com/profile.php?id=61550292352529"><i className="icon-4"></i></Link></li>
                          <li><Link href="https://www.tiktok.com/@alexandris70?_t=ZM-8zGMc0C8ht7&_r=1"><i className="icon-6"></i></Link></li>
                          <li><Link href="https://www.instagram.com/_monparcourt_"><i className="icon-5"></i></Link></li>
                          <li><Link href="https://www.youtube.com/@monparcourt2813"><i className="icon-7"></i></Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                   
                {/* Header lower */}
                <div className="header-lower">
                  <div className="outer-box clearfix">
                    <div className="logo-box" style={{marginRight: '20px', paddingTop: '10px', paddingBottom: '20px'}}>
                      <figure className="logo"><Link href="/"><Image src="/assets/images/logo.png" alt="Mon Parcourt logo" width={140} height={40} priority /></Link></figure>
                    </div>
                    <div className="nav-outer"  style={{width: 'calc(100% - 200px)', height: '100%'}}>
                      <div className="menu-area clearfix">
                        {/* Mobile Navigation Toggler */}
                        <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                          <i className="icon-bar"></i>
                          <i className="icon-bar"></i>
                          <i className="icon-bar"></i>
                        </div>
                        <nav className="main-menu navbar-expand-md navbar-light">
                          <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                <Menu/>
                          </div>
                        </nav>
                      </div>
                      <button className="custom-theme-btn appointment-link ml_20" onClick={handleAppointmentPopup} style={{ padding: '7px 14px' }}>
                        {t('header.appointment')}
                      </button>
                      <div className="support-box">
                        <figure className="image-box"><img src="/assets/images/resource/support-1.jpg" alt="" /></figure>
                        <span>{t('header.enquiries')}</span>
                        <Link href="tel:+33613800304">+33 613800304</Link>
                      </div>
                      <div className="top-left">
                         <div className="lang-dropdown">
                           <button className="lang-toggle" aria-haspopup="true" aria-expanded="false">lang ▾</button>
                           <div className="lang-menu" role="menu" aria-label="Language selector">
                             <button className="lang-item" onClick={(e) => { i18n.changeLanguage('en'); e.currentTarget.blur(); }}>EN</button>
                             <button className="lang-item" onClick={(e) => { i18n.changeLanguage('fr'); e.currentTarget.blur(); }}>FR</button>
                           </div>
                         </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Header lower */}
             
               
                {/* Sticky Header  */}
                <div className="sticky-header">
                  <div className="auto-container">
                    <div className="outer-box">
                      <div className="logo-box">
                        <figure className="logo"><Link href="/"><Image src="/assets/images/logo.png" alt="Mon Parcourt logo" width={100} height={77} /></Link></figure>
                      </div>
                      <div className="menu-area clearfix">
                      <nav className="main-menu navbar-expand-md navbar-light clearfix" >
                        <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent" >
                            <Menu/>
                        </div>
                    </nav>
                      </div>
                      <button className="custom-theme-btn appointment-link" onClick={handleAppointmentPopup}>
                        {t('header.appointment')}
                      </button>
                      <div className="support-box">
                        <figure className="image-box"><img src="/assets/images/resource/support-1.jpg" alt="" /></figure>
                        <span>{t('header.enquiries')}</span>
                        <Link href="tel:+33613800304">+33 613800304</Link>
                      </div>
                      <div className="top-left">
                         <div className="lang-dropdown">
                           <button className="lang-toggle" aria-haspopup="true" aria-expanded="false">lang ▾</button>
                           <div className="lang-menu" role="menu" aria-label="Language selector">
                             <button className="lang-item" onClick={(e) => { i18n.changeLanguage('en'); e.currentTarget.blur(); }}>EN</button>
                             <button className="lang-item" onClick={(e) => { i18n.changeLanguage('fr'); e.currentTarget.blur(); }}>FR</button>
                           </div>
                         </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Sticky Header  */}
               {/* End Sticky Menu */}
                {/* Mobile Menu  */}

                <MobileMenu handleMobileMenu={handleMobileMenu} handleAppointmentPopup={handleAppointmentPopup} />
            </header>
        </>
    )
}
