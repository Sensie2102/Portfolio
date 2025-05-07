import React from 'react'
import Capsule from '../Capsules/Capsule';
import Button from '../Buttons/Button';
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faMeteor } from '@fortawesome/free-solid-svg-icons';
import ScrambleText from '../ScrambleText/ScrambleText';
const skills = ["React","Node.js","Mongodb","PostgresSQL","Python"]

const HomeComponent = () => {
  return (
    <section id="home" className="min-h-[calc(100vh-64px)] flex items-center justify-center px-8 py-24">
      <div className="w-full max-w-6xl grid grid-cols-2 gap-8 bg-[var(--foreground)]/5 rounded-2xl shadow-lg backdrop-blur-sm p-8 items-center">

        <div className="flex flex-col h-full items-start justify-center px-4 text text-[var(--foreground)] space-y-4">
          <Capsule variant="gradient" size="medium" className="gap-2 items-center">
              <FontAwesomeIcon icon={faMeteor} className="h-4 w-4 fill-current text-[var(--accent)]" />
              <span>Innovation and Creation</span>
          </Capsule>
          <h1 className="text-heading-1">
            Full Stack <span className="text-heading-gradient">Developer</span>
          </h1>
          <ScrambleText texts={["Gen AI Enthusiast","Aspiring Software Engineer"]} scrambleDuration={1000} interval={5000}></ScrambleText>
          <p className="text-body-muted">
            Building innovative applications that showcase skills with clarity, creativity, and impact.
          </p>
          <div className='flex gap-4'>
            {skills.map((skill, index) => {
              return (
                <Capsule key={index} variant="primary" size="small">
                  {skill}
                </Capsule>
              );
            })}
          </div>
          <div className='flex gap-6 py-2'>
            <Button variant='outline' size='medium' className='rounded-xl min-w-[160px]'>Projects</Button>
            <Button variant='outline' size='medium' className='rounded-xl min-w-[160px]'>Contact</Button>
          </div>
          <div className='flex gap-6 py-2'>
            <a href="https://github.com/Sensie2102" target="_blank" rel="noopener noreferrer">
              <Button variant='outline' size='medium' className='rounded-xl'>
                <FontAwesomeIcon icon={faGithub} className='h-6' />
              </Button>
            </a>

            <a href="https://www.linkedin.com/in/mafaaz-sabir-10880b203/" target="_blank" rel="noopener noreferrer">
              <Button variant='outline' size='medium' className='rounded-xl'>
                <FontAwesomeIcon icon={faLinkedinIn} className='h-6' />
              </Button>
            </a>

            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button variant='outline' size='medium' className='rounded-xl'>
                <FontAwesomeIcon icon={faFile} className='h-6' />
              </Button>
            </a> 
          </div>
        </div>

        <div className="flex items-center justify-center">
          <img
            src="/pc.png"
            alt="PC"
            className="max-w-[80%] max-h-[80%] object-contain"
          />
        </div>
      </div>
    </section>

  )
}

export default HomeComponent;
