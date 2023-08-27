import { close, menu, logo } from '../assets';
import { useState } from 'react';
import { navLinks } from '../constants';

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false)

  return (
    <div>
      <nav className='w-full relative z-[5]'>
        <div className='flex items-center justify-between py-6 relative max-md:px-4'>
          <a data-aos="fade-down" href="#">
            <img src={logo} className='max-w-[170px]' alt="Logo" />
          </a>
          <ul className='list-none md:flex hidden justify-between gap-10'>
            {
              navLinks.map((link, index) => (
                <li data-aos="fade-down" data-aos-delay={200 + 50 * index} key={link.id} className='cursor-pointer text-white transition duration-100 hover:text-gray-300 text-[16px]'>
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))
            }
          </ul>
          <div className="auth-btns md:flex hidden items-center  justify-between gap-10">
            <a href="#" data-aos="fade-down" data-aos-delay={200 + navLinks.length * 50 } className='text-white transition duration-100 hover:text-gray-300'>Login</a>
            <a href="#" data-aos="fade-down" data-aos-delay={200 + (navLinks.length + 1) * 50 } className='rounded-[40px] py-4 px-8 bg-white text-black hover:bg-gray-300 transition duration-100'>Sign Up</a>
          </div>
          <div className='md:hidden flex flex-1 justify-end items-center'>
            <img
              src={toggleNav ? close : menu}
              alt="menu"
              className='w-[24px] h-[24px] object-contain cursor-pointer'
              onClick={() => setToggleNav(!toggleNav)}
              />
          </div>
        </div>
        <div
          className={`${toggleNav ? `flex flex-col` : `hidden`} bg-black w-full absolute top-20 py-20 gap-10`}
        >
          <ul className='list-none md:hidden flex text-white text-center flex-col justify-between gap-10'>
            {
              navLinks.map(link => (
                <li key={link.id} className='cursor-pointer text-[16px]'>
                  <a 
                    href={`#${link.id}`}
                    onClick={() => setToggleNav(!toggleNav)}>
                  {link.title}</a>
                </li>
              ))
            }
          </ul>
          <div className="auth-btns text-white md:hidden flex flex-col items-center justify-between gap-10">
            <a href="#">Login</a>
            <a href="#" className='rounded-[40px] bg-white text-black py-3 px-8'>Sign Up</a>
          </div>
        </div>
      </nav>
        
    </div>
  )
}

export default Navbar