


const CustomButton =(prop)=>{
    const {text="button",Onpress=()=>{},bgcolor="green"}=prop
    const buttonText ="Click me"

    const myPress=()=>{
        Onpress({name:"Jhon",salary:25000})
    }


    const buttonColor = {backgroundColor:"red",color:"white"}
    return(
        <button  style={buttonColor} onClick={myPress} >{text}</button>
    )
}
export default CustomButton