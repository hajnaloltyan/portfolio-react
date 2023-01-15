import { FC } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

export const Home: FC = () => {
  return (
    <section id='home' className='w-full h-screen bg-[#0a192f] px-[10%]'>
      {/* Container */}
      <article className='mx-auto gap-2 flex flex-col justify-center h-full px-[10%]'>
        <h3 className='text-pink-700 text-xl'>
          Hello, My name is
        </h3>

        <h1 className='text-4xl font-bold text-[#ccd6f6] sm:text-5xl'>
          Hajnalka Oltyan
        </h1>

        <h2 className='text-4xl font-bold text-[#8892b0] sm:text-7xl'>
          I&lsquo;m a Frontend Developer.
        </h2>

        <p className='text-[#8892b0] max-w-[700px]'>
          Currently, focusing on building projects for my Portfolio.
        </p>

        <div>
          <button 
            className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-700 hover:border-pink-700'
          >
            <Link to='work' smooth={true} duration={700}>
              View Work <HiArrowNarrowRight className='ml-3 inline'/>
            </Link>
          </button>
        </div>
      </article>
    </section>
  );
};
