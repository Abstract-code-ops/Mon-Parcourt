'use client'
import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Coaching() {

  const { t } = useTranslation('home');
  const coachingBlocks = t('coaching.blocks', { returnObjects: true }) || [];

  // Defensive check to ensure coachingBlocks is an array
  const blocksToRender = Array.isArray(coachingBlocks) ? coachingBlocks : [];

  return (
    <section className="coaching-section sec-pad">
      <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/shape/shape-12.png)' }}></div>
      <div className="auto-container">
        <div className="sec-title mb_50">
          <span className="sub-title">{t('coaching.subtitle')}</span>
          <h2>{t('coaching.title1')} <br />{t('coaching.title2')}</h2>
        </div>
        <div className="row clearfix">
          {blocksToRender.map((block, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12 coaching-block" key={index}>
              <div className="coaching-block-one">
                <div className="inner-box">
                  <div className="image-box clearfix">
                    <figure className="image"><img src={block.image1} alt="" /></figure>
                    <figure className="image"><img src={block.image2} alt="" /></figure>
                  </div>
                  <div className="static-content">
                    {/* Using dangerouslySetInnerHTML for titles that contain <br /> */}
                    <h3 dangerouslySetInnerHTML={{ __html: block.staticTitle }}></h3>
                    <div className="link"><Link href={block.link}><i className="icon-9"></i></Link></div>
                  </div>
                  <div className="overlay-content">
                    <h3><Link href={block.link}>{block.overlayTitle}</Link></h3>
                    <p>{block.description}</p>
                    <div className="link"><Link href={block.link}><i className="icon-9"></i></Link></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

