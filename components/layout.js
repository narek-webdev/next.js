import Header from './header';
import Footer from './footer';

import Head from 'next/head';

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <meta charset='utf-8' />
                <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5' />
                <meta name='description' content='Description' />
                <meta name='keywords' content='Keywords' />
                <title>Next.js PWA Example</title>

                <link rel="manifest" href="/manifest.json" />
                
                <link href='/icons/favicon-16x16.png' rel='icon' type='image/png' sizes='16x16' />
                <link href='/icons/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32' />
                <link href='/icons/favicon-96x96.png' rel='icon' type='image/png' sizes='96x96' />

                <link rel="apple-touch-icon" href="/icons/apple-icon.png"></link>
                <meta name="theme-color" content="#317EFB"/>
            </Head>

            <Header />
                <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout;