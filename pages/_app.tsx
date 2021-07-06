import '../styles/globals.css'
import CommonLayout from "../components/Layout"
import { ReactFragment } from 'react'
function MyApp({ Component, pageProps }) {

  return(
  <CommonLayout>
  
  <Component {...pageProps} />
  
  </CommonLayout>

  )
}

export default MyApp
