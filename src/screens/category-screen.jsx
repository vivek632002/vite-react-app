import React from "react";
import { Link, Outlet } from "react-router-dom";


function CategoryScreen(){
    return(
        
        <div>
           <h2>CategoryScreen</h2>
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