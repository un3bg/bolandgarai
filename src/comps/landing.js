import React from 'react'
import '../style/main.module.css'
let Landing = () => {
    return(
        <div>
           <Navbar />
        </div>
    )
}


let Navbar =() => {
    return (
        <div className='nav'>
        <a href='#home'>خانه</a>
        <a href='#home'>مــن</a>
        <a href='#home'>پورتفولیو</a>
        <a href='#home'>ارتباط</a>
        </div>
       
    )
}
export default Landing