import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './style/Navbar.css'
import ListGroup from 'react-bootstrap/ListGroup';
import { BsFacebook } from 'react-icons/bs';
import { GrInstagram } from 'react-icons/gr';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { NavLink } from "react-router-dom";

const NavbarComponent: React.FC = () => {

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">DIGITAL M</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className='nav-link' to="/" end>Home</NavLink>
            <NavLink className='nav-link' to="/about">About Us</NavLink>
            <NavLink className='nav-link' to="/services">Services</NavLink>
            <NavLink className='nav-link' to="/careers">Careers</NavLink>
            <NavLink className='nav-link' to="/team">Team</NavLink>
            <NavLink className='nav-link' to="/news">News</NavLink>
            <NavLink className='nav-link' to="/contact">Contact</NavLink>
          </Nav>
          <ListGroup as="ul" className='d-flex'>
            <ListGroup.Item as="li"><BsFacebook /></ListGroup.Item>
            <ListGroup.Item as="li"><GrInstagram /></ListGroup.Item>
            <ListGroup.Item as="li"><FaLinkedinIn /></ListGroup.Item>
            <ListGroup.Item as="li"><FaTwitter /></ListGroup.Item>
          </ListGroup>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent