import React from 'react';
import {
  faArrowRight,
  faArrowUpRightFromSquare,
  faCode,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../Buttons/Button';
import MetricCard from './MetricCard';
import ProjectCard from './ProjectCard';
import { StaticImageData } from 'next/image';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  CardTitle: string;
  CardDescription: string;
  CardImage?: string;
  CardLink?: string;
  CardIcon?: IconDefinition;
  CardButtonText?: string;
  CardData?: string | number;
  CardType: 'project' | 'metric';
}

const Card: React.FC<CardProps> = ({
  CardTitle,
  CardDescription,
  CardType,
  CardImage,
  CardLink,
  CardIcon,
  CardButtonText,
  CardData,
  ...rest
}) => {
  return (
    <div
      className="flex flex-col bg-[var(--foreground)]/10 rounded-2xl shadow-lg backdrop-blur-sm p-6 w-full max-w-md min-h-[180px] hover:bg-[var(--accent)]/25"
      {...rest}
    >
      {CardType === 'metric' ? (
        <MetricCard CardDescription={CardDescription} CardTitle={CardTitle} CardData={CardData} CardIcon={CardIcon} />
      ) : (
        <ProjectCard ProjectTitle={CardTitle} ProjectDescription={CardDescription} ProjectImage={CardImage} ProjectLink={CardLink} />
      )}
    </div>
  );
};

export default Card;
