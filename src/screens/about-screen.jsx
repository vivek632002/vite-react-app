import { useContext } from "react"
import NavBar from "../components/navbar/navbar"
import UseReducerExample from "../hooks/useReducer/useReducer"
import { GlobalCounter } from "../navigations/navigation-stack"


const AboutScreen =()=>{

    const {currentState,dispatch} = useContext(GlobalCounter)
    console.log(currentState);
    
    return(
        <>
         
        <h2>Welcome To About Screen {currentState.count}</h2>
        <UseReducerExample/>
        </>
    )
}

export default AboutScreen