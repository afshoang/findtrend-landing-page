import { arrowWhite, tab1, tab2, tab3, tab4 } from '../assets';

const Hero = () => (
  <div id="home" className="pt-24 h-screen">
    <div className="hero-content w-full text-white mx-auto md:max-w-[728px] text-center max-xs:px-3 relative">
      <h1 className="text-3xl sm:text-6xl font-extrabold sm:leading-[80px] mb-3">Minimize your tabs.</h1>
      <h1 className="text-3xl sm:text-6xl font-extrabold sm:leading-[80px] mb-4">Find the trends!</h1>
      <div>
        <p className="text-sm sm:text-base text-gray100 mb-14 leading-6 mx-6 sm:mx-0">Don’t let your computer memories consumes all of those browser tabs.<br />
          Findtrend let you gathers all of your favorite website into one place.</p>
      </div>

      <a href="#" 
        className="rounded-[40px] bg-primary py-4 px-8 font-semibold text-black hover:bg-buttonHover transition duration-100">
          Get Started 🔥
      </a>

      <div className='hidden sm:block max-w-[100px] absolute right-[20%] bottom-0'>
        <p className='text-xs rotate-3'>All research start from here</p>
        <img src={arrowWhite} alt="arrow"  className='rotate-90 w-[30px] h-[35px]'/>
      </div>
    </div>

    <div className="hero-tab max-w-[370px] sm:max-w-[1076px] mx-auto relative mt-14 md:mt-24">
      <div className="tab-twitter w-[300px] sm:w-[348px] absolute z-[4] right-[40px] sm:left-0">
        <img src={tab4} alt="tab4" className='-rotate-6' />
      </div>
      <div className="tab-pinterest w-[300px] sm:w-[348px] absolute right-[40px] sm:left-[143px] bottom-[-150px] sm:bottom-[-136px] z-[3]">
        <img src={tab3} alt="tab3" className='-rotate-3' />
      </div>
      <div className="tab-fb w-[300px] sm:w-[348px] absolute right-[40px] sm:left-[390px] top-32 sm:top-0 z-[2]">
        <img src={tab2} alt="tab2" className='rotate-6' />
      </div>
      <div className="tab-dribble w-[300px] sm:w-[348px] absolute z-[1] right-[40px] bottom-[-280px] sm:bottom-[-137px]">
        <img src={tab1} alt="tab1" className='rotate-3' />
      </div>
    </div>
  </div>
)

export default Hero