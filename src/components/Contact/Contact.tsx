import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import './style/Contact.css'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { AiOutlineUser, AiOutlineMail } from 'react-icons/ai';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { BiEdit } from 'react-icons/bi';
import { FiPhoneCall } from 'react-icons/fi';
import { BsPinMap } from 'react-icons/bs';
import { RiGlobalLine } from 'react-icons/ri';

const Contact: React.FC = () => {
  return (
    <section className='contact'>
			<Container>
				<Row>
        	<Col lg={5}>
						<div className="contact-header-title">
							<h6 className="subtitle text-capitalize">get us here</h6>
							<h2 className='title text-capitalize'>contact us</h2>
						</div>
						<form action="" className='contact-form'>
							<h6>Enter your Name</h6>
							<InputGroup className="mb-3">
								<Form.Control
									placeholder="Enter name here..."
									aria-label="Enter name here..."
								/>
								<InputGroup.Text id="basic-addon2"><AiOutlineUser size={28} /></InputGroup.Text>
							</InputGroup>
							<h6>Enter your email</h6>
							<InputGroup className="mb-3">
								<Form.Control
									placeholder="Enter email here..."
									aria-label="Enter email here..."
								/>
								<InputGroup.Text id="basic-addon2"><AiOutlineMail size={28} /></InputGroup.Text>
							</InputGroup>
							<h6>Enter your message</h6>
							<InputGroup>
								<Form.Control as="textarea" placeholder='Enter message here...' aria-label="With textarea" />
								<InputGroup.Text className='textare-icon' id="basic-addon2"><BiEdit size={28} /></InputGroup.Text>
								{/* <div className="icon">
									<BiEdit size={28} />
								</div> */}
							</InputGroup>
							<span className='btn'>Get In Touch</span>
						</form>
					</Col>
        	<Col lg={6}>
						<div className="contact-info">
							<div className="first-row d-flex">
								
								<div className="info-single">
									<div className="icon"><HiOutlineMailOpen /></div>
									<h5>Email Address</h5>
									<h6>info@email.com</h6>
									<h6>jobs@oursite.com</h6>
								</div>
								
								<div className="info-single">
									<div className="icon"><FiPhoneCall /></div>
									<h5>Phone Number</h5>
									<h6>+897 676 5555 221</h6>
									<h6>+986 412 3698 123</h6>
								</div>
								
							</div>
							<div className="second-row d-flex">
								
								<div className="info-single">
									<div className="icon"><BsPinMap /></div>
									<h5>Office Address</h5>
									<h6>12/A, Romania City Town Hall</h6>
									<h6>New Joursey, UK</h6>
								</div>
								
								<div className="info-single">
									<div className="icon"><RiGlobalLine /></div>
									<h5>Web Contact</h5>
									<h6>example.com</h6>
									<h6>jobs.example.com</h6>
								</div>
								
							</div>
						</div>
					</Col>
				</Row>
			</Container>
    </section>
  )
}

export default Contact