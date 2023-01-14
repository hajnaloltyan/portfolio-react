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


export const Navbar: FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => setShowMenu(!showMenu);

  return (
    <div className='fixed w-full h-[90px] flex justify-between items-center px-8 pt-3 bg-[#0a192f] text-gray-300 lg:px-40'>
      {/* Logo */}
      <div className='z-10'>
        <img 
          src={Logo} 
          alt='Logo' 
          style={{ width: '90px' }}
        />
      </div>

      {/* Menu */}
      <ul className='hidden text-xl font-bold md:flex'>
        <li>
          <Link to='home' smooth={true} duration={700}>
            Home
          </Link>
        </li>
        
        <li>
          <Link to='about' smooth={true} duration={700}>
            About
          </Link>
        </li>
        
        <li>
          <Link to='skills' smooth={true} duration={700}>
            Skills
          </Link>
        </li>

        <li>
          <Link to='work' smooth={true} duration={700}>
            Work
          </Link>
        </li>
        
        <li>
          <Link to='contact' smooth={true} duration={700}>
            Contact
          </Link>
        </li>
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
        <li className='py-6 text-3xl'>Home</li>
        <li className='py-6 text-3xl'>About</li>
        <li className='py-6 text-3xl'>Skills</li>
        <li className='py-6 text-3xl'>Work</li>
        <li className='py-6 text-3xl'>Contact</li>
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

        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] duration-300 bg-green-600 hover:ml-[-10px]'>
          <a 
            href='/' 
            className='w-full flex justify-between items-center text-white ml-[15px]'
          >
            E-mail <HiOutlineMail size={30} />
          </a>
        </li>

        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] duration-300 bg-gray-600 hover:ml-[-10px]'>
          <a 
            href='https://drive.google.com/file/d/1mvD1pXQ7yTuaAlwBDg8Feg6qT-41Pk_9/view?usp=sharing'
            className='w-full flex justify-between items-center text-white ml-[15px]'
            target='pdf-frame'
            rel="noreferrer"
          >
            Resume <BsFillPersonLinesFill size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
};
