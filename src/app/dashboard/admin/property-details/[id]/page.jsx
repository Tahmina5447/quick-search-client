"use client"


import PropertyDetails from '@/components/Dashboard/Properties/PropertyDetails'
import React from 'react'

const Page = ({params}) => {

    const id = params.id

  return (
    <div>
        <PropertyDetails id={id} />
    </div>
  )
}

export default Page