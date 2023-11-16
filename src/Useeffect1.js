import React, { useEffect, useState } from 'react'

const Useeffect1 = () => {
    const [resourceType,setResourceType]=useState('posts')
    useEffect(()=>{
        console.log('render')
    },[resourceType])
  return (
    <>
    <h1>{ resourceType}</h1>
    <div>
      <button onClick={()=>setResourceType('posts')}>Posts</button>
      <button onClick={()=>setResourceType('users')}>Users</button>
      <button onClick={()=>setResourceType('comments')}>Comments</button>
    </div>
    </>
  )
}

export default Useeffect1
