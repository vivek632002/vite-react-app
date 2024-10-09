import { useNavigate } from "react-router-dom"

const InvalidScreen =()=>{
   const Navigate =  useNavigate()

   const handleNavigation =()=>{
        Navigate("/")
   }
    return(
        <>
        <h2>404 : Page Not Found</h2>
        <button onClick={handleNavigation}>Back to home</button>
        
        </>
    )
}

export default InvalidScreen
