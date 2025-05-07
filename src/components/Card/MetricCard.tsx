import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

interface MetricCardProps extends React.HTMLAttributes<HTMLDivElement> {
    CardIcon?: IconDefinition
    CardTitle: string;
    CardDescription: string;
    CardData?: string | number;
}

const MetricCard: React.FC<MetricCardProps> = ({CardIcon, CardTitle, CardDescription, CardData}) => {
  return (
    <div className="grid grid-cols-[auto_1fr_auto] gap-4 w-full">
            <div className="flex flex-col items-start gap-4">
                <div className="bg-[var(--highlight)]/10 p-3 rounded-full">
                    <FontAwesomeIcon
                        icon={CardIcon ?? faCode}
                        className="h-6 w-6 text-[var(--foreground)]"
                    />
                </div>
                <h3 className="card-heading">
                    {CardTitle}
                </h3>
                <p className="card-description text-left">{CardDescription}</p>
            </div>
            <div>{/*For the space seperation*/}</div>
            <div className="text-4xl font-bold text-[var(--foreground)] text-left ml-auto">
              {CardData ?? "0"}
            </div>
        </div>
  )
}


export default MetricCard
