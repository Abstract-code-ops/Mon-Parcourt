"use client";

import { useState } from 'react';
import { Input, Button, Typography, Form, Space } from "antd";
import { MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import styles from './FormSteps.module.css';

const { Title, Paragraph } = Typography;

export default function Step1({ onNext, onChange, data }) {
  const { t } = useTranslation('events');
  const [error, setError] = useState('');

  const handleNextClick = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!data.email) {
      setError(t('step1.emailRequired'));
      return;
    }
    if (!emailRegex.test(data.email)) {
      setError(t('step1.emailInvalid'));
      return;
    }
    setError('');
    onNext();
  };

  return (
    <div className={styles.stepContainer}>
      <div className={styles.stepContent}>
        <Space direction="vertical" size="large" className={styles.fullWidth}>
          <div className={styles.stepHeader}>
            <Title level={2} className={styles.stepTitle}>
              {t('step1.title')}
            </Title>
            <Paragraph className={styles.stepDescription}>
              {t('step1.description')}
            </Paragraph>
          </div>
          
          <Form layout="vertical" className={styles.form}>
            <Form.Item
              label={t('step1.emailLabel')}
              validateStatus={error ? "error" : ""}
              help={error || ""}
              className={styles.formItem}
            >
              <Input
                type="email"
                name="email"
                placeholder={t('step1.emailPlaceholder')}
                value={data.email}
                onChange={onChange}
                prefix={<MailOutlined className={styles.inputIcon} />}
                size="large"
                className={styles.input}
              />
            </Form.Item>

            <Form.Item
              label={t('step1.phoneNumberLabel')}
              className={styles.formItem}
            >
              <Input
                name="phoneNumber"
                placeholder={t('step1.phoneNumberPlaceholder')}
                value={data.phoneNumber}
                onChange={onChange}
                size="large"
                className={styles.input}
                prefix={<PhoneOutlined className={styles.inputIcon} />}
                type="tel"
              />
            </Form.Item>
            
            <Form.Item className={styles.buttonContainer}>
              <Button 
                onClick={handleNextClick} 
                type="primary"
                size="large"
                className={styles.primaryButton}
                block
              >
                {t('step1.continue')}
              </Button>
            </Form.Item>
          </Form>
        </Space>
      </div>
    </div>
  );
}