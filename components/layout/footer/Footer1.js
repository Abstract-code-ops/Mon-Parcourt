'use client'
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from 'react-i18next';
export default function Footer1() {
  const { t } = useTranslation('common');
    return (
        <>
      <footer className="main-footer" id="footer">
  <div className="pattern-layer" style={{ backgroundImage: "url(/assets/images/shape/shape-25.png)" }}></div>
      <div className="auto-container">
        <div className="widget-section">
          <div className="row clearfix">
            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
              <div className="footer-widget logo-widget">
                <figure className="footer-logo">
                  <Link href="/"><Image src="/assets/images/footer-logo.png" alt="Mon Parcourt" width={357} height={146} /></Link>
                </figure>
                <div className="text mb_25 mt_10">
                  <p style={{ fontSize: '0.8em' }}>{t('footer.tagline')}</p>
                </div>
                <ul className="info clearfix mb_30">
                  <li><i className="icon-29"></i><Link href="tel:+33613800304">+33 613800304</Link></li>
                  <li><i className="icon-1"></i><Link href="mailto:monparcourt.1er@gmail.com">monparcourt.1er@gmail.com</Link></li>
                  <li><i className="icon-2"></i>87 Boulevard Diderot 75012 Paris</li>
                </ul>
                <ul className="social-links clearfix">
                  <li><Link href="https://www.facebook.com/profile.php?id=61550292352529"><i className="icon-4"></i></Link></li>
                  <li><Link href="https://www.instagram.com/_monparcourt_"><i className="icon-5"></i></Link></li>
                  <li><Link href="https://www.tiktok.com/@alexandris70?_t=ZM-8zGMc0C8ht7&_r=1"><i className="icon-6"></i></Link></li>
                  <li><Link href="https://www.youtube.com/@monparcourt2813"><i className="icon-7"></i></Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
              <div className="footer-widget links-widget">
                <div className="widget-title">
                  <h3>{t('footer.visaServices')}</h3>
                </div>
                <div className="widget-content">
                  <ul className="links-list clearfix">
                    <li><Link href="/visa-details">{t('visas.business')}</Link></li>
                    <li><Link href="/visa-details-2">{t('visas.working')}</Link></li>
                    <li><Link href="/visa-details-3">{t('visas.residence')}</Link></li>
                    <li><Link href="/visa-details-4">{t('visas.student')}</Link></li>
                    <li><Link href="/visa-detials-6">{t('visas.tourist')}</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
              <div className="footer-widget links-widget">
                <div className="widget-title">
                  <h3>{t('footer.quickLinks')}</h3>
                </div>
                <div className="widget-content">
                  <ul className="links-list clearfix">
                    <li><Link href="/coaching-details">{t('coaching.ielts')}</Link></li>
                    <li><Link href="/coaching-details-3">{t('coaching.tofel')}</Link></li>
                    <li><Link href="/coaching-details-4">{t('coaching.daf')}</Link></li>
                    <li><Link href="/coaching-details-5">{t('coaching.tcf')}</Link></li>
                    <li><Link href="/coaching-details-6">{t('coaching.sat')}</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
              <div className="footer-widget newsletter-widget">
                <div className="widget-title">
                  <h3>{t('footer.newsletter')}</h3>
                </div>
                <div className="widget-content">
                  <div style={{fontSize: '0.8rem'}} className="text mb_20">
                    <p>{t('footer.newsletterDesc')}</p>
                  </div>
                  <form action="#" className="newsletter-form">
                    <div className="form-group d-flex">
                      <input type="email" name="email" placeholder={t('footer.emailPlaceholder')} required className="my-form-control" style={{width: '80%'}} />
                      <button type="submit" className="theme-btn btn-style-one">{t('footer.subscribe')}</button>
                    </div>
                  </form>
                  <div className="mt_15">
                    <p className="small">{t('footer.newsletterPrivacy')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>

        </>
    )
}
