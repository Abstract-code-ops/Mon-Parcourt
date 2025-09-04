'use client'
import Link from "next/link";
import { useTranslation } from 'react-i18next';

export default function Menu() {
    const { t } = useTranslation('common');

    return (
        <>
            <ul className="navigation clearfix" style={{ width: '100%' }}>
                <li className="dropdown"><Link href="/">{t('menu.home')}</Link></li>

                <li className="dropdown"><Link href="#">{t('menu.visaServices')}</Link>
                    <ul>
                        <li className="dropdown"><Link href="#">{t('menu.visaServices')}</Link>
                            <ul>
                                <li><Link href="/visa">{t('menu.visaOverview')}</Link></li>
                                <li><Link href="/visa-details">{t('visas.business')}</Link></li>
                                <li><Link href="/visa-details-2">{t('visas.working')}</Link></li>
                                <li><Link href="/visa-details-3">{t('visas.residence')}</Link></li>
                                <li><Link href="/visa-details-4">{t('visas.student')}</Link></li>
                                <li><Link href="/visa-details-5">{t('visas.spouseFamily')}</Link></li>
                                <li><Link href="/visa-details-6">{t('visas.tourist')}</Link></li>
                            </ul>
                        </li>
                        <li className="dropdown"><Link href="#">{t('menu.countries')}</Link>
                            <ul>
                                <li><Link href="/countries">{t('menu.countriesOverview')}</Link></li>
                                <li><Link href="/countries-details">{t('countriesList.unitedStates')}</Link></li>
                                <li><Link href="/countries-details-2">{t('countriesList.luxembourg')}</Link></li>
                                <li><Link href="/countries-details-3">{t('countriesList.canada')}</Link></li>
                                <li><Link href="/countries-details-4">{t('countriesList.china')}</Link></li>
                                <li><Link href="/countries-details-5">{t('countriesList.germany')}</Link></li>
                                <li><Link href="/countries-details-6">{t('countriesList.australia')}</Link></li>
                                <li><Link href="/countries-details-7">{t('countriesList.spain')}</Link></li>
                                <li><Link href="/countries-details-8">{t('countriesList.turkey')}</Link></li>
                                <li><Link href="/countries-details-12">{t('countriesList.northCyprus')}</Link></li>
                                <li><Link href="/countries-details-9">{t('countriesList.lithuania')}</Link></li>
                                <li><Link href="/countries-details-10">{t('countriesList.france')}</Link></li>
                                <li><Link href="/countries-details-11">{t('countriesList.uae')}</Link></li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <li className="dropdown"><Link href="#">{t('menu.coaching')}</Link>
                    <ul>
                        <li><Link href="/coaching">{t('menu.coachingOverview')}</Link></li>
                        <li><Link href="/coaching-details">{t('coaching.ielts')}</Link></li>
                        <li><Link href="/coaching-details-2">{t('coaching.pte')}</Link></li>
                        <li><Link href="/coaching-details-3">{t('coaching.tofel')}</Link></li>
                        <li><Link href="/coaching-details-4">{t('coaching.daf')}</Link></li>
                        <li><Link href="/coaching-details-5">{t('coaching.tcf')}</Link></li>
                        <li><Link href="/coaching-details-6">{t('coaching.sat')}</Link></li>
                    </ul>
                </li>

                <li className="dropdown"><Link href="/blog">{t('menu.blogEvents')}</Link></li>

                <li className="dropdown"><Link href="/about-us">{t('menu.about')}</Link></li>

                <li><Link href="/contact">{t('menu.contactUs')}</Link></li>
            </ul>
        </>
    );
}
