import { FC } from 'react';

import HTML from '../../assets/html.png';
import CSS from '../../assets/css.png';
import Tailwind from '../../assets/tailwind.png';
import Javascript from '../../assets/javascript.png';
import React from '../../assets/react.png';
import GitHub from '../../assets/github.png';

export const Skills: FC = () => {
  return (
    <section id='skills' className='w-full h-screen px-[10%] bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='flex flex-col justify-center w-full h-full px-[10%]'>
        <article className='pb-8'>
          <h2 className='text-5xl font-bold inline border-b-4 border-pink-700'>
            Skills
          </h2>
        </article>

        <p className='py-8'>
          {'// These are some of the technologies I have worked with :'}
        </p>

        <article className='grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto pb-3' src={HTML} alt='HTML icon' />
            <p>HTML</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto pb-3' src={CSS} alt='CSS icon' />
            <p>CSS / Sass</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto pb-3' src={Tailwind} alt='Tailwind icon' />
            <p>Tailwind CSS</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto pb-3' src={Javascript} alt='Javascript icon' />
            <p>Javascript</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto pb-3' src={React} alt='React icon' />
            <p>React</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto pb-3' src={GitHub} alt='GitHub icon' />
            <p>GitHub / Git</p>
          </div>
        </article>
      </div>
    </section>
  );
};
