'use client'
import Link from "next/link"
import Image from "next/image"
import { useTranslation } from "react-i18next"


export default function Countries() {

    const { t } = useTranslation('home')

    return (
        <>


    <section className="countries-section p_relative centred">
      <div className="pattern-layer">
        <div className="pattern-1" style={{ backgroundImage: 'url(assets/images/shape/shape-10.png)' }}></div>
        <div className="pattern-2" style={{ backgroundImage: 'url(assets/images/shape/shape-11.png)' }}></div>
      </div>
      <div className="outer-container">
        <div className="sec-title mb_30 centred">
          <span className="sub-title">{t('countries.subtitle')}</span>
          <h2>{t('countries.title')}</h2>
        </div>
        <div className="tabs-box">
            <div className="tab-content wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                <div className="tab-pane fadeInUp animated show active">
                    <div className="row align-items-center">
                    <div className="content-box clearfix">
                        <div className="countries-block-one">
                            <div className="inner-box">
                                <figure className="image-box"><Image src="/assets/images/resource/image-home-country-1.jpg" alt="Australia Visa" width={480} height={870} /></figure>
                                <div className="text">
                                    <h3><Link href="countries-details-6">Australia <br />Visa</Link></h3>
                                </div>
                            </div>
                        </div>
                        <div className="countries-block-one">
                        <div className="inner-box">
                            <figure className="image-box"><Image src="/assets/images/resource/image-home-country-2.jpg" alt="Germany Visa" width={480} height={870} /></figure>
                            <div className="text">
                                <h3><Link href="countries-details-5">Germany <br />Visa</Link></h3>
                            </div>
                        </div>
                    </div>
                    <div className="countries-block-one">
                        <div className="inner-box">
                            <figure className="image-box"><Image src="/assets/images/resource/countries-3.jpg" alt="China Visa" width={480} height={870} /></figure>
                            <div className="text">
                                <h3><Link href="countries-details-4">China <br />Visa</Link></h3>
                            </div>
                        </div>
                    </div>
                    <div className="countries-block-one">
                        <div className="inner-box">
                            <figure className="image-box"><Image src="/assets/images/resource/countries-custom.jpg" alt="Dubai Visa" width={480} height={870} /></figure>
                            <div className="text">
                                <h3><Link href="countries-details-11">Dubai <br />Visa</Link></h3>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  
        </>
    )
}