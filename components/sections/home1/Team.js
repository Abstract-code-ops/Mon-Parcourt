"use client";

import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export default function Team() {
  const { t } = useTranslation('home');
  return (
    <section className="dream-style-two sec-pad p_relative">
      <div className="outer-container clearfix">
        <div className="bg-layer" style={{ backgroundImage: 'url(assets/images/background/dream-bg-3.jpg)' }}></div>
        <div className="content-column">
          <div className="pattern-layer">
            <div className="pattern-1" style={{ backgroundImage: 'url(assets/images/shape/shape-51.png)' }}></div>
            <div className="pattern-2" style={{ backgroundImage: 'url(assets/images/shape/shape-52.png)' }}></div>
          </div>
          <div className="content_block_two" style={{ position: 'relative' }}>
            {/* logos: positioned absolutely on larger screens; flow next to subtitle on small screens */}
            <div className="logo-group">
              <img src="/assets/images/logo.png" alt="logo" className="logo logo-main" />
              <img src="/assets/images/KFFP.png" alt="KFFP" className="logo logo-kffp" />
            </div>
            <div className="content-box p_relative d_block">
              <div className="sec-title light mb_20 flex-column">
                <span className="sub-title">{t('team.subtitle')}</span>
                <h2>{t('team.title')}</h2>
              </div>
              <div className="text mb_25">
                <p style={{fontSize: '1rem'}}>{t('team.p1')}</p>
              </div>
              <div className="text mb_25">
                <p style={{fontSize: '1rem'}}>{t('team.p2')}</p>
              </div>
              <div className="btn-box">
                <Link href="about-us" className="theme-btn"><span>{t('team.cta')}</span></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
          );
        };


