import { FC } from 'react';

export const Contact: FC = () => {
  return (
    <section id='contact' className='w-full h-screen px-[10%] bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='flex flex-col justify-center w-full h-full px-[10%]'>
        <article className='pb-8'>
          <h2 className='text-5xl font-bold inline border-b-4 border-pink-700'>
            Contact
          </h2>
        </article>

        <article>
          <form
            action='https://getform.io/f/2736d09a-c2c1-4334-b29c-7040b8112da2' 
            method='POST'
            className='flex flex-col w-full max-w-[700px] text-black'
          >
            <p className=' text-white py-8'>
              {'// Submit the form below or send me an email to: '}
              <em className='text-pink-700'>hajnalka.oltyan@gmail.com</em>
            </p>

            <input 
              type='text'
              name='name'
              placeholder='Name'
              className='bg-[#ccd6f6] p-2'
              required
            />

            <input 
              type='email'
              name='email'
              placeholder='Email'
              className='bg-[#ccd6f6] p-2 my-4'
              required
            />

            <input 
              type='hidden' 
              name='_gotcha' 
              style={{ display: 'none !important' }}
            />

            <textarea 
              name='message'
              placeholder='Message'
              className='bg-[#ccd6f6] p-2'
              rows={10}
              required
            ></textarea>

            <button type='submit' className='text-white border-2 px-4 py-3 my-8 mx-auto flex items-center hover:bg-pink-700 hover:border-pink-700'>
              Send message
            </button>
          </form>
        </article>
      </div>
    </section>
  );
};
