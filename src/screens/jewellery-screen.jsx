import axios from "axios";
import React, { useEffect, useState } from "react";

 const JewelleryScreen=()=>{
    useEffect(()=>{
        fetchData()
    },[])
    const [data,setData]=useState([])

        
        const fetchData = async()=>{
         try{
        const response = await axios.get("https://fakestoreapi.com/products/category/jewelery")
        if(response.status===200){
            setData(response.data)
        }
    }catch(err){
        console.log(err);
        
    }
    

    }

    return(
        <div>
            <h4>Welcome to Jewellery Screen</h4>
            {
                data.map(each=><>
                <p>{JSON.stringify(each)}</p>
                </>)
            }
            </div>
    )
}

export default JewelleryScreen