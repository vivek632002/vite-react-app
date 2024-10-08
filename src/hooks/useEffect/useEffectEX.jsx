import { useEffect, useState } from "react"
import axios from "axios"

const UseEffectExample=()=>{

    const [data,setData]=useState([])

    const [type,setType]=useState("products")

    const [age,setAge]=useState(0)

    useEffect(()=>{
        console.log("UseEffect Rendering");
        document.title =`Current Age${age}`
        fetchData()
    },[type,age])


    const fetchData=async()=>{
        try{
       
        const {data,status}=await axios.get(`https://fakestoreapi.com/${type}`)

        if(status==200){
            console.log(data);
            
            setData(data)
        }
    }catch(err){
        console.log(err);
        
    }
    }

    const changeTypeHandler=(each)=>{
        setType(each)

    }

    const ageHandler=()=>{
        setAge(age+1)
    }

    return(
        <>
        <h3>Use Effect Examples</h3>
        <button onClick={ageHandler} >Increment Age</button>
        {
            ["products","carts","users"].map(each=> <button onClick={()=>changeTypeHandler(each)} >{each}</button>)
        }
        
        <h5>{type}</h5>
        {
            data.map(each=><>
            <p>{JSON.stringify(each)}</p></>)
        }
        </>
    )
}

export default UseEffectExample