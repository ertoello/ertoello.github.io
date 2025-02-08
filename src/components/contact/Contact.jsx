import React from 'react'

export default function Contact() {
  return (
    <section id='contact' data-aos='fade-up' data-aos-delay='400'>
        <div className='py-8 lg:py-16 mx-auto max-w-screen-md'>
            <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-center' style={{ color: '#FFFFFF' }}>Contact Me</h2>
            <form action='#' className='space-y-8'>
                <div>
                    <label htmlFor='email' className='block mb-2 text-xl font-medium' style={{ color: '#FFFFFF' }}>Email</label>
                    <input 
                    type='email' 
                    id='email' 
                    className='shadow-sm font-bold text-sm rounded-lg block w-full p-2.5' 
                    style={{ backgroundColor: '#D7D7D7', border: '1px solid #D7D7D7', color: '#3FA3CE' }} 
                    placeholder='name@example.com' required/>
                </div>
                <div className='sm:col-span-2'>
                    <label htmlFor='message' className='block mb-2 text-xl font-medium' style={{ color: '#FFFFFF' }}>Message</label>
                    <textarea 
                    rows="6"
                    id='message' 
                    className='shadow-sm font-bold text-sm rounded-lg block w-full p-2.5' 
                    style={{ backgroundColor: '#D7D7D7', border: '1px solid #D7D7D7', color: '#3FA3CE' }} 
                    placeholder='Leave a comment ...' required/>
                </div>
                <button 
                  className='inline-flex border-0 py-2 px-6 focus:outline-none rounded-full text-lg'
                  style={{ backgroundColor: '#EF8B8B', color: '#FFFFFF', boxShadow: '0 0 40px rgba(239, 139, 139, 0.7)' }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#E6E6FA'}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#EF8B8B'}>
                    Send Message
                </button>
            </form>
        </div>
    </section>
  )
}
