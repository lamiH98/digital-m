import React from 'react'
import NavHeader from '../components/Navbar/NavbarComponent';
import CareersComponent from '../components/Careers/Careers';
import Banner from '../components/PageBanner/Banner';
import Sponsors from '../components/Sponsors/Sponsors';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';
import ScrollTop from '../components/Utility/ScrollTop';

const Careers: React.FC = () => {
  return (
    <>
      <ScrollTop />
			<NavHeader />
			<Banner pageTitle='Careers' />
			<CareersComponent />
      <Sponsors />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default Careers