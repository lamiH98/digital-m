import React from 'react'
import './style/Feature.css'
import Container from 'react-bootstrap/esm/Container'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import featuresImg1 from '../../images/features/features-icon-1.png';
import featuresImg2 from '../../images/features/features-icon-2.png';
import featuresImg3 from '../../images/features/features-icon-3.png';
import featuresImg4 from '../../images/features/features-icon-4.png';
import featuresImg5 from '../../images/features/features-icon-5.png';
import featuresImg6 from '../../images/features/features-icon-6.png';

const Feature = () => {

	const features = [
		{id: 1, img: featuresImg1, title: 'Capital Market'},
		{id: 2, img: featuresImg2, title: 'Finance Division'},
		{id: 3, img: featuresImg3, title: 'Insurance & Planning'},
		{id: 4, img: featuresImg4, title: 'Family Case'},
		{id: 5, img: featuresImg5, title: 'Financial Strategy'},
		{id: 6, img: featuresImg6, title: 'Financial Planning'},
	]

  return (
    <section className='features'>
      <Container>
				<Row>
					<Col md={12}>
						<div className="features-header text-center">
							<h6 className='subTitle'>Features</h6>
							<h2 className='title'>Core Features</h2>
						</div>
					</Col>

					{
						features.map(feature => (
							<Col md={12} lg={6} key={feature.id}>
							<div className="feature-single">
								<div className="feature-img">
									<img src={feature.img} alt="" />
								</div>
								<div className="feature-content">
									<h2>{feature.title}</h2>
									<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo incidunt, consequatur eum saepe magni doloremque asperiores?</p>
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

export default Feature