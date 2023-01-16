import { FC } from 'react';

export const About: FC = () => {
  return (
    <section id='about' className='w-full h-screen px-[10%] bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full px-[10%]'>
        <article className='sm:text-right pb-16 pl-4'>
          <h2 className='text-3xl sm:text-5xl font-bold inline border-b-4 border-pink-700'>
            About
          </h2>
        </article>

        <article className='w-full grid md:grid-cols-2 gap-10'>
          <h3 className='sm:text-right text-3xl sm:text-4xl font-bold'>
            Hi, I&lsquo;m Hajnalka, nice to meet you! Please take a look around.
          </h3>

          <p>
            I&lsquo;m an enthusiastic, responsible and hard working IT person. Having worked on different projects helped me
            to adapt to the changes quickly and made me a mature team worker. I am able to work well both in a team
            environment as well as using my own initiative. I am able to work well under pressure and adhere to strict
            deadlines.
          </p>
        </article>
      </div>
    </section>
  );
};