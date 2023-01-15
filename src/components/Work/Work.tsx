import { FC } from 'react';

export const Work: FC = () => {
  return (
    <section id='work' className='w-full h-screen px-[10%] bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='flex flex-col justify-center w-full h-full px-[10%]'>
        <article className='pb-8'>
          <h2 className='text-5xl font-bold inline border-b-4 border-pink-700'>
            Work
          </h2>
        </article>

        <p className='py-8'>
          {'// Check out some of my recent work :'}
        </p>
      </div>
    </section>
  );
};
