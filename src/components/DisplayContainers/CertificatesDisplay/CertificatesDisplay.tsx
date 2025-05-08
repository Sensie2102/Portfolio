import React from 'react'
import { certificates } from '../../../../data/certificates'
import CertificateCard from '@/components/Card/CertificateCard'

const CertificatesDisplay = () => {
  return (
    <div className="flex flex-col max-w-7xl w-full space-y-4">
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 backdrop-blur-2xl'>
            {certificates.map((certificate, index) => {
                return <CertificateCard key={index} title={certificate.title} link={certificate.link} image={certificate.img} />
            })}
        </div>     
    </div>
  )
}

export default CertificatesDisplay
