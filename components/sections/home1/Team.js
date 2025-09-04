"use client";

import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export default function Team() {
  const { t } = useTranslation('home');
  return (
    <section className="dream-style-two sec-pad p_relative mb_200">
      <div className="outer-container clearfix">
        <div className="bg-layer" style={{ backgroundImage: 'url(assets/images/background/dream-bg-3.jpg)' }}></div>
        <div className="content-column">
          <div className="pattern-layer">
            <div className="pattern-1" style={{ backgroundImage: 'url(assets/images/shape/shape-51.png)' }}></div>
            <div className="pattern-2" style={{ backgroundImage: 'url(assets/images/shape/shape-52.png)' }}></div>
          </div>
          <div className="content_block_two" style={{ position: 'relative' }}>
            {/* top-left and top-right logos */}
            <img src="assets/images/logo.png" alt="logo" style={{ position: 'absolute', top: '-70px', left: '10px', width: '80px', height: 'auto', zIndex: 5 }} />
            <img src="assets/images/KFFP.png" alt="KFFP" style={{ position: 'absolute', top: '-50px', right: '10px', width: '80px', height: 'auto', zIndex: 5 }} />
            <div className="content-box p_relative d_block">
              <div className="sec-title light mb_20">
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


