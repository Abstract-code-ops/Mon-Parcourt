'use client';
import React, { useState } from 'react';
import EventDonationModal from '../events/EventDonationModal';

const DonationButton = ({ 
  buttonText = "Donate Now",
  buttonClassName = "theme-btn btn-one",
  title = "Make a Donation",
  description = "Your contribution makes a difference!",
  disabled = false
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const defaultButtonStyle = {
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
  };

  return (
    <>
      <button 
        onClick={() => !disabled && setIsModalOpen(true)}
        className={buttonClassName}
        style={defaultButtonStyle}
        disabled={disabled}
      >
        {buttonText}
      </button>

      <EventDonationModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={title}
          description={description}
        />
    </>
  );
};

export default DonationButton;
