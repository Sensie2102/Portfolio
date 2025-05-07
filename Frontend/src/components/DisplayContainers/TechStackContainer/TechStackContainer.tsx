import TechStackCard from '@/components/Card/TechStackCard'


import React from 'react'

const techStack = [
    {
      techTitle: 'JavaScript',
      techIcon: '/icons/javascript.svg',
    },
    {
      techTitle: 'Python',
      techIcon: '/icons/python.png',
    },
    {
      techTitle: 'PostgreSQL',
      techIcon: '/icons/postgresql.svg',
    },
    {
      techTitle: 'MongoDB',
      techIcon: '/icons/mongodb.svg',
    },
    {
      techTitle: 'FastAPI',
      techIcon: '/icons/fastapi.svg',
    },
    {
      techTitle: 'React',
      techIcon: '/icons/react.svg',
    },
    {
      techTitle: 'Node.js',
      techIcon: '/icons/nodejs.svg',
    },
    {
      techTitle: 'Express.js',
      techIcon: '/icons/expressjs.png',
    },
    {
      techTitle: 'LangChain',
      techIcon: '/icons/langchain.svg',
    },
    {
      techTitle: 'Tailwind CSS',
      techIcon: '/icons/tailwindcss.png',
    },
    {
      techTitle: 'HTML5',
      techIcon: '/icons/html5.png',
    },
    {
      techTitle: 'JWT',
      techIcon: '/icons/jwt.png',
    },
  ];
  

const TechStackContainer = () => {
  return (
    <div className='flex flex-col max-w-7xl w-full space-y-4 '>
        <div className='grid grid-cols-6 gap-4 px-4 '>
            {techStack.map((tech, index) => (
            <TechStackCard
                key={index}
                techTitle={tech.techTitle}
                techIcon={tech.techIcon}
            />
            ))}
        </div>
    </div>
  )
}

export default TechStackContainer
