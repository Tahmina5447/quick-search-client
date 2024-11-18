import EditBlog from '@/components/AdminDashboard/Blogs/EditBlog'
import React from 'react'

const Edit = ({params}) => {

    const id = params.id

  return (
    <div>
        <EditBlog id={id} />
    </div>
  )
}

export default Edit