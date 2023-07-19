import { IoCall, IoChevronBackOutline } from 'react-icons/io5'
import { BsPatchCheckFill } from 'react-icons/bs'
import '../css/about.css'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import React from 'react'
import { Navbar } from '../pages/home'
import DotScrollbar from '../assets/dotScrollbar'
import Typewriter from 'typewriter-effect';
import { generateJSXMeshGradient } from "meshgrad";
import unes from '../media/unes.jpg'
import lap3 from '../media/lap3.mp4'
import { Button } from '../pages/contact.js'
import { FiUserCheck } from 'react-icons/fi'
let About = () => {
  let mouseDown = () => {
    // window.scrollBy(0, 660)
    // console.log(window.scrollY)
  }
  window.addEventListener('scroll', mouseDown)
  return (
    <React.Fragment>


      <DotScrollbar />
      <section style={generateJSXMeshGradient(10)} className='sec aFirst gradient' id='aFirst'>
      <Navbar class="navbar aNav"  />
        <Typewriter
          options={{
            strings: ['حرفه ای شروع کنید', 'ما یک خانواده ایم ', 'اعتبار ما اطمینان شماست'],
            autoStart: true,
            loop: true,
          }}
        />
      </section>
      <section className='sec aSecond' id='aSecond'>
        <div className='aMemInfo'>
          <h2>با اعضای تیم من بهــتر اشـــنا شوید <BsPatchCheckFill /> </h2>
          <p>ما تیمی از بهترین های هر حوزه را دور هم جمع کرده ایم </p>
          <hr className='aHr2'></hr>
        </div>
        <div className='unes'>
          <img src={unes}></img>
          <h2>یـــونس بلنــــدگرای</h2>
          <p>CEO</p>
        </div>
        <div className='x'>
          <img src={unes}></img>
          <h2>یـــونس بلنــــدگرای</h2>
          <p>BackEnd Developer</p>
        </div>
        <div className='y'>
          <img src={unes}></img>
          <h2>یـــونس بلنــــدگرای</h2>
          <p>Front End Developer</p>
        </div>
      </section>
      <section className='sec aThird' id='aThird'>
        <video width='100%' autoPlay={true} loop className='aVid' >
          <source src={lap3}></source>
        </video>
        <div className='thirdInfo'>
          <h2 className='a3Header'>برای همکاری همین حالا تماس بگیرید</h2>
          <Button className='a3Button' link='/contact' icon=< FiUserCheck /> name='ارتباط با من' />
        </div>
      </section>
    </React.Fragment>
  )
};



export default About