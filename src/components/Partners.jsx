import { brandLinks } from '../constants';

const Partners = () => {
  return (
    <div className="container mx-auto py-20 sm:py-36 px-5">
      <h1 data-aos="fade-down" className="text-3xl sm:text-6xl font-bold px-3 sm:leading-[80px] text-center mb-20">Findtrend make +1000 Startup grow</h1>
      <div className='grid grid-cols-2 ss:grid-cols-4 auto-rows-auto gap-3.5'>
        {
          brandLinks.map((brand, index) => <div data-aos="fade-down" data-aos-delay={50 * index} key={brand.id} className='p-6 md:p-10 bg-gray300 flex justify-center items-center rounded-lg'>
            <img
              src={brand.logo} 
              className='max-w-[100px] sm:max-w-[140px] md:max-w-[190px] max-h-[30px] md:max-h-[40px]' 
            />
          </div>
          )
        }
      </div>
    </div>
  )
}

export default Partners