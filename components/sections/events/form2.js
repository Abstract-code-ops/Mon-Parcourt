"use client";

import { Input, Radio, DatePicker, Typography, Form, Button, Space } from "antd";
import { UserOutlined, HomeOutlined, CalendarOutlined } from '@ant-design/icons';
import dayjs from "dayjs";
import { useTranslation } from 'react-i18next';
import styles from './FormSteps.module.css';

const { Title, Paragraph } = Typography;

export default function Step2({ onNext, onChange, data, onPrev }) {
  const { t } = useTranslation('events');
  
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

          <Form.Item label={t('step2.dob')} className={styles.formItem}>
                <DatePicker
                  name="dob"
                  style={{ width: '50%' }}
                  value={dayjs(data.dob).toDate()}
                  onChange={onChange}
                  format="YYYY-MM-DD"
                  inputReadOnly={false}
                  allowInput
                  allowClear
                  />
              </Form.Item>

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
              
        <Form.Item label={t('step2.hasPassport')} className={styles.formItem}>
                <Radio.Group 
                  name="hasPassport" 
                  value={data.hasPassport}
                  onChange={onChange}
                  className={styles.radioGroup}
                >
          <Radio value="yes" className={styles.radioButton}>{t('step2.yes')}</Radio>
          <Radio value="no" className={styles.radioButton}>{t('step2.no')}</Radio>
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