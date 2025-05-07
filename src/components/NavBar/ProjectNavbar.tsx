import React from 'react';
import ProjectNavButtons from '../Buttons/ProjectNavButtons';
import { faMedal, faMicrochip, faCode } from '@fortawesome/free-solid-svg-icons';

interface Props {
  activeTab: 'projects' | 'certificates' | 'techstack';
  setActiveTab: React.Dispatch<React.SetStateAction<'projects' | 'certificates' | 'techstack'>>;
}

const ProjectNavbar: React.FC<Props> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="max-w-7xl w-full mx-auto grid grid-cols-3 gap-4 backdrop-blur-sm bg-white/10 rounded-2xl p-4">
      <ProjectNavButtons
        buttonId="projects"
        ButtonIcon={faCode}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      >
        Projects
      </ProjectNavButtons>
      <ProjectNavButtons
        buttonId="certificates"
        ButtonIcon={faMedal}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      >
        Certificates
      </ProjectNavButtons>
      <ProjectNavButtons
        buttonId="techstack"
        ButtonIcon={faMicrochip}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      >
        Tech Stack
      </ProjectNavButtons>
    </div>
  );
};

export default ProjectNavbar;
