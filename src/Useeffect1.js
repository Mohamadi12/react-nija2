import React, { useEffect, useState } from 'react'

const Useeffect1 = () => {
    const [resourceType,setResourceType]=useState('posts')
    
    // On va constater que chaque click 2 Max sur 1 sans changement dans la console,render ne fait que CompressionStream. Même chose que Useeffect2
    useEffect(()=>{
        console.log('render')
    })
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
