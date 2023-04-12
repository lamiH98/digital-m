import React from 'react'
import './style/News.css'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import newsImg1 from '../../images/news/news-1.jpg';
import newsImg2 from '../../images/news/news-2.jpg';
import newsImg3 from '../../images/news/news-3.jpg';
import newsImg4 from '../../images/news/news-4.jpg';
import adminImg from '../../images/news/admin.jpeg';
import aboutMeImg from '../../images/news/about-me.jpg';
import instagramImg1 from '../../images/news/instagram-1.jpg';
import instagramImg2 from '../../images/news/instagram-2.jpg';
import instagramImg3 from '../../images/news/instagram-3.jpg';
import instagramImg4 from '../../images/news/instagram-4.jpg';
import instagramImg5 from '../../images/news/instagram-5.jpg';
import instagramImg6 from '../../images/news/instagram-6.jpg';
import instagramImg7 from '../../images/news/instagram-7.jpg';
import instagramImg8 from '../../images/news/instagram-8.jpg';
import instagramImg9 from '../../images/news/instagram-9.jpg';
import { MdDateRange } from 'react-icons/md';
import { FaRegComments, FaLinkedinIn, FaTwitter, FaFacebookF } from 'react-icons/fa';
import { AiOutlineArrowRight, AiOutlineYoutube } from 'react-icons/ai';
import { GrInstagram } from 'react-icons/gr';

const News = () => {

	const posts = [
		{id: 1, img: newsImg1, date: 'July 9, 2022', comments: '43', title: 'UX is best solution for your'},
		{id: 2, img: newsImg2, date: 'July 2, 2022', comments: '0', title: 'Business consultant is involved in the planning.'},
		{id: 3, img: newsImg3, date: 'July 18, 2022', comments: '52', title: 'Business consultant is a professional who analyzes.'},
		{id: 4, img: newsImg4, date: 'July 11, 2022', comments: '12', title: 'Lorem ipsum dolor sit amet, consecte cing elit, sed do eiusmod tempor.'},
	]

  return (
    <section className='news'>
			<Container>
				<Row>
					<Col md={12} lg={8}>
					{
						posts.map(post => (
							<div className="post-single" key={post.id}>
								<div className="post-img">
									<img src={post.img} alt="" />
								</div>
								<div className="post-content">
									<div className="post-info d-flex">
										<div className="date">
											<MdDateRange fontSize={22} />
											<span>{post.date}</span>
										</div>
										<div className="comments">
											<FaRegComments fontSize={22} />
											<span>{post.comments === '0' ? 'No' : post.comments} Comments</span>
										</div>
									</div>
									<h2 className='post-title'>{post.title}</h2>
									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique reprehenderit magnam accusantium alias quis sit fuga rem praesentium! Ipsam, expedita cumque veritatis ad quo, perferendis laudantium alias aspernatur, harum repellendus consequatur est eaque dicta doloribus quidem consectetur provident ratione. Voluptates, adipisci expedita. Provident eius placeat reprehenderit veritatis ducimus enim rerum!</p>
									<div className="author d-flex justify-content-between">
										<div className="author-box d-flex align-items-center">
											<img src={adminImg} alt="" />
											<h6 className="author-name">By Admin</h6>
										</div>
										<div className="read-more">
											<AiOutlineArrowRight />
											<span>Read More</span>
										</div>
									</div>
								</div>
							</div>
						))
					}
					</Col>
					<Col md={12} lg={4}>
						<div className="right-side">

							<div className="right-box about-box text-center">
								<h5 className='right-side-box-title'>About Me</h5>
								<div className="about-img">
									<img src={aboutMeImg} alt="" />
								</div>
								<h3>Rosalina D. Willaimson</h3>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quos voluptatum saepe consequatur provident repellat.</p>
								<ul className='list-unstyled d-flex justify-content-center'>
									<li><FaFacebookF /></li>
									<li><FaTwitter /></li>
									<li><FaLinkedinIn /></li>
									<li><GrInstagram /></li>
									<li><AiOutlineYoutube fontSize={32} /></li>
								</ul>
							</div>

							<div className="right-box categories-box">
								<h5 className='right-side-box-title'>Categories</h5>
								<ul className="list-unstyled categories-item">
									<li className='text-capitalize'>business</li>
									<li className='text-capitalize'>Consultant</li>
									<li className='text-capitalize'>Technology</li>
									<li className='text-capitalize'>Uncategorized</li>
								</ul>
							</div>

							<div className="right-box social-links">
								<h5 className='right-side-box-title'>Never Miss News</h5>
								<ul className='list-unstyled d-flex'>
									<li><FaFacebookF /></li>
									<li><FaTwitter /></li>
									<li><FaLinkedinIn /></li>
									<li><GrInstagram /></li>
									<li><AiOutlineYoutube fontSize={32} /></li>
								</ul>
							</div>

							<div className="right-box instagram-feeds">
								<h5 className='right-side-box-title'>Instagram Feeds</h5>
								<ul className='list-unstyled grid-container'>
									<li><img src={instagramImg1} alt="" /></li>
									<li><img src={instagramImg2} alt="" /></li>
									<li><img src={instagramImg3} alt="" /></li>
									<li><img src={instagramImg4} alt="" /></li>
									<li><img src={instagramImg5} alt="" /></li>
									<li><img src={instagramImg6} alt="" /></li>
									<li><img src={instagramImg7} alt="" /></li>
									<li><img src={instagramImg8} alt="" /></li>
									<li><img src={instagramImg9} alt="" /></li>
								</ul>
							</div>

							<div className="right-box popular-tags">
								<h5 className='right-side-box-title'>Popular Tags</h5>
								<ul className='list-unstyled d-flex'>
									<li>Business</li>
									<li>consult</li>
									<li>desgin</li>
									<li>develop</li>
									<li>icon</li>
									<li>keyboard</li>
									<li>kit</li>
									<li>mouse</li>
									<li>Popular</li>
									<li>tech</li>
									<li>usability</li>
								</ul>
							</div>

						</div>
					</Col>
				</Row>
			</Container>
    </section>
  )
}

export default News