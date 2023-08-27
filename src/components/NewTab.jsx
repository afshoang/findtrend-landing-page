import { arrowBlack,tab5 } from '../assets';

const NewTab = () => (
    <div className='w-full sm:max-w-[850px] text-center flex flex-col justify-between items-center gap-14 py-20 sm:py-36'>
      <h1 data-aos="fade-down" className='text-3xl sm:text-6xl font-bold max-sm:mb-5'>Open new tabs is sh*t</h1>
      <div className='max-w-[339px] sm:max-w-[500px] bg-white py-6 sm:py-14 px-20 rounded-2xl relative flex items-center justify-center'>
        <div data-aos="fade-down" data-aos-delay="250" className='sm:block max-w-[100px] absolute -bottom-[50%] -left-1 sm:top-2/4 sm:-left-28'>
          <p className='text-xs rotate-3 relative'>solution for discover a trend</p>
          <img
          src={arrowBlack} alt="arrow"
          className='rotate-[233deg] sm:rotate-[268deg] absolute -top-[40px] sm:-top-[45px] right-[20px] sm:right-0 w-[30px] h-[35px]'/>
        </div>
        <img src={tab5} alt="tab5" className='max-w-[300px] sm:max-w-[348px] inline-block' />
        <div data-aos="fade-down" data-aos-delay="250" className='sm:block max-w-[100px] absolute -top-[46%] -right-5 sm:top-[10%] sm:-right-28'>
          <p className='text-xs rotate-3 relative'>You just need one tab now</p>
          <img
          src={arrowBlack} alt="arrow"
          className='rotate-[63deg] sm:rotate-90 w-[30px] h-[35px]'/>
        </div>
      </div>
      <p data-aos="fade-down" data-aos-delay="100" className='text-sm sm:text-lg max-sm:mt-5 max-sm:px-5'>A solution for your browser tabs and don’t make your device get slower over time. Get ease and faster to discover a trend with just one tab.</p>
    </div>
  )

export default NewTab