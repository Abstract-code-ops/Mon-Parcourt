'use client';
import React from 'react';
import DonationButton from '../donation/DonationButton';
import { useTranslation } from 'react-i18next';

const Donate = () => {
  const { t } = useTranslation('home');

  const handleDonationSuccess = (paymentData) => {
    console.log('Donation completed successfully:', paymentData);
    // You can add additional success handling here (e.g., show success message, analytics, etc.)
  };

  const handleDonationError = (error) => {
    console.error('Donation failed:', error);
    // You can add error handling here (e.g., show error message)
  };

  return (
    <section className="donation-banner-section">
      <div className="container">
        <div className="donation-banner-wrapper">
          <div className="donation-banner-content">
            <div className="donation-text-content">
        <h2 className="donation-title">{t('donation.title')}</h2>
        <p className="donation-description">{t('donation.description')}</p>
              <div className="donation-stats">
                <div className="stat-item">
          <span className="stat-number">{t('donation.stats.lives.number')}</span>
          <span className="stat-label">{t('donation.stats.lives.label')}</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
          <span className="stat-number">{t('donation.stats.success.number')}</span>
          <span className="stat-label">{t('donation.stats.success.label')}</span>
                </div>
              </div>
            </div>
            
            <div className="donation-action-content">
              <div className="donation-button-wrapper">
                <DonationButton
                  buttonText={t('donation.buttonText')}
                  buttonClassName="donation-btn"
                  amount={25}
                  showAmountInput={true}
                  title={t('donation.modalTitle')}
                  description={t('donation.modalDescription')}
                  useEventModal={true}
                  onSuccess={handleDonationSuccess}
                  onError={handleDonationError}
                />
              </div>
              <p className="donation-security-note">
                <i className="fas fa-shield-alt"></i>
                {t('donation.securityNote')}
              </p>
            </div>
          </div>
          
          {/* Background decorative elements */}
          <div className="donation-banner-decoration">
            <div className="decoration-circle decoration-circle-1"></div>
            <div className="decoration-circle decoration-circle-2"></div>
            <div className="decoration-pattern"></div>
            {/* Currency coins */}
            <img src="assets/images/icons/coin1_white.png" alt="coin" className="donation-coin coin-1" />
            <img src="assets/images/icons/coin2_white.png" alt="coin" className="donation-coin coin-2" />
            <img src="assets/images/icons/coin3_white.png" alt="coin" className="donation-coin coin-3" />
            <img src="assets/images/icons/coin4_white.png" alt="coin" className="donation-coin coin-4" />
            <img src="assets/images/icons/coin5_white.png" alt="coin" className="donation-coin coin-5" />
            <img src="assets/images/icons/coin6_white.png" alt="coin" className="donation-coin coin-6" />
          </div>
        </div>
      </div>

    </section>
  );
};

export default Donate;
