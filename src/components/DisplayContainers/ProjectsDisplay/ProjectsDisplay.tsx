
import Button from '@/components/Buttons/Button'
import Card from '@/components/Card/Card'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const ProjectsDisplay = () => {
  return (
    <>
        <div className='flex flex-col max-w-7xl w-full space-y-4'>
            <div className='grid grid-cols-3 gap-4 px-4'>
                <Card CardType='project' CardTitle='AIVA Analytics' CardDescription='Data Analytics for aggregated ecommerce data for small and medium scale buisnesses' />
                <Card CardType='project' CardTitle='AIVA Analytics' CardDescription='Data Analytics for aggregated ecommerce data for small and medium scale buisnesses' />
                <Card CardType='project' CardTitle='AIVA Analytics' CardDescription='Data Analytics for aggregated ecommerce data for small and medium scale buisnesses' />
            </div>
        </div>  
        <div className="flex justify-between items-center mt-auto px-4" >
            <Button
                variant="primary"
                size="small"
                className="px-4 py-1.5 text-sm rounded-md"
                >
                See More
                <FontAwesomeIcon icon={faArrowDown} className="ml-1 h-3 w-3" />
            </Button>
        </div>
    </> 
  )
}

export default ProjectsDisplay
