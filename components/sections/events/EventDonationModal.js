'use client';
import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { createPortal } from 'react-dom';
import { Card, Button, Space, Typography } from 'antd';
import { CreditCardOutlined, MobileOutlined } from '@ant-design/icons';
import styles from './EventDonationModal.module.css';

const { Title, Text } = Typography;

const EventDonationModal = ({ 
  isOpen, 
  onClose, 
  title,
  description
}) => {
  const { t } = useTranslation('events');
  // Use provided title/description if given, otherwise fall back to translations
  const modalTitle = title ?? t('overlay.donationTitle');
  const modalDescription = description ?? t('overlay.donationDescription');
  const [step, setStep] = useState('selection'); // 'selection', 'cardForm', 'mobileMoneyForm'
  const [error, setError] = useState('');
  const [mounted, setMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const thankYouTimerRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      // Add a small delay to trigger the animation
      const timer = setTimeout(() => setIsAnimating(false), 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // cleanup any pending timers on unmount
  useEffect(() => {
    return () => {
      if (thankYouTimerRef.current) {
        clearTimeout(thankYouTimerRef.current);
        thankYouTimerRef.current = null;
      }
    };
  }, []);

  if (!isOpen || !mounted) return null;

  const handleCardPayment = () => {
    setStep('cardForm');
  };

  const handleMobileMoneyPayment = () => {
    setStep('mobileMoneyForm');
  };

  const handleClose = () => {
    // Trigger closing animation
    setIsAnimating(true);
    // clear any existing thank-you timer
    if (thankYouTimerRef.current) {
      clearTimeout(thankYouTimerRef.current);
      thankYouTimerRef.current = null;
    }
    
    // Wait for animation to complete before actually closing
    setTimeout(() => {
      setStep('selection');
      setError('');
      setIsAnimating(false);
      onClose?.();
    }, 250);
  };

  const handleDone = () => {
    // show thank-you animation then close
    setStep('thankYou');
    // clear any previous timer
    if (thankYouTimerRef.current) {
      clearTimeout(thankYouTimerRef.current);
    }
    thankYouTimerRef.current = setTimeout(() => {
      thankYouTimerRef.current = null;
      handleClose();
    }, 1200);
  };

  const handleBack = () => {
    if (step === 'mobileMoneyForm' || step === 'cardForm') {
      setStep('selection');
      setError('');
    }
  };

  const renderSelectionStep = () => (
    <div className={styles.content}>
      <div className={styles.header}>
        <Image 
          src="assets/images/logo.png" 
          alt="logo" 
          width={80} 
          height={61}
          className={styles.logo}
        />
        <Title level={2} className={styles.title}>
          {modalTitle}
        </Title>
        <Text className={styles.description}>
          {modalDescription}
        </Text>
      </div>
      
      {error && (
        <div className={styles.errorMessage}>
          {error}
        </div>
      )}

      <div className={styles.paymentOptions}>
        <Card
          hoverable
          className={styles.paymentCard}
          onClick={handleCardPayment}
        >
          <Space direction="vertical" align="center" size="middle">
            <CreditCardOutlined className={styles.cardIcon} />
            <Title level={3} className={styles.cardTitle}>
              {t('cardForm.title')}
            </Title>
            <Text type="secondary" className={styles.cardDescription}>
              {t('cardForm.description')}
            </Text>
          </Space>
        </Card>

        <Card
          hoverable
          className={styles.paymentCard}
          onClick={handleMobileMoneyPayment}
        >
          <Space direction="vertical" align="center" size="middle">
            <MobileOutlined className={styles.mobileIcon} />
            <Title level={3} className={styles.mobileTitle}>
              {t('mobileForm.title')}
            </Title>
            <Text type="secondary" className={styles.cardDescription}>
              {t('mobileForm.description')}
            </Text>
          </Space>
        </Card>
      </div>
    </div>
  );

  const renderCardForm = () => (
    <div className={styles.content}>
      <Button 
        type="text" 
  onClick={handleBack} 
        className={styles.backButton}
      >
  {t('cardForm.backToOptions')}
      </Button>
      
      <div className={styles.formHeader}>
        <CreditCardOutlined className={styles.formIcon} />
        <Title level={3} className={styles.formTitle}>
          {t('cardForm.title')}
        </Title>
        <Text type="secondary" className={styles.formDescription}>
          {t('cardForm.description')}
        </Text>
      </div>

      <div className={styles.bankDetails}>
          <div className={styles.detailCard}>
          <Title level={4} className={styles.bankTitle}>{t('cardForm.accountInfoTitle')}</Title>

          <div className={styles.bankItem}>
            <Text className={styles.bankLabel}>{t('cardForm.accountNameLabel')}</Text>
            <Text className={styles.bankValue}>KETCHAGMEN FOSSO FABRICE PAULIN</Text>
          </div>

          <div className={styles.bankItem}>
            <Text className={styles.bankLabel}>{t('cardForm.bankNameLabel')}</Text>
            <Text className={styles.bankValue}>AFRILAND FIRST BANK</Text>
          </div>

          <div className={styles.bankItem}>
            <Text className={styles.bankLabel}>{t('cardForm.cardNumberLabel')}</Text>
            <Text className={styles.bankValue}>4413 4700 9129 9006</Text>
          </div>

          <div className={styles.bankItem}>
            <Text className={styles.bankLabel}>{t('cardForm.ibanLabel')}</Text>
            <Text className={styles.bankValue}>10005 00012 09894651101 15</Text>
          </div>

          <div className={styles.bankItem}>
            <Text className={styles.bankLabel}>{t('cardForm.swiftCodeLabel')}</Text>
            <Text className={styles.bankValue}>CCEICMCXBAF</Text>
          </div>
        </div>

        <div className={styles.instructionsCard}>
          <Title level={5} className={styles.instructionsTitle}>{t('cardForm.instructionsTitle')}</Title>
          <ul className={styles.instructionsList}>
            <li>{t('cardForm.instruction1')}</li>
            <li>{t('cardForm.instruction2')}</li>
            <li>{t('cardForm.instruction3')}</li>
          </ul>
        </div>
      </div>

      <Button
        type="primary" 
        size="large" 
        onClick={handleDone}
        className={styles.doneButton}
        block
      >
  {t('cardForm.done')}
      </Button>
    </div>
  );

  const renderMobileMoneyForm = () => (
    <div className={styles.content}>
      <Button
        type="text" 
        onClick={handleBack} 
        className={styles.backButton}
      >
    {t('mobileForm.backToOptions')}
      </Button>

      <div className={styles.formHeader}>
        <MobileOutlined className={styles.formIcon} />
        <Title level={3} className={styles.formTitle}>
          {t('mobileForm.title')}
        </Title>
        <Text type="secondary" className={styles.formDescription}>
          {t('mobileForm.description')}
        </Text>
      </div>

      <div className={styles.bankDetails}>
        <div className={styles.detailCard}>
          <Title level={4} className={styles.bankTitle}>{t('mobileForm.mobileInfoTitle')}</Title>

          <div className={styles.bankItem}>
            <Text className={styles.bankLabel}>{t('mobileForm.recipientLabel')}</Text>
            <Text className={styles.bankValue}>KETCHAGMEN FOSSO FABRICE PAULIN</Text>
          </div>

          <div className={styles.bankItem}>
            <Text className={styles.bankLabel}>{t('mobileForm.mobileNumberLabel')}</Text>
            <Text className={styles.bankValue}>{"+237 696715396"}</Text>
          </div>

          <div className={styles.bankItem}>
            <Text className={styles.bankLabel}>{t('mobileForm.networkLabel')}</Text>
            <Text className={styles.bankValue}>ORANGE MONEY CAMEROON</Text>
          </div>
        </div>

        <div className={styles.instructionsCard}>
          <Title level={5} className={styles.instructionsTitle}>{t('mobileForm.instructionsTitle')}</Title>
          <ul className={styles.instructionsList}>
            <li>{t('mobileForm.instruction1')}</li>
            <li>{t('mobileForm.instruction2')}</li>
            <li>{t('mobileForm.instruction3')}</li>
          </ul>
        </div>
      </div>

      <Button 
        type="primary" 
        size="large" 
        onClick={handleDone}
        className={styles.doneButton}
        block
      >
  {t('mobileForm.done')}
      </Button>
    </div>
  );

  const renderThankYouStep = () => (
    <div style={{display: 'flex', justifyContent: 'center', marginTop: 8, marginBottom: 12, padding: '2rem'}}>
      <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
        <svg className="edm-check" width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <circle cx="36" cy="36" r="34" stroke="#28a745" strokeWidth="4" fill="rgba(40,167,69,0.12)" />
          <path className="edm-check-path" d="M20 38 L31 49 L52 28" stroke="#28a745" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
        <div>
          <Title level={4} style={{margin: 0, color: '#28a745'}}>{t('overlay.thankYou') ?? 'Thank you!'}</Title>
        </div>
      </div>
      {/* Inline styles for the SVG draw animation */}
      <style>{`
        .edm-check { display: inline-block; vertical-align: middle; }
        .edm-check-path { stroke-dasharray: 100; stroke-dashoffset: 100; animation: edm-draw 0.6s ease forwards 0.15s; }
        @keyframes edm-draw { to { stroke-dashoffset: 0; } }
      `}</style>
    </div>
  );

  return createPortal(
    <div className={`${styles.overlay} ${isAnimating ? styles.animating : ''}`} onClick={handleClose}>
      <div className={`${styles.modal} ${isAnimating ? styles.animating : ''}`} onClick={(e) => e.stopPropagation()}>
        {/* show thank-you at top when active */}
        {step === 'thankYou' && renderThankYouStep()}

        <button onClick={handleClose} className={styles.closeButton}>
          ×
        </button>

        {step === 'selection' && renderSelectionStep()}
        {step === 'cardForm' && renderCardForm()}
        {step === 'mobileMoneyForm' && renderMobileMoneyForm()}
      </div>
    </div>,
    document.body
  );
};

export default EventDonationModal;
