"use client"
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function TestCenterMap() {
    const { t } = useTranslation('coaching');
    const institutes = [
        { key: 'britishCouncilCameroon', countryKey: 'cameroon', url: 'https://www.britishcouncil.org' },
        { key: 'institutFrancaisCameroon', countryKey: 'cameroon', url: 'https://www.ifcameroun.com/' },
        { key: 'universityYaounde', countryKey: 'cameroon', url: 'https://uy1.uninet.cm/departement-des-sciences-du-langage/' },
        { key: 'universityKinshasa', countryKey: 'drCongo', url: 'https://www.unikin.ac.cd' },
        { key: 'institutFrancaisCentralAfrica', countryKey: 'regional', url: 'https://www.institutfrancais.com' },
        { key: 'goetheInstitutRegional', countryKey: 'regional', url: 'https://www.goethe.de' },
        { key: 'internationalHouseYaounde', countryKey: 'cameroon', url: 'https://www.ihworld.com' },
    ];

    const containerStyle = {
        maxWidth: '900px',
        margin: '30px auto',
        padding: '24px',
        background: '#fff',
        borderRadius: '12px',
        boxShadow: '0 8px 24px rgba(13, 38, 59, 0.08)',
        fontFamily: 'Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
    };

    const headerStyle = { margin: '0 0 8px 0', fontSize: '20px', color: '#0d263b' };
    const subtitleStyle = { margin: '0 0 18px 0', color: '#536b7a', textTransform: 'lowercase' };

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '12px',
        marginBottom: '18px',
    };

    const cardStyle = {
        padding: '12px',
        borderRadius: '8px',
        background: 'linear-gradient(180deg, #ffffff 0%, #f7fbfc 100%)',
        border: '1px solid #e6eef4',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    };

    const nameStyle = { fontWeight: 600, color: '#072540', fontSize: '15px', marginBottom: '6px' };
    const countryStyle = { color: '#6b8793', fontSize: '13px', marginBottom: '10px' };

    const linkBtn = {
        display: 'inline-block',
        textDecoration: 'none',
        background: 'var(--main-color)',
        color: '#fff',
        padding: '8px 10px',
        borderRadius: '6px',
        fontSize: '13px',
    };

    return (
        <div style={containerStyle}>
            <h3 style={headerStyle}>{t('topInstitutes.title')}</h3>
            <p style={subtitleStyle}>{t('topInstitutes.subtitle')}</p>

            <div style={gridStyle}>
                {institutes.map((ins, idx) => (
                    <div key={idx} style={cardStyle}>
                        <div>
                            <div style={nameStyle}>{t(`institutes.${ins.key}`)}</div>
                            <div style={countryStyle}>{t(`countries.${ins.countryKey}`)}</div>
                        </div>
                        <div>
                            <a href={ins.url} target="_blank" rel="noopener noreferrer" style={linkBtn}>
                                {t('topInstitutes.visitWebsite')}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
                    <div style={{ marginTop: '6px', paddingTop: '10px', borderTop: '1px dashed #e6eef4' }}>
                        <span style={{ color: '#e03b3b', fontWeight: 700 }}>{t('topInstitutes.notice')}</span>
                    </div>
        </div>
    );
}
