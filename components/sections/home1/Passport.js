'use client'
import React from 'react';
import UniversitiesSlider from '@/components/slider/universitiesSlider';
import { usePopup } from "@/components/layout/PopupContext";
import { useTranslation } from 'react-i18next';


export default function Passport() {

  const { handleAppointmentPopup } = usePopup();
  const { t } = useTranslation('home');

  const paragraphs = t('passport.paragraphs', { returnObjects: true });
  const paraList = Array.isArray(paragraphs) && paragraphs.length ? paragraphs : [
    t('passport.paragraphs.0', { defaultValue: 'Do you want to connect to a specific place, university, organization, company or country ? You name the place and we will deliver it to you. We are partnered with big enterprises and bridge the distance between you and the place you want to be.' }),
    t('passport.paragraphs.1', { defaultValue: 'Below are some of the universities we have partnered with to connect you with them. For more personalized services, contact us to help you.' })
  ];

  return (
    <section className="dream-style-two sec-pad p_relative mt_80"  style={{backgroundColor: 'transparent', marginBottom: '20px'}}>
      <div className="outer-container clearfix">
        <div className="bg-layer" style={{ backgroundImage: 'url(assets/images/resource/connections.jpg)', height: '80%', top: '10%'}}></div>
        <div className="content-column">
          <div className="pattern-layer">
            <div className="pattern-1" style={{ backgroundImage: 'url(assets/images/shape/shape-68.png)' }}></div>
            <div className="pattern-2" style={{ backgroundImage: 'url(/assets/images/shape/shape-67.png)' }}></div>
          </div>
          <div className="content_block_two">
            <div className="content-box p_relative">
              <div className="sec-title mb_30 flex-column centred">
                <span className="sub-title" style={{color: 'black'}}>{t('passport.subtitle', { defaultValue: 'Who are we ?' })}</span>
                <h2 className='mt_20' style={{color: 'var(--title-color)'}}>{t('passport.title', { defaultValue: 'Your Connection Agent' })}</h2>
              </div>
              <div className="text mb_25">
                <p style={{color: 'black', fontSize: '1rem'}}>{paraList[0]}</p>
              </div>
              <div className="text mb_25">
                <p style={{color: 'black', fontSize: '1rem'}}>{paraList[1]}</p>
              </div>
              <UniversitiesSlider/>
              <div className="btn-box" style={{textAlign: 'right'}}>
                <button onClick={handleAppointmentPopup} className="theme-btn btn-one mt_25"><span>{t('passport.appointment', { defaultValue: 'Appointment' })}</span></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
