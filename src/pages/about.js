import { Navbar } from '../pages/home'
import '../css/about.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel, Pagination , Keyboard , Navigation  } from 'swiper/modules';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
// import { Swiper, SwiperSlide } from 'swiper/swiper-react.mjs';
import aPic from '../media/aPic.jpg'
import aPic2 from '../media/aPic2.jpg'
import React, { useRef, useState } from 'react';



let About = () => {
    return (
        <>
        <Navbar />
        <Swiper
        slidesPerView={1}
        spaceBetween={0}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={aPic}></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src={aPic2}></img>
        </SwiperSlide>
      </Swiper>
      </>
    )
}



export default About