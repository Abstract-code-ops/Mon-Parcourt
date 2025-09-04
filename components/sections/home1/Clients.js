'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

// Import slick-carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PartnersSlider from '@/components/slider/partnersSlider';

export default function Clients() {

  const { t } = useTranslation('home')

  return (
    <section className="clients-section p_relative">
      <div className="auto-container">
        <div className="inner-box p_relative pt_90">
          <div className="sec-title centred mb_50">
            <span className="sub-title">{t('clients.subtitle')}</span>
            <h2>{t('clients.title')}</h2>
          </div>
          <PartnersSlider/>
          <motion.div
            className="sliding-arrow"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 20, opacity: [0, 1, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
              times: [0, 0.5, 1]
            }}
            aria-hidden="true"
          >
            <i className="fas fa-arrow-right" style={{cursor: 'pointer'}}></i>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
