
// const LoginComponent=({isAdmin=false})=>{
        
    const LoginComponent = (props)=>{
        const {text="Admin"}=props
    
        // if(isAdmin){
        //     return(
        //         <h3>Wellcome admin</h3>
        //     )
        // }else{
        //     return(
        //         <h3>Wellcome user</h3>
        //     )
    
        // }
      
            // return(
            //     <>

            //         {/* {isAdmin ? <h3>Welcome Admin</h3>:<h3>Welcome User</h3>} */}
            //         <h3>Welcome {isAdmin ?"Admin":"User"}</h3>
            //     </>
            // )


            // return(
            //     <>
            //      {isAdmin && <h3>Welcome Admin</h3>}
            //     </>
            // )


            return(
                <>
                 <h3>Welcome {text}</h3>
                </>
            )

        
    }

export default LoginComponent