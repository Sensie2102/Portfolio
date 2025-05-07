import React from 'react';
import Button from '../../Buttons/Button';
import Card from '../../Card/Card';
import { faGlobe, faMedal } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const AboutmeComponent = () => {
  return (
    <section id="about" className="min-h-screen px-6 py-20 text-center flex flex-col items-center gap-12">
      <div className="w-full max-w-4xl space-y-8">
        <h1 className="text-heading-1 !text-[var(--accent)]">About Me</h1>
        <p className="text-body-muted leading-relaxed">
          Hello, I’m <strong>Mohammed Mafaaz Chandwale</strong> — a passionate software engineer
          driven by a deep interest in building intelligent, scalable web applications and
          AI-powered systems. With hands-on experience in full-stack development and a strong
          foundation in Generative AI, I continuously explore emerging technologies to sharpen my
          skills. Focused on innovation and real-world impact, I aim to contribute meaningfully to
          the tech industry while gradually advancing toward a specialized path in artificial
          intelligence and applied machine learning.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button variant="primary" size="large" className="rounded-2xl min-w-[160px]">
              Download CV
            </Button>
          </a>
          <Link href="#projects">
            <Button variant="outline" size="large" className="rounded-2xl min-w-[160px]">
              View Projects
            </Button>
          </Link>
          
        </div>
      </div>


      <div className="flex justify-center gap-6 w-full max-w-[1420px] flex-nowrap mt-4">
        <Card
          CardType="metric"
          CardTitle="Total Projects"
          CardDescription="Innovative web and Gen AI solutions"
          CardData="4"
        />
        <Card
          CardType="metric"
          CardTitle="Certificates"
          CardDescription="Professional certifications in AI and Cloud Platforms"
          CardIcon={faMedal}
          CardData="4"
        />
        <Card
          CardType="metric"
          CardTitle="Years of Experience"
          CardDescription="Hands on and Internship experience in AI and Software Development"
          CardIcon={faGlobe}
          CardData="2"
        />
      </div>
    </section>
  );
};

export default AboutmeComponent;
