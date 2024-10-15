import { useMemo, useState } from "react"




const UseMemo = ()=>{

    const [milkQuantity,setMilkQty] = useState(1)
    const [riceQuantity,setRiceQty] = useState(1)

    

    const milkPricecaluclation =useMemo(()=>{
        console.log("Milk Price Calulating");
        const priceofMilk = 50
        return milkQuantity * priceofMilk
        
    },[milkQuantity])

    
    const ricePricecaluclation =useMemo(()=>{
        console.log("rice Price Calulating")
        const priceofrice = 100
        return riceQuantity * priceofrice
    },[riceQuantity])


    const milkHandler = ()=>{
        setMilkQty(milkQuantity+1)
    }

    const riceHandler = ()=>{
        setRiceQty(riceQuantity+1)
    }

    return(
        <>
        <h4>Milk Qunatity {milkQuantity} - price {(milkPricecaluclation)}</h4>
        <h4>Rice Quantity  {riceQuantity} - price {(ricePricecaluclation)}</h4>
        <button onClick={milkHandler} >Change Milk Quantity</button>
        <button onClick={riceHandler}>Change Rice Quantity</button>
        </>
    )
}

export default UseMemo