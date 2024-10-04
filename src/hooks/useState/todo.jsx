import React, { useState } from "react"
import { createTodoList } from "./jsHelpers"






const CustomTodo=()=>{
    const[todos,setTodos]=useState(createTodoList())


    const addTodoHandler=()=>{
        const currentLength =todos.length
        const myObject={
            id:currentLength+1,
            text :`Item ${currentLength+1}`
        }

        setTodos([...todos,myObject])
        
    }


    const deleteHandler=(targetId)=>{

        const filteredItems=todos.filter(eachTodo=>eachTodo.id!=targetId)
        setTodos(filteredItems)


    }
    return(
        <>
        <h3>Custom todo</h3>
        <button onClick={addTodoHandler} >Add Todos</button>
        <ol>

  
        {
            todos.map(eachTodo=>{
                const {id,text}=eachTodo
                return(
                    <React.Fragment key={id}>
                
                    <li  >
                        {text}
                    </li>
                    <button onClick={()=>deleteHandler(id)} >
                        Delete item

                    </button>
                    </React.Fragment>
                )
            })
        }

</ol>
        </>
    )
}


export default CustomTodo

