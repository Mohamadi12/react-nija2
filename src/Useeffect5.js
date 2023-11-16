import React, { useEffect, useState } from 'react'

const Useeffect5 = () => {
    const [resourceType,setResourceType]=useState('posts')
    const[items, setItems]=useState([])
    // Le fetch() est utilisé pour des tableaux d'objets 
    useEffect(()=>{
      fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItems(json))
    },[resourceType])
  return (
    <>
     <h1>{ resourceType}</h1>
       <div>
         <button onClick={()=>setResourceType('posts')}>Posts</button>
         <button onClick={()=>setResourceType('users')}>Users</button>
         <button onClick={()=>setResourceType('comments')}>Comments</button>
        </div>
        {items.map(el=>{
            return <pre>{JSON.stringify(el)}</pre>
        })}
    </>
  )
}

export default Useeffect5
