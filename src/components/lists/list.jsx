



const CustomList = (prop)=>{
    const{List}=prop
    return(
        <ol>
            {
                List.map((eachFruit,index)=>{
                    return(
                    <li key={index}>{eachFruit}</li>)
                })
            }

        </ol>
    )
}

export default CustomList



export const CustomOrderList = ()=>{
    return(
        <ol>
           <ListItems/>

        </ol>
    )
}

const ListItems =  () =>{
    const Fruits=["Apple","Banana","Kiwi","Mango","Orange"]
    return(
        <>
        {
        Fruits.map((eachFruit,index)=>{
            return <li key={index}>{eachFruit}</li>
        })
    }
    </>
    )
}