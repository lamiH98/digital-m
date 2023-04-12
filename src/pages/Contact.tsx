import React from 'react'
import NavHeader from '../components/Navbar/NavbarComponent';
import Banner from '../components/PageBanner/Banner';
import Benefits from '../components/Benefits/Benefits';
import ContactComponent from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import ScrollTop from '../components/Utility/ScrollTop';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';

const Contact: React.FC = () => {
  return (
    <>
      <ScrollTop />
      <NavHeader />
			<Banner pageTitle='Contact' />
			<Benefits />
      <ContactComponent />
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default Contact