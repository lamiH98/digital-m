import React, { useState, useEffect } from 'react'
import './style/Work.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import workImg1 from '../../images/works/work-1.jpg';
import workImg2 from '../../images/works/work-2.jpg';
import workImg3 from '../../images/works/work-3.jpg';
import workImg4 from '../../images/works/work-4.jpg';
import workImg5 from '../../images/works/work-5.jpg';
import workImg7 from '../../images/works/work-7.jpg';

const Works: React.FC = () => {

	const portfolio = [
		{ id: 1, img: workImg1, name: 'My best client', category: ['all', 'family']},
		{ id: 2, img: workImg2, name: 'My favorite case', category: ['all', 'insurane']},
		{ id: 3, img: workImg3, name: 'A old job', category: ['all', 'family']},
		{ id: 4, img: workImg4, name: 'It is a really cool website', category: ['all', 'business', 'banking']},
		{ id: 5, img: workImg5, name: 'Something more', category: ['all', 'family']},
		{ id: 6, img: workImg7, name: 'Something more', category: ['all', 'banking']},
	];

	const filterItems = [
		{id: 1, title: 'all'},
		{id: 2, title: 'family'},
		{id: 3, title: 'insurane'},
		{id: 4, title: 'business'},
		{id: 5, title: 'banking'},
	];

	const [filter, setFilter] = useState<string>('all');

	const [projects, setProjects] = useState<any[]>([]);

	useEffect(() => {
		setProjects(portfolio);
	}, []);

	useEffect(() => {
		setProjects([]);
		const filtered = portfolio.map(p => ({ ...p, filtered: p.category.includes(filter) }));
		setProjects(filtered);
	}, [filter]);

  return (
    <section className='works'>
			<Container>
				<Row>
					<Col lg={4}>
						<div className="work-title-section">
							<h6>Portfolio</h6>
							<h2>Our Works</h2>
						</div>
					</Col>
					<Col lg={8}>
						<div className="filter-section d-flex">
							{
								filterItems.map(filterItem => (
									<span key={filterItem.id} className={`text-capitalize ${filter === filterItem.title ? 'active' : '' }`} onClick={() => setFilter(filterItem.title)}>{filterItem.title}</span>
								))
							}
						</div>


					</Col>
				</Row>
				<Row>
						{projects.map(item => item.filtered === true ? (
							<Col sm={6} md={4} lg={3} key={item.id}>
								<div className="work-single">
									<img src={item.img} alt="" />
									<div className="work-content">
										<h6>Finance</h6>
										<h5>Miranda Hilix Bar</h5>
									</div>
								</div>
							</Col>
						) : '')}
				</Row>
			</Container>
    </section>
  )
}

export default Works