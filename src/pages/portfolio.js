import {Navbar} from '../pages/home'
import '../css/portfolio.css'
import {RiShareForward2Fill} from 'react-icons/ri'
import {BsBookmarkStar} from 'react-icons/bs'
import pImg from '../media/p2.jpg'
import { useEffect, useState } from "react"



let Portfolio = () => {
    const [off1 , on1] = useState('turn')
    const [off2 , on2] = useState('off')
    const [off3 , on3] = useState('off')
    const [off4 , on4] = useState('off')
    const [off5 , on5] = useState('off')
    return(
        <div className='pMain'>
            <Navbar class="navbar pNav"  />
            <hr className='pHr'></hr>
            <div className='pHeader'>
                    <h3 className="text-3xl font-bold underline bg-red-500">سایــــت و اپلیکیـــشن های پیـــاده ســـازی شــده <BsBookmarkStar/></h3>
                    <h4>همکاری با بهتریـــن ها و پیاده سازی پــــــروژه های شما باعث افتخار ماست</h4>
                </div>
            <div className='pLanding'>
                <div className='pItems'>
                <div className=' pItem1' id='pItem' onClick={()=>{on1('turn')}}>
                    <a href='#'><span>1</span> وبسایت گروه رضوان <RiShareForward2Fill/></a>
                    <p>طراحی کامل و ریسپانسیو وبسایت هلدینگ رضوان</p>
                </div>
                <div className=' pItem2' id='pItem'>
                    <a href='#'><span>2</span> وبسایت گروه عباسپور <RiShareForward2Fill/></a>
                    <p>طراحی کامل و ریسپانسیو وبسایت هلدینگ عباسپور</p>
                </div>
                <div className=' pItem3' id='pItem'>
                    <a href='#'><span>3</span> وبسایت گروه زرماکارون <RiShareForward2Fill/></a>
                    <p>طراحی کامل و ریسپانسیو وبسایت هلدینگ زرماکارون</p>
                </div>
                <div className=' pItem4' id='pItem'>
                    <a href='#'><span>4</span> وبسایت گروه مانا <RiShareForward2Fill/></a>
                    <p>طراحی کامل و ریسپانسیو وبسایت هلدینگ مانا</p>
                </div>
                <div className=' pItem5' id='pItem'>
                    <a href='#'><span>5</span> وبسایت گروه مانا <RiShareForward2Fill/></a>
                    <p>طراحی کامل و ریسپانسیو وبسایت هلدینگ مانا</p>
                </div>
                <img className='pImg' src={pImg}></img>
            </div>
            </div>
        </div>
    )
    }
    
    
    
    export default Portfolio