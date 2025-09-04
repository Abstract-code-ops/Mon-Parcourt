'use client'
import React from 'react';
import { useTranslation } from 'react-i18next';

const chooseusData = [
  {
    delay: '00ms',
    icon: 'assets/images/icons/icon-1.png',
    titleKey: 'chooseus.blocks.1.title',
    descriptionKey: 'chooseus.blocks.1.description',
  },
  {
    delay: '200ms',
    icon: 'assets/images/icons/icon-2.png',
    titleKey: 'chooseus.blocks.2.title',
    descriptionKey: 'chooseus.blocks.2.description',
  },
  {
    delay: '400ms',
    icon: 'assets/images/icons/icon-3.png',
    titleKey: 'chooseus.blocks.3.title',
    descriptionKey: 'chooseus.blocks.3.description',
  },
  {
    delay: '600ms',
    icon: 'assets/images/icons/icon-4.png',
    titleKey: 'chooseus.blocks.4.title',
    descriptionKey: 'chooseus.blocks.4.description',
  },
];

export default function Chooseus() {

  const { t } = useTranslation('home');

  return (
    <section className="chooseus-section p_relative">
      <div className="auto-container">
        <div className="sec-title centred mb_60">
          <span className="sub-title">{t('chooseus.subtitle')}</span>
          <h2>{t('chooseus.title1')} <br/> {t('chooseus.title2')}</h2>
        </div>
        <div className="row clearfix">
          {chooseusData.map((item, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-12 chooseus-block">
              <div className="chooseus-block-one wow fadeInUp animated" data-wow-delay={item.delay} data-wow-duration="1500ms">
                <div className="inner-box">
                  <div className="icon-box"><img src={item.icon} alt={t(item.titleKey)} /></div>
                  <h3>{t(item.titleKey)}</h3>
                  <p>{t(item.descriptionKey)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
