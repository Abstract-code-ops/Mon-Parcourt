"use client";

import { Typography, Button, Space } from "antd";
import { HeartOutlined, CheckOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import styles from './FormSteps.module.css';

const { Title, Paragraph } = Typography;

export default function Step3({ onSubmit, onPrev, isSubmitting, formData, onDonate }) {
  const { t } = useTranslation('events');

  const handleDonateClick = () => {
    // Trigger donation modal with form data
    onDonate?.(formData);
  };

  return (
    <div className={styles.stepContainer}>
      <div className={styles.stepContent}>
        <Space direction="vertical" size="large" className={styles.fullWidth}>
          <div className={styles.stepHeader}>
            <Title level={2} className={styles.stepTitle}>
              {t('step3.title')}
            </Title>
            <Paragraph className={styles.stepDescription}>
              {t('step3.description')}
            </Paragraph>
          </div>
          
          <div className={styles.donationSection}>
            <div className={styles.impactCard}>
              <HeartOutlined className={styles.impactIcon} />
              <Paragraph className={styles.impactText}>
                {t('step3.impactText')}
              </Paragraph>
            </div>
          </div>
          
          <div className={styles.finalButtons}>
            <Button 
              onClick={onPrev} 
              disabled={isSubmitting} 
              size="large"
              className={styles.secondaryButton}
            >
              {t('buttons.back')}
            </Button>
            
            <div className={styles.actionButtons}>
              <Button 
                onClick={handleDonateClick} 
                disabled={isSubmitting}
                size="large"
                className={styles.donateButton}
                icon={<HeartOutlined />}
              >
                {t('buttons.donateNow')}
              </Button>
              
              <Button 
                onClick={!isSubmitting ? onSubmit : undefined}
                disabled={isSubmitting}
                type="primary"
                size="large"
                className={styles.primaryButton}
                icon={!isSubmitting ? <CheckOutlined /> : null}
                loading={isSubmitting}
              >
                {isSubmitting ? t('buttons.completingRegistration') : t('buttons.completeRegistration')}
              </Button>
            </div>
          </div>
        </Space>
      </div>
    </div>
  );
}