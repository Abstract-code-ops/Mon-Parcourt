'use client';
import React from 'react';
import dayjs from 'dayjs';
import { ArrowRightOutlined } from '@ant-design/icons';
import i18n from '../../src/i18n';

const ExamCalendar = ({ 
  month, 
  year = 2024, 
  highlightDates = [], 
  examType, 
  referenceLink,
  referenceText = "Official Website"
}) => {
  // Generate calendar data for the specified month
  const generateCalendarData = () => {
    const startDate = dayjs(`${year}-${month.toString().padStart(2, '0')}-01`);
    const daysInMonth = startDate.daysInMonth();
    const firstDayOfWeek = startDate.day(); // 0 = Sunday, 1 = Monday, etc.
    
    const calendarDays = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfWeek; i++) {
      calendarDays.push(null);
    }
    
    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      calendarDays.push(day);
    }
    
    return calendarDays;
  };

  const calendarDays = generateCalendarData();
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const isHighlighted = (day) => {
    return day && highlightDates.includes(day);
  };

  // Lightweight, local translations for the small notice text.
  // We intentionally avoid importing the global i18n so we don't trigger
  // loading of other translation namespaces.
  const getBrowserLang = () => {
    if (typeof window === 'undefined') return 'en';
    const htmlLang = document.documentElement && document.documentElement.lang;
    if (htmlLang) return htmlLang.split('-')[0];
    const nav = navigator.language || navigator.userLanguage || 'en';
    return nav.split('-')[0];
  };

  const noticeMessages = {
    en: {
      label: 'Notice:',
  text: 'These are general dates, for more accurate dates based on your region you can refer to this page',
  referenceText: 'Official Website',
  headerSuffix: 'Exam Dates'
    },
    fr: {
      label: 'Avis :',
  text: "Ce sont des dates générales ; pour des dates plus précises selon votre région, veuillez consulter cette page",
  referenceText: 'Site officiel',
  headerSuffix: "Dates d'examen"
    }
  };

  // Track current language reactively from the global i18n so the
  // notice updates when the header language switcher changes language.
  const [lang, setLang] = React.useState(() => {
    if (typeof window === 'undefined') return 'en';
    return (i18n && i18n.language) ? i18n.language.split('-')[0] : getBrowserLang();
  });

  React.useEffect(() => {
    if (!i18n || typeof i18n.on !== 'function') return undefined;
    const handler = (lng) => setLang((lng || 'en').split('-')[0]);
    i18n.on('languageChanged', handler);
    return () => i18n.off('languageChanged', handler);
  }, []);

  const noticeMsg = noticeMessages[lang] || noticeMessages.en;

  const linkText = referenceText === 'Official Website' ? noticeMsg.referenceText : referenceText;

  return (
    <div className="exam-calendar-widget mt_120">
      <div className="widget-content p_relative">
        <div className="calendar-header">
          <h3 style={{ 
            color: 'var(---main-color)', 
            marginBottom: '20px', 
            textAlign: 'center',
            fontSize: '18px',
            fontWeight: 'bold'
          }}>
            {examType} {noticeMsg.headerSuffix}
          </h3>
          <div className="calendar-month-year" style={{
            textAlign: 'center',
            fontSize: '16px',
            fontWeight: '600',
            marginBottom: '15px',
            color: '#333'
          }}>
            {monthNames[month - 1]} {year}
          </div>
        </div>
        
        <div className="custom-calendar">
          {/* Day headers */}
          <div className="calendar-days-header" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(7, 1fr)',
            gap: '2px',
            marginBottom: '5px'
          }}>
            {dayNames.map((day, index) => (
              <div key={index} style={{
                textAlign: 'center',
                fontSize: '12px',
                fontWeight: 'bold',
                color: '#666',
                padding: '5px 0'
              }}>
                {day}
              </div>
            ))}
          </div>
          
          {/* Calendar grid */}
          <div className="calendar-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(7, 1fr)',
            gap: '2px'
          }}>
            {calendarDays.map((day, index) => (
              <div
                key={index}
                style={{
                  minHeight: '35px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '14px',
                  backgroundColor: day ? (isHighlighted(day) ? 'var(--main-color)' : '#f5f5f5') : 'transparent',
                  color: day ? (isHighlighted(day) ? 'white' : '#333') : 'transparent',
                  borderRadius: '4px',
                  fontWeight: isHighlighted(day) ? 'bold' : 'normal',
                  cursor: day ? 'default' : 'default',
                  border: isHighlighted(day) ? '2px solid var(--main-color)' : '1px solid #e8e8e8'
                }}
              >
                {day || ''}
              </div>
            ))}
          </div>
        </div>
        
        <div className="calendar-notice" style={{
          marginTop: '20px',
          padding: '15px',
          backgroundColor: '#f6f6f6',
          borderRadius: '6px',
          fontSize: '13px',
          lineHeight: '1.5'
        }}>
          <p style={{ margin: '0 0 10px 0', color: '#666' }}>
            <strong>{noticeMsg.label}</strong> {noticeMsg.text}
          </p>
          <a 
            href={referenceLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              color: '#1890ff',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: '500'
            }}
          >
            <ArrowRightOutlined style={{ marginRight: '8px', fontSize: '12px' }} />
            {linkText}
          </a>
        </div>
      </div>
      
      <style jsx>{`
        .exam-calendar-widget {
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          margin-bottom: 30px;
        }
        
        .widget-content {
          padding: 20px;
        }
        
        .custom-calendar {
          border: 1px solid #e8e8e8;
          border-radius: 6px;
          padding: 10px;
          background: white;
        }
        
        .calendar-notice a:hover {
          color: #40a9ff;
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default ExamCalendar;
