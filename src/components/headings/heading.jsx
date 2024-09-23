


const MainHeading =(prop)=>{
    const{heading}=prop
    return(
        <>
        <h1>{heading}</h1>
        </>
    )
}
export default MainHeading

export const SecondaryHeading=(prop)=>{
    const {heading}=prop
    return(
        <>
        <h2>{heading}</h2>
        {/* <h2>Welcome User2 !!!</h2> */}
        </>
    )
}