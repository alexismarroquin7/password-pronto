import { MobileMenu } from '../components/MobileMenu'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <MobileMenu/>
      <Component {...pageProps} />
    </div>      
    
  )
  
}

export default MyApp
