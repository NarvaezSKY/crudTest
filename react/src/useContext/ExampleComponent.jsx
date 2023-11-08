import React, { useContext } from "react";
import { counterContext } from "./Context";

export const Div=()=>{
    const {counter, increment, decrement, reset}=useContext(counterContext)

    return(
        <>
        <div>
        <hr />
            <h3>useContext</h3>
            
            <h3>{counter}</h3>
            <button onClick={()=>{increment()}}>useContext(increment)</button>
            <button onClick={()=>{decrement()}}>useContext(decrement)</button>
            <button onClick={()=>{reset()}}>useContext(reset)</button>
        </div>
        </>
    )
}





