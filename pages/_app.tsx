import '../styles/globals.css'
import CommonLayout from "../components/Layout"
import { ReactFragment } from 'react'
function MyApp({ Component, pageProps }):ReactFragment {

  return(
  <CommonLayout>
  
  <Component {...pageProps} />
  
  </CommonLayout>

  )
}

export default MyApp
