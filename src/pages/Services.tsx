import React from 'react'
import Banner from '../components/PageBanner/Banner'
import NavHeader from '../components/Navbar/NavbarComponent';
import ServicesPlus from '../components/ServicesPlus/ServicesPlus';
import Sponsors from '../components/Sponsors/Sponsors';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import ScrollTop from '../components/Utility/ScrollTop';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';

const Services: React.FC = () => {
  return (
    <>
      <ScrollTop />
			<NavHeader />
			<Banner pageTitle='Services' />
			<ServicesPlus />
      <Sponsors />
      <Contact />
			<Footer />
      <ScrollToTop />
    </>
  )
}

export default Services