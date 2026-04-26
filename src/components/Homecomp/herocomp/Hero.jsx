import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Hero1 from './assests/hero1.png'
import hero2 from './assests/hero2.png'
import hero3 from './assests/hero3.png'
import hero4 from './assests/hero4.png'
import hero5 from './assests/hero6.png'

const Hero = () => {
  return (
    <Swiper
      className='h-[200px] sm:h-[280px] md:h-[350px] lg:h-[400px] w-full mt-3'
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 2500, pauseOnMouseEnter: true }}
      loop={true}
      slidesPerView={1.4}
      centeredSlides={true}
      spaceBetween={15}
    >
      <SwiperSlide><img className='h-full w-full rounded-[5px] ' src={Hero1} alt="hero 1"/></SwiperSlide>
      <SwiperSlide><img className='h-full w-full rounded-[5px] ' src={hero2} alt="hero 2"/></SwiperSlide>
      <SwiperSlide><img className='h-full w-full rounded-[5px] ' src={hero3} alt="hero 3"/></SwiperSlide>
      <SwiperSlide><img className='h-full w-full rounded-[5px] ' src={hero4} alt="hero 4"/></SwiperSlide>
      <SwiperSlide><img className='h-full w-full rounded-[5px] ' src={hero5} alt="hero 5"/></SwiperSlide>
    </Swiper>
  )
}

export default Hero