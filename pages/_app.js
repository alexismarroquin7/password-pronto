import { Footer } from '../components/Footer'
import { MobileMenu } from '../components/MobileMenu'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <MobileMenu/>
      <Component {...pageProps} />
      <Footer/>
    </div>
  )
  
}

export default MyApp
