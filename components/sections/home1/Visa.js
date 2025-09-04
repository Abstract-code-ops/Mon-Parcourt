"use client";

import VisaSlider from '@/components/slider/VisaSlider'
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Visa() {
  const { t } = useTranslation('home');
  return (
    <section className="visa-section sec-pad">
      <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/shape/shape-5.png)' }}></div>
      <div className="auto-container">
        <div className="sec-title centred mb_50">
          <span className="sub-title">{t('visa.subtitle')}</span>
          <h2 dangerouslySetInnerHTML={{ __html: t('visa.title') }} />
        </div>
                    <div className="content-box">
                        {/*Theme Carousel*/}
                        <VisaSlider />                        
                    </div>
            </div>
            </section>
        );
        };

