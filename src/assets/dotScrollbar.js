import { useEffect, useState } from "react"


let DotScrollbar = () => {
    const [Foff , Fon] = useState('on')
    const [Soff , Son] = useState('off')
    const [Toff , Ton] = useState('off')

    return (
        <div className='dots'>
            <a href='#aFirst' className={Foff} onClick={()=>{Fon('on');Son('off');Ton('off');window.scrollTo=(0,0)}}>
                <svg width='50' height='50'>
                    <circle cx='25' cy='25' r='5px'></circle>
                </svg>
            </a>
            <a href='#aSecond' className={Soff} onClick={()=>{Fon('off');Son('on');Ton('off')}}>
                <svg width='50' height='50'>
                    <circle cx='25' cy='25' r='5px' ></circle>
                </svg>
            </a>
            <a href='#aThird' className={Toff} onClick={()=>{Fon('off');Son('off');Ton('on')}}>
                <svg width='50' height='50'>
                    <circle cx='25' cy='25' r='5px'></circle>
                </svg>
            </a>
        </div>
    )
}




export default DotScrollbar




// .dots{
//     transform: rotate(90deg);
//     width: 150px;
//     position:fixed;
//     right: 0;
//     top:50vh;
  
//   }
//   .dots svg{
//     fill:rgb(189, 189, 189)
//   }