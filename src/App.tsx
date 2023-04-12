import React from 'react';
import Header from './components/Header/Header';
import NavHeader from './components/Navbar/NavbarComponent';
import Benefits from './components/Benefits/Benefits';
import About from './components/About/About';
import Services from './components/Services/Services';
import Works from './components/Works/Works';
import Video from './components/Video/Video';
import Choose from './components/ChooseUs/Choose';
import Team from './components/Team/Team';
import Contact from './components/Contact/Contact';
import Blog from './components/Blog/Blog';
import Sponsors from './components/Sponsors/Sponsors';
import Footer from './components/Footer/Footer';


const App: React.FC = () => {
  return (
    <>
      <NavHeader />
      <Header />
      <Benefits />
      <About />
      <Services />
      <Works />
      <Video />
      <Choose />
      <Team />
      <Contact />
      <Blog />
      <Sponsors />
      <Footer />
    </>
  );
}

export default App;
