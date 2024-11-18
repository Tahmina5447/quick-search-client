"use client"


import UpdateProfile from '@/components/AdminDashboard/Profile/UpdateProfile'
import UpdateUser from '@/components/AdminDashboard/Profile/UpdateUser'
import React, { useContext } from 'react'
import { ContextData } from '../../../../context/dataProviderContext';

function Page() {

  const { currentlyLoggedIn, setUpdate, token } = useContext(ContextData);

  return (
    <div>
        <UpdateUser currentlyLoggedIn={currentlyLoggedIn} setUpdate={setUpdate}token={token } name={currentlyLoggedIn?.name} title="My Profile" type="/admin" data={[{title:"My Profile",url:"my-profile"}]}/>
    </div>
  )
}

export default Page