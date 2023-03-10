import { FC, useState } from 'react';
import { 
  FaBars, 
  FaTimes, 
  FaGithub, 
  FaLinkedin,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';
import Logo from '../../assets/logo5.png';
import sections from '../../sections';


export const Navbar: FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => setShowMenu(!showMenu);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-8 pt-3 bg-[#0a192f] text-gray-300 lg:px-40'>
      {/* Logo */}
      <div className='z-10'>
        <Link to='home' smooth={true} duration={700}>
          <img 
            src={Logo} 
            alt='Logo' 
            style={{ width: '90px', cursor: 'pointer' }}
          />
        </Link>
      </div>

      {/* Menu */}
      <ul className='hidden text-xl font-bold md:flex'>
        {sections.map(({ id, title }) => (
          <li key={id}>
            <Link to={id} smooth={true} duration={700}>
              {title}
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger */}
      <div className='md:hidden z-10' onClick={handleMenuClick}>
        {showMenu
          ? <FaTimes />
          : <FaBars />}
      </div>

      {/* Mobile menu */}
      <ul className={showMenu
        ? 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        : 'hidden'
      }>
        {sections.map(({ id, title }) => (
          <li className='py-6 text-3xl' key={id}>
            <Link 
              to={id} 
              smooth={true} 
              duration={700}
              onClick={handleMenuClick}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>

      {/* Social icons */}
            
      <ul className='hidden md:flex flex-col fixed top-[35%] left-0'>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] duration-300 bg-[#0077B5] hover:ml-[-10px]'>
          <a 
            href='https://www.linkedin.com/in/hajnalka-oltyan/' 
            className='w-full flex justify-between items-center text-white ml-[15px]'
            target='_blank'
            rel="noreferrer"
          >
            LinkedIn <FaLinkedin size={30} />
          </a>
        </li>

        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] duration-300 bg-black hover:ml-[-10px]'>
          <a 
            href='https://github.com/hajnaloltyan' 
            className='w-full flex justify-between items-center text-white ml-[15px]'
            target='_blank'
            rel="noreferrer"
          >
            GitHub <FaGithub size={30} />
          </a>
        </li>

        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] duration-300 bg-green-700 hover:ml-[-10px]'>
          <Link 
            to='contact' 
            smooth={true} 
            duration={700} 
            className='w-full flex justify-between items-center text-white ml-[15px]'
          >
            E-mail <HiOutlineMail size={30} />
          </Link>
        </li>

        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] duration-300 bg-pink-700 hover:ml-[-10px]'>
          <a 
            href='https://drive.google.com/file/d/1pZeFhIMXiriHQddqkXUBn_OuXwsz2m4J/view?usp=sharing'
            className='w-full flex justify-between items-center text-white ml-[15px]'
            target='_blank'
            rel="noreferrer"
          >
            Resume <BsFillPersonLinesFill size={30} />
          </a>
        </li>
      </ul>

      {/* Mobile Social icons */}

      <ul className='flex fixed bottom-0 left-0 right-0 md:hidden'>
        <li className='h-[50px] flex flex-auto items-center bg-[#0077B5]'>
          <a 
            href='https://www.linkedin.com/in/hajnalka-oltyan/' 
            className='w-full flex justify-center items-center text-white'
            target='_blank'
            rel="noreferrer"
          >
            <FaLinkedin size={30} />
          </a>
        </li>

        <li className='h-[50px] flex flex-auto items-center bg-black'>
          <a 
            href='https://github.com/hajnaloltyan' 
            className='w-full flex justify-center items-center text-white'
            target='_blank'
            rel="noreferrer"
          >
            <FaGithub size={30} />
          </a>
        </li>

        <li className='h-[50px] flex flex-auto items-center bg-green-700'>
          <Link 
            to='contact' 
            smooth={true} 
            duration={700} 
            className='w-full flex justify-center items-center text-white'
          >
            <HiOutlineMail size={30} />
          </Link>
        </li>

        <li className='h-[50px] flex flex-auto items-center bg-pink-700'>
          <a 
            href='https://drive.google.com/file/d/1pZeFhIMXiriHQddqkXUBn_OuXwsz2m4J/view?usp=sharing'
            className='w-full flex justify-center items-center text-white'
            target='_blank'
            rel="noreferrer"
          >
            <BsFillPersonLinesFill size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
};
