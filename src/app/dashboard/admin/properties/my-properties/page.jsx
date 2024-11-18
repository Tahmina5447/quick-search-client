"use client"


import MyProperty from '@/components/Dashboard/Properties/MyProperties'
import React from 'react'

const MyProperties = () => {
  return (
    <div>
         <MyProperty user="admin" type={"/admin"} data={[{title:"My Properties",url:"properties/my-properties"}]}/>
    </div>
  )
}

export default MyProperties