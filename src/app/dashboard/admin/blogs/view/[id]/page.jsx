import ViewBlog from '@/components/BlogPage/ViewBlog';
import React from 'react'

const View = ({params}) => {
  const id = params.id;
  return (
    <div>
        <ViewBlog id={id} />
    </div>
  )
}

export default View