import GoldUser from '@/components/Dashboard/AllSellers/GoldUser'
import React from 'react'

const Gold = () => {
  return (
    <div>
        <GoldUser userTypeAdmin={"gold"} data={[{ title: "Gold Users", url: "users" }]}/>
    </div>
  )
}

export default Gold