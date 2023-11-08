import { useRef } from "react"

export const Component =()=>{
    const inputRef=useRef(null)

    const funcionEpica=()=>{
        alert(inputRef.current.value)
    }

    return(
        <div>
            <hr />
            <h3>useRef</h3>
            <input type="text" ref={inputRef} />
            <button onClick={()=>{funcionEpica()}}>presioname 7w7</button>
        </div>
    )
}


