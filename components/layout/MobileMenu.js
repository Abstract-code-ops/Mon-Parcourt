'use client'
import Link from "next/link";
import { useState } from "react";
import { useTranslation } from 'react-i18next';
import { i18n } from '../../i18n';

export default function MobileMenu({ isSidebar, handleMobileMenu, handleSidebar, handleAppointmentPopup }) {
  const { t } = useTranslation('common');
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
    subMenuKey: "",
  });

  const handleToggle = (key, subMenuKey = "") => {
    if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
      if (subMenuKey) {
        setIsActive({
          ...isActive,
          subMenuKey: "",
        });
      } else {
        setIsActive({
        status: false,
        key: "",
        subMenuKey: "",
      });
      }
    } else {
      setIsActive({
        status: true,
        key,
        subMenuKey,
      });
    }
  };

  return (
    <>
      <div className="mobile-menu">
        <div className="menu-backdrop" onClick={handleMobileMenu} />
        <div className="close-btn" onClick={handleMobileMenu}><span className="far fa-times" /></div>
        <nav className="menu-box">
          <div className="nav-logo">
            <Link href="/">
              <img src="/assets/images/logo.png" alt="" />
            </Link>
          </div>
          {/* Mobile-specific controls: appointment button and language selector */}
          <div className="mobile-top-controls mb_20">
            <div>
              <button className="custom-theme-btn appointment-link" onClick={() => { handleAppointmentPopup(); handleMobileMenu(); }}>
                {t('menu.appointment')}
              </button>
            </div>
            <div className="mobile-lang">
              <button className="lang-item" onClick={(e) => { i18n.changeLanguage('en'); e.currentTarget.blur(); handleMobileMenu(); }}>EN</button>
              <button className="lang-item" onClick={(e) => { i18n.changeLanguage('fr'); e.currentTarget.blur(); handleMobileMenu(); }}>FR</button>
            </div>
          </div>
          <div className="menu-outer">
            <div
              className="collapse navbar-collapse show clearfix"
              id="navbarSupportedContent">
              <ul className="navigation clearfix">
                <li><Link href="/" onClick={()=>handleMobileMenu()}>{t('menu.home')}</Link></li>

                <li className={isActive.key == 1 ? "dropdown current" : "dropdown"}>
                  <Link href="#" onClick={() => handleToggle(1)}>{t('menu.visaServices')}</Link>
                  <ul style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                    <li className={isActive.subMenuKey == 1 ? "dropdown current" : "dropdown"}>
                      <Link href="#" onClick={() => handleToggle(1, 1)}>Visa</Link>
                      <ul style={{ display: `${isActive.subMenuKey == 1 ? "block" : "none"}` }}>
                        <li><Link href="/visa" onClick={()=>handleMobileMenu()}>{t('menu.visaOverview')}</Link></li>
                        <li><Link href="/visa-details" onClick={()=>handleMobileMenu()}>{t('visas.business')}</Link></li>
                        <li><Link href="/visa-details-2" onClick={()=>handleMobileMenu()}>{t('visas.working')}</Link></li>
                        <li><Link href="/visa-details-3" onClick={()=>handleMobileMenu()}>{t('visas.residence')}</Link></li>
                        <li><Link href="/visa-details-4" onClick={()=>handleMobileMenu()}>{t('visas.student')}</Link></li>
                        <li><Link href="/visa-details-5" onClick={()=>handleMobileMenu()}>{t('visas.spouseFamily')}</Link></li>
                        <li><Link href="/visa-details-6" onClick={()=>handleMobileMenu()}>{t('visas.tourist')}</Link></li>
                      </ul>
                      <div className={isActive.subMenuKey == 1 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(1, 1)}><span className="fa fa-angle-right" /></div>
                    </li>
                    <li className={isActive.subMenuKey == 2 ? "dropdown current" : "dropdown"}>
                      <Link href="#" onClick={() => handleToggle(1, 2)}>{t('menu.countries')}</Link>
                      <ul style={{ display: `${isActive.subMenuKey == 2 ? "block" : "none"}` }}>
                        <li><Link href="/countries" onClick={()=>handleMobileMenu()}>{t('menu.countriesOverview')}</Link></li>
                        <li><Link href="/countries-details" onClick={()=>handleMobileMenu()}>{t('countriesList.unitedStates')}</Link></li>
                        <li><Link href="/countries-details-2" onClick={()=>handleMobileMenu()}>{t('countriesList.luxembourg')}</Link></li>
                        <li><Link href="/countries-details-3" onClick={()=>handleMobileMenu()}>{t('countriesList.canada')}</Link></li>
                        <li><Link href="/countries-details-4" onClick={()=>handleMobileMenu()}>{t('countriesList.china')}</Link></li>
                        <li><Link href="/countries-details-5" onClick={()=>handleMobileMenu()}>{t('countriesList.germany')}</Link></li>
                        <li><Link href="/countries-details-6" onClick={()=>handleMobileMenu()}>{t('countriesList.australia')}</Link></li>
                        <li><Link href="/countries-details-7" onClick={()=>handleMobileMenu()}>{t('countriesList.spain')}</Link></li>
                        <li><Link href="/countries-details-8" onClick={()=>handleMobileMenu()}>{t('countriesList.turkey')}</Link></li>
                        <li><Link href="/countries-details-12" onClick={()=>handleMobileMenu()}>{t('countriesList.northCyprus')}</Link></li>
                        <li><Link href="/countries-details-9" onClick={()=>handleMobileMenu()}>{t('countriesList.lithuania')}</Link></li>
                        <li><Link href="/countries-details-10" onClick={()=>handleMobileMenu()}>{t('countriesList.france')}</Link></li>
                        <li><Link href="/countries-details-11" onClick={()=>handleMobileMenu()}>{t('countriesList.uae')}</Link></li>
                      </ul>
                      <div className={isActive.subMenuKey == 2 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(1, 2)}><span className="fa fa-angle-right" /></div>
                    </li>
                  </ul>
                  <div className={isActive.key == 1 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(1)}><span className="fa fa-angle-right" /></div>
                </li>
                
                <li className={isActive.key == 3 ? "dropdown current" : "dropdown"}>
                    <Link href="#" onClick={() => handleToggle(3)}>{t('menu.coaching')}</Link>
                    <ul style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                               <li><Link href="/coaching" onClick={()=>handleMobileMenu()}>{t('menu.coachingOverview')}</Link></li>
                                <li><Link href="/coaching-details" onClick={()=>handleMobileMenu()}>IELTS Coaching </Link></li>
                                <li><Link href="/coaching-details-2" onClick={()=>handleMobileMenu()}>PTE Coaching</Link></li>
                                <li><Link href="/coaching-details-3" onClick={()=>handleMobileMenu()}>TOFEL Coaching</Link></li>
                                <li><Link href="/coaching-details-4" onClick={()=>handleMobileMenu()}>DAF Coaching</Link></li>
                                <li><Link href="/coaching-details-5" onClick={()=>handleMobileMenu()}>TCF Coaching</Link></li>
                                <li><Link href="/coaching-details-6" onClick={()=>handleMobileMenu()}>SAT Coaching</Link></li>
                    </ul>
                    <div className={isActive.key == 3 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(3)}><span className="fa fa-angle-right" /></div>
                </li>

                <li><Link href="/blog" onClick={()=>handleMobileMenu()}>{t('menu.blogEvents')}</Link></li>
               
                <li><Link href="/about-us" onClick={()=>handleMobileMenu()}>{t('menu.about')}</Link></li>

                <li><Link href="/contact" onClick={()=>handleMobileMenu()} >Contact</Link></li>
              </ul>
            </div>
          </div>
          {/* <div className="mt_40 centred" style={{ width: "100%" }}>
            <button className="custom-theme-btn centred" onClick={handleAppointmentPopup}>
                Appointment
            </button>
          </div> */}
          <div className="contact-info">
                    <h4>{t('menu.contactInfo')}</h4>
          <ul>
            <li>87 Boulevard Diderot 75012 Paris</li>
            <li><Link href="tel:+33613800304">+33 613800304</Link></li>
            <li><Link href="mailto:contact@monparcourt.com">contact@monparcourt.com</Link></li>
          </ul>
                </div>
          {/*Social Links*/}
          <div className="social-links">
          <ul className="clearfix">
            <li><Link href="https://www.tiktok.com/@alexandris70?_t=ZM-8zGMc0C8ht7&_r=1"><span className="icon-6"></span></Link></li>
            <li><Link href="https://www.facebook.com/profile.php?id=61550292352529"><span className="icon-4"></span></Link></li>
            <li><Link href="https://www.instagram.com/_monparcourt_"><span className="icon-5"></span></Link></li>
            <li><Link href="https://www.youtube.com/@monparcourt2813"><span className="icon-7"></span></Link></li>
          </ul>
          </div>
        </nav>
      </div>{/* End Mobile Menu */}
      <div className="nav-overlay" style={{ display: `${isSidebar ? "block" : "none"}` }} onClick={handleSidebar} />
    </>
  );
};

