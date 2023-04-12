import React from 'react'
import './style/About.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import About1 from '../../images/about/about-1.jpg';
import PhoneIcon from '../../images/about/phone-call.png';
import EmailIcon from '../../images/about/newsletter.png';

const About: React.FC = () => {
  return (
    <section className='about'>
        <Container>
					<Row>
						<Col lg={5}>
							<div className="about-img">
								<img src={About1} alt="" />
								<p>L.</p>
							</div>
						</Col>
						<Col lg={7}>
							<div className="about-content">
								<span className="about-subTitle text-uppercase">About us</span>
								<h2 className="about-title text-uppercase">We Work With You To Address</h2>
								<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt temporibus nulla asperiores ipsa exercitationem alias a quisquam non quo totam! Perferendis eligendi consectetur vitae libero minus atque repellendus doloribus mollitia recusandae tempore, incidunt quaerat illum beatae iure magni autem. Consequatur.</p>
								<div className="info">
									<Row>
										<Col md={6}>
											<div className="info-box">
												<img src={PhoneIcon} alt="" />
												<h6 className='title'>Phone Number</h6>
												<span>+987 6543 999</span>
											</div>
										</Col>
										<Col md={6}>
											<div className="info-box">
												<img src={EmailIcon} alt="" />
												<h6 className='title'>Email Address</h6>
												<span>info@webmail.com</span>
											</div>
										</Col>
									</Row>
									
								</div>
							</div>
						</Col>
					</Row>
				</Container>
    </section>
  )
}

export default About