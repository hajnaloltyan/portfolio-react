import { FC, useState } from 'react';

export const Contact: FC = () => {
  const [nameField, setNameField] = useState('');
  const [emailField, setEmailField] = useState('');
  const [messageField, setMessageField] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const handlesubmit = () => {
    if (nameField && emailField && messageField) {
      setEmailSent(true);
      alert('Thank you for your message');
    }

    if (emailSent) {
      setNameField('');
      setEmailField('');
      setMessageField('');
    }
  };

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
            action='https://api.staticforms.xyz/submit' 
            method='post'
            onSubmit={handlesubmit}
            className='flex flex-col w-full max-w-[700px] text-black'
          >
            <p className=' text-white py-8'>
              {'// Submit the form below or send me an email to: '}
              <em className='text-pink-700'>hajnalka.oltyan@gmail.com</em>
            </p>

            <input 
              type='hidden'
              name='accessKey'
              value='1c3fe858-2152-4f90-9c6b-546854cb5297'
            ></input>

            <input 
              type='text'
              name='name'
              value={nameField}
              onChange={event => setNameField(event.target.value)}
              placeholder='Name'
              className='bg-[#ccd6f6] p-2'
              required
            />

            <input 
              type='email'
              name='email'
              value={emailField}
              onChange={event => setEmailField(event.target.value)}
              placeholder='Email'
              className='bg-[#ccd6f6] p-2 my-4'
              required
            />

            <input 
              type='text' 
              name='honeypot' 
              style={{ display: 'none' }}
            />

            <textarea 
              name='message'
              value={messageField}
              onChange={event => setMessageField(event.target.value)}
              placeholder='Message'
              className='bg-[#ccd6f6] p-2'
              rows={10}
              required
            ></textarea>

            <input 
              type='hidden' 
              name='redirectTo'
              value='https://hajnaloltyan.github.io/portfolio-react/'
            />

            <button 
              type='submit'
              className='text-white border-2 px-4 py-3 my-8 mx-auto flex items-center hover:bg-pink-700 hover:border-pink-700'>
              Send message
            </button>
          </form>
        </article>
      </div>
    </section>
  );
};
