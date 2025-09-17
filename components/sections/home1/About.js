'use client'
import CounterUp from "@/components/elements/CounterUp"
import Image from "next/image"
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function about() {
  const { t } = useTranslation('home');

    return (
    <section className="about-style-two p_relative">
        <div className="pattern-layer">
            <div className="pattern-1" style={{ backgroundImage: 'url(assets/images/shape/shape-28.png)' }}></div>
            <div className="pattern-2" style={{ backgroundImage: 'url(assets/images/shape/shape-29.png)' }}></div>
        </div>
        <div className="auto-container">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                        <figure className="image-box">
                            <Image src="/assets/images/resource/about-1.webp" alt="About Mon Parcourt" width={834} height={923} />
                        </figure>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                    <div className="content_block_four">
                        <div className="content-box">
                            <div className="sec-title mb_25">
                                <span className="sub-title">{t('about.subtitle')}</span>
                                <h2>{t('about.title')}</h2>
                            </div>
                            <div className="text mb_35">
                                <h5>{t('about.tagline')}</h5>
                                <p>{t('about.description')}</p>
                            </div>
                            <div className="funfact-inner centred">
                                <div className="funfact-block">
                                <div className="count-outer count-box">
                                <CounterUp end={2} /><span>+</span>
                            </div>
                                    <p>{t('funfact.offices')}</p>
                                </div>
                                <div className="funfact-block">
                                <div className="count-outer count-box">
                                <CounterUp end={12} />
                            </div>
                                    <p>{t('funfact.team')}</p>
                                </div>
                                <div className="funfact-block">
                                <div className="count-outer count-box">
                                <CounterUp end={100} /><span></span>
                            </div>
                                    <p>{t('funfact.visa')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};
