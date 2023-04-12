import React from 'react'
import './style/NotFound.css'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import NavHeader from '../Navbar/NavbarComponent'

const NotFound: React.FC = () => {
  return (
    <>
      <NavHeader />
      <div className='not-found'>
        <div className="number">404</div>
        <div className="text"><span>Ooops...</span><br /> page not found</div>
        <Link to='/' className='custom-button'>Back to home page</Link>
      </div>
      <Footer />
    </>
  )
}

export default NotFound