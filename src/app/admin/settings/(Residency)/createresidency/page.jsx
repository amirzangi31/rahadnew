import React from 'react'
import CreateResidencyPage from '@/components/templates/createResidency/CreateResidencyPage'

const CreateResidency = () => {

  const baseUrl = process.env.BASE_URL

  return (
    <CreateResidencyPage baseUrl={baseUrl}  /> 
  )
}

export default CreateResidency