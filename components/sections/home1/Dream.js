'use client'
import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Dream() {
  const { t } = useTranslation('home');
  return (
    <section className="dream-section p_relative">
      <div className="bg-layer parallax-bg" data-parallax='{"y": 100}' style={{ backgroundImage: 'url(assets/images/background/dream-bg.jpg)' }}></div>
      <div className="pattern-layer-2" style={{ backgroundImage: 'url(assets/images/shape/shape-9.png)' }}></div>
      <figure className="image-layer"><img src="assets/images/resource/women-1.png" alt={t('dream.imageAlt')} /></figure>
      <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/shape/shape-8.png)' }}></div>
      <div className="auto-container">
        <div className="content_block_two">
          <div className="content-box p_relative d_block">
            <div className="sec-title light mb_20">
              <span className="sub-title">{t('dream.subtitle')}</span>
              <h2>{t('dream.title')}</h2>
            </div>
            <div className="text mb_25">
              <p>{t('dream.description')}</p>
            </div>
            <ul className="list-item p_relative clearfix">
              <li><Link href="javascript: void(0)" style={{"cursor": "default"}}>1. {t('dream.items.0')}</Link></li>
              <li><Link href="javascript: void(0)" style={{"cursor": "default"}}>2. {t('dream.items.1')}</Link></li>
              <li><Link href="javascript: void(0)" style={{"cursor": "default"}}>3. {t('dream.items.2')}</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

