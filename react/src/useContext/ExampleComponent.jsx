import React, { useContext } from "react";
import { counterContext } from "./Context";

export const Div=()=>{
    const {counter, increment, decrement, reset}=useContext(counterContext)

    return(
        <>
        <div>
            <h4>pasen contexto</h4>
            <hr />
            <h3>{counter}</h3>
            <button onClick={()=>{increment()}}>useContext(increment)</button>
            <button onClick={()=>{decrement()}}>useContext(decrement)</button>
            <button onClick={()=>{reset()}}>useContext(reset)</button>
        </div>
        </>
    )
}

