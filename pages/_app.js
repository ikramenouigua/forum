import '../styles/globals.css'
import 'antd/dist/antd.css';
import '../css/register.css'
import Sidebar from '../components/Sidebar'
import '../components/Sidebar.css'

function MyApp({ Component, pageProps }) {
  return (
    <Sidebar >
  <Component {...pageProps} />
  </ Sidebar>)
}

export default MyApp
