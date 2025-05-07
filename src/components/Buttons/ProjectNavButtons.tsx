import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface ProjectNavButtonsProps extends React.HTMLAttributes<HTMLButtonElement> {
  ButtonIcon?: IconDefinition;
  buttonId: 'projects' | 'certificates' | 'techstack';
  setActiveTab: React.Dispatch<React.SetStateAction<'projects' | 'certificates' | 'techstack'>>;
  activeTab: 'projects' | 'certificates' | 'techstack';
}

const ProjectNavButtons: React.FC<ProjectNavButtonsProps> = ({
  ButtonIcon,
  children,
  buttonId,
  activeTab,
  setActiveTab,
}) => {
  const isActive = activeTab === buttonId;
  const baseClass = 'w-full flex flex-col items-center rounded-2xl py-2';
  const activeClass = 'bg-[var(--highlight)]/25';
  const hoverClass = 'hover:bg-[var(--highlight)]/30 transition-all duration-300 ease-in-out';

  return (
    <button
      className={`${baseClass} ${isActive ? activeClass : ''} ${hoverClass}`}
      onClick={() => setActiveTab(buttonId)}
    >
      <div className="p-3 rounded-full">
        <FontAwesomeIcon
          icon={ButtonIcon ?? faCode}
          className="h-5 w-5 text-[var(--foreground)]"
        />
      </div>
      {children}
    </button>
  );
};

export default ProjectNavButtons;
