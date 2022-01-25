import '../styles/globals.css'
import 'antd/dist/antd.css';
import '../css/register.css'
import Sidebar from '../../forum/components/Sidebar'
import '../components/Sidebar.css'

function MyApp({ Component, pageProps }) {
  if(Component.getLayout){
    return Component.getLayout(<Component {...pageProps} />)
  }
  return (
  
  <Component {...pageProps} />
  )
}

export default MyApp
