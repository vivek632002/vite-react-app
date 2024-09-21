



const CustomList = ()=>{
    return(
        <ul>
            <ListItems/>

        </ul>
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
    return(
        <>
        <li>Apple</li>
        <li>Banana</li>
        <li>Mango</li>
        </>
    )
}