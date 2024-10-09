import axios from "axios";
import React, { useEffect, useState } from "react";
 const ElectronicsScreen=()=>{
    useEffect(()=>{
        fetchData()
    },[])
    const [data,setData]=useState([])

        
        const fetchData = async()=>{
         try{
        const response = await axios.get("https://fakestoreapi.com/products/category/electronics")
        if(response.status===200){
            setData(response.data)
        }
    }catch(err){
        console.log(err);
        
    }
    

    }

    return(
        <div>
            <h4>Welcome to Electronics Screen</h4>
            {
                data.map(each=><>
                <p>{JSON.stringify(each)}</p>
                </>)
            }
        </div>
    )
}

export default ElectronicsScreen

