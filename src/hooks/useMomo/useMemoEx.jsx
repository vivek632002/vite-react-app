import React, { useMemo, useState } from "react"

const UseMemoEx2=()=>{
    const [age,setAge]=useState(10)
    const [salary,setSalary]=useState(1000)

    const setAgeHandler =()=>{
        setAge(age+1)
    }
    const setSalaryHandler =()=>{
        setSalary(salary+1000)
    }

    const ageEventChecker =useMemo(()=>{
        console.log("even Checked");
            
        return age%2 === 0 ? "Age is Even" : "Age is Odd" 
       },[age])
   
    return(
        <>
        <h2>{age} {ageEventChecker}</h2>
        <h2>{salary}</h2>

        <button onClick={setAgeHandler}>Increase Age</button>
        <button onClick={setSalaryHandler}>Increase Salary</button>
        </>
        
    )
}

export default UseMemoEx2