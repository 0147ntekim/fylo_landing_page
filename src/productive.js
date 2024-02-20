import productive from './images/illustration-stay-productive.png';
import arrow from './images/icon-arrow.svg';

const Productive = () => {
    return (  
        <div className='w-full min-h-[100vh] flex flex-col lg:flex-row justify-between lg:px-[150px] lg:items-center bg-[#222931]'>
            <div  className='w-[100%] lg:w-[50%] h-[50vh]  sm:h-[60vh] lg:h-[70vh] pt-[80px]  sm:pt-[30px] px-[30px] md:pt-[15px] md:px-[50px] lg:px-[0]   flex justify-center items-center'>
                <img className='w-[100%] sm:w-[80%] md:w-[70%]' src={productive} alt="stay productive" />
            </div>
            <div className='w-[100%] lg:w-[50%] h-[35vh] sm:h-[40vh] lg:h-[70vh] md:h-[36vh] lg:py-[100px] px-[25px] sm:px-[45px] md:px-[100px] lg:px-[0] flex flex-col justify-between items-start mb-[135px] sm:mb-[20px] md:mb-[37px] lg:mb-0'>
                <h1 className='text-[22px] md:text-[24px] font-semibold font-primary text-[#ffffff]'>Stay Productive, wherever you are</h1>
                <p className='font-secondary text-[16px] font-medium text-[#ffffff]'>Never let location be an issue when accessing your files. Fylo has you covered for all your  life storage needs.</p>
                <p className='font-secondary text-[16px] font-medium text-[#ffffff]'>Securely share files and folders with friends, family and collegues for live collaboration. No email attachments required</p>
                <button className='bordering w-[55%] h-[50px] flex flex-row items-center text-[#62e0d9] text-[18px] font-medium'>
                    See how Fylo works <img className='w-[25px] h-[25px] ml-[10px]' src={arrow} alt="" />
                </button>
            </div>
        </div>
    );
}
 
export default Productive;