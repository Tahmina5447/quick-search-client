"use client"

import AddProperty from '@/components/AdminDashboard/Property/AddProperty'
import React from 'react'

const Add = () => {
  return (
    <div>
       <AddProperty title={"/admin"} data={[{title:"Add Properties",url:"properties/add"}]} user="admin" />  
    </div>
  )
}

export default Add