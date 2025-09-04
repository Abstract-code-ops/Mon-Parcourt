import Layout from "@/components/layout/Layout";
import dynamic from 'next/dynamic';
import { Suspense } from 'react';   
import SuspensePreloader from "@/components/elements/SuspensePreloader";

// Make all heavy components dynamic to trigger Suspense properly
// const Banner = dynamic(() => import('@/components/sections/home1/Banner'), { 
//     ssr: false 
// });

import Banner from '@/components/sections/home1/Banner';

const Visa = dynamic(() => import('@/components/sections/home1/Visa'), { 
    ssr: false 
});
const About = dynamic(() => import('@/components/sections/home1/About'), { 
    ssr: false 
});
const Features = dynamic(() => import('@/components/sections/home1/Features'), { 
    ssr: false 
});
const Dream = dynamic(() => import('@/components/sections/home1/Dream'), { 
    ssr: false 
});
const Countries = dynamic(() => import('@/components/sections/home1/Countries'), { 
    ssr: false 
});
const Coaching = dynamic(() => import('@/components/sections/home1/Coaching'), { 
    ssr: false 
});
const Chooseus = dynamic(() => import('@/components/sections/home1/Chooseus'), { 
    ssr: false 
});
const Team = dynamic(() => import('@/components/sections/home1/Team'), { 
    ssr: false 
});
const Education = dynamic(() => import('@/components/sections/home1/Education'), { 
    ssr: false 
});
const Passport = dynamic(() => import('@/components/sections/home1/Passport'), { 
    ssr: false 
});
const Clients = dynamic(() => import('@/components/sections/home1/Clients'), { 
    ssr: false 
});
const Donate = dynamic(() => import('@/components/sections/home1/Donate'), { 
    ssr: false 
});
const News = dynamic(() => import('@/components/sections/home1/News'), { 
    ssr: false 
});

export default function Home() {
    return (
        <Layout headerStyle={1} footerStyle={1}>
            <Suspense fallback={<SuspensePreloader id="home-preloader" />}>
                <Banner />
                <Visa />
                <About />
                <Features />
                <Dream />
                <Countries />
                <Coaching />
                <Chooseus />
                <Team />
                <Education />
                <Passport />
                <Clients />
                <Donate />
                <News />
            </Suspense>
        </Layout>
    )
}