// import { Children } from "react"

import "./greeting.css"
import style from "./greeting.module.css"




const Greeting =(prop)=>{
    const {children,text}=prop
    return(
        <div className={style.card}>
        <h4>Good Afternoon  {children}</h4>
        <h4>{text}</h4>
        </div>
    )
}

export default Greeting