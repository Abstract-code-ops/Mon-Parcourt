import "../public/assets/css/bootstrap.css"
import "../public/assets/css/style.css"
import 'swiper/css'
import "swiper/css/navigation"
import "swiper/css/pagination"
import 'swiper/css/free-mode';
import { heebo, maven_pro } from '@/lib/font';
import I18nProviderWrapper from '@/components/layout/I18nProviderWrapper';
import NonCriticalStyles from '@/components/layout/NonCriticalStyles';


export const metadata = {
    title: 'Mon Parcourt',
    description: 'Connection Aget Website',
    icons: {
        icon: 'assets/images/favicon.ico',
        shortcut: 'assets/images/favicon.ico',
        apple: 'assets/images/favicon.ico'
    }
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${maven_pro.variable} ${heebo.variable}`}>
            <body>
                    <I18nProviderWrapper>
                            <NonCriticalStyles />
                            {children}
                    </I18nProviderWrapper>
            </body>
        </html>
    )
}
