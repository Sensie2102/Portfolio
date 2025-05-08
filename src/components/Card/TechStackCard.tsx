
import React from 'react';

interface TechStackCardProps extends React.HTMLAttributes<HTMLDivElement> {
  techTitle: string;
  techIcon: string; 
}

const TechStackCard: React.FC<TechStackCardProps> = ({ techTitle, techIcon, className = ''}) => {
  return (
    <div
  className={`flex flex-col items-center justify-center w-full h-full p-6 backdrop-blur-xl
    bg-[var(--accent)]/30 rounded-xl hover:bg-[var(--accent)]/50
    ${className}`}
>
  <img
    src={techIcon}
    alt={techTitle}
    className="w-16 h-16 mb-2 p-2 object-contain"
  />
  <p className="text-sm font-semibold text-[var(--foreground)]">{techTitle}</p>
</div>

  );
};

export default TechStackCard;