import React, { useEffect, useState } from 'react'

const Useeffect6 = () => {
    const [windowWidth,setwindowWidth]=useState(window.innerWidth)
    // Celà nous permet de suivre le redimensionnement de notre ecran
    const handleResize=()=>{
        setwindowWidth(window.innerWidth)
    }
    useEffect(()=>{
        window.addEventListener('resize',handleResize)
    })
  return (
    <div>{windowWidth}</div>
  )
}

export default Useeffect6
