


const CustomButton =(prop)=>{
    const {text="button",Onpress=()=>{},bgcolor="green"}=prop
    const buttonText ="Click me"

    const buttonColor = {backgroundColor:"red",color:"white"}
    return(
        <button  style={buttonColor} onClick={Onpress} >{text}</button>
    )
}
export default CustomButton