import { useState } from "react"




const withCounter =(Componet)=>{
    return()=>{

        const [count,setCount] = useState(0)

        const incrementHandler = ()=>{
            setCount(count+1)
        }


        return <Componet  count = {count} incrementCount = {incrementHandler}/>
    }
}

export default withCounter