import React from 'react'
import './style/Benefits.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SiGoogleanalytics } from 'react-icons/si';
import { FcMoneyTransfer } from 'react-icons/fc';
import { FcWorkflow } from 'react-icons/fc';

const Benefits: React.FC = () => {
	
  const benefits = [
    {id: 1, title: 'Business & Management Support', position: 'first', icon: <SiGoogleanalytics size='70px' />},
    {id: 2, title: 'Financial & Ligal Criminal Case', position: 'second', icon: <FcMoneyTransfer size='70px' />},
    {id: 3, title: 'Mortgage & Property Planning', position: 'third', icon: <FcWorkflow size='70px' />},
  ]

  return (
    <section className='benefits'>
      <Container>
				<Row>
					{
						benefits.map(benefit => (
							<Col lg={4} className='p-0' key={benefit.id} data-testid="benefit-single">
								<div className={`benefit-single text-center ${benefit.position}`}>
									{ benefit.icon }
									<h2>{benefit.title}</h2>
									<p className="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, veniam repudiandae recusandae ipsa nostrum tempore!</p>
									<span className="btn">
										Read More
									</span>
								</div>
							</Col>
						))
					}
				</Row>
			</Container>
    </section>
  )
}

export default Benefits