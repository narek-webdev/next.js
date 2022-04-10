import Header from './header';
import Footer from './footer';

import Head from 'next/head';

import { useRouter } from "next/router";

const Layout = ({ children }) => {
    const router = useRouter();
    
    return (
        <>
            <Head>
                <meta charset='utf-8' />
                <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5' />
                <meta name='description' content='Description' />
                <meta name='keywords' content='Keywords' />
                <title>Next.js PWA Example</title>

                <link rel="manifest" href="/manifest.json" />
                
                <link href='/icons/icon-36x36.png' rel='icon' type='image/png' sizes='36x36' />
                <link href='/icons/icon-48x48.png' rel='icon' type='image/png' sizes='48x48' />
                <link href='/icons/icon-96x96.png' rel='icon' type='image/png' sizes='96x96' />

                <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png"></link>
                <meta name="theme-color" content="#317EFB"/>
            </Head>

            {router.pathname !== "/_error" && <Header />}

            <main>{children}</main>
            
            {router.pathname !== "/_error" && <Footer />}
        </>
    )
}

export default Layout;