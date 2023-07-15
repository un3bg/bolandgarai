import {Navbar} from '../pages/home'
import '../css/portfolio.css'
import {RiShareForward2Fill} from 'react-icons/ri'
import pImg from '../media/p2.jpg'

let Portfolio = () => {
    return(
        <div className='pMain'>
            <Navbar />
            <hr className='pHr'></hr>
            <div className='pHeader'>
                    <h3 className="text-3xl font-bold underline bg-red-500">سایت و اپلیکیشن های پیاده سازی شده </h3>
                    <h4>همکاری با بهترین ها و پیاده سازی پروژه های شما باعث افتخار ماست</h4>
                </div>
            <div className='pLanding'>
                <div className='pItems'>
                <div className='pItem pItem1'>
                    <a href='#'><span>1</span> وبسایت گروه رضوان <RiShareForward2Fill/></a>
                    <p>طراحی کامل و ریسپانسیو وبسایت هلدینگ رضوان</p>
                </div>
                <div className='pItem pItem2'>
                    <a href='#'><span>2</span> وبسایت گروه عباسپور <RiShareForward2Fill/></a>
                    <p>طراحی کامل و ریسپانسیو وبسایت هلدینگ عباسپور</p>
                </div>
                <div className='pItem pItem3'>
                    <a href='#'><span>3</span> وبسایت گروه زرماکارون <RiShareForward2Fill/></a>
                    <p>طراحی کامل و ریسپانسیو وبسایت هلدینگ زرماکارون</p>
                </div>
                <div className='pItem pItem4'>
                    <a href='#'><span>4</span> وبسایت گروه مانا <RiShareForward2Fill/></a>
                    <p>طراحی کامل و ریسپانسیو وبسایت هلدینگ مانا</p>
                </div>
                <div className='pItem pItem5'>
                    <a href='#'><span>5</span> وبسایت گروه مانا <RiShareForward2Fill/></a>
                    <p>طراحی کامل و ریسپانسیو وبسایت هلدینگ مانا</p>
                </div>
                <div className='pItem pItem6'>
                    <a href='#'><span>6</span> وبسایت گروه مانا <RiShareForward2Fill/></a>
                    <p>طراحی کامل و ریسپانسیو وبسایت هلدینگ مانا</p>
                </div>
                <img className='pImg' src={pImg}></img>
            </div>
            </div>
        </div>
    )
    }
    
    
    
    export default Portfolio