'use client'
import Button from '@/components/Buttons/Button'
import Card from '@/components/Card/Card'
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { act, useState } from 'react'
import { projects } from '../../../../data/projects'

const ProjectsDisplay = () => {
    const [offset, setOffset] = useState(3);
    const [active, setActive] = useState(false);
  
    const onClickHandler = () => {
      if (!active) {
        setOffset(projects.length);
        setActive(true);
      } else {
        setOffset(3);
        setActive(false);
      }
    };
  
    return (
      <>
        <div className="flex flex-col max-w-7xl w-full space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
            {projects.slice(0, offset).map((project, index) => (
              <Card key={index} CardType='project' CardTitle={project.title} CardDescription={project.description} CardImage={project.image} CardLink={project.links.github}  />
            ))}
          </div>
        </div>
  
        <div className="flex px-4">
          <Button
            variant="primary"
            size="small"
            className="px-4 py-1.5 text-sm rounded-md"
            onClick={onClickHandler}
          >
            {active ? "See Less" : "See More"}
            <FontAwesomeIcon
              icon={active ? faArrowUp : faArrowDown}
              className="ml-2 h-3 w-3"
            />
          </Button>
        </div>
      </>
    );
  };
  

export default ProjectsDisplay
