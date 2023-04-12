import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';
import './style/Sponsors.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { AiOutlineUser } from 'react-icons/ai';
import sponsorsImg1 from '../../images/sponsors/sponsors-1.jpg';
import sponsorsImg2 from '../../images/sponsors/sponsors-2.jpg';
import sponsorsImg3 from '../../images/sponsors/sponsors-3.jpg';

const Sponsors: React.FC = () => {

  const swiperSponsors = [
    {id: 1, img: sponsorsImg1},
    {id: 2, img: sponsorsImg2},
    {id: 3, img: sponsorsImg3},
    {id: 4, img: sponsorsImg1},
    {id: 5, img: sponsorsImg2},
    {id: 6, img: sponsorsImg3},
  ]

  return (
    <section className='sponsors'>
			<Container>
				<Swiper
					modules={[Navigation, Pagination, Autoplay]}
					spaceBetween={0}
					slidesPerView={3}
					autoplay={{ delay: 2000, disableOnInteraction: false }}
					loop={true}
					breakpoints={{ 
						1: {
							slidesPerView: 2,
						},
						767: {
							slidesPerView: 3,
						},
						991: {
							slidesPerView: 5,
						},
					}}
				>
					{swiperSponsors.map(swiper => (
						<SwiperSlide key={swiper.id}>
								<img src={swiper.img} alt="" />
					</SwiperSlide>
					))}
				</Swiper>
			</Container>
    </section>
  )
}

export default Sponsors