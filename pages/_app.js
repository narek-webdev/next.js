import Layout from '../components/layout';

import Script from "next/script";

import '../styles/sass/core/global.scss'

function App ({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />

      <Script
      strategy="lazyOnload"
      dangerouslySetInnerHTML={{
        __html: `
          var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
          (function() {
              var s1 = document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async = true;
              s1.src = 'https://embed.tawk.to/61a0be739099530957f6c4c3/1flduft2j';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
          })();
      `,
      }}
      />
    </Layout>
  )
}

export default App;