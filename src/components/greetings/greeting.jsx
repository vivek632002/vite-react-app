// import { Children } from "react"





const Greeting =(prop)=>{
    const {children,text}=prop
    return(
        <>
        <h4>Good Afternoon  {children}</h4>
        <h4>{text}</h4>
        </>
    )
}

export default Greeting