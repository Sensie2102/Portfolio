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
      className="flex flex-col bg-[var(--foreground)]/5 rounded-2xl shadow-lg backdrop-blur-sm p-6 w-full max-w-md min-h-[180px]"
      {...rest}
    >
      {CardType === 'metric' ? (
        <MetricCard CardDescription={CardDescription} CardTitle={CardTitle} CardData={CardData} CardIcon={CardIcon} />
      ) : (
        <div className="flex flex-col gap-4 h-full">
          {CardImage && (
            <img
              src={CardImage}
              alt={CardTitle}
              className="rounded-xl w-full h-40 object-cover"
            />
          )}
          <h3 className="text-xl font-semibold text-[var(--foreground)]">{CardTitle}</h3>
          <p className="text-[var(--foreground)]/70">{CardDescription}</p>
          <div className="flex justify-between items-center mt-auto">
            {CardLink && (
              <a
                href={CardLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-500 hover:underline flex items-center gap-1"
              >
                Live Demo
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="h-3 w-3"
                />
              </a>
            )}
            <Button
              variant="outline"
              size="small"
              className="px-4 py-1.5 text-sm rounded-md"
            >
              {CardButtonText ?? 'Details'}
              <FontAwesomeIcon icon={faArrowRight} className="ml-1 h-3 w-3" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
