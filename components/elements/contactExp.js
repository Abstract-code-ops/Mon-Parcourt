'use client'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

const ContactExp = ( {map}=false ) => {
    const { t } = useTranslation('common')

    const [formData, setFormData] = useState({ firstName: '', email: '', phoneNumber: '', message: '' });
    const [status, setStatus] = useState(''); // '', 'sending', 'success', 'error'

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        try {
            const payload = { ...formData, lastName: formData.lastName ?? 'customer' };
            const res = await fetch('/api/submit-appointment', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });
            if (!res.ok) throw new Error(await res.text());
            setStatus('success');
            setFormData({ firstName: '', email: '', phoneNumber: '', message: '' });
        } catch (err) {
            console.error('submit failed', err);
            setStatus('error');
        } finally {
            setTimeout(() => setStatus(''), 5000);
        }
    }

  const textAreaStyles = {
        backgroundColor: 'white',
        width: '100%',
        padding: '1rem 2rem',
        color: '#B9B8B8'
    }

  return (
    <section className={`contact-section ${map ? 'mb_80' : ''}`}>
                                <div className="pattern-layer" style={{backgroundImage: "url(assets/images/shape/shape-37.png)"}}>
                                </div>
                                <div className="auto-container">
                                    <div className="inner-container clearfix">
                                        <div className={`content-box ${map ? 'half-width' : ''}`}>
                                            <div className="bg-layer" style={{backgroundImage: "url(assets/images/resource/contact-1.jpg)"}}>
                                            </div>
                                            <div className="sec-title mb_30">
                                                <span className="sub-title">{t('contact.subtitle')}</span>
                                                <h2>{t('contact.title')}</h2>
                                            </div>
                                            <div className="form-inner">
                                                {/* controlled form that submits JSON to /api/submit-appointment */}
                                                <form onSubmit={handleSubmit} noValidate>
                                                    <div className="row clearfix">
                                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                            <input type="text" placeholder={t('contact.name')} required name="firstName" value={formData.firstName} onChange={handleChange} />
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                            <input type="email" placeholder={t('contact.email')} required name="email" value={formData.email} onChange={handleChange} />
                                                        </div>
                                                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                            <input type="text" placeholder={t('contact.phone')} required name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
                                                        </div>
                                                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                            <textarea style={textAreaStyles} type="text" placeholder={t('contact.message')} required name="message" value={formData.message} onChange={handleChange} />
                                                        </div>
                                                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                            <div className="message-btn">
                                                                <button type="submit" className="theme-btn btn-one" disabled={status === 'sending'}>
                                                                <span>{status === 'sending' ? t('contact.sending') ?? 'Sending...' : t('contact.submit')}</span>
                                                                </button>
                                                            </div>
                                                        </div>

                                                        {status === 'success' && (
                                                            <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                                <p className="status-message success mt_20">{t('contact.success') ?? 'Message sent successfully'}</p>
                                                            </div>
                                                        )}
                                                        {status === 'error' && (
                                                            <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                                <p className="status-message error mt_20">{t('contact.error') ?? 'Failed to send message'}</p>
                                                            </div>
                                                        )}
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        {map ? <div className="map-inner p_relative d_block">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.7043776506854!2d2.3755!3d48.8467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6720ae7d5c46d%3A0x9d2c3d15f15f4c4e!2s87%20Boulevard%20Diderot%2C%2075012%20Paris%2C%20France!5e0!3m2!1sen!2s!4v1630000000000!5m2!1sen!2s" height={570} style={{ border: 0, width: "100%" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                                        </div> : <div></div>}
                                    </div>
                                </div>
                            </section>
  )
}

export default ContactExp