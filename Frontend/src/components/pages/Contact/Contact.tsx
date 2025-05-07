import ContactForm from '@/components/Forms/ContactForm'
import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className='min-h-screen px-6 py-20 text-center flex flex-col items-center gap-12'>
        <h1 className='text-heading-1 !text-[var(--accent)]'>Contact Me</h1>
        <p className='text-body-muted leading-relaxed'></p>
        <ContactForm />
    </section>
  )
}

export default Contact
