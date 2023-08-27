import { plans } from '../constants';
import { FaCheck } from 'react-icons/fa';

const Subscription = () => {
  return (
    <div id='pricing' className='container mx-auto py-20 px-6 sm:py-36'>
      <h1 data-aos="fade-down" className='text-3xl sm:text-6xl font-bold px-3 sm:leading-[80px] text-center mb-20'>
        Get your best deal
      </h1>

      <div data-aos="fade-down" data-aos-delay={150} className='flex justify-center items-center mb-32'>
        <div className='flex items-center gap-5 relative'>
          <h3>Monthly</h3>
          <div className='bg-white w-[104px] h-[44px] rounded-[99px] relative'>
            <div className='w-[32px] h-[32px] rounded-[50%] absolute bg-primary top-[6px] left-[8px] cursor-pointer'></div>
          </div>
          <h3 className='text-gray200'>Yearly</h3>
          <div className='sm:block max-w-[100px] absolute -bottom-24 right-0 xs:-top-5 xs:right-[-120px]'>
            <p className='text-xs rotate-3 relative after:content-arrowWhite after:absolute after:w-[30px] after:h-[35px] after:rotate-[190deg] max-xs:after:-top-10 xs:after:rotate-90 after:-left-4 xs:after:-bottom-10 xs:after:left-0'>
              Save 10% per month
            </p>
          </div>
        </div>
      </div>

      <div className='grid mx-auto grid-cols-1 md:grid-cols-3 max-md:max-w-[360px] auto-rows-auto gap-10'>
        {
          plans.map((plan,idx) => <div data-aos="fade-down" data-aos-delay={100 * idx} key={plan.name} className={`${idx === 1 ? `bg-primary` :` bg-white`} max-w-[339px] md:max-w-[360px] p-8 rounded-2xl flex flex-col`}>
            <div className='text-black border-b-[1px] border-gray200 pb-8 mb-8'>
              <h2 className='text-3xl font-medium'>{plan.name}</h2>
              <p>{plan.description}</p>
            </div>
            <div className='text-black mb-8'>
              <h1 className='text-6xl font-medium mb-8'>${plan.price}<span className='font-normal text-lg'>/Month</span></h1>
              <ul className='mt-10'>
                {
                  plan.content.map((cont,idx) => <li className={`${idx !== plan.content.length - 1 ? `mb-5` : ``} inline-flex items-center`} key={idx}>
                    <FaCheck /><span className='ml-2'>{cont}</span>
                  </li>)
                }
              </ul>
            </div>
            <a href="#" className={`inline-block py-4 mt-auto font-bold px-8 w-full text-center ${idx === 1 ? `bg-black hover:bg-dimBlack` : `bg-primary hover:bg-green2 text-black`}  rounded-[29px]`}>Start Free Trial</a>
          </div>
        )
        }
        
      </div>
    </div>
  )
}

export default Subscription