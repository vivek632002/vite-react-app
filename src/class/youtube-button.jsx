

import {Component} from 'react'
import FirstComponent from '../components/bootstrap/first-component'
import Counter from './counter'

class YoutubeButton extends Component {
    state={
        isSubscibe:false,
        text1:"Subscribe",
        text2:"Subscribed",
    }

    clickHandler=()=>{
        this.setState({
            isSubscibe:!this.state.isSubscibe
        })
    }

        render(){
            return(
                <>
                
               <button  onClick={this.clickHandler}>{this.state.isSubscibe?this.state.text2:this.state.text1}</button> 
               {
                this.state.isSubscibe ? <div>
                    <Counter/>
                    <FirstComponent/>
                </div> :<div>
                    <h2>Please Subscribe to Access the Content </h2>
                </div>
               }
                </>
            )
        }
}

export default YoutubeButton