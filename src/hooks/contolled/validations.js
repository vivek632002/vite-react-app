
import { mobileNumberRegex } from "./regex"


 export const mobileValidations=(value)=>{
    const mobileRegex = /^[6-9][0-9]{9}$/
    let error = ""
    if(!value){
        error="Please Enter Mobile Number"
    }else if(!mobileNumberRegex.test(value)){
        error="Enter Valid Mobile Number"
    }
    return error;
}