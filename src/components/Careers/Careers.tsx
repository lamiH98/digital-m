import React from 'react'
import './style/Careers.css'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

const Careers: React.FC = () => {

	const careers = [
		{id: 1, title: 'Senior Product Designer', type: 'Full Time', location: 'Texus, USA', sallary: '2000'},
		{id: 2, title: 'Financial Advisor', type: 'Remote', location: 'Texus, USA', sallary: '2500'},
		{id: 3, title: 'Business Analytics', type: 'Full Time', location: 'Texus, USA', sallary: '1900'},
		{id: 4, title: 'Senior Consultant', type: 'Full Time', location: 'Texus, USA', sallary: '2600'},
		{id: 5, title: 'Receptionist', type: 'Office', location: 'Texus, USA', sallary: '1000'},
		{id: 6, title: 'UI Designer', type: 'Full Time', location: 'Texus, USA', sallary: '1600'},
		{id: 7, title: 'Content Writer', type: 'Office', location: 'Texus, USA', sallary: '2300'},
		{id: 8, title: 'Digital Marketing', type: 'Remote', location: 'Texus, USA', sallary: '4300'},
		{id: 9, title: 'Financial Assistant', type: 'Remote', location: 'Texus, USA', sallary: '5500'},
	]

  return (
    <section className='careers'>
			<Container>
				<Row>
					{
						careers.map(career => (
							<Col md={6} lg={4}>
								<div className="career-single">
									<div className="career-type">{career.type}</div>
									<h2>{career.title}</h2>
									<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum eveniet error delectus assumenda nostrum nam!</p>
									<h6>
										<span>Location: </span>
										<span>{career.location}</span>
									</h6>
									<h6>
										<span className='first-span'>Sallary: </span>
										<span>${career.sallary}</span>
									</h6>
								</div>
							</Col>
						))
					}
				</Row>
			</Container>
    </section>
  )
}

export default Careers