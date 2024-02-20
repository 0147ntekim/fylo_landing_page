import React from "react";


export default function Support(){
    return(
        <div className="w-full h-[40vh] relative  bg-[#222931]">
            <div className="w-[92%] sm:w-[90%] lg:w-[50%] h-[45vh] sm:h-[40vh] lg:h-[35vh] bg-[#3D4552] absolute left-[16px] sm:left-[28px] md:left-[38px] lg:left-[25%] top-[40px] sm:top-[40px] lg:top-[80px] rounded-[10px] px-[24px] sm:px-[30px] py-[27px] sm:py-[30px] lg:py-[20px] flex flex-col justify-between items-center">
                <h1 className="text-[25px] sm:text-[22px] font-primary font-bold text-[#ffffff]">Get early access today</h1>
                <p className="text-[20px] sm:text-[16px] font-secondary text-center text-[#ffffff]">It only takes a minute to signup and ourfree starter tier is extremely generous. If you have any questions, our support team would be happy to help you</p>

                <div className="w-full h-[15vh] sm:h-[10vh] flex flex-col sm:flex-row justify-between items-center">
                    <input className="w-full sm:w-[47%]  h-[55px] sm:h-[45px] pl-[30px] rounded-[35px]" type="email" name="email" id="email" placeholder="email@example.com"/>
                    <button className="w-full sm:w-[47%] h-[55px] sm:h-[45px] bg-[#62e0d9] rounded-[35px] text-[#ffffff] text-[18px]">Get Started For Free</button>
                </div>
            </div>
        </div>
        
    )
}