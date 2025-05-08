import { faArrowRight, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Button from '../Buttons/Button';
import Link from 'next/link';


interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
    ProjectTitle: string;
    ProjectDescription: string;
    ProjectImage?: string;
    ProjectLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ProjectTitle, ProjectImage, ProjectDescription, ProjectLink}) => {
  return (
    <div className="flex flex-col gap-4 h-full">
          {ProjectImage && (
            <img
              src={ProjectImage}
              alt={ProjectTitle}
              className="rounded-xl w-full h-40 object-cover"
            />
          )}
          <h3 className="text-xl font-semibold text-[var(--foreground)]">{ProjectTitle}</h3>
          <p className="text-[var(--foreground)]/70">{ProjectDescription}</p>
          <div className="flex justify-between items-center mt-auto pl-2">
            {ProjectLink && (
              <Link
                href={ProjectLink? ProjectLink : '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[var(--accent)] hover:underline flex items-center gap-1"
              >
                Live Demo
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="h-3 w-3"
                />
              </Link>
            )}
    
            <Button
                variant="outline"
                size="small"
                className="px-4 py-1.5 text-sm rounded-md"
              >
                Details
                <FontAwesomeIcon icon={faArrowRight} className="ml-1 h-3 w-3" />
              </Button>
          </div>
        </div>
  )
}

export default ProjectCard
