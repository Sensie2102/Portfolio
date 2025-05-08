'use client'
import { faDiscord, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '../Buttons/Button'
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const ContactForm = () => {
    const form = useRef<HTMLFormElement>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
        toast.success("Message sent successfully!");
        form.current?.reset();
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("Failed to send message.");
      });
    };
  return (
    <div className="flex justify-center w-full bg-[var(--foreground)]/15 rounded-4xl p-8">
  <div className="w-full px-8 flex flex-row gap-12 rounded-4xl bg-[var(--foreground)]/25">
    
    
    <div className="flex-1 flex flex-col gap-y-4 p-8">
      <h2 className="text-4xl text-[var(--accent)] font-bold">Get in touch!</h2>
      <p className="text-body-muted">Feel free to send me a message!</p>

      <form className="flex flex-col gap-y-4 p-4 backdrop-blur-sm bg-[var(--foreground)]/5 rounded-2xl border border-[var(--foreground)]/10 shadow-md" 
      ref={form}
      onSubmit={handleSubmit}
      >
        <input
          type="text"
          name='name'
          placeholder="Your name"
          className="bg-transparent border border-[var(--foreground)]/20 text-[var(--foreground)] px-4 py-3 rounded-md placeholder-[var(--foreground)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/50"
          required
        />
        <input
          type="email"
          name='email'
          placeholder="Your email"
          className="bg-transparent border border-[var(--foreground)]/20 text-[var(--foreground)] px-4 py-3 rounded-md placeholder-[var(--foreground)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/50"
          required
        />
        <textarea
          placeholder="Your message"
          rows={4}
          name='message'
          className="bg-transparent border border-[var(--foreground)]/20 text-[var(--foreground)] px-4 py-3 rounded-md placeholder-[var(--foreground)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/50 resize-none"
          required
        />
        <Button variant='primary' className="flex items-center justify-center gap-2 rounded-xl" type='submit' >
          <FontAwesomeIcon icon={faPaperPlane} /> Send Message
        </Button>
      </form>
    </div>

    
    <div className="w-[3px] h-auto bg-gradient-to-b from-[var(--accent)] via-blue-500 to-[var(--highlight)] opacity-50 my-[10px] " />

    
    <div className="flex-1 flex flex-col gap-y-18 p-8">
      <h2 className="text-4xl text-[var(--accent)] font-bold">Connect with me</h2>

      <div className="flex flex-col gap-y-4 bg-[var(--foreground)]/5 rounded-2xl border border-[var(--foreground)]/10 p-4 backdrop-blur-sm shadow-md">
        
        <a
          href="https://www.linkedin.com/in/mafaaz-sabir/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-4 rounded-xl border border-[var(--foreground)]/10 bg-[var(--foreground)]/5 backdrop-blur-sm hover:bg-[var(--accent)]/20 transition"
        >
          <div className="text-white-500 text-2xl"><FontAwesomeIcon icon={faLinkedin} className='h-7 w-7'/></div>
          <div className="flex flex-col">
            <span className="text-[var(--foreground)] font-semibold">Let’s Connect</span>
            <span className="text-[var(--foreground)]/60 text-sm">on LinkedIn</span>
          </div>
        </a>

        
        <a
          href="https://discord.com/users/_sensie21"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-4 rounded-xl border border-[var(--foreground)]/10 bg-[var(--foreground)]/5 backdrop-blur-sm hover:bg-[var(--accent)]/20 transition"
        >
          <div className="text-indigo-400 text-2xl"><FontAwesomeIcon icon={faDiscord} className='h-7 w-7'/></div>
          <div className="flex flex-col">
            <span className="text-[var(--foreground)] font-semibold">Discord</span>
            <span className="text-[var(--foreground)]/60 text-sm">@_sensie21</span>
          </div>
        </a>

        
        <a
          href="https://github.com/Sensie2102"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-4 rounded-xl border border-[var(--foreground)]/10 bg-[var(--foreground)]/5 backdrop-blur-sm hover:bg-[var(--accent)]/20 transition"
        >
          <div className="text-[var(--foreground)] text-2xl"><FontAwesomeIcon icon={faGithub} className='h-7 w-7'/></div>
          <div className="flex flex-col">
            <span className="text-[var(--foreground)] font-semibold">GitHub</span>
            <span className="text-[var(--foreground)]/60 text-sm">@Sensie21</span>
          </div>
        </a>
      </div>
    </div>

  </div>
</div>
  )
}

export default ContactForm
