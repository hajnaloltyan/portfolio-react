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

        <section className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Portfolio */}
          <article
            className='h-[300px] shadow-lg shadow-[#5155a1] hover:shadow-[#a841a6] container rounded-md flex justify-center items-center mx-auto bg-portfolio-image bg-center bg-no-repeat bg-contain'
          >
            <div>
              <h4 className='text-4xl text-yellow-500 font-bold tracking-wider'>
                Portfolio
              </h4>

              <div className='pt-8 text-center'>
                <a href='https://github.com/hajnaloltyan/portfolio-react'>
                  <button className='rounded-lg px-4 py-3 m-2 bg-pink-500 hover:bg-yellow-300 text-black font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </article>

          {/* MyBike */}
          <article
            className='h-[300px] shadow-lg shadow-[#5155a1] hover:shadow-[#a841a6] container rounded-md flex justify-center items-center mx-auto bg-mybike-image bg-center bg-no-repeat bg-contain'
          >
            <div>
              <h4 className='text-4xl text-yellow-500 font-bold tracking-wider text-center'>
                MyBike
              </h4>

              <div className='pt-8 text-center'>
                <a href='https://hajnaloltyan.github.io/layout_miami/'>
                  <button className='rounded-lg px-4 py-3 m-2 bg-pink-500 hover:bg-yellow-300 text-black font-bold text-lg'>
                    Demo
                  </button>
                </a>

                <a href='https://github.com/hajnaloltyan/layout_miami'>
                  <button className='rounded-lg px-4 py-3 m-2 bg-pink-500 hover:bg-yellow-300 text-black font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </article>
        </section>
      </div>
    </section>
  );
};
