import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import './style/Team.css'
import { AiOutlinePlus } from 'react-icons/ai';
import teamImg1 from '../../images/team/team-1.jpg';
import teamImg2 from '../../images/team/team-2.jpg';
import teamImg3 from '../../images/team/team-3.jpg';
import { FaFacebookF } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

const Team = () => {

	const teams = [
		{id: 1, img: teamImg3, name: 'Kerela Browni Kil', job: 'founder & ceo'},
		{id: 2, img: teamImg1, name: 'Jaruwani Maroni', job: 'design ui/ux'},
		{id: 3, img: teamImg2, name: 'Hilix D. Brownni', job: 'web developer'},
	]

  return (
    <section className='team'>
        <Container>
					<Row>
						<Col md={12}>
							<div className="team-header text-center">
								<h6 className='subTitle'>our Team</h6>
								<h2 className='title'>Leadership Team</h2>
							</div>
						</Col>
						{
							teams.map(team => (
								<Col md={6} lg={4} key={team.id}>
									<div className="team-single">
										<div className="team-img">
											<img src={team.img} alt="" />
										</div>
										<div className="team-content">
											<span className='text-uppercase team-job'>{team.job}</span>
											<h4 className='team-name'>{team.name}</h4>
											<div className="social-info">
												<span className='icon-plus'><AiOutlinePlus /></span>
												<ul className='list-unstyled social-icons'>
													<li><FaFacebookF /></li>
													<li><GrInstagram /></li>
													<li><FaLinkedinIn /></li>
													<li><FaTwitter /></li>
												</ul>
											</div>
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

export default Team