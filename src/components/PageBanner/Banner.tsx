import React from 'react'
import './style/Banner.css'
import bannerImg from '../../images/banner.jpg';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { NavLink } from 'react-router-dom';

interface props {
	pageTitle: string;
}

const Banner: React.FC<props> = ({pageTitle}: props) => {
  return (
		<section className='banner d-flex align-items-center' style={{ background: `url(${bannerImg})` }}>
			<Container>
				<Row>
					<Col md={12}>
						<div className="banner-content text-center">
							<h2>{pageTitle}</h2>
							<ul className='list-unstyled d-flex justify-content-center'>
								<li><NavLink to='/' className='nav-link' end>Home</NavLink></li>
								<span>|</span>
								<li className='current-page'>{pageTitle}</li>
							</ul>
						</div>
					</Col>
				</Row>
			</Container>
    </section>
  )
}

export default Banner