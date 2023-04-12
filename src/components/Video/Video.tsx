import React from 'react'
import './style/Video.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsFillPlayFill } from 'react-icons/bs';
import ReactPlayer from 'react-player/youtube'
import VideoComponent from '../VideoComponent/VideoComponent';

const Video = () => {
  return (
    <section className='video-section'>
			<div className="overlay"></div>
			<Container>
				<Row>
					<Col mg={12}>
						<div className="video-content d-flex align-items-center justify-content-center">
							<span className='subTitle'>Intro Video</span>
							<h2 className='title'>Our Latest Insights & Overview.</h2>
							{/* <span className='icon'>
								<BsFillPlayFill />
							</span> */}
                      		<VideoComponent />
						</div>
					</Col>
				</Row>
			</Container>
		</section>
  )
}

export default Video