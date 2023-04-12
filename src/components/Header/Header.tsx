import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';
import Container from 'react-bootstrap/Container';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './style/Header.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header1 from '../../images/swiper/header-1.jpg';
import Header2 from '../../images/swiper/header-2.jpg';
import Header3 from '../../images/swiper/header-3.jpg';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {

  const swiperSliders = [
    {id: 1, img: Header1, subTitle: 'Make Your business idea', title: 'Business'},
    {id: 2, img: Header2, subTitle: 'Make Your business idea 2', title: 'Business 2'},
    {id: 3, img: Header3, subTitle: 'Make Your business idea 3', title: 'Business 3'},
  ]

  return (
    <header>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        navigation
        pagination={{ clickable: true }}
      >
        {swiperSliders.map(swiper => (
          <SwiperSlide style={{ background: `url(${swiper.img})` }} key={swiper.id} data-testid="swiper">
            <Container>
              <Row>
                <Col lg={8} sm={12}>
                  <div className="swiper-content">
                    <h4 className='text-capitalize'>{swiper.subTitle}</h4>
                    <h1>{ swiper.title }</h1>
                    <p>We are Business Management company for consulting firms. Get in touch here asap.</p>
                    <div className="btns">
                      <Link to="/services"><span className='btn'>-- Our services --</span></Link>
                      {/* <span className='btn'>-- Learn more --</span> */}
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
        </SwiperSlide>
        ))}
      </Swiper>
    </header>
  )
}

export default Header