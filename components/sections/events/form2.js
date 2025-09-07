"use client";

import { Input, Radio, DatePicker, Typography, Form, Button, Space, Select } from "antd";
import { useState } from 'react';
import { UserOutlined, HomeOutlined, CalendarOutlined } from '@ant-design/icons';
import dayjs from "dayjs";
import { useTranslation } from 'react-i18next';
import styles from './FormSteps.module.css';

const { Title, Paragraph } = Typography;

export default function Step2({ onNext, onChange, data, onPrev }) {
  const { t } = useTranslation('events');
  const [dobError, setDobError] = useState(null);
  const MIN_AGE = 16;

  const isAtLeastAge = (date, age = MIN_AGE) => {
    if (!date) return false;
    return dayjs().diff(dayjs(date), 'year') >= age;
  };
  
  // Helper to normalize DatePicker changes into an event-like object
  const handleDateChange = (date, name) => {
    const value = date ? dayjs(date).format('YYYY-MM-DD') : '';
    // If this is the dob field, validate age >= MIN_AGE
    if (name === 'dob') {
      if (date && !isAtLeastAge(date)) {
        setDobError(t('errors.dobTooYoung') || `You must be at least ${MIN_AGE} years old`);
      } else {
        setDobError(null);
      }
    }

    // synthesize an event-like object expected by parent onChange
    onChange({ target: { name, value } });
  };

  const handleSelectChange = (value, name) => {
    onChange({ target: { name, value } });
  };
  
  return (
    <div className={styles.stepContainer}>
      <div className={styles.stepContent}>
        <Space direction="vertical" size="large" className={styles.fullWidth}>
          <div className={styles.stepHeader}>
            <Title level={2} className={styles.stepTitle}>
              {t('step2.title')}
            </Title>
            <Paragraph className={styles.stepDescription}>
              {t('step2.description')}
            </Paragraph>
          </div>
          
          <Form layout="vertical" className={styles.form}>
            <Space direction="vertical" size="middle" className={styles.fullWidth}>
              <div className={styles.inputRow}>
        <Form.Item label={t('step2.firstName')} className={styles.formItem}>
                  <Input
                    name="firstName"
          placeholder={t('step2.firstName')}
                    value={data.firstName}
                    onChange={onChange}
                    prefix={<UserOutlined className={styles.inputIcon} />}
                    size="large"
                    className={styles.input}
                  />
                </Form.Item>
                
        <Form.Item label={t('step2.surname')} className={styles.formItem}>
                  <Input
                    name="surname"
          placeholder={t('step2.surname')}
                    value={data.surname}
                    onChange={onChange}
                    prefix={<UserOutlined className={styles.inputIcon} />}
                    size="large"
                    className={styles.input}
                  />
                </Form.Item>
              </div>
              
        <Form.Item label={t('step2.residence')} className={styles.formItem}>
                <Input
                  name="residence"
                  placeholder={t('step2.residence')}
                  value={data.residence}
                  onChange={onChange}
                  prefix={<HomeOutlined className={styles.inputIcon} />}
                  size="large"
                  className={styles.input}
                />
              </Form.Item>

          <Form.Item
                label={t('step2.dob')}
                className={styles.formItem}
                validateStatus={dobError ? 'error' : ''}
                help={dobError || null}
              >
                <DatePicker
                  name="dob"
                  style={{ width: '50%' }}
                  value={data.dob ? dayjs(data.dob) : null}
                  onChange={(date) => handleDateChange(date, 'dob')}
                  format="YYYY-MM-DD"
                  inputReadOnly={false}
                  allowInput
                  allowClear
                  // prevent selecting dates that would make the user younger than MIN_AGE
                  disabledDate={(current) => {
                    // disable dates after cutoff (i.e. younger than MIN_AGE)
                    if (!current) return false;
                    return current.isAfter(dayjs().subtract(MIN_AGE, 'year'), 'day');
                  }}
                />
              </Form.Item>

              {/* Occupation: free text input */}
              <Form.Item label={t('step2.occupation') || 'Occupation'} className={styles.formItem}>
                <Input
                  name="occupationType"
                  placeholder={t('step2.occupation') || 'Occupation'}
                  value={data.occupationType}
                  onChange={onChange}
                  size="large"
                  className={styles.input}
                />
              </Form.Item>

              {/* Education status */}
              <Form.Item label={t('step2.educationStatus') || 'Education Status'} className={styles.formItem}>
                <Select
                  name="educationStatus"
                  value={data.educationStatus || undefined}
                  onChange={(value) => handleSelectChange(value, 'educationStatus')}
                  placeholder={t('step2.educationStatus') || 'Select education level'}
                  size="large"
                >
                  <Select.Option value="primary">Primary</Select.Option>
                  <Select.Option value="secondary">Secondary</Select.Option>
                  <Select.Option value="high_school">High School</Select.Option>
                  <Select.Option value="undergraduate">Undergraduate</Select.Option>
                  <Select.Option value="graduate">Graduate</Select.Option>
                  <Select.Option value="other">Other</Select.Option>
                </Select>
              </Form.Item>

              <Form.Item label={t('step2.haveLanguageExam')} className={styles.formItem}>
                <Radio.Group
                  name="haveLanguageExam"
                  onChange={onChange}
                  value={data.haveLanguageExam}
                  size="large"
                >
                  <Radio value="yes">{t('step2.yes')}</Radio>
                  <Radio value="no">{t('step2.no')}</Radio>
                </Radio.Group>
              </Form.Item>

              {data.haveLanguageExam === 'yes' && <div className={styles.inputRow}>
                <Form.Item label={t('step2.languageExam')} className={styles.formItem}>
                          <Input
                            name="languageExam"
                            placeholder={t('step2.languageExam')}
                            value={data.languageExam}
                            onChange={onChange}
                            // prefix={}
                            size="large"
                            className={styles.input}
                          />
                        </Form.Item>
                        
                <Form.Item label={t('step2.examGrade')} className={styles.formItem}>
                          <Input
                            name="examGrade"
                            placeholder={t('step2.examGrade')}
                            value={data.examGrade}
                            onChange={onChange}
                            // prefix={}
                            size="large"
                            className={styles.input}
                          />
                </Form.Item>
              </div>}
              
              {/* Passport information */}
              <Form.Item label={t('step2.hasPassport')} className={styles.formItem}>
                <Radio.Group
                  name="hasPassport"
                  onChange={onChange}
                  value={data.hasPassport}
                  size="large"
                >
                  <Radio value="yes">{t('step2.yes')}</Radio>
                  <Radio value="no">{t('step2.no')}</Radio>
                </Radio.Group>
              </Form.Item>
              {data.hasPassport === 'yes' && (
                <div className={styles.passportSection}>
                  <div className={styles.inputRow}>
                  <Form.Item label={t('step2.passportIssuance')} className={styles.formItem}>
                      <DatePicker
                        name="passportIssuanceDate"
                        value={data.passportIssuanceDate ? dayjs(data.passportIssuanceDate) : null}
                        onChange={(date) => handleDateChange(date, 'passportIssuanceDate')}
                        placeholder={t('step2.passportIssuance')}
                        size="large"
                        className={styles.input}
                        suffixIcon={<CalendarOutlined className={styles.inputIcon} />}
                      />
                    </Form.Item>
                    
                    <Form.Item label={t('step2.passportExpiry')} className={styles.formItem}>
                      <DatePicker
                        name="passportExpiryDate"
                        value={data.passportExpiryDate ? dayjs(data.passportExpiryDate) : null}
                        onChange={(date) => handleDateChange(date, 'passportExpiryDate')}
                        placeholder={t('step2.passportExpiry')}
                        size="large"
                        className={styles.input}
                        suffixIcon={<CalendarOutlined className={styles.inputIcon} />}
                      />
                    </Form.Item>
                  </div>
                </div>
              )}
            </Space>
            
            <div className={styles.buttonRow}>
              <Button 
                onClick={onPrev} 
                size="large"
                className={styles.secondaryButton}
              >
                {t('step2.back')}
              </Button>
              <Button 
                onClick={onNext} 
                type="primary"
                size="large"
                className={styles.primaryButton}
              >
                {t('step2.continue')}
              </Button>
            </div>
          </Form>
        </Space>
      </div>
    </div>
  );
}