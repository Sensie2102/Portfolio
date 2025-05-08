import Link from 'next/link';
import React from 'react'

interface CertificateCardProps extends React.HTMLProps<HTMLDivElement> {
    title: string;
    link: string;
    image: string;
}

const CertificateCard: React.FC<CertificateCardProps> = ({title, link, image}) => {
  return (
    <Link href={link} target="_blank"
    rel="noopener noreferrer">
        <div className="flex flex-col items-center justify-start w-full h-full bg-[var(--foreground)]/15 rounded-lg overflow-hidden p-4
        hover:bg-[var(--accent)]/20">
            
          
            <div className="w-full h-60 flex items-center justify-center p-4
            border-b border-b-[var(--accent)]">
            <img src={image} alt={title} className="max-h-full object-contain" />
            </div>

            
            <h3 className="text-heading-3 text-center mt-2 text-[var(--foreground)]">
            {title}
            </h3>
            
        </div>
    </Link>

  )
}

export default CertificateCard
 