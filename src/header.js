import Navbar from "./components/navbar";


const Header = () => {
    return ( 
        <header className="header headerTwo z-[-1] w-full min-h-[100vh] pt-[40px] relative overflow-hidden">
            <Navbar/>
            <div className="w-full h-[80vh] max-[376px]:mt-[20px] mt-[50px] lg:mt-[25px] px-[30px] md:px-[100px] lg:!px-[300px] xl:px-[400px]  z-[1]">
                <div className="intro-img w-[100%] h-[35vh] z-[999]"></div>
                <div className="w-full max-[376px]:min-h-[45vh] min-h-[40vh] flex flex-col justify-between  ">
                    <h1 className="heading-one font-primary max-[376px]:text-[25px] text-[27px] lg:!text-[27px] xl:text-[50px] lg:text-center font-semibold text-[#ffffff] z-[999]  text-center">All your files in one secure location, accessible anywhere.</h1>
                    <p className="paragraph-one text-[16px] lg:!text-[18px] xl:text-[22px] text-[#ffffff] font-secondary text-center">Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
                    <button className="bg-[#65e2d7] cursor-pointer text-[#ffffff] font-primary  text-[18px] w-[80%] sm:w-[60%] md:w-[50%] lg:w-[30%] h-[65px] sm:h-[50px] mx-auto rounded-[40px] font-primary text-">Get started</button>
                </div>
                
                
            </div>
            <div className="curvyImage cssTop w-full h-[150px] sm:h-[200px] md:h-[220px] lg:h-[400px] xl:h-[580px] -z-40 lg:-z-10  absolute  max-[376px]:top-[38%]  top-[40%] sm:top-[55%] lg:top-[42%]"></div>
        </header>
    );
}
 
export default Header;