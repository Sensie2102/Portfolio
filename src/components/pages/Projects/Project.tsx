"use client";

import React, { useState } from 'react'
import ProjectNavbar from '../../NavBar/ProjectNavbar'
import ProjectsDisplay from '@/components/DisplayContainers/ProjectsDisplay/ProjectsDisplay';
import TechStackContainer from '@/components/DisplayContainers/TechStackContainer/TechStackContainer';
import CertificatesDisplay from '@/components/DisplayContainers/CertificatesDisplay/CertificatesDisplay';


const Project = () => {
  const [activeTab, setActiveTab] = useState<'projects' | 'certificates' | 'techstack'>('projects');
  return (
    <section id="projects" className="min-h-screen px-6 py-20 text-center flex flex-col items-center gap-12 space-y-12">
        {/*Intro Container*/}
        <div className="w-full max-w-4xl space-y-10">
            <h1 className='text-heading-1 !text-[var(--accent)]'>Projects Showcase</h1>
            <p className='text-subtitle'>Explore my journey through projects, certifications, and technical expertise.
                 Each section represents a milestone in my continuous learning path.</p>
        </div>
        {/*Project NavBar*/}
        <div className='flex flex-col justify-center gap-6 w-full max-w-7xl'>
          <ProjectNavbar activeTab={activeTab} setActiveTab={setActiveTab} />
          {activeTab === 'projects' && <ProjectsDisplay />}
          {activeTab === 'certificates' && <CertificatesDisplay />}
          {activeTab === 'techstack' && <TechStackContainer />}
        </div>
    </section>
  )
}

export default Project
