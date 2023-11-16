import React, { useEffect, useState } from 'react'

const Useeffect4 = () => {
    const [resourceType,setResourceType]=useState('posts')
    // Pas d'effet à l'interieur de useEffect car il n'y a pas de Callback
      console.log('render')
        useEffect(()=>{
           console.log('resource type changed')
        },[])
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

export default Useeffect4
