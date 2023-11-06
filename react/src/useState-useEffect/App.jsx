import { useEffect, useState } from 'react'

import './App.css'

const Likes=()=>{
  const [likes, setLikes]=useState(0)

  // useEffect
  // Se ejecutará dos veces: una vez durante el montaje inicial y nuevamente durante la actualización
  useEffect(()=>{
    console.log(`useEffect ejecutado`)
  })
  
  return (<button onClick={()=>{setLikes(likes+1)} }>{likes} Likes</button>)
}



const App=()=>{
  return (<><Likes/></>)
}

export default App
