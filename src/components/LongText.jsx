
const LongText = () => {
  return (
    <div className='container mx-auto py-20 sm:py-36'>
      {/* desktop */}
      <h1 data-aos="fade-down" data-aos-delay={200 + 50 * 0} className='text-3xl text-left sm:text-6xl font-bold px-3 sm:leading-[80px] hidden md:block'>Findtrend helps you to increase </h1>
      <h1 data-aos="fade-down" data-aos-delay={200 + 50 * 1} className='text-3xl text-left sm:text-6xl font-bold px-3 sm:leading-[80px] hidden md:block'>your productivity and reduce</h1>
      <h1 data-aos="fade-down" data-aos-delay={200 + 50 * 2} className='text-3xl text-left sm:text-6xl font-bold px-3 sm:leading-[80px] hidden md:block'>your computer's memory load,</h1>
      <h1 data-aos="fade-down" data-aos-delay={200 + 50 * 3} className='text-3xl text-left sm:text-6xl font-bold px-3 sm:leading-[80px] text-gray200 hidden md:block'>an application that can fulfill</h1>
      <h1 data-aos="fade-down" data-aos-delay={200 + 50 * 4} className='text-3xl text-left sm:text-6xl font-bold px-3 sm:leading-[80px] text-gray200 hidden md:block'>your daily browsing needs.</h1>

      <h1 className='text-3xl text-left sm:text-6xl font-bold px-3 sm:leading-[80px] md:hidden'>Findtrend helps you to increase your productivity and reduce your computer's memory load, <span className='text-gray200'>an application that can fulfill your daily browsing needs.</span></h1>
    </div>
  )
}

export default LongText