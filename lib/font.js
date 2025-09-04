import { Heebo, Maven_Pro } from 'next/font/google'

export const maven_pro = Maven_Pro({
    weight: ['400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    variable: "--maven_pro",
    display: 'swap',
})
export const heebo = Heebo({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    variable: "--heebo",
    display: 'swap',
})
