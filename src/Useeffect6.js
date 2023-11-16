import React, { useState } from 'react'

const Useeffect6 = () => {
    const [windowWidth,setwindowWidth]=useState(window.innerWidth)

  return (
    <div>{windowWidth}</div>
  )
}

export default Useeffect6
