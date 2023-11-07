import React, { useState } from "react";
import { counterContext } from "./Context";

const CounterFunction=({children})=>{
    const [counter, setCounter]=useState(0);

    const increment=()=>{
        setCounter(counter+1)
    };

    const decrement=()=>{
        setCounter(counter-1)
    };

    const reset=()=>{
        setCounter(0)
    };


return (
    <counterContext.Provider
    value={{counter, increment, decrement, reset}}>

    {children}


</counterContext.Provider>
)

}


export default CounterFunction