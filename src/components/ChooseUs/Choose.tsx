import React, {useState} from 'react'
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import './style/Choose.css'
import { AiOutlineCheck } from 'react-icons/ai';
import chooseContentImg from '../../images/choose/choose-content.jpg';
import chooseImg from '../../images/choose/choose.jpg';
import chooseSmallImg from '../../images/choose/choose-2.jpg';

const Choose: React.FC = () => {
	const [toggleState, setToggleState] = useState<number>(1);

  const toggleTab = (index: number) => {
    setToggleState(index);
  };

  return (
    <section className='choose-us'>
			<Container>
				<Row>
					<Col lg={7}>
						<div className="choose-use-header">
							<h6 className='subTitle'>Why Choose Us</h6>
							<h2 className='title'>Why Choose Us</h2>
						</div>
						<div className="choose-us-tabs">
							<div className="tabs-section">
								<button className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>Our Mission</button>
								<button className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)} >Our Vission</button>
								<button className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)} >Our Value</button>
							</div>

							<div className="content-tabs">

								<div className={toggleState === 1 ? "content  active-content" : "content"} >
									<div className="header-content d-flex">
										<img src={chooseContentImg} alt="" />
										<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium molestiae ducimus, libero consectetur sapiente nostrum eius. Et tenetur in quo culpa deserunt cum corporis harum eos?</p>
									</div>
									<ul className='list-unstyled'>
										<li><AiOutlineCheck /> Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
										<li><AiOutlineCheck /> Accusantium explicabo deleniti cupiditate</li>
										<li><AiOutlineCheck /> culpa deserunt cum corporis harum eos, sed ex voluptatum sapiente</li>
										<li><AiOutlineCheck /> sed ex voluptatum sapiente ipsam odit enim voluptate magni vitae?</li>
									</ul>
								</div>

								<div className={toggleState === 2 ? "content  active-content" : "content"}>
									<div className="header-content d-flex">
										<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium molestiae ducimus, libero consectetur sapiente nostrum eius. Et tenetur in quo culpa deserunt cum corporis harum eos?</p>
									</div>
									<ul className='list-unstyled'>
										<li><AiOutlineCheck /> Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
										<li><AiOutlineCheck /> Accusantium explicabo deleniti cupiditate</li>
										<li><AiOutlineCheck /> culpa deserunt cum corporis harum eos, sed ex voluptatum sapiente</li>
									</ul>
								</div>

								<div className={toggleState === 3 ? "content  active-content" : "content"}>
									<div className="header-content d-flex">
											<img src={chooseContentImg} alt="" />
											<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium molestiae ducimus, libero consectetur sapiente nostrum eius. Et tenetur in quo culpa deserunt cum corporis harum eos?</p>
										</div>
										<ul className='list-unstyled'>
											<li><AiOutlineCheck /> Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
											<li><AiOutlineCheck /> sed ex voluptatum sapiente ipsam odit enim voluptate magni vitae?</li>
										</ul>
								</div>

							</div>
						</div>
					</Col>
					<Col lg={5}>
						<div className="choose-img">
							<img src={chooseImg} alt="" />
							<img src={chooseSmallImg} className="float-img" alt="" />
						</div>
					</Col>
				</Row>
			</Container>
    </section>
  )
}

export default Choose