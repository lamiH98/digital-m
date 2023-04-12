import React from 'react'
import './style/ServicesPlus.css';
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import servicesPlusImg1 from '../../images/servicesPlus/service-icon-1.png';
import servicesPlusImg2 from '../../images/servicesPlus/service-icon-2.png';
import servicesPlusImg3 from '../../images/servicesPlus/service-icon-3.png';
import servicesPlusImg4 from '../../images/servicesPlus/service-icon-4.png';
import servicesPlusImg5 from '../../images/servicesPlus/service-icon-5.png';
import servicesPlusImg6 from '../../images/servicesPlus/service-icon-6.png';

const ServicesPlus: React.FC = () => {

	const services = [
		{id: 1, img: servicesPlusImg1, title: 'Business & Management Support'},
		{id: 2, img: servicesPlusImg2, title: 'Financial & Ligal Criminal Case'},
		{id: 3, img: servicesPlusImg3, title: 'Mortgage & Property Planning'},
		{id: 4, img: servicesPlusImg4, title: 'Legal Solution Transport & Export'},
		{id: 5, img: servicesPlusImg5, title: 'Saving Tax Insurance Support'},
		{id: 6, img: servicesPlusImg6, title: 'Start-Up & Growth Business'},
	]

  return (
    <section className='services'>
			<Container>
				<Row>
					{
						services.map(service => (
							<Col md={6} lg={4} key={service.id}>
								<div className="service-single text-center">
									<div className="service-img">
										<img src={service.img} alt="" />
										<div className="round-shape"></div>
									</div>
									<h2 className="title">{service.title}</h2>
									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis fugiat veritatis id eius similique blanditiis ipsum earum dignissimos?</p>
									<div className="img-bg">
										<img src={service.img} alt="" />
									</div>
								</div>
							</Col>
						))
					}
				</Row>
			</Container>
    </section>
  )
}

export default ServicesPlus