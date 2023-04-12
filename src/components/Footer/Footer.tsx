import React from 'react';
import './style/Footer.css';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import instagramImg1 from '../../images/news/instagram-1.jpg';
import instagramImg2 from '../../images/news/instagram-2.jpg';
import instagramImg3 from '../../images/news/instagram-3.jpg';
import instagramImg4 from '../../images/news/instagram-4.jpg';
import instagramImg5 from '../../images/news/instagram-5.jpg';
import instagramImg6 from '../../images/news/instagram-6.jpg';
import instagramImg7 from '../../images/news/instagram-7.jpg';
import instagramImg8 from '../../images/news/instagram-8.jpg';
import instagramImg9 from '../../images/news/instagram-9.jpg';
import { FaLinkedinIn, FaTwitter, FaFacebookF } from 'react-icons/fa';
import { AiOutlineYoutube, AiOutlinePhone } from 'react-icons/ai';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { MdOutlineLocationOn } from 'react-icons/md';
import { GrInstagram } from 'react-icons/gr';

const Footer: React.FC = () => {
	return (
		<footer>
			<Container>
				<Row>
					<Col md={4}>
						<div className="footer-right">
							<h2>React App 2</h2>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium exercitationem tempore est nihil sed adipisci.</p>
							<ul className='list-unstyled d-flex'>
								<li><FaFacebookF /></li>
								<li><FaTwitter /></li>
								<li><FaLinkedinIn /></li>
								<li><GrInstagram /></li>
								<li><AiOutlineYoutube fontSize={32} /></li>
							</ul>
						</div>
					</Col>
					<Col md={8}>
						<div className="newsletter">
							<h4>Subscribe Our Newsletter</h4>
							<form action="" className='d-flex'>
								<input type="text" placeholder='Enter Your Email' />
								<span className='btn'>Subscribe Now</span>
							</form>
						</div>
					</Col>
				</Row>
				<Row>
					<Col md={6} lg={3}>
						<div className="footer-widget links-widget">
							<h3>Quick Links</h3>
							<ul className='list-unstyled'>
								<li>Company History</li>
								<li>Latest News & Blog</li>
								<li>Popular Services</li>
								<li>Business & Consulting</li>
								<li>Financial Planning</li>
							</ul>
						</div>
					</Col>
					<Col md={6} lg={3}>
						<div className="footer-widget links-widget">
							<h3>Company</h3>
							<ul className='list-unstyled'>
								<li>About Comapny</li>
								<li>World Wide Clients</li>
								<li>Happy People’s</li>
								<li>Winning Awards</li>
								<li>Company Statics</li>
							</ul>
						</div>
					</Col>
					<Col md={6} lg={3}>
						<div className="footer-widget contact-widget">
							<h3>Contact Us</h3>
							<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
							<ul className='list-unstyled'>
								<li><AiOutlinePhone fontSize={26} /> +123 (345) 7890</li>
								<li><HiOutlineMailOpen fontSize={26} /> support@gmail.com</li>
								<li><MdOutlineLocationOn fontSize={26} /> Broklyn Street USA</li>
							</ul>
						</div>
					</Col>
					<Col md={6} lg={3}>
					<div className="footer-widget instagram-widget">
						<h3>Follow Instagram</h3>
						<ul className='list-unstyled grid-container'>
							<li><img src={instagramImg1} alt="" /></li>
							<li><img src={instagramImg2} alt="" /></li>
							<li><img src={instagramImg3} alt="" /></li>
							<li><img src={instagramImg4} alt="" /></li>
							<li><img src={instagramImg5} alt="" /></li>
							<li><img src={instagramImg6} alt="" /></li>
						</ul>
					</div>
					</Col>
				</Row>
				<Row>
					<Col md={12}>
						<div className="copyright d-flex justify-content-between">
							<h5 className="">Copy @ <span>React App</span> Example 2022</h5>
							<h5 className="">All Right Reserved Design By Lami.98</h5>
						</div>
					</Col>
				</Row>
			</Container>
		</footer>
	)
}

export default Footer
