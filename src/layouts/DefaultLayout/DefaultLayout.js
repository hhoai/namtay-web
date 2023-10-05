import Header from '../components/Header/Header.js';
import Footer from '../components/Footer/Footer.js';

function DefaultLayout({children}) {
  return ( 
    <>
      <Header/>
      {children}
      <Footer/>
    </>
   );
}

export default DefaultLayout;