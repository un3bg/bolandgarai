import lap1 from '../media/lap.mp4'
import lap3 from '../media/lap3.mp4'
import lap2 from '../media/lap2.mp4'
import lap4 from '../media/lap4.mp4'
import '../css/home.css';
import {IoChevronForwardOutline } from 'react-icons/io5'
import { BiSolidMessageSquareCheck , BiHomeAlt2 , BiUserPin} from 'react-icons/bi'
import {MdOutlineMilitaryTech} from 'react-icons/md'
import {GrContactInfo} from 'react-icons/gr'
import {Link , NavLink} from 'react-router-dom'
import {useState} from 'react'
import React, { Component } from 'react'

// let check = 'false'


// let bla = [check , setCheck] = useState('')



let Home = () => {
    return(
        <div>
           <Navbar class="navbar" />
           <Landing />
        </div>
    )
    }


    export let Navbar=(x)=> { 
  return(
      <nav className={x.class}>
          <NavLink to="/contact" id='n5' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} >ارتباط  <GrContactInfo/>  </NavLink>
          <NavLink to="/about" id='n4' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} >درباره  <BiUserPin/>  </NavLink>
          <span class="material-symbols-outlined n3">
          bolt
          </span>
          <NavLink to="/portfolio" id='n2' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} >پورتفولیو  <MdOutlineMilitaryTech /> </NavLink>
          <NavLink to="/" id='n1' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} >خانه  <BiHomeAlt2 /></NavLink>
      </nav>
    )
    } 
  
    let Linked = (x) =>{
      return(
        <Link to={x.to} id={x.id} onClick={x.click} className={x.className} >{x.name}{x.icon}</Link>
      )
    }


  let Landing= ()=>{
    return(
      <div className='landing'>
        <h1 className='lName'> بـــــلـــــنــــــدگـــــرای</h1>
        <h2 className='lHeader'>تیم توسعه و خلق ایده ها</h2>
        <p className='lExplain'>انجام کلیه پروژه های طراحی وبسایت ، برنامه نویسی پروژه های صنعتی ، سیستم های فروشگاهی <br></br>با بــــــــهتـــــریــــــــن کـــــیــــفـــــیت و بـــیـــــــش از 5 ســـــال سابـــــقـــــــه طــــراحــــــــی و توســــــعــــــه</p>
        <Link to='/products' className='lImage1'>
        <video className="vid1" width="370px" loop autoplay preload muted autoPlay={true} >
          <source src={lap1}></source>
        </video>
          <h2 className="vid1H">محصولات <IoChevronForwardOutline /> </h2>
        </Link>
  
        <Link to='/counseling' className='lImage2'>
        <video className="vid1" width="370px" loop preload muted autoPlay={true} >
          <source src={lap2}></source>
        </video>
          <h2 className="vid2H">درخواست مشاوره <IoChevronForwardOutline /></h2>
        </Link>
  
      </div>
    )
  }
  


 




export default Home 