import { Component } from "react";
import CustomRectangleCard from "../bootstrap/custom-card";
import Button from "react-bootstrap/esm/Button";
import { employeDetails } from "../../data/employeedata";





class CardAddition extends Component{

    state = {
        employeeData : [{name:"Vivek",salary:40000,role:"Angular Dev"},{name:"Ashok",salary:80000,role:"React Dev"}]
    }

    clickHandler=()=>{
        const newData={name:"Mukesh",role:"Next Js Dev",salary:45000}

       const updatedData =  [...this.state.employeeData,newData]
       this.setState({
        employeeData:updatedData
       },)
    }

    removeHandler=(index)=>{
        console.log(index);
        const filterData = this.state.employeeData.filter((_,id)=>id!==index);
        this.setState({
            employeeData:filterData
        })
        
    }

    render(){
        return(
            <>
             <Button variant="primary" onClick={this.clickHandler}>Add Card</Button>
             <div className="container mt-5">
             <div className="row">

{
    this.state.employeeData.length>0?
    this.state.employeeData.map((eachEmployee,index)=>{
        return(
              
             
             
               <div className="col-sm-4">
                     <CustomRectangleCard title={eachEmployee.name} text={eachEmployee.role} ind = {index} removeHandler={this.removeHandler} />
               </div>
             
               
            
        )
    }
):  <h3>No data Found</h3>
}
</div>
</div>

      {/* <div className="col-sm-4">
            <CustomRectangleCard title={"Jhon"} text={"React Developer"}/>
      </div> */}


      {/* </div>
      </div> */}
             
            </>
        )
    }
}
export default CardAddition