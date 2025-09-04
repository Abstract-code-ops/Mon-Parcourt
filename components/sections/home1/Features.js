'use client'
import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
export default function Feature() {
  const { t } = useTranslation('home');

  const fallback = [
    { title: 'Visa', description: 'We provide business visa, student visa, tourist visa and more.' },
    { title: 'Passport', description: 'We can work with passports of more than <0>112+</0> countries' },
    { title: 'Immigration', description: 'We make the immigration process easier and smoother for you.' },
    { title: 'Translation', description: 'We help bridge the language barrier seamlessly for ease of communication.' },
  ];

  const items = t('features.items', { returnObjects: true });
  const featureList = Array.isArray(items) && items.length ? items : fallback;

  return (
    <section className="feature-section mb_60">
      <div className="auto-container">
        <div className="inner-container">
          <div className="shape" style={{backgroundImage:"url(assets/images/shape/shape-7.png)"}}>
          </div>
          <div className="row clearfix">
            {featureList.map((feat, idx) => (
              <div className="col-lg-3 col-md-6 col-sm-12 feature-block" key={idx}>
                <div className="feature-block-one">
                  <div className="inner-box">
                    <div className="icon-box">
                      <i className={`icon-${17 + idx}`}></i>
                    </div>
                    <h3><a href="/">{feat.title}</a></h3>
                    <p>
                      {feat.description && feat.description.includes('<0>') ? (
                        <Trans i18nKey={`features.items.${idx}.description`} ns="home" components={{ 0: <strong /> }} defaults={feat.description} />
                      ) : (
                        feat.description
                      )}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

