import { useState } from "react"
import { mobileValidations } from "./validations"
import { indianStates } from "./info"
import TableComponent from "../../components/table/table"





const ControlledStateForm=()=>{

        const initialFormData ={
            model:"",
            mobileNumber:"" ,
            state:""
        }
        const [formData,setFormData]=useState(initialFormData)
    

    const [formError,setFormErrors]=useState({
        modelErr:"",
        mobileErr:"",
    })

    const [submittedData,setSubittedData]=useState([])

    const onSubmit=(event)=>{

        event.preventDefault()
        console.log(formData);

        const newFormData={
            data1:formData.model,
            data2:formData.mobileNumber,
            data3:formData.state
        }

        setSubittedData([...submittedData,newFormData])
        
        setFormData(initialFormData)

    //     if(modelErr || mobileErr){
    //         alert("Please fill Properly")
    //     }else{

        // }
    }

   const onChangeHandler=(event)=>{
        
        const {name,value} = event.target

        console.log(name,value,"userinput");
        

        setFormData({...formData,[name]:value})

        

   }

    return(
        <>
        <form  onSubmit={onSubmit} >
  <div className="form-group">
    <h1>Samsung Service Form</h1>
    <label htmlFor="username">Enter Device Model</label>
    <input type="text" className="form-control" id="username" 
        name="model"
        value={formData.model}
        onChange={onChangeHandler}
    />
    {formError.modelErr && <span style={{color:"red"}}>{formError.modelErr}</span>}
   
 
<br></br>
 
    
    <label htmlFor="username">Enter Mobile Number</label>
    <input type="text" className="form-control" id="username" 
        name="mobileNumber"
        value={formData.mobileNumber}
        onChange={onChangeHandler}
    />
    {formError.mobileErr && <span style={{color:"red"}}>{formError.mobileErr}</span>}
        <br></br>
        <select  value={formData.state} onChange={onChangeHandler} name="state">
            {
                indianStates.map(eachState=>{
                    return(
                        <option value={eachState.name}>{eachState.name}</option>
                    )
                })
            }
            {/* <option value={"Ap"} >Andra Pradesh</option>
            <option value={"Ts"} >Telangana</option>
            <option value={"Ks"} >Karnataka</option> */}
        </select>


    </div>
    <br />
    <button type="submit" className="btn btn-default">
    Submit
  </button>
    
</form>
<TableComponent rowData={submittedData}/>

        </>
    )
}

export default ControlledStateForm