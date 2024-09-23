


const CustomButton =(prop)=>{
    const {text="button",Onpress=()=>{},bgcolor="green"}=prop
    const buttonText ="Click me"
    return(
        <button  style={{backgroundColor:bgcolor}} onClick={Onpress} >{text}</button>
    )
}
export default CustomButton