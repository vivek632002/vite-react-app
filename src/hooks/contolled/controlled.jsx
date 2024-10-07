import { useState } from "react"
import { mobileValidations } from "./validations"





const ControlledForm=()=>{

    const [model,setModel] = useState("")

    const [mobileNumber,setMobileNumber]=useState("")

    const [modelErr,setModelErr] = useState("")

    const[mobileErr,setMobileErr] = useState("")

    const modelHandler=(event)=>{
        const modelName = event.target.value
        setModel(modelName)
        const error = modelValidator(modelName)

        if(error){
            setModelErr(error)
        }else{
            setModelErr("")
        }

        console.log(modelName);
        
    }

    const modelValidator=(value)=>{

        let error=""

        const modelRegex=/^samsung/i

        if(!value){
            error="Please Enter Model Name"
        }else if(!modelRegex.test(value)){
            error="Please Enter proper samsung Model Name"
        }
        return error
    }

    const onSubmit=(event)=>{

        event.preventDefault()

        if(modelErr || mobileErr){
            alert("Please fill Properly")
        }else{

        }
    }

    const mobileHandler=(event)=>{
        const mobile = event.target.value
        setMobileNumber(mobile)
        const error = mobileValidations(mobile)
        if(error){
            setMobileErr(error)
        }else{
            setMobileErr("")
        }

    }

    return(
        <>
        <form  onSubmit={onSubmit} >
  <div className="form-group">
    <h1>Samsung Service Form</h1>
    <label htmlFor="username">Enter Device Model</label>
    <input type="text" className="form-control" id="username" 
        value={model}
        onChange={modelHandler}
    />
    {modelErr && <span style={{color:"red"}}>{modelErr}</span>}
 
<br></br>
 
    
    <label htmlFor="username">Enter Mobile Number</label>
    <input type="text" className="form-control" id="username" 
        value={mobileNumber}
        onChange={mobileHandler}
    />
     {mobileErr && <span style={{color:"red"}}>{mobileErr}</span>}
    </div>
    <br />
    <button type="submit" className="btn btn-default">
    Submit
  </button>
</form>

        </>
    )
}

export default ControlledForm