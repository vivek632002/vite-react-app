import { Component } from "react";




class Mounting extends Component{
    
    constructor(){
        console.log("Constructor Execcuted");
        
        super()
        this.state={
            products:[],
            message : "Hello",
            favoriteColor:"green",
            count:100
        }
    }
   
   componentDidMount(){
    console.log("Mount Executed");
    document.title=`React Counter ${this.state.count}`
   }

   static getDerivedStateFromProps(props,state){
    console.log("getDerivedStateFromProps Executed");
    

    return{favoriteColor:props.color}

   }

   compomentDidUpdate(){
    console.log("compomentDidUpdate executed");
    document.title=`React Counter ${this.state.count}`
    
   }

   shouldComponentUpdate(){
    console.log("shouldComponentUpdate executed");
    
    return true
   }

   getSnapshotBeforeUpdate(props,state){
    console.log("getSnapshotBeforeUpdate executed");
    
    console.log(props,state);
    
   }
   
    clickHandler=()=>{
        this.setState({
            count:this.state.count+1
        })
   }
   
   
   
    render(){
        console.log("Render Executed");
        
        return(
            <>
            <h4>Mounting Phase {this.state.message} {this.state.count}</h4>
            <h4>{this.state.favoriteColor}</h4>
            <button  onClick={this.clickHandler}>Click to change the Count</button>
            </>
        )
    }
}

export default Mounting