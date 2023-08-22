import { footerLinks } from '../constants';
import { logoDark } from '../assets';

const Footer = () => {
  return (
    <div className='container mx-auto flex flex-col sm:flex-row items-center justify-between py-20 sm:py-8'>
      <a href="#">
        <img src={logoDark} className='max-w-[170px]' alt="Logo" />
      </a>

      <ul className='list-none flex flex-col sm:flex-row max-sm:mt-20 text-center justify-between gap-10 '>
        {
          footerLinks.map(link => (
            <li key={link.id} className='cursor-pointer text-black  text-[16px]'>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Footer