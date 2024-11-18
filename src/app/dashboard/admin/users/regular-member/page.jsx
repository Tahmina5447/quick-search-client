import GoldUser from '@/components/Dashboard/AllUser/GoldUser'
import React from 'react'

const Regular = () => {
  return (
    <div>
        <GoldUser userTypeAdmin={"regular"} data={[{ title: "Regular Users", url: "users" }]}/>
    </div>
  )
}

export default Regular