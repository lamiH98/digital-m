import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import './style/Blog.css';
import { AiOutlineUser } from 'react-icons/ai';
import { VscCalendar } from 'react-icons/vsc';
import blogImg1 from '../../images/blog/blog1.jpg';
import blogImg2 from '../../images/blog/blog2.jpg';
import blogImg3 from '../../images/blog/blog3.jpg';

const Blog: React.FC = () => {

	const posts = [
		{id: 1, img: blogImg1, title: 'UX is best solution for your business & make noise.', name: 'admin', category: 'UI/UX'},
		{id: 2, img: blogImg2, title: 'UX is best solution for your business & make noise.', name: 'Alex', category: 'Technology'},
		{id: 3, img: blogImg3, title: 'UX is best solution for your business & make noise.', name: 'Jon', category: 'UI/UX'},
	]

  return (
    <section className='blog'>
			<Container>
				<Row>
					<Col md={12}>
						<div className="blog-header text-center">
							<h6 className='subTitle'>News</h6>
							<h2 className='title text-capitalize'>news from resource</h2>
						</div>
					</Col>
				</Row>
				<Row>
					{
						posts.map(post => (
						<Col md={6} lg={4} key={post.id}>
							<div className="blog-single">
								<div className="blog-img">
									<img src={post.img} alt="" />
									<div className="category">{post.category}</div>
								</div>
								<div className="blog-single-header d-flex">
									<div className="date">
										<span className='icon'><VscCalendar /></span>
										<span className='title'>July 9, 2022</span>
									</div>
									<div className="name">
										<span className='icon'><AiOutlineUser /></span>
										<span className='title'>By: {post.name}</span>
									</div>
								</div>
								<h4 className="blog-title">{post.title}</h4>
							</div>
						</Col>
						))
					}
					
				</Row>
			</Container>
		</section>
  )
}

export default Blog