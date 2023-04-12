import React from 'react'
import NavHeader from '../components/Navbar/NavbarComponent';
import NewsComponent from '../components/News/News';
import Banner from '../components/PageBanner/Banner';
import Footer from '../components/Footer/Footer';
import ScrollTop from '../components/Utility/ScrollTop';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';

const News: React.FC = () => {
  return (
    <>
      <ScrollTop />
      <NavHeader />
			<Banner pageTitle='News' />
      <NewsComponent />
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default News