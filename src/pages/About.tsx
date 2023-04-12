import React from 'react'
import NavHeader from '../components/Navbar/NavbarComponent';
import AboutComponent from '../components/About/About';
import Banner from '../components/PageBanner/Banner';
import Team from '../components/Team/Team';
import Feature from '../components/Feature/Feature';
import Sponsors from '../components/Sponsors/Sponsors';
import Footer from '../components/Footer/Footer';
import Contact from '../components/Contact/Contact';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';
import ScrollTop from '../components/Utility/ScrollTop';

const About: React.FC = () => {
  return (
    <>
      <ScrollTop />
			<NavHeader />
			<Banner pageTitle='About' />
      <AboutComponent />
      <Team />
      <Feature />
      <Sponsors />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default About