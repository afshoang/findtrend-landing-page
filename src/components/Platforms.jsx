import { useState } from 'react';
import { socialMediaLinks, tweetLinks } from '../constants';

const Platforms = () => {
  const [activeTab, setActiveTab] = useState(6)

  return (
    <div className='container mx-auto py-20 sm:py-36'>
      <h1 className='text-3xl sm:text-6xl font-bold px-3 sm:leading-[80px] text-center mb-20'>Findtrend make +1000 Startup grow</h1>
      <div className='flex items-center gap-5 mb-20 px-3'>
        {
          socialMediaLinks.map(link => <a key={link.id} className='cursor-pointer inline-block'>
            <div className={`${activeTab === link.id ? `bg-primary` : `bg-white`} rounded-lg  p-4`} onClick={() => setActiveTab(link.id)}>
              <img src={link.logo} alt="" className='w-[48px] h-[48px] sm:w-[60px] sm:h-[60px]' />
            </div>
          </a>)
        }
      </div>
      <div>
      <div className='flex flex-col items-center gap-10 mb-20'>
        {
          tweetLinks.map(link => <img key={link.id} src={link.img} alt="" className='max-w-[92vw] sm:max-w-[800px]' />)
        }
      </div>
      </div>
      <div className='flex justify-center'>
        <a 
          href="#"
          className='rounded-[40px] py-4 px-8 bg-black text-white hover:bg-dimBlack transition duration-100'
          >View More Trend
        </a>
        </div>
    </div>
  )
}

export default Platforms