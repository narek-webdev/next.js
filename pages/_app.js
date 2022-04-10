import Layout from '../components/layout';
import '../styles/sass/core/global.scss'

function App ({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App;