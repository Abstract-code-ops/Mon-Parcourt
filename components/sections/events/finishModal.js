'use client';
import { useState, useEffect } from 'react';
import { Button, Typography, Space } from 'antd';
import { CheckCircleOutlined, HeartOutlined, MailOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import dynamic from 'next/dynamic';
const Confetti = dynamic(() => import('react-dom-confetti'), { ssr: false });
import "@/public/assets/css/custom.css";

const { Title, Paragraph } = Typography;

export default function ThankYouModal({ isOpen, onClose, showConfetti = true }) {
  const { t } = useTranslation('events');
  const [showConfettiEffect, setShowConfettiEffect] = useState(false);

  useEffect(() => {
    if (isOpen && showConfetti) {
      // Small delay to ensure modal is visible before confetti starts
      const timer = setTimeout(() => {
        setShowConfettiEffect(true);
      }, 200);
      
      return () => clearTimeout(timer);
    } else {
      setShowConfettiEffect(false);
    }
  }, [isOpen, showConfetti]);

  if (!isOpen) return null;

  return (
    <>
      <Confetti isActive={showConfettiEffect} duration={4000} />
      <div 
        className="OverlayContainer" 
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.7)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 999999999,
          animation: 'fadeIn 0.3s ease-in-out'
        }}
      >
        <div 
          className="modalThank" 
          onClick={(e) => e.stopPropagation()}
          style={{
            background: 'white',
            borderRadius: '20px',
            padding: '3rem 2.5rem',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)',
            textAlign: 'center',
            maxWidth: '500px',
            width: '90%',
            position: 'relative',
            animation: 'slideInUp 0.4s ease-out'
          }}
        >
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <div style={{ marginBottom: '1rem' }}>
              <CheckCircleOutlined 
                style={{ 
                  fontSize: '4rem', 
                  color: 'var(--main-color)',
                  marginBottom: '1rem',
                  display: 'block'
                }} 
              />
              <Title 
                level={2} 
                style={{ 
                  color: 'var(--main-color)', 
                  marginBottom: '0.5rem',
                  fontSize: '2rem',
                  fontWeight: '600'
                }}
              >
                🎉 {t('finishModal.title')}
              </Title>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <Paragraph 
                style={{ 
                  fontSize: '1.1rem', 
                  color: '#666',
                  lineHeight: '1.6',
                  marginBottom: '1rem'
                }}
              >
                {t('finishModal.message1')}
              </Paragraph>
              
              <Paragraph 
                style={{ 
                  fontSize: '1rem', 
                  color: '#666',
                  lineHeight: '1.6',
                  marginBottom: '1rem'
                }}
              >
                {t('finishModal.message2')}
              </Paragraph>

              <div style={{
                background: 'linear-gradient(135deg, var(--main-color) 0%, var(--secondary-color) 100%)',
                color: 'white',
                padding: '1.5rem',
                borderRadius: '12px',
                marginBottom: '1.5rem'
              }}>
                <HeartOutlined style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }} />
                <Paragraph style={{ color: 'white', margin: 0, fontSize: '1rem' }}>
                  {t('finishModal.goodLuck')}
                </Paragraph>
              </div>
            </div>

            <div style={{
              background: '#f8f9fa',
              padding: '1.5rem',
              borderRadius: '12px',
              border: '1px solid #e9ecef',
              marginBottom: '1.5rem'
            }}>
              <MailOutlined style={{ fontSize: '1.2rem', color: 'var(--main-color)', marginBottom: '0.5rem' }} />
              <Paragraph style={{ margin: '0 0 0.5rem 0', fontSize: '0.9rem', color: '#666' }}>
                {t('finishModal.emailLabel')}
              </Paragraph>
              <Paragraph style={{ 
                fontWeight: 'bold', 
                color: 'var(--main-color)',
                margin: 0,
                fontSize: '1rem'
              }}>
                <a 
                  href={`mailto:${t('finishModal.emailAddress')}`}
                  style={{ 
                    color: 'var(--main-color)',
                    textDecoration: 'none',
                    borderBottom: '1px solid var(--main-color)'
                  }}
                >
                  {t('finishModal.emailAddress')}
                </a>
              </Paragraph>
            </div>

            <Button 
              onClick={onClose}
              type="primary"
              size="large"
              style={{
                height: '50px',
                fontSize: '1.1rem',
                fontWeight: '500',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, var(--main-color) 0%, var(--secondary-color) 100%)',
                border: 'none',
                boxShadow: '0 4px 12px rgba(3, 43, 102, 0.3)',
                transition: 'all 0.3s ease',
                minWidth: '150px'
              }}
            >
              {t('finishModal.continue')}
            </Button>
          </Space>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </>
  );
}