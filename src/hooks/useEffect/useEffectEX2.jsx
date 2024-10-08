import { useEffect, useState } from "react"


const UseEffectExample2=()=>{

    const [position,setPosition] = useState(
        {
            xPosition:0,
            yposition:0
        }
    )

   const mouseMoveTracker=(event)=>{
    const {clientX,clientY}=event
    setPosition({...position,xPosition:clientX,yposition:clientY})
    console.log(event);
    
}

    useEffect(()=>{
        window.addEventListener("mousemove",mouseMoveTracker)

        const intevalId = setInterval(() => {
            
        }, 1000);
        
        return ()=>{
            window.removeEventListener("mousemove",mouseMoveTracker)

            clearInterval(intevalId)
        }
    },[])

    return(
        <>
        <h3>Use Effect Example2</h3>
        <h5>X Position : {position.xPosition}</h5>
        <h5>Y Position : {position.yposition}</h5>
        </>
    )
}

export default UseEffectExample2