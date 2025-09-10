'use client'
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Home() {
    const { t } = useTranslation('contact');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        partner: '',
        message: '',
    });
    const [status, setStatus] = useState(''); // '', 'sending', 'success', 'error'
    const [partnerShip, setPartnerShip] = useState("");

    const partnerPrefix = "I want to become A partner:\n";

    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handlePartnerChange = (value) => {
        setPartnerShip(value);
        setFormData(prev => {
            const prevMessage = prev.message || '';
            if (value === 'yes') {
                // prepend prefix if not present
                if (!prevMessage.startsWith(partnerPrefix)) {
                    return { ...prev, partner: 'yes', message: partnerPrefix + prevMessage };
                }
                return { ...prev, partner: 'yes' };
            }
            // value === 'no' -> remove prefix if present
            if (prevMessage.startsWith(partnerPrefix)) {
                return { ...prev, partner: 'no', message: prevMessage.slice(partnerPrefix.length) };
            }
            return { ...prev, partner: 'no' };
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch('/api/submit-appointment', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error(await response.text());

            setStatus('success');
            setFormData({ firstName: '', lastName: '', email: '', phoneNumber: '', message: '' });
        } catch (error) {
            console.error('Submission failed:', error);
            setStatus('error');
        } finally {
            setTimeout(() => setStatus(''), 5000);
        }
    };

    return (
        <>
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle={t('breadcrumb')}>
                <div>
                    {/* Contact  Section  */}
                    <section className="contact-style-two p_relative">
                    <div className="auto-container">
                        <div className="row clearfix">
                        <h1 className="mb_100" style={{textAlign: 'center', fontWeight: 'bold'}}>
                            <span className="fa fa-envelope mr_15"></span>
                            {t('breadcrumb')}
                        </h1>
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="content-box">
                            <div className="sec-title mb_30">
                                <span className="sub-title">{t('quickContact')}</span>
                                <h2>
                                    {t('haveQuestions.line1')} <br />
                                    {t('haveQuestions.line2')}
                                </h2>
                            </div>
                            <div className="text mb_30">
                                <p>{t('introText')}</p>
                            </div>
                            <div className="location-box pb_40 mb_110">
                                <div className="icon-box"><i className="icon-61"></i></div>
                                <h3>{t('location.title')}</h3>
                                <p>{t('location.address')}</p>
                            </div>
                            <div className="inner-box">
                                <div className="row clearfix">
                                <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                    <div className="single-item">
                                    <div className="icon-box"><i className="icon-62"></i></div>
                                    <h3>{t('contactBox.title')}</h3>
                                    <ul className="info-list clearfix">
                                        <li>
                                        <h5>{t('contactBox.phoneLabel')}</h5>
                                        <p><Link href="tel:+33613800304">+33 613800304</Link></p>
                                        <h5>{t('contactBox.directCall')}</h5>
                                        <p><Link href="tel:+905338596835">+90 5338596835</Link></p>
                                        </li>
                                        <li>
                                        <h5>{t('contactBox.emailLabel')}</h5>
                                        <p><Link href="mailto:contact.kffp@monparcourt.com">contact.kffp@monparcourt.com</Link></p>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                    <div className="single-item">
                                    <div className="icon-box"><i className="icon-63"></i></div>
                                    <h3>{t('opening.title')}</h3>
                                    <ul className="info-list clearfix">
                                        <li>
                                        <h5>{t('opening.days')}</h5>
                                        <p>{t('opening.hours')}</p>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 form-column">
                            <div className="form-inner">
                            <div className="sec-title mb_40">
                                <span className="sub-title">{t('form.letsConnect')}</span>
                                <h2>{t('form.title')}</h2>
                                <p>{t('form.subtitle')}</p>
                            </div>
                            <form onSubmit={handleSubmit} id="contact-form" noValidate>
                                <div className="row clearfix">
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                    <input type="text" name="firstName" placeholder={t('form.firstName')} value={formData.firstName} onChange={handleChange} required />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                    <input type="text" name="lastName" placeholder={t('form.lastName')} value={formData.lastName} onChange={handleChange} required />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                    <input type="email" name="email" placeholder={t('form.email')} value={formData.email} onChange={handleChange} required />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                    <input type="tel" name="phoneNumber" placeholder={t('form.phone')} value={formData.phoneNumber} onChange={handleChange} required />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 form-group-radio mt_20 mb_50">
                                    <h4>{t('form.partnershipSelect')}</h4>
                                    <div className="form-radio">
                                        <label>
                                            <input type="radio" name="partner" value="yes" onChange={handleChange} onClick={() => handlePartnerChange("yes")} />
                                            {t('form.partnershipYes')}
                                        </label>
                                        <label>
                                            <input type="radio" name="partner" value="no" onChange={handleChange} onClick={() => handlePartnerChange("no")} />
                                            {t('form.partnershipNo')}
                                        </label>
                                    </div>
                                </div>

                                {
                                partnerShip === "yes" && 
                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                    <h4>{t('form.partnershipMessage')}</h4>
                                    <textarea name="message" placeholder={t('form.message')} value={formData.message} onChange={handleChange} style={{ height: '100px' }}></textarea>
                                </div>
                                }

                                {partnerShip === "no" && <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                    <textarea name="message" placeholder={t('form.message')} value={formData.message} onChange={handleChange}></textarea>
                                </div>}


                                <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                                    <button type="submit" className="theme-btn btn-two" name="submit-form" disabled={status === 'sending'}>
                                        <span>{status === 'sending' ? t('form.sending') : t('form.submit')}</span>
                                    </button>
                                </div>
                                {status === 'success' && (
                                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                        <p className="status-message success mt_20">{t('form.success')}</p>
                                    </div>
                                )}
                                {status === 'error' && (
                                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                        <p className="status-message error mt_20">{t('form.error')}</p>
                                    </div>
                                )}
                                </div>
                            </form>
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>
                    {/* Contact  Section End */}

                    {/* FAQ Section */}
                    <section className="faq-section pb_150 mt_50">
                        <div className="auto-container">
                            <div className="sec-title mb_60">
                            <span className="sub-title">{t('faq.subtitle')}</span>
                            <h2>{t('faq.title')}</h2>
                            <p>{t('faq.description')}</p>
                            </div>
                            <div className="row clearfix">
                            {/* FAQ Column 1 */}
                            <div className="col-lg-6 col-md-12 col-sm-12 faq-column">
                                <div className="faq-content">
                                <ul className="accordion-box">
                                    {/* FAQ Item 1 */}
                                    { Array.isArray(t('faq.questionsRight', { returnObjects: true })) ? t('faq.questionsRight', { returnObjects: true }).map((item, index) => (
                                        <li className="accordion block" key={index}>
                                            <div className={isActive.key == item.id ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(item.id)}>
                                                <div className="icon-box" style={{cursor: 'pointer'}}></div>
                                                <h5>{item.question}</h5>
                                            </div>
                                            <div className={isActive.key == item.id ? "acc-content current" : "acc-content"}>
                                                <div className="text">
                                                    <p>{item.answer}</p>
                                                </div>
                                            </div>
                                        </li>
                                    )): <h2>No data</h2>}
                                </ul>
                                </div>
                            </div>

                            {/* FAQ Column 2 */}
                            <div className="col-lg-6 col-md-12 col-sm-12 faq-column">
                                <div className="faq-content">
                                <ul className="accordion-box">
                                    { Array.isArray(t('faq.questionsLeft', { returnObjects: true })) ? t('faq.questionsLeft', { returnObjects: true }).map((item, index) => (
                                        <li className="accordion block" key={index}>
                                            <div className={isActive.key == item.id ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(item.id)}>
                                                <div className="icon-box" style={{cursor: 'pointer'}}></div>
                                                <h5>{item.question}</h5>
                                            </div>
                                            <div className={isActive.key == item.id ? "acc-content current" : "acc-content"}>
                                                <div className="text">
                                                    <p>{item.answer}</p>
                                                </div>
                                            </div>
                                        </li>
                                    )): <h2>No data</h2>}
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        </section>
                    {/* FAQ Section End */}

                       {/* Google Map Section */}
                       <section className="google-map-section p_relative">
                        {/*Map Outer*/}
                        <div className="auto-container">
                        <div className="map-inner p_relative d_block">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.7043776506854!2d2.3755!3d48.8467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6720ae7d5c46d%3A0x9d2c3d15f15f4c4e!2s87%20Boulevard%20Diderot%2C%2075012%20Paris%2C%20France!5e0!3m2!1sen!2s!4v1630000000000!5m2!1sen!2s" height={570} style={{ border: 0, width: "100%" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                        </div>
                        </div>
                        <h6 style={{textAlign: 'right', marginRight: '60px'}}>{t('signature')} <span style={{fontFamily: '"Great Vibes", cursive'}}>Adil Ali.</span></h6>
                    </section>
                    {/* Google Map Section End */}

                </div>

            </Layout>
        </>
    )
}
