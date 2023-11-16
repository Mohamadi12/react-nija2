import React, { useEffect, useState } from 'react'

const Useeffect7 = () => {
    const[resourceType,setResourceType]=useState('posts')
//    Generalement le return dans useEffect est utilisé pour pour stopper quelque chose
    useEffect(()=>{
        console.log('resource changed')
        return ()=>{
            console.log('return from resource change')
        }
    },[resourceType])

  return (
    <div>
         <button onClick={()=>setResourceType('posts')}>Posts</button>
         <button onClick={()=>setResourceType('users')}>Users</button>
         <button onClick={()=>setResourceType('comments')}>Comments</button>
    </div>
  )
}

export default Useeffect7
