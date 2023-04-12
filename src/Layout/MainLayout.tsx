import React from 'react'
import ScrollTop from '../components/Utility/ScrollTop';
import Footer from './Footer/Footer';
import { Outlet } from 'react-router';
import ScrollToTop from '../components/Utility/ScrollToTop/ScrollToTop';
import NavbarComponent from './NavbarComponent/NavbarComponent';

const MainLayout = () => {
  return (
    <div className='page'>
			<ScrollTop />
			<NavbarComponent />
			<Outlet />
			<ScrollToTop />
			<Footer />
		</div>
  )
}

export default MainLayout