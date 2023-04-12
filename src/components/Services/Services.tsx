import React from 'react'
import './style/Services.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ServicesIcon1 from '../../images/services/services-icon-1.png';
import ServicesIcon2 from '../../images/services/services-icon-2.png';
import ServicesIcon3 from '../../images/services/services-icon-3.png';
import ServicesRightIcon1 from '../../images/services/services-icon-right-1.png';
import ServicesRightIcon2 from '../../images/services/services-icon-right-2.png';
import ServicesRightIcon3 from '../../images/services/services-icon-right-3.png';
import ServicesRightIcon4 from '../../images/services/services-icon-right-4.png';
import ServicesRightIcon5 from '../../images/services/services-icon-right-5.png';
import ServicesRightIcon6 from '../../images/services/services-icon-right-6.png';

const Services: React.FC = () => {

	const servicesLeft = [
		{id: 1,img: ServicesIcon1, title: 'Capital Market'},
		{id: 2,img: ServicesIcon2, title: 'Insurance & Planning'},
		{id: 3,img: ServicesIcon3, title: 'Financial Strategy'},
	]

	const servicesRight = [
		{id: 1, img: ServicesRightIcon1, title: 'Business Monitoring', count: '90'},
		{id: 2, img: ServicesRightIcon2, title: 'Business Growth', count: '71'},
		{id: 3, img: ServicesRightIcon3, title: 'Financial Plan', count: '33'},
		{id: 4, img: ServicesRightIcon4, title: 'Finance Consulting', count: '42'},
		{id: 5, img: ServicesRightIcon5, title: 'Data Analysis', count: '69'},
		{id: 6, img: ServicesRightIcon6, title: 'business Strategy', count: '10'},
	]

  return (
    <section className='services'>
			<Row>
				<Col lg={6} className='p-0'>
					<div className="service-left">
						<h6>Our Services</h6>
						<h2 className='service-left-title'>What Actually We Do Here.</h2>
						{
							servicesLeft.map(serviceLeft => (
								<div className="service-left-single d-flex align-items-center" key={serviceLeft.id}>
									<div className="service-left-single-img">
										<img src={serviceLeft.img} alt="" />
									</div>
									<div className="service-left-single-content">
										<h3>{serviceLeft.title}</h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, soluta dignissimos delectus modi qui eum ipsa. Architecto beatae neque quasi?</p>
									</div>
								</div>
							))
						}
					</div>
				</Col>
				<Col lg={6} className='p-0'>
					<div className="service-right">
						<div className="border-box">
							<div className="border__top"></div>
							<div className="border__bottom"></div>
							<div className="border__middle"></div>
						</div>
						<Row className='p-0'>
							{
								servicesRight.map(serviceRight => (
									<Col sm={6} key={serviceRight.id}>
										<div className="service-right-single d-flex align-items-center">
											<div className="service-right-single-img">
												<img src={serviceRight.img} width="75" alt="" />
											</div>
											<div className="service-right-single-content">
												<h6><span className='count'>{serviceRight.count}</span><span>%</span></h6>
												<span className='title'>{serviceRight.title}</span>
											</div>
										</div>
									</Col>
								))
							}
						</Row>
					</div>
				</Col>
			</Row>
    </section>
  )
}

export default Services