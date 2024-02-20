import React from 'react';
import { gridData } from './components/gridData';

const Grid = () => {
    return ( 
        <div className='w-full min-h-[100vh] px-[25px] sm:px-[35px] lg:px-[150px]  py-[20px] lg:py-[50px] grid grid-cols-1 lg:grid-cols-2 justify-between  bg-[#222931]'>
            {
                gridData.map((data, index) => {
                    
                    return(
                        <div className='w-full  h-[20vh] sm:h-[30vh] lg:h-[35vh] sm:mb-[30px] lg:mb-[0px]  lg:px-[30px] flex flex-col  justify-between items-center' key={index}>
                            <img className='w-[60px] lg:w-[70px] h-[60px]' src={data.imgSrc} alt="" />
                            <h3 className='font-primary text-[20px] font-semibold text-[#ffffff]'>{data.h3}</h3>
                            <p className='font-secondary font-medium text-[16px] text-center text-[#ffffff]'>{data.info}</p>
                        </div>
                    )
            })
        }
            
        </div>
    );
}
 
export default Grid;