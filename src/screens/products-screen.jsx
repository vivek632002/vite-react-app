import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserDetails } from "../navigations/navigation-stack";

const ProductScreen=()=>{

    const {username} = useContext(UserDetails)
    console.log(username,"globalDataaa");
    

    const [products,setProducts]=useState([])

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData=async()=>{
        const response = await axios.get("https://fakestoreapi.com/products")
        if(response.status===200){
            setProducts(response.data)
        }
    }

    return(
        <div>
            <h5>Good afternoon {username}</h5>
            <h4>ProductScreen</h4>
            {
                products.length>0 && <>
                {
                    products.map(each=><>
                        <h4>{each.title}</h4>
                        <button><Link to={`${each.id}`}>View Product</Link></button>
                    </>)
                }
                
                </>
            }
        </div>
    )
}

export default ProductScreen