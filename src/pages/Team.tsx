import React from 'react'
import NavHeader from '../components/Navbar/NavbarComponent';
import TeamComponent from '../components/Team/Team';
import Benefits from '../components/Benefits/Benefits';
import Banner from '../components/PageBanner/Banner';
import Sponsors from '../components/Sponsors/Sponsors';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import Works from '../components/Works/Works';
import ScrollTop from '../components/Utility/ScrollTop';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';

const Team = () => {
  return (
    <>
      <ScrollTop />
      <NavHeader />
			<Banner pageTitle='Our Team' />
			<Benefits />
			<TeamComponent />
			<Works />
      <Sponsors />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default Team