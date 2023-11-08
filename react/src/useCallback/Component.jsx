import React, { useCallback, useState } from "react";

// const Button = ({ onClick }) => {
//   console.log("Button renderizado");
//   return <button onClick={onClick}>Haz clic</button>;
// };




// export const Callback = () => {

//   const handleClick = useCallback(() => {
//     console.log("Botón clicado");
//   }, [])

//   return (
//     <div>
//       <h1>Ejemplo de useCallback</h1>
//       <Button onClick={handleClick} />
//     </div>
//   );
// };




const Counter=({counter, increment})=>{
  return (
    <div>
      <h3>{counter}</h3>
      <button onClick={increment}>Incrementar</button>
    </div>
  )
}




export const Callback=()=>{
  const [counter, setCounter]=useState(0)

  const increment=useCallback(()=>{
    setCounter(counter+1)
  },[])

  return(
    <>
    <hr/>
    <h3>useCallback</h3>
    <Counter counter={counter} increment={increment}/></>
  )
}