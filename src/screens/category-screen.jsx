import React, { useCallback, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { GlobalCounter } from "../navigations/navigation-stack";
import { incrementAction } from "../navigations/counterHelper";


function CategoryScreen(){

    const {dispatch} = useContext(GlobalCounter)

    const incrementHandler1=()=>{
        dispatch(incrementAction)
    }
    return(
        
        <div>
           <h2>CategoryScreen</h2>
           <button onClick={incrementHandler1}>Increment Count Value</button>
           <ul>
            <li>
           <Link to={"electronics"}>Electronics</Link>
           </li>
           <li>
           <Link to={"jewellery"}>Jewellery</Link>
           </li>
           </ul>
           <Outlet/>
         </div>
      
        
    )
}

export default CategoryScreen