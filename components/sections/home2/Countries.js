"use client"
import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';

const CountryBlock = ({ imageUrl, countryName, courseLabel = 'Courses', visaAltLabel = 'Visa', link }) => (
  <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
    <div className="countries-block-two">
      <div className="inner-box">
        <figure className="image-box"><img src={imageUrl} alt={`Image of ${countryName} ${visaAltLabel}`} /></figure>
        <div className="text">
          <h3><Link href={link}>{countryName} {courseLabel}</Link></h3>
        </div>
      </div>
    </div>
  </div>
);

export default function Countries({ title, sec_title }) {
  // use the new namespace for general countries translations
  const { t } = useTranslation('countriesGeneral');
  const computedTitle = title ?? t('title');
  const computedSubtitle = sec_title ?? t('subtitle');
  const courseLabel = t('coursesLabel');
  const visaAltLabel = t('visaAltLabel');
  return (
  <section className="countries-style-two centred p_relative">
    <div className="bg-layer parallax-bg" data-parallax='{"y": 100}' style={{ backgroundImage: 'url(assets/images/background/countries-bg.jpg)' }}></div>
    <div className="auto-container">
      <div className="sec-title centred mb_50 light">
        <span className="sub-title">{computedTitle}</span>
        <h2>{computedSubtitle}</h2>
      </div>
      <div className="row clearfix">
  <CountryBlock imageUrl="assets/images/resource/countries-5.jpg" countryName={t('cards.ielts')} courseLabel={courseLabel} visaAltLabel={visaAltLabel} link='coaching-details' />
  <CountryBlock imageUrl="assets/images/resource/countries-6.jpg" countryName={t('cards.toefl')} courseLabel={courseLabel} visaAltLabel={visaAltLabel} link='coaching-details-3' />
  <CountryBlock imageUrl="assets/images/resource/countries-7.jpg" countryName={t('cards.daf')} courseLabel={courseLabel} visaAltLabel={visaAltLabel} link='coaching-details-4' />
  <CountryBlock imageUrl="assets/images/resource/countries-8.jpg" countryName={t('cards.tcf')} courseLabel={courseLabel} visaAltLabel={visaAltLabel} link='coaching-details-5' />
      </div>
    </div>
  </section>
);
}