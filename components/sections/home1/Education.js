'use client'
import Link from 'next/link';
import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

export default function Education() {
  const { t } = useTranslation('home');

  const fallbackCountries = [
    { name: 'USA', link: 'countries-details', flag: 'assets/images/icons/flag-17.png' },
    { name: 'Canada', link: 'countries-details-3', flag: 'assets/images/icons/flag-2.png' },
    { name: 'China', link: 'countries-details-4', flag: 'assets/images/icons/flag-3.png' },
    { name: 'Australia', link: 'countries-details-6', flag: 'assets/images/icons/flag-4.png' },
  ];

  const countries = t('education.countries', { returnObjects: true });
  const countryList = Array.isArray(countries) && countries.length ? countries : fallbackCountries;

  return (
    <section className="education-section p_relative">
      <div className="bg-layer-2" style={{ backgroundImage: "url(assets/images/shape/shape-16.png)" }}></div>
      <div className="bg-layer parallax-bg" data-parallax='{"y": 100}' style={{ backgroundImage: "url(assets/images/background/education-bg.jpg)" }}></div>
      <figure className="image-layer wow slideInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms"><img src="assets/images/resource/men-1.png" alt={t('education.imageAlt', { defaultValue: '' })} /></figure>
      <div className="shape">
        <div className="shape-1" style={{ backgroundImage: "url(assets/images/shape/shape-19.png)" }}></div>
        <div className="shape-2" style={{ backgroundImage: "url(assets/images/shape/shape-19.png)" }}></div>
      </div>
      <div className="pattern-layer">
        <div className="pattern-1" style={{ backgroundImage: "url(assets/images/shape/shape-17.png)" }}></div>
        <div className="pattern-2" style={{ backgroundImage: "url(assets/images/shape/shape-18.png)" }}></div>
      </div>
      <div className="auto-container">
        <div className="content_block_three">
          <div className="content-box p_relative d_block">
            <h2>
              <Trans i18nKey="education.title" ns="home" components={{ 0: <span /> }} defaults={t('education.title', { defaultValue: 'Looking for Quality <0>Education In</0> Abroad?' })} />
            </h2>
            <p>{t('education.description', { defaultValue: 'Explore the countries that we provide services in and find the best education for you.' })}</p>
            <ul className="country-list">
              {countryList.map((c, idx) => (
                <li key={idx}>
                  <Link href={c.link}>
                    <div className="flag"><img src={c.flag} alt={c.name} /></div>
                    <span>{c.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

