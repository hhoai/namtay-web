import Header from '../components/Header/Header.js';
import Button from '../components/Button.js';
import Footer from '../components/Footer/Footer.js';

function DefaultLayout({children}) {
  return ( 
    <>
      <Header/>
      {children}
      <Button/>
      <Footer/>
    </>
   );
}

export default DefaultLayout;