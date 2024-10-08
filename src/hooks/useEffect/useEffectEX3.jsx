import { useEffect, useRef, useState } from "react"



const UseEffectExample3=()=>{
    const[salary,setSalary]=useState(10000)
    const salaryRef = useRef(0)

    useEffect(()=>{
        console.log("useEffect Triggering .. ");
        salaryRef.current=salary

    },[salary])

    const salaryHandler=()=>{
        setSalary(salary+1000)
    }
    return(
        <>
        <h3>{salary}</h3>
        <h5>Reference {salaryRef.current}</h5>
        <button onClick={salaryHandler}>Increase Salary</button>
        </>
    )
}
export default UseEffectExample3