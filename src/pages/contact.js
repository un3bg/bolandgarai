import {Navbar} from '../pages/home'
import c1 from '../media/c3.jpg'
import '../css/contact.css'
import { BsTwitter } from 'react-icons/bs'
import { IoCall , IoChevronBackOutline } from 'react-icons/io5'
import {BiLogoTelegram , BiLogoInstagramAlt , BiLogoGmail} from 'react-icons/bi'

let Contact = () => {
return(
    <div>
        <Navbar />
        <Main />
    </div>
)
}

let Main = () => {
    return(
        <div className='contact'>
            <img src={c1}></img>
            <div className='main'>
                <div className='cHeader'>
                    <h3 >در 24 ساعت شبانه روز باشما در ارتباط هستم</h3>
                    <h4>ارامش خاطر شما و کیفیت کارها مهمترین ارمان ماست</h4>
                </div>
                    <hr className='cHr'></hr>
                <div className='directCall'>
                <Button className='' link='https://instagram.com/un3bg' icon= < IoCall /> name='+98 915 998 9971 '  />
                <h3><IoChevronBackOutline/> تماس مستقیم با من</h3>
                </div>
                <hr className='cHr'></hr>
                <div className='socials'>
                    <h3 className='soHea'> <IoChevronBackOutline/> من در شبکه های اجتماعی</h3>
                    <Button className=" soIns" link='https://instagram.com/un3bg' name='اینستاگرام ' icon= < BiLogoInstagramAlt /> />
                    <Button className=" soTel" link='https://t.me/un3bg' name='تلگرام ' icon= < BiLogoTelegram /> />
                    <Button className=" soTwi" link='https://twitter.com/un3bg' name='توییتر'  icon= < BsTwitter /> />
                    <Button className=" soMai" link='mailto:un3bg@gmail.com' name='ایمیل'  icon= < BiLogoGmail /> />
                </div>
            </div>
        </div>
    )
}

let Button =(x)=> {
    return (
       <a className={'buttonComp ' + x.className} href={x.link}>{x.name}{x.icon} </a>
    )
}




export default Contact