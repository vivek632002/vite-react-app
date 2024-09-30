import { Component } from "react";
import CustomToast from "../toast/toast";


class Counter extends Component{
    state={
        count : 0
    }

    incrementHandler=()=>{
        this.setState({
            count:this.state.count+1
        },()=>{
            CustomToast(`The current count is ${this.state.count}`)        })
    }
    render(){
        return(
            <>
             <h2>Counter {this.state.count}</h2>

             <button onClick={this.incrementHandler}>Increment</button>
             <button>Decrement</button>
             <button>Reset</button>

             
            </>
        )
    }
}

export default Counter