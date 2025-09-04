'use client'

import { useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/src/i18n';
import SuspensePreloader from '../elements/SuspensePreloader';

export default function I18nProviderWrapper({ children }) {
    const [isI18nReady, setIsI18nReady] = useState(false);

    useEffect(() => {
        // Wait for i18n to be initialized
        if (i18n.isInitialized) {
            setIsI18nReady(true);
        } else {
            i18n.on('initialized', () => {
                setIsI18nReady(true);
            });
        }

        return () => {
            i18n.off('initialized');
        };
    }, []);

    if (!isI18nReady) {
        return <SuspensePreloader id="i18n-loading" />;
    }

    return (
        <I18nextProvider i18n={i18n}>
            {children}
        </I18nextProvider>
    );
}