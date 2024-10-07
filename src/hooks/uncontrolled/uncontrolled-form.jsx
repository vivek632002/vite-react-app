import axios from "axios"
import { useRef, useState } from "react"







const UncontrolledComponent =()=>{


    const usernameRef=useRef("")
    const passwordRef=useRef("")

    const [formErrors,setFormErrors]=useState({})


    const onSubmit=(event)=>{
        event.preventDefault()

        const usernameEntered=usernameRef.current.value

        const passwordEntered=passwordRef.current.value


        const formErrors=validations(usernameEntered,passwordEntered)

        if(Object.keys(formErrors).length>0){
            //Trigger the errors 
            setFormErrors(formErrors)
        }else{
            // Hit the api 
            loginApi(usernameEntered,passwordEntered)
        }


        console.log(formErrors)



    }




    const validations=(username,password)=>{

        const FormErrors={
           

        }


        if(!username){
            FormErrors.usernameError="Please enter username"
        }else if(username.length>20){
            FormErrors.usernameError="Please enter less than 20 characters"
        }

        if(!password){
            FormErrors.passwordError="Please enter password"
        }else if(password.length>20){
            FormErrors.passwordError="Please enter less than 20 characters"
        }

        return FormErrors

    }

    const loginApi=async(username,password)=>{
        try{
        const response= await axios.post("https://dummyjson.com/auth/login",{

        "username": username,
        "password":password,

    })
    console.log(response)

}catch(err){
    console.log(err)

}


    }
    return(
        <>

<form  onSubmit={onSubmit} >
  <div className="form-group">
    <label htmlFor="username">Email address:</label>
    <input type="text" className="form-control" id="username"  ref={usernameRef}  />
    <span style={{color:"red"}} >{formErrors?.usernameError}</span>
  </div>
  <div className="form-group">
    <label htmlFor="pwd">Password:</label>
    <input type="password" className="form-control" id="pwd" ref={passwordRef} />
    <span style={{color:"red"}} >{formErrors?.passwordError}</span>
  </div>

  
</form>



        
        
        
        </>
    )
}

export default UncontrolledComponent



