
import React, { Fragment, useReducer, useState } from "react";


const reducer=(state,action)=>{

    switch(action.type){
        case "INCREMENT_AGE" :
            return {...state,age:state.age+1}

        case "CHANGE_NAME" :
        return {...state,username:action.payload}

        case "ADD_TODO" :
            return{...state,todos:[...state.todos,action.payload]}

            default:
                return state
    }

}

const UseReducerExample=()=>{

    const initalState = {
        username : "raju",
        age : 33,
        todos : ["Woke up at 8","Breakfast at 10"],
        homeaddress : {}
    }

    const [currentState,dispatch] = useReducer(reducer,initalState)

    const [name,setName] = useState("")

    const[enterTodo,setEnterTodo]= useState("")

    const nameHandler=(event)=>{
        setName(event.target.value)
    }

    const onSubmit=()=>{
        if(name){
            dispatch({
                type:"CHANGE_NAME",
                payload:name
            })
        }

      
    }

    const incrementHandler=()=>{
        dispatch({
            type:"INCREMENT_AGE",
            payload:1
        })
    }

    const todoHandler=(event)=>{
        setEnterTodo(event.target.value)
    }

    const submitTodo=()=>{
        dispatch({
            type:"ADD_TODO",
            payload:enterTodo
        })
    }

    return(
        <>
        <input type="text" value={name} onChange={nameHandler}/>
        <button onClick={onSubmit}>Submit</button>
        <h1>{currentState.username}</h1>
        <h3>{currentState.age}</h3>
        <button onClick={incrementHandler}>Increment Age</button>
        <br></br><br></br>
        <input type="text" onChange={todoHandler} value={enterTodo}/>
        <button onClick={submitTodo}>Add Todo</button>

        {
            currentState.todos.map(eachTodo=><Fragment>
                <h5>{eachTodo}</h5>
            </Fragment>)
        }

       </>
    )
}

export default UseReducerExample