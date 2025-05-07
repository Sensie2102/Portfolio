import { faDiscord, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Button from '../Buttons/Button'

const ContactForm = () => {
  return (
    <div className="flex justify-center w-full bg-[var(--foreground)]/15 rounded-4xl p-8">
  <div className="w-full px-8 flex flex-row gap-12 rounded-4xl bg-[var(--foreground)]/25">
    
    {/* Left: Get in Touch Form */}
    <div className="flex-1 flex flex-col gap-y-4 p-8">
      <h2 className="text-4xl text-[var(--accent)] font-bold">Get in touch!</h2>
      <p className="text-body-muted">Feel free to send me a message!</p>

      <form className="flex flex-col gap-y-4 p-4 backdrop-blur-sm bg-[var(--foreground)]/5 rounded-2xl border border-[var(--foreground)]/10 shadow-md">
        <input
          type="text"
          placeholder="Your name"
          className="bg-transparent border border-[var(--foreground)]/20 text-[var(--foreground)] px-4 py-3 rounded-md placeholder-[var(--foreground)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--highlight)]"
        />
        <input
          type="email"
          placeholder="Your email"
          className="bg-transparent border border-[var(--foreground)]/20 text-[var(--foreground)] px-4 py-3 rounded-md placeholder-[var(--foreground)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--highlight)]"
        />
        <textarea
          placeholder="Your message"
          rows={4}
          className="bg-transparent border border-[var(--foreground)]/20 text-[var(--foreground)] px-4 py-3 rounded-md placeholder-[var(--foreground)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--highlight)] resize-none"
        />
        <Button variant='primary' className="flex items-center justify-center gap-2 rounded-xl">
          <FontAwesomeIcon icon={faPaperPlane} /> Send Message
        </Button>
      </form>
    </div>

    {/* Separator */}
    <div className="w-[3px] h-auto bg-gradient-to-b from-[var(--accent)] via-blue-500 to-[var(--highlight)] opacity-50 my-[10px] " />

    {/* Right: Connect with Me Cards */}
    <div className="flex-1 flex flex-col gap-y-18 p-8">
      <h2 className="text-4xl text-[var(--accent)] font-bold">Connect with me</h2>

      <div className="flex flex-col gap-y-4 bg-[var(--foreground)]/5 rounded-2xl border border-[var(--foreground)]/10 p-4 backdrop-blur-sm shadow-md">
        {/* LinkedIn Card */}
        <a
          href="https://www.linkedin.com/in/mafaaz-sabir/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-4 rounded-xl border border-[var(--foreground)]/10 bg-[var(--foreground)]/5 backdrop-blur-sm hover:bg-[var(--foreground)]/10 transition"
        >
          <div className="text-white-500 text-2xl"><FontAwesomeIcon icon={faLinkedin} className='h-7 w-7'/></div>
          <div className="flex flex-col">
            <span className="text-[var(--foreground)] font-semibold">Let’s Connect</span>
            <span className="text-[var(--foreground)]/60 text-sm">on LinkedIn</span>
          </div>
        </a>

        {/* Discord Card */}
        <a
          href="https://discord.com/users/_sensie21"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-4 rounded-xl border border-[var(--foreground)]/10 bg-[var(--foreground)]/5 backdrop-blur-sm hover:bg-[var(--foreground)]/10 transition"
        >
          <div className="text-indigo-400 text-2xl"><FontAwesomeIcon icon={faDiscord} className='h-7 w-7'/></div>
          <div className="flex flex-col">
            <span className="text-[var(--foreground)] font-semibold">Discord</span>
            <span className="text-[var(--foreground)]/60 text-sm">@_sensie21</span>
          </div>
        </a>

        {/* GitHub Card */}
        <a
          href="https://github.com/Sensie2102"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-4 rounded-xl border border-[var(--foreground)]/10 bg-[var(--foreground)]/5 backdrop-blur-sm hover:bg-[var(--foreground)]/10 transition"
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
