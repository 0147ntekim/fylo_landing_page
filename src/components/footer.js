import logo from '../images/logo.svg';
import location from '../images/icon-location.svg';
import phone from '../images/icon-phone.svg';
import mail from '../images/icon-email.svg';

import facebook from '../images/_Path_1.png';
import twitter from '../images/_Path_4.png';
import instagram from '../images/ig_logo.png'

const Footer = () => {
    return ( 
        <section className='w-full min-h-[100vh] lg:min-h-[70vh] flex flex-col lg:flex-row justify-between items-start  px-[20px] sm:px-[70px] pt-[150px] sm:pt-[80px] lg:pt-[150px] pb-[20px] bg-[#181F2A]' >
            <div className='w-full lg:w-[50%] h-[35vh] flex flex-col justify-between'>
                <img className='w-[40%] sm:w-[20%] ml-[10px]' src={logo} alt="" />
                <div className='lg:w-full h-[70%] flex flex-col lg:flex-row justify-between'>
                    <div className='w-full lg:w-[55%] flex flex-row justify-between items-start'>
                        <img className='w-[20px] h-[30px] sm:h-[25px] sm:mt-[5px]'  src={location} alt="" />
                        <p className='w-[87%] sm:w-[90%] text-[#ffffff] text-[17px] sm:text-[16px]'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis nisi, quas dolore numquam ipsum consectetur iusto cumque excepturi reiciendis.
                        </p>
                    </div>

                    <div  className='w-full lg:w-[40%] h-[9vh] sm:h-[10vh] flex flex-col justify-between'>
                        <span className='flex flex-row items-center'>
                            <img className='w-[20px] h-[27px] sm:h-[20px]' src={phone} alt="" />
                            <p className='ml-[25px] text-[17px] sm:text-[16px] text-[#ffffff]'>+1-543-123-4567</p>
                        </span>

                        <span className='flex flex-row items-center' >
                            <img className='w-[20px] h-[27px] sm:h-[20px]' src={mail} alt="" />
                            <p className='ml-[24px] text-[17px] sm:text-[16px] text-[#ffffff]'>examples@fylo.com</p>
                        </span>
                    </div>
                </div>    
                
            </div>


            <div className='w-full lg:w-[20%] h-[30vh] lg:h-[22vh] lg:ml-[80px] lg:mt-[70px] sm:h-[33vh] flex flex-col lg:flex-row justify-between'>
                <ul className='h-[15vh] sm:h-[17vh] lg:h-[22vh] flex flex-col justify-between'>
                    <li className='text-[18px] sm:text-[16px] text-[#ffffff] font'>About Us</li>
                    <li className='text-[18px] sm:text-[16px] text-[#ffffff] font'>Jobs</li>
                    <li className='text-[18px] sm:text-[16px] text-[#ffffff] font'>Press</li>
                    <li className='text-[18px] sm:text-[16px] text-[#ffffff] font'>Blog</li>
                </ul>

                <ul className='h-[11vh] sm:h-[13vh] lg:h-[15vh] flex flex-col justify-between'>
                    <li className='text-[18px] sm:text-[16px] text-[#ffffff] font'>Contact Us</li>
                    <li className='text-[18px] sm:text-[16px] text-[#ffffff] font'>Terms</li>
                    <li className='text-[18px] sm:text-[16px] text-[#ffffff] font'>Privacy</li>
                </ul>
            </div>

            <div className='w-[30%] lg:w-[10%] mx-auto lg:mt-[70px] flex flex-row justify-between '>
                <img src={facebook} alt="" />
                <img src={twitter} alt="" />
                <img src={instagram} alt="" />
            </div>
        </section>
    );
}
 
export default Footer;