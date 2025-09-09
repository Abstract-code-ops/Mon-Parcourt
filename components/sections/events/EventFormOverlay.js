"use client";

import { useState, useEffect } from 'react';
import { Alert, Button, Steps } from 'antd';
import { useTranslation } from 'react-i18next';
import { CloseOutlined } from '@ant-design/icons';
import Step1 from './form1';
import Step2 from './form2';
import Step3 from './form3';
import EventDonationModal from './EventDonationModal';
import styles from './EventFormOverlay.module.css';

const { Step } = Steps;

export default function EventFormOverlay({ isOpen, onClose, onSubmit, eventSheetID }) {
  const { t } = useTranslation('events');
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    phoneNumber: '',
    firstName: '',
    surname: '',
    residence: '',
    dob: '',
    occupationType: '',
    educationStatus: '',
    hasPassport: '',
    passportIssuanceDate: '',
    passportExpiryDate: '',
    eventSheetID: eventSheetID || null, // Add the eventSheetID to the form data with null fallback
    haveLanguageExam: '',
    languageExam: '',
    examGrade: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [showDonation, setShowDonation] = useState(false);

  if (!isOpen) return null;

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFinalSubmit = async () => {
    setError(null);
    setIsSubmitting(true);

    let newPhone = formData.phoneNumber;
    newPhone = `"${newPhone}"`; // Ensure phone number is treated as text in Sheets to preserve formatting
    newPhone = newPhone.replace(/[^0-9"+]/g, ''); // Sanitize phone number input
    
    const dataToSend = {
    ...formData,
    phoneNumber: newPhone,
    };
    console.log('Submitting form data:', dataToSend);

    try {
      const response = await fetch('/api/submit-event-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        onSubmit();
      } else {
        const errorData = await response.json();
        // If API returned a list of validation errors, store them so we can render details
        if (errorData.errors && Array.isArray(errorData.errors) && errorData.errors.length) {
          setError({ message: errorData.message || t('errors.submitUnexpected'), details: errorData.errors });
        } else {
          setError(errorData.message || t('errors.submitUnexpected'));
        }
      }
    } catch (error) {
      setError(t('errors.networkError'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDonateClick = () => {
    setShowDonation(true);
  };

  const handleDonationClose = () => {
    setShowDonation(false);
  };

  const stepTitles = [t('steps.contact'), t('steps.personal'), t('steps.finish')];

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.container} onClick={(e) => e.stopPropagation()}>
        {/* Header with breadcrumb design */}
          <div className={styles.header}>
          <div className={styles.breadcrumbDesign}>
            <div className={styles.decorativeElement}></div>
            <h2 className={styles.title}>{t('overlay.title')}</h2>
          </div>
          <Button
            type="text"
            icon={<CloseOutlined />}
            onClick={onClose}
            className={styles.closeButton}
          />
        </div>

        {/* Progress Steps */}
        <div className={styles.stepsContainer}>
          <Steps
            current={currentStep - 1}
            size="small"
            className={styles.steps}
            onChange={(current) => {
              // current is the zero-based index from antd Steps
              // clicking a step title should display that step in the form
              setCurrentStep(current + 1);
            }}
          >
            {stepTitles.map((title, index) => (
              <Step key={index} title={title} />
            ))}
          </Steps>
        </div>

        {/* Error Message */}
        {error && (
          <Alert
            message={typeof error === 'string' ? error : error.message}
            description={
              typeof error === 'object' && error.details ? (
                <ul style={{ margin: 0, paddingLeft: 18 }}>
                  {error.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              ) : null
            }
            type="error"
            showIcon
            closable
            onClose={() => setError(null)}
            className={styles.errorAlert}
          />
        )}

        {/* Form Content with Conditional Rendering */}
        <div className={styles.formContent}>
          {currentStep === 1 && (
            <div className={styles.formStep}>
              <Step1
                onChange={handleFormChange}
                onNext={handleNext}
                data={formData}
              />
            </div>
          )}
          
          {currentStep === 2 && (
            <div className={styles.formStep}>
              <Step2
                onChange={handleFormChange}
                onNext={handleNext}
                onPrev={handlePrev}
                data={formData}
              />
            </div>
          )}
          
          {currentStep === 3 && (
            <div className={styles.formStep}>
              <Step3
                onSubmit={handleFinalSubmit}
                onPrev={handlePrev}
                isSubmitting={isSubmitting}
                formData={formData}
                onDonate={handleDonateClick}
              />
            </div>
          )}
        </div>

        {/* Event Donation Modal */}
        <EventDonationModal
          isOpen={showDonation}
          onClose={handleDonationClose}
          customerEmail={formData.email || ''}
          customerName={`${formData.firstName || ''} ${formData.surname || ''}`.trim()}
          title={t('overlay.donationTitle')}
          description={t('overlay.donationDescription')}
          defaultAmount={25}
        />
      </div>
    </div>
  );
}