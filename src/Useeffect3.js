import React, { useEffect, useState } from 'react'

const Useeffect3 = () => {
    const [resourceType,setResourceType]=useState('posts')
    // On constate que 'render' se presente 2 fois et 'resource type changed' 1 fois à chaque click. Pas d'effet pour un 2eme click
    console.log('render')
       useEffect(()=>{
         console.log('resource type changed')
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

export default Useeffect3
