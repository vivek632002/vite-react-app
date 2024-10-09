import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetailScreen =()=>{
    const dynamicPath = useParams()
    const [produtData,setProductData]=useState({})

    useEffect(()=>{
        fetchData()
    },[dynamicPath])


    const fetchData=async()=>{
        const response = await axios.get(`https://fakestoreapi.com/products/${dynamicPath.productId}`)
        if(response.status===200){
            setProductData(response.data)
        }
    }

    console.log(dynamicPath,"dynamic");
    
    return(
        <div>
            <h3>ProductDetailScreen</h3>
            <h4>Product Data</h4>
            {
                Object.keys(produtData).length>0 && <>
                <h5>{produtData.title}</h5>
                <img src={produtData.image} height={130}/>
                <p>{produtData.description}</p>
                </>
            }
        </div>
    )
}

export default ProductDetailScreen