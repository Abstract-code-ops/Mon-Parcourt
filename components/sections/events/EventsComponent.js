'use client';

import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Button } from 'antd';
import EventFormOverlay from './EventFormOverlay';
import ThankYouModal from './finishModal';
import AntdRegistry from './AntdRegistry';

const EventsComponent = ({ sheetID }) => {
  const { t } = useTranslation('events');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleFormSubmit = () => {
    setIsFormOpen(false);
    setShowThankYou(true);
  };

  return (
    <AntdRegistry>
      <main style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: '2rem', 
        marginBottom: '4rem' 
      }}>
        <Button 
          onClick={() => setIsFormOpen(true)} 
          type="primary"
          size="large"
          style={{ 
            padding: '1.5rem 3rem', 
            height: 'auto',
            fontSize: '1.1rem',
            fontWeight: '500',
            borderRadius: '8px',
            background: 'linear-gradient(135deg, var(--main-color) 0%, var(--secondary-color) 100%)',
            border: 'none',
            boxShadow: '0 4px 12px rgba(3, 43, 102, 0.3)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 6px 16px rgba(3, 43, 102, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 12px rgba(3, 43, 102, 0.3)';
          }}
        >
          {t('registerButton')}
        </Button>
        
        <EventFormOverlay
          isOpen={isFormOpen}
          onClose={() => setIsFormOpen(false)}
          onSubmit={handleFormSubmit}
          eventSheetID={sheetID}
        />

        <ThankYouModal
          isOpen={showThankYou}
          onClose={() => setShowThankYou(false)}
        />
      </main>
    </AntdRegistry>
  );
};

export default EventsComponent;