import { useRef, useState } from "react"



const UseRefExample=()=>{
    const reference = useRef(0)

    const [count,setCount]=useState(0)

    const clickHandler=()=>{
        reference.current=reference.current+1
        setCount(count+1)
        console.log(reference.current);
        
    }

    return(
        <>
        <h2>useState - {count}</h2>
        <h2>useRef - {reference.current}</h2>
        <button onClick={clickHandler}>click</button>
        </>
    )
}

export default UseRefExample