


import React, { Component,PureComponent } from 'react'

// export default class ChildComponent extends PureComponent {
//   render() {

//     console.log("child re-rendering...")

    
//     return (
//       <div>ChildComponent</div>
//     )
//   }
// }



  const ChildComponent1=()=>{
    console.log("child1 re-rendering");
    return(
        <>
        <div>ChildComponent1</div>
        </>
    )
    
}

export default React.memo(ChildComponent1)
