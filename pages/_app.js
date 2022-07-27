import '../styles/globals.css'
import HomeMain from './home'
import Layout from '../components/layout/layout'

function MyApp({ Component, pageProps }) {
  return (
  <Layout>
  <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
