import React from "react";
import { founderData } from "./components/founderData";
import quotes from './images/bg-quotes.png'

const Owners = () => {
    return ( 
        <div className="relative w-full min-h-[100vh] lg:min-h-[50vh] z-[-1] sm:mt-[70px] md:mt-[0] flex flex-col lg:flex-row justify-between lg:items-center lg:px-[100px] py-[150px] sm:py-[40px] lg:py-[10px] bg-[#222931]">
            <img className='w-[50px] h-[50px] absolute left-[40px] sm:left-[40px] md:left-[105px] top-[110px] sm:top-[0] lg:top-[20px] z-[-1]'  src={quotes} alt="quote img" />


            {
                founderData.map((data, index) => {
                    return(
                        <div className="w-[80%] md:w-[70%] lg:w-[32%] h-[20vh] sm:h-[26vh]  lg:h-[30vh] mx-auto flex flex-col justify-between  py-[15px] sm:py-[20px] px-[10px] sm:px-[20px] rounded-[15px] testimonials" key={index}>
                            <p className="text-[14px] text-[#ffffff] font-medium font-secondary">{data.p}</p>
                            <div className="flex flex-row  ">
                                <img className="w-[50px] h-[50px] rounded-[30px]" src={data.imgSrc} alt="profile img" />
                                <div className="flex flex-col ml-[15px]">
                                    <h3 className="text-[#ffffff] text-[18px] font-semibold font-primary">{data.h3}</h3>
                                    <h6 className="text-[#ffffff] text-[16px] font-normal font-secondary">{data.h6}</h6>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}
 
export default Owners;