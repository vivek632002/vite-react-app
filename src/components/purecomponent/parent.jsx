import { Component } from "react";

import ChildComponent from "./child";
import ChildComponent1 from "./child";


class ParentComponent extends Component{


    constructor(){
        super()
        this.state={
            isIndian:false
        }
    }

    changeCountryShip=()=>{
        this.setState({
            isIndian:!this.state.isIndian
        })
    }

    render(){
        console.log("Parent re-rendering");
        
        const{isIndian}=this.state
        return(
            <>
            <h3>Hello Component</h3>

            <h3>{isIndian ? "Happy Republic Day":"Go Back India"}</h3>
            <button onClick={this.changeCountryShip}>Change CountryShip</button>
            <ChildComponent1/>
            </>
        )
    }
}

export default ParentComponent